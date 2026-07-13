#!/usr/bin/env node
// Updates the ⭐ star-count markers next to GitHub repo links in readme.md.
// Runs weekly in CI (.github/workflows/update-stars.yml) and can be run locally:
//   GITHUB_TOKEN=$(gh auth token) node scripts/update-stars.mjs
// A token is optional but strongly recommended (raises the API rate limit from
// 60/hour to 5000/hour). Only links to a GitHub repo *root* (github.com/owner/repo)
// are starred; deep links (tree/, wiki/, ...) and non-GitHub links are left alone.

import {readFile, writeFile} from 'node:fs/promises';

const README = new URL('../readme.md', import.meta.url);
const token = process.env.GITHUB_TOKEN;

// 1=link markup, 2=owner, 3=repo, 4=existing " ⭐123" marker (optional), 5=" - "
const LINE = /^(\s*-\s\[[^\]]+\]\(https:\/\/github\.com\/([^/\s)]+)\/([^/\s)]+)\))( ⭐[\d.]+k?)?( - )/;

function formatStars(n) {
	if (n >= 10_000) return `${Math.round(n / 1000)}k`;
	if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
	return `${n}`;
}

async function fetchStars(owner, repo) {
	const headers = {
		Accept: 'application/vnd.github+json',
		'User-Agent': 'awesome-web-shaders-star-bot',
	};
	if (token) headers.Authorization = `Bearer ${token}`;

	const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {headers});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	const data = await res.json();
	return data.stargazers_count;
}

const cache = new Map();
const lines = (await readFile(README, 'utf8')).split('\n');
let updated = 0;
let failed = 0;

for (let i = 0; i < lines.length; i++) {
	const m = lines[i].match(LINE);
	if (!m) continue;

	const owner = m[2];
	const repo = m[3].replace(/\.git$/, '');
	const key = `${owner}/${repo}`.toLowerCase();

	let stars;
	try {
		if (cache.has(key)) {
			stars = cache.get(key);
		} else {
			stars = await fetchStars(owner, repo);
			cache.set(key, stars);
		}
	} catch (error) {
		console.warn(`⚠️  ${key}: ${error.message} (keeping existing marker)`);
		failed++;
		continue;
	}

	// m[1]=link, m[5]=" - "; m[0] is the whole matched prefix (incl. any old marker).
	const marker = ` ⭐${formatStars(stars)}`;
	lines[i] = `${m[1]}${marker}${m[5]}${lines[i].slice(m[0].length)}`;
	updated++;
}

await writeFile(README, lines.join('\n'));
console.log(`Updated ${updated} entries across ${cache.size} unique repos (${failed} failed).`);
