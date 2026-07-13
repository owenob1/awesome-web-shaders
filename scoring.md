# Scoring Methodology — AI Agents & Skills

The [AI Agents & Skills](readme.md#ai-agents--skills) section is ranked with a transparent, weighted rubric rather than by taste. Every candidate is scored 0–5 on five axes; the weighted average is scaled to a 0–100 composite. Only resources scoring **≥ 75** are listed in the README. This file shows the full rubric and every score, including the resources that did **not** make the cut.

Scores were assessed on **2026-07-13** and will drift as projects evolve — treat them as a snapshot, not a permanent verdict. Contributions that re-score entries with evidence are welcome.

## The rubric

| Axis | Weight | What it measures |
|---|---|---|
| **Web-shader relevance** | 30% | How specifically it targets *web* shaders (GLSL, WGSL, WebGL, WebGPU, Three.js, R3F) versus general graphics. |
| **Agent usability** | 25% | How directly an AI agent consumes it — a skill, rule, MCP server, or `llms.txt` an agent ingests scores higher than a hosted app or passive blog post. |
| **Maintenance** | 20% | Recency of the last update (see mapping below). |
| **Adoption** | 15% | Stars, downloads, or registry/official provenance (see mapping below). |
| **Openness** | 10% | Open-source and permissively licensed scores highest; closed or hosted-only scores lowest. |

**Composite** = (0.30·relevance + 0.25·usability + 0.20·maintenance + 0.15·adoption + 0.10·openness) × 20.

### Maintenance mapping (from last-updated date)

| Recency | Score |
|---|---|
| ≤ 3 months | 5 |
| ≤ 6 months | 4 |
| ≤ 12 months | 3 |
| ≤ 24 months | 2 |
| older | 1 |
| archived | 0 |

### Adoption mapping (stars, or official provenance)

| Signal | Score |
|---|---|
| ≥ 1000 ⭐ / official standard | 5 |
| ≥ 300 ⭐ | 4 |
| ≥ 100 ⭐ | 3 |
| ≥ 30 ⭐ | 2 |
| < 30 ⭐ | 1 |

## Results

Relevance / Usability / Maintenance / Adoption / Openness → Composite.

### Included (≥ 75)

| Resource | Category | Rel | Use | Main | Adopt | Open | Composite |
|---|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Three.js `llms.txt` | Docs | 5 | 5 | 5 | 5 | 5 | **100** |
| React Three Fiber `llms.txt` | Docs | 4 | 5 | 5 | 5 | 5 | **94** |
| CloudAI-X threejs-skills | Skill | 4 | 5 | 5 | 5 | 4 | **92** |
| Context7 — Three.js | Docs | 4 | 5 | 5 | 5 | 4 | **92** |
| dgreenheck webgpu-claude-skill | Skill | 4.5 | 5 | 4 | 5 | 4 | **91** |
| WESL `llms.txt` | Docs | 5 | 5 | 5 | 2 | 5 | **91** |
| drei `llms.txt` | Docs | 4 | 5 | 5 | 4 | 5 | **91** |
| Babylon.js `llms.txt` | Docs | 4 | 5 | 5 | 4 | 5 | **91** |
| Shadertoy MCP App (official) | MCP | 4 | 4 | 5 | 4 | 5 | **86** |
| emalorenzo three-agent-skills | Skill | 5 | 5 | 4 | 2 | 4 | **85** |
| EnzeD r3f-skills | Skill | 4.5 | 5 | 4 | 3 | 4 | **85** |
| Vipitis shadermatch (ShaderEval) | Benchmark | 5 | 3 | 5 | 3 | 5 | **84** |
| wilsonchenghy ShaderToy-MCP | MCP | 5 | 5 | 2 | 2 | 5 | **79** |
| CK42BB procedural-clouds-threejs | Skill | 3.5 | 5 | 4 | 2 | 5 | **78** |
| Vipitis Shadereval-inputs | Benchmark | 5 | 2 | 5 | 2 | 5 | **76** |
| Three.js WebGPU/TSL skill guide | Guide | 5 | 2 | 5 | 3 | 3 | **75** |

### Below threshold (not listed)

| Resource | Rel | Use | Main | Adopt | Open | Composite | Why cut |
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Vipitis Shadertoys (44k) | 5 | 2 | 4 | 3 | 2 | **69** | Gated behind Hugging Face auth; low usability. |
| arXiv "AI Co-Artist" (LLM + GLSL) | 3 | 1 | 5 | 2 | 4 | **57** | Academic; not an agent-usable tool. |
| Ben Farrell — "WebGL with Claude.ai" | 3 | 2 | 3 | 2 | 3 | **52** | Useful gotchas, but dated and thin. |
| PatrickJS/awesome-cursorrules | 1 | 3 | 5 | 5 | 5 | — | Contains **no** shader/Three.js/WebGL rule (verified). |
| HLSL Shader Developer GPT | 1 | 3 | 3 | 2 | 1 | — | HLSL/DirectX/Unity — not web shaders. |

## Notes

- Star counts came from the GitHub API on 2026-07-13. `llms.txt` files and the official Shadertoy MCP app were scored on official/standard provenance rather than stars.
- Several skill repos (dgreenheck, CloudAI-X, emalorenzo, EnzeD) state MIT in their README but had no detected `LICENSE` file, so openness was scored 4 rather than 5.
- The best-scoring skills double as **starting templates** if you'd rather build your own agent suite than adopt one wholesale.
