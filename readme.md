# Awesome Web Shaders [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome resources for writing shaders on the web — GLSL, WGSL, WebGL, WebGPU, and the libraries, tools, and communities around them.

[Shaders](https://en.wikipedia.org/wiki/Shader) are small programs that run on the GPU to compute the color of every pixel or the position of every vertex, in parallel. On the web they power everything from realistic 3D lighting and post-processing effects to generative art, data visualization, and interactive backgrounds. This list focuses on writing and learning shaders **in the browser** with WebGL and WebGPU, plus the language, math, and tooling knowledge that carries over from the wider real-time graphics world.

## Contents

- [Learn](#learn)
  - [Books](#books)
  - [Tutorials & Guides](#tutorials--guides)
  - [Courses](#courses)
  - [Videos & Talks](#videos--talks)
- [Reference](#reference)
- [Playgrounds & Editors](#playgrounds--editors)
- [Galleries & Collections](#galleries--collections)
- [Libraries & Frameworks](#libraries--frameworks)
  - [WebGL](#webgl)
  - [WebGPU](#webgpu)
  - [Three.js Ecosystem](#threejs-ecosystem)
  - [React](#react)
  - [2D & Creative Coding](#2d--creative-coding)
- [Shader Utilities](#shader-utilities)
- [Tools](#tools)
- [Techniques & Effects](#techniques--effects)
- [People to Follow](#people-to-follow)
- [Newsletters & Communities](#newsletters--communities)

## Learn

### Books

- [The Book of Shaders](https://thebookofshaders.com) - Free online book on fragment shaders with live, editable examples.
- [WebGL Programming Guide](https://sites.google.com/site/webglbook/) - Kouichi Matsuda and Rodger Lea's classic ground-up introduction to WebGL and GLSL.
- [WebGL Insights](http://webglinsights.com) - Free PDF anthology of advanced WebGL techniques from practitioners.
- [The Nature of Code](https://natureofcode.com) - Daniel Shiffman's book on simulating natural systems; a strong companion for generative shader math.
- [Ray Tracing in One Weekend](https://raytracing.github.io) - Free book series on building a ray tracer from scratch; the concepts map directly to raymarching shaders.
- [GPU Gems](https://developer.nvidia.com/gpugems/gpugems/foreword) - NVIDIA's foundational (free online) series on real-time graphics techniques, still widely referenced.

### Tutorials & Guides

- [WebGL Fundamentals](https://webglfundamentals.org) - Learn WebGL from the ground up with no framework, one focused article at a time.
- [WebGPU Fundamentals](https://webgpufundamentals.org) - The WebGPU companion to WebGL Fundamentals, covering the modern GPU API and WGSL.
- [Inigo Quilez — Articles](https://iquilezles.org/articles/) - The definitive collection on raymarching, signed distance functions, and procedural techniques by the co-creator of Shadertoy.
- [Signed Distance Functions](https://iquilezles.org/articles/distfunctions/) - The canonical reference of 3D SDF primitives and operations, copied into countless shaders.
- [The SDF of a Box](https://www.youtube.com/watch?v=62-pRVZuS5c) - Inigo Quilez's beloved deep-dive deriving one distance function with rigor.
- [Ray Marching and Signed Distance Functions](https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/) - Jamie Wong's clear, illustrated introduction to raymarching.
- [Maxime Heckel's Blog](https://blog.maximeheckel.com) - In-depth, interactive articles on React Three Fiber, raymarching, refraction, and post-processing.
- [The Study of Shaders with React Three Fiber](https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/) - A modern, interactive introduction to shaders in a React context.
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/) - Surma's hands-on introduction to WebGPU compute, from first principles.
- [Get Started with GPU Compute on the Web](https://developer.chrome.com/docs/capabilities/web-apis/gpu-compute) - Google's official WebGPU compute-shader primer.
- [Lygia Learn](https://lygia.xyz) - Documentation and playground for the modular shader library, doubling as a reference for reusable functions.
- [Thi.ng — Shader Art](https://github.com/thi-ng/umbrella) - TypeScript-first tooling and writing on functional shader composition.

### Courses

- [Three.js Journey](https://threejs-journey.com) - Bruno Simon's flagship course with extensive GLSL shader chapters.
- [The Complete Guide to Custom Shaders with Three.js and React](https://www.udemy.com/course/creating-immersive-3d-experiences-with-shaders/) - Focused course on integrating custom shaders into modern web 3D.
- [Shaders by Freya Holmér](https://www.youtube.com/watch?v=kfM-yu0iQBk) - Free video series building shader intuition from math foundations.
- [Frontend Masters — Three.js](https://frontendmasters.com/courses/threejs/) - Professionally produced introduction to Three.js that leads into custom materials.
- [GLSL Shaders — Codecademy / Kadenze](https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js/info) - Creative-coding courses that build toward shader work.

### Videos & Talks

- [The Art of Code](https://www.youtube.com/@TheArtofCodeIsCool) - Martijn Steinrucken's channel; the most popular YouTube destination for learning shader techniques.
- [Freya Holmér](https://www.youtube.com/@Acegikmo) - Deeply intuitive explainers on the math behind shaders and graphics.
- [SimonDev](https://www.youtube.com/@simondev758) - Clear breakdowns of graphics and shader techniques for the web.
- [Yuri Artiukh (Akella)](https://www.youtube.com/@uinolan) - Long-form live streams building WebGL and shader effects from scratch.
- [Kishimisu — An introduction to Shader Art Coding](https://www.youtube.com/watch?v=f4s1h2YETNY) - A single, exceptional video that turns a blank canvas into generative art.
- [Bruno Simon — talks](https://www.youtube.com/results?search_query=bruno+simon+webgl) - Conference talks on building award-winning WebGL experiences.

## Reference

- [The OpenGL ES Shading Language (GLSL ES) Spec](https://registry.khronos.org/OpenGL/specs/es/3.20/GLSL_ES_Specification_3.20.pdf) - The authoritative language spec that WebGL's GLSL is based on.
- [WGSL Specification](https://www.w3.org/TR/WGSL/) - The official W3C specification for the WebGPU Shading Language.
- [WebGL 2 Reference Card](https://www.khronos.org/files/webgl20-reference-guide.pdf) - Khronos' printable cheat sheet of the WebGL 2 and GLSL ES 3.0 API.
- [Shaderific GLSL Reference](https://shaderific.com/glsl.html) - Quick, searchable reference of GLSL built-in functions and types.
- [WebGPU Specification](https://www.w3.org/TR/webgpu/) - The official W3C specification for the WebGPU API.
- [MDN — WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) - Practical, example-driven documentation for WebGL in the browser.
- [MDN — WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) - Practical documentation and tutorials for WebGPU.
- [Inigo Quilez — Useful Little Functions](https://iquilezles.org/articles/functions/) - A reference of small, reusable shaping and utility functions.
- [Hughsk — GLSL Types & Qualifiers](https://github.com/stackgl/glsl-types) - Concise notes on GLSL data types for JavaScript developers.

## Playgrounds & Editors

- [Shadertoy](https://www.shadertoy.com) - The de-facto standard online GLSL fragment-shader editor and community.
- [GLSL Sandbox](https://glslsandbox.com) - Long-running, minimalist live-coding editor for fragment shaders.
- [ShaderFrog](https://shaderfrog.com/app) - Visual and code editor for composing and exporting shaders to Three.js and Babylon.
- [Shdr Editor](http://shdr.bkcore.com) - Live vertex and fragment shader editor with a 3D preview.
- [WebGPU Shader Playground (Compute Toys)](https://compute.toys) - Community playground for WebGPU compute shaders in WGSL.
- [WGSL Playground](https://takahirox.github.io/wgsl-playground/) - Minimal live editor for experimenting with WGSL fragment shaders.
- [Shady VR / Kodelife](https://hexler.net/kodelife) - Real-time GPU shader editor (desktop) popular for VJ and prototyping; exports to web-friendly GLSL.
- [SHADERed](https://shadered.org) - Open-source desktop shader IDE with debugging that pairs well with web workflows.
- [Vertex Shader Art](https://www.vertexshaderart.com) - Playground dedicated to creative vertex shaders driving points and lines.
- [glslCanvas Playground](https://patriciogonzalezvivo.github.io/glslCanvas/) - The editor behind The Book of Shaders, embeddable in any page.
- [CodeSandbox — Three.js & R3F templates](https://codesandbox.io/s/react-three-fiber) - Instant sandboxes for prototyping shader-driven scenes.

## Galleries & Collections

- [Shadertoy — Popular](https://www.shadertoy.com/browse) - Browse the most-loved shaders of all time for inspiration and reverse engineering.
- [Awwwards — WebGL](https://www.awwwards.com/websites/webgl/) - Curated showcase of award-winning WebGL and shader-driven websites.
- [Codrops Playground](https://tympanus.net/codrops/category/playground/) - A stream of experimental WebGL and shader demos with write-ups.
- [three.js Examples](https://threejs.org/examples/) - The official gallery, including many shader material and post-processing demos.
- [Babylon.js Playground — Featured](https://www.babylonjs.com/community/) - Community scenes and shader experiments in the Babylon ecosystem.
- [OGL Examples](https://oframe.github.io/ogl/examples) - A concise gallery of minimal WebGL shader demos.
- [Shader Park Gallery](https://shaderpark.com) - A gallery of shaders authored with a JavaScript-based creative shading API.

## Libraries & Frameworks

### WebGL

- [twgl.js](https://github.com/greggman/twgl.js) - A tiny library that makes raw WebGL less verbose without hiding it.
- [regl](https://github.com/regl-project/regl) - Functional, stateless abstraction over WebGL that pairs cleanly with shader authoring.
- [PicoGL.js](https://github.com/tsherif/picogl.js) - A minimal WebGL 2 rendering library for people who know WebGL.
- [luma.gl](https://github.com/visgl/luma.gl) - GPU toolkit powering deck.gl, with strong shader-module composition.
- [gl-matrix](https://github.com/toji/gl-matrix) - The standard high-performance vector and matrix math library for WebGL.
- [Babylon.js](https://github.com/BabylonJS/Babylon.js) - A complete WebGL/WebGPU engine with rich custom-shader and node-material support.

### WebGPU

- [wgpu-matrix](https://github.com/greggman/wgpu-matrix) - Fast matrix and vector math tuned for WebGPU and WGSL layouts.
- [webgpu-utils](https://github.com/greggman/webgpu-utils) - Helpers for uniform buffers, textures, and boilerplate around WebGPU.
- [TypeGPU](https://github.com/software-mansion/TypeGPU) - Type-safe WebGPU with WGSL authored from TypeScript.
- [use-gpu](https://github.com/unconed/use-gpu) - Declarative, reactive WebGPU rendering with live shader composition.
- [Orillusion](https://github.com/Orillusion/orillusion) - An open-source WebGPU engine with a full material and shader pipeline.

### Three.js Ecosystem

- [Three.js](https://github.com/mrdoob/three.js) - The most popular web 3D library; `ShaderMaterial` and `RawShaderMaterial` are the standard way to run custom GLSL on the web.
- [three-custom-shader-material](https://github.com/FarazzShaikh/THREE-CustomShaderMaterial) - Extend Three.js's built-in materials with your own shader code instead of rewriting lighting.
- [TSL — Three.js Shading Language](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language) - Three.js's node-based shading language that compiles to both GLSL and WGSL.
- [postprocessing](https://github.com/pmndrs/postprocessing) - A performant, composable post-processing effect library for Three.js.
- [lamina](https://github.com/pmndrs/lamina) - Build materials as a stack of layers without writing raw shader plumbing.
- [three-shader-baker](https://github.com/mayacoda/three-shader-baker) - Bake shader output to textures for performance.

### React

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js; the dominant way to build declarative shader scenes in React.
- [drei](https://github.com/pmndrs/drei) - A large helper library for R3F, including `shaderMaterial` for one-line custom materials.
- [react-postprocessing](https://github.com/pmndrs/react-postprocessing) - Declarative post-processing effects for React Three Fiber.
- [maath](https://github.com/pmndrs/maath) - Math helpers (easing, buffers, noise) commonly used to drive shader uniforms.
- [gl-react](https://github.com/gre/gl-react) - Bind fragment shaders to React components for images and effects.

### 2D & Creative Coding

- [PixiJS](https://github.com/pixijs/pixijs) - Fast 2D WebGL renderer with first-class custom filter (shader) support.
- [p5.js](https://github.com/processing/p5.js) - Creative-coding library with `loadShader` for accessible GLSL experimentation.
- [curtains.js](https://github.com/martinlaxenaire/curtainsjs) - Turn HTML elements into textured WebGL planes driven by shaders.
- [OGL](https://github.com/oframe/ogl) - A minimal, un-opinionated WebGL library ideal for shader-first projects.
- [Hydra](https://github.com/hydra-synth/hydra) - Live-codable video synth for the browser, built on fragment shaders.
- [Shader Web Background](https://github.com/xemantic/shader-web-background) - Drop-in library for fullscreen fragment-shader page backgrounds.

## Shader Utilities

- [Lygia](https://github.com/patriciogonzalezvivo/lygia) - A granular, cross-language (GLSL/WGSL/HLSL) shader library of reusable functions; the modern standard.
- [glsl-noise](https://github.com/hughsk/glsl-noise) - Classic, simplex, and periodic noise functions as importable GLSL modules.
- [webgl-noise](https://github.com/stegu/webgl-noise) - Ashima Arts' well-known, dependency-free noise implementations.
- [glsl-easings](https://github.com/glslify/glsl-easings) - Robert Penner's easing equations ported to GLSL.
- [glsl-blend](https://github.com/jamieowen/glsl-blend) - Photoshop-style blend modes as GLSL functions.
- [glslify](https://github.com/glslify/glslify) - A `require`-style module system for GLSL, enabling the npm ecosystem above.
- [glsl-hsv2rgb](https://github.com/Jam3/glsl-hsv2rgb) - Compact color-space conversion helpers for shaders.
- [tsl-textures](https://github.com/boytchev/tsl-textures) - A collection of procedural textures written in Three.js Shading Language.

## Tools

- [ShaderGraph / Shader Node editors — NodeToy](https://nodetoy.co) - Browser-based node editor that exports shaders directly to Three.js and R3F.
- [glsl-canvas (VS Code)](https://marketplace.visualstudio.com/items?itemName=circledev.glsl-canvas) - Live preview of GLSL shaders inside VS Code.
- [Shader Toy (VS Code)](https://marketplace.visualstudio.com/items?itemName=stevensona.shader-toy) - Preview Shadertoy-style shaders directly in the editor.
- [glslViewer](https://github.com/patriciogonzalezvivo/glslViewer) - A headless and windowed console shader renderer for testing and rendering to video.
- [glsl-minifier / GLSL Optimizer](https://github.com/aras-p/glsl-optimizer) - Optimize and shrink GLSL for production payloads.
- [wgsl-analyzer](https://github.com/wgsl-analyzer/wgsl-analyzer) - Language-server tooling (autocomplete, diagnostics) for WGSL.
- [Naga](https://github.com/gfx-rs/wgpu/tree/trunk/naga) - Shader translation between WGSL, GLSL, SPIR-V, and more.
- [SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross) - Convert compiled SPIR-V shaders back to GLSL, MSL, or HLSL.
- [Spector.js](https://github.com/BabylonJS/Spector.js) - Capture and inspect every WebGL draw call, uniform, and shader.
- [WebGPU Inspector](https://github.com/brendan-duncan/webgpu_inspector) - Browser extension for debugging WebGPU commands and shaders.

## Techniques & Effects

- [Raymarching Workshop](https://github.com/electricsquare/raymarching-workshop) - A complete, hands-on introduction to raymarching signed distance fields.
- [Inigo Quilez — Raymarching SDFs](https://iquilezles.org/articles/raymarchingdf/) - The foundational article on rendering distance fields.
- [The Book of Shaders — Noise](https://thebookofshaders.com/11/) - Chapter on value, gradient, and simplex noise, the backbone of procedural effects.
- [Fluid Simulation (GPU)](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) - A widely forked, mesmerizing real-time fluid solver in WebGL.
- [GPGPU with Three.js](https://threejs.org/examples/#webgl_gpgpu_birds) - Reference for running simulations (particles, flocking) entirely on the GPU.
- [Real-Time Rendering resources](https://www.realtimerendering.com) - The companion site to the standard textbook, with an enormous curated link collection.
- [The PBR Guide (Substance)](https://substance3d.adobe.com/tutorials/courses/the-pbr-guide-part-1) - Grounding in physically based shading theory used by modern web materials.
- [Post-processing effects explained](https://blog.maximeheckel.com/posts/beautiful-and-mind-bending-effects-with-webgl-render-targets/) - Render targets and multi-pass effects for the web.
- [Kinetic Typography with Shaders](https://tympanus.net/codrops/2023/11/16/creating-a-kinetic-typography-effect-with-react-three-fiber/) - A representative Codrops tutorial on shader-driven text.

## People to Follow

- [Inigo Quilez](https://iquilezles.org) - Co-creator of Shadertoy; the single most influential author on procedural shading and SDFs.
- [Patricio Gonzalez Vivo](https://patriciogonzalezvivo.com) - Author of The Book of Shaders and the Lygia library.
- [Bruno Simon](https://bruno-simon.com) - Creator of Three.js Journey and award-winning WebGL experiences.
- [Maxime Heckel](https://twitter.com/MaximeHeckel) - Prolific writer of interactive R3F and shader deep-dives.
- [Martijn Steinrucken (BigWings)](https://www.youtube.com/@TheArtofCodeIsCool/videos) - The Art of Code; leading shader-tutorial creator.
- [Freya Holmér](https://twitter.com/FreyaHolmer) - Beloved educator on the math and intuition behind shaders.
- [Yuri Artiukh](https://twitter.com/akella) - Live-streams building WebGL and shader effects.
- [Greg Tatum](https://gregtatum.com) - Generative artist and WebGL engineer sharing techniques.
- [Matt DesLauriers](https://www.mattdesl.com) - Creative coder behind many of the glsl-* npm modules.

## Newsletters & Communities

- [Three.js Forum](https://discourse.threejs.org) - Active community for web 3D and custom-shader questions.
- [pmndrs Discord](https://discord.gg/poimandres) - Home of React Three Fiber, drei, and the wider web-graphics ecosystem.
- [WebGL & WebGPU Meetup](https://www.khronos.org/events/) - Khronos-hosted talks and recordings on the browser graphics APIs.
- [Codrops](https://tympanus.net/codrops/) - Long-running publisher of cutting-edge WebGL and shader tutorials.
- [r/GraphicsProgramming](https://www.reddit.com/r/GraphicsProgramming/) - Broad but active community covering shader and rendering topics.
- [Graphics Programming Discord](https://discord.gg/graphicsprogramming) - Large, welcoming server spanning shaders, engines, and math.

## Related Lists

- [awesome-webgl](https://github.com/sjfricke/awesome-webgl) - Curated WebGL libraries, tutorials, and resources.
- [awesome-webgpu](https://github.com/mikbry/awesome-webgpu) - Curated WebGPU samples, libraries, and articles.
- [awesome-graphics-programming](https://github.com/Graphit-Editor/awesome-graphics-programming) - Broad list spanning real-time and offline rendering.
- [awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding) - Creative coding resources, many of them shader-driven.
- [awesome-threejs](https://github.com/enjalot/tovero) - Three.js resources, examples, and libraries.
- [awesome-opengl](https://github.com/eug/awesome-opengl) - The desktop OpenGL counterpart, useful for deeper GLSL theory.

## Contributing

Contributions are very welcome! Read the [contribution guidelines](contributing.md) first, then open a pull request. If you have suggestions but don't want to open a PR, you can also open an [issue](../../issues).

---

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

To the extent possible under law, the authors have waived all copyright and related or neighboring rights to this work.
