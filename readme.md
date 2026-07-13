# Awesome Web Shaders [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome resources for writing shaders on the web — GLSL, WGSL, WebGL, WebGPU, and the libraries, tools, and communities around them.

[Shaders](https://en.wikipedia.org/wiki/Shader) are small programs that run on the GPU to compute the color of every pixel or the position of every vertex, in parallel. On the web they power realistic 3D lighting, post-processing, generative art, data visualization, and interactive backgrounds. This list focuses on writing and learning shaders **in the browser** with WebGL and WebGPU, plus the language, math, and rendering knowledge that carries over from the wider real-time graphics world.

Some entries are marked as desktop- or engine-oriented (e.g. Unity, OpenGL); they are included because the shading concepts transfer directly to the web.

## Contents

- [Learn](#learn)
  - [Tutorials & Guides](#tutorials--guides)
  - [Articles & Blog Series](#articles--blog-series)
  - [Courses](#courses)
  - [Videos & Talks](#videos--talks)
- [Books](#books)
  - [Free & Online](#free--online)
  - [Print & Paid](#print--paid)
- [Papers & Course Notes](#papers--course-notes)
- [Reference](#reference)
  - [Specifications](#specifications)
  - [Cheat Sheets & Quick References](#cheat-sheets--quick-references)
  - [API Documentation](#api-documentation)
- [Playgrounds & Editors](#playgrounds--editors)
- [Examples & Demos](#examples--demos)
  - [Galleries & Showcases](#galleries--showcases)
  - [Example Source Repositories](#example-source-repositories)
- [Open-Source Projects](#open-source-projects)
  - [Engines](#engines)
  - [Notable Experiences](#notable-experiences)
- [Libraries & Frameworks](#libraries--frameworks)
  - [WebGL](#webgl)
  - [WebGPU](#webgpu)
  - [Three.js Ecosystem](#threejs-ecosystem)
  - [React](#react)
  - [2D & Creative Coding](#2d--creative-coding)
- [Shader Utilities](#shader-utilities)
- [Tools](#tools)
  - [Editors & Extensions](#editors--extensions)
  - [Debuggers & Inspectors](#debuggers--inspectors)
  - [Compilers & Transpilers](#compilers--transpilers)
  - [Node & Visual Editors](#node--visual-editors)
- [Techniques & Effects](#techniques--effects)
- [People to Follow](#people-to-follow)
- [Communities](#communities)

## Learn

### Tutorials & Guides

- [WebGL Fundamentals](https://webglfundamentals.org) - Learn WebGL from the ground up with no framework, one focused article at a time.
- [WebGPU Fundamentals](https://webgpufundamentals.org) - The WebGPU companion covering the modern GPU API and WGSL from first principles.
- [Ray Marching and Signed Distance Functions](https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/) - Jamie Wong's clear, illustrated introduction to raymarching.
- [The Study of Shaders with React Three Fiber](https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/) - A modern, interactive introduction to shaders in a React context.
- [WebGPU — All of the Cores, None of the Canvas](https://surma.dev/things/webgpu/) - Surma's hands-on introduction to WebGPU compute from first principles.
- [Get Started with GPU Compute on the Web](https://developer.chrome.com/docs/capabilities/web-apis/gpu-compute) - Google's official WebGPU compute-shader primer.
- [3D Game Shaders For Beginners](https://lettier.github.io/3d-game-shaders-for-beginners/) - Step-by-step GLSL guide to SSAO, depth of field, lighting, and normal mapping.
- [Lygia Documentation](https://lygia.xyz) - Docs and live playground for the modular, cross-language shader library.

### Articles & Blog Series

- [Inigo Quilez — Articles](https://iquilezles.org/articles/) - The definitive collection on raymarching, signed distance functions, and procedural techniques.
- [Maxime Heckel's Blog](https://blog.maximeheckel.com) - In-depth, interactive articles on React Three Fiber, raymarching, refraction, and post-processing.
- [Bart Wronski](https://bartwronski.com) - Deep articles on real-time rendering, sampling, and image and signal processing.
- [Acko.net](https://acko.net) - Steven Wittens' visually stunning WebGL articles on math, fractals, and complex numbers.
- [Ronja's Shader Tutorials](https://www.ronja-tutorials.com) - Approachable, concept-focused shader tutorials (Unity, but the concepts transfer).
- [Catlike Coding](https://catlikecoding.com) - Jasper Flick's rigorous rendering and shader tutorials (Unity, but the concepts transfer).
- [Alan Zucconi — Tutorials](https://www.alanzucconi.com/tutorials/) - Long-form series on shaders, lighting models, and optical effects (Unity-leaning, conceptual).

### Courses

- [Three.js Journey](https://threejs-journey.com) - Bruno Simon's flagship course with extensive GLSL shader chapters.
- [SimonDev — GLSL Shaders from Scratch](https://courses.simondev.io/p/glsl-shaders-from-scratch) - Paid course covering shaping functions, SDFs, lighting models, and procedural landscapes.
- [GAMES101 — Introduction to Computer Graphics](https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html) - Lingqi Yan's free university course on rasterization, shading, ray tracing, and the math.
- [Cem Yuksel — Interactive Computer Graphics](https://www.youtube.com/playlist?list=PLplnkTzzqsZS3R5DjmCQsqupu43oS9CFN) - A full University of Utah lecture series on real-time graphics and shaders.
- [TU Wien — Rendering / Ray Tracing](https://www.youtube.com/playlist?list=PLujxSBD-JXgnGmsn7gEyN28P1DnRZG7qi) - Free university lectures on photorealistic rendering, ray tracing, and global illumination.

### Videos & Talks

- [The Art of Code](https://www.youtube.com/@TheArtofCodeIsCool) - Martijn Steinrucken's channel; the most popular destination for learning shader techniques.
- [Inigo Quilez (Painting with Maths)](https://www.youtube.com/@InigoQuilez) - Live coding and tutorials deriving SDFs and procedural images from pure math.
- [Freya Holmér](https://www.youtube.com/@Acegikmo) - Deeply intuitive explainers on the math behind shaders and graphics.
- [SimonDev](https://www.youtube.com/@simondev758) - Clear breakdowns of graphics and shader techniques for the web.
- [Sebastian Lague](https://www.youtube.com/@SebastianLague) - Beautifully produced coding adventures on rendering, ray tracing, and simulation.
- [Acerola](https://www.youtube.com/@Acerola_t) - Garrett Gunnell's entertaining deep dives into post-processing and stylized shader effects.
- [Kishimisu — An Introduction to Shader Art Coding](https://www.youtube.com/watch?v=f4s1h2YETNY) - A single, exceptional video that turns a blank canvas into generative art.
- [The SDF of a Box](https://www.youtube.com/watch?v=62-pRVZuS5c) - Inigo Quilez's beloved deep-dive deriving one distance function with rigor.

## Books

### Free & Online

- [The Book of Shaders](https://thebookofshaders.com) - Patricio Gonzalez Vivo and Jen Lowe's free interactive book on fragment shaders. The best first stop.
- [WebGL2 Fundamentals](https://webgl2fundamentals.org) - Gregg Tavares' from-scratch WebGL 2 and GLSL ES 3.0 book, with no framework.
- [Physically Based Rendering, 4th ed.](https://pbr-book.org/4ed) - Pharr, Jakob, and Humphreys' definitive PBR textbook, now fully free online.
- [Scratchapixel 4.0](https://www.scratchapixel.com) - Ground-up computer graphics lessons on rasterization, ray tracing, shading, and the math behind them.
- [LearnOpenGL](https://learnopengl.com) - Joey de Vries' complete modern OpenGL book; desktop, but the GLSL and lighting theory transfers directly.
- [The Nature of Code](https://natureofcode.com) - Daniel Shiffman's book on simulating natural systems; a strong companion for generative shader math.
- [Immersive Linear Algebra](https://immersivemath.com/ila/) - A free interactive linear algebra book with manipulable diagrams, by the authors of Real-Time Rendering.
- [Introduction to Computer Graphics](https://math.hws.edu/graphicsbook/) - David J. Eck's free textbook covering WebGL, three.js, and WebGPU with shader programs.
- [The Graphics Codex](https://graphicscodex.com) - Morgan McGuire's concise reference on shading, radiometry, and ray tracing.
- [Ray Tracing in One Weekend](https://raytracing.github.io) - Peter Shirley's free trilogy on building a ray tracer; concepts map directly to raymarching.
- [Ray Tracing Gems II](https://developer.nvidia.com/ray-tracing-gems-ii) - NVIDIA's free digital anthology of real-time ray tracing techniques.
- [WebGPU Unleashed](https://shi-yan.github.io/webgpuunleashed/) - Shi Yan's free, practical book teaching graphics programming in JavaScript with WebGPU.
- [GPU Gems](https://developer.nvidia.com/gpugems/gpugems/foreword) - NVIDIA's foundational, free series on real-time GPU techniques, still widely referenced.
- [WebGL Insights](http://webglinsights.com) - A free PDF anthology of advanced WebGL techniques from practitioners.

### Print & Paid

- [Real-Time Rendering, 4th ed.](https://www.realtimerendering.com/book.html) - Akenine-Möller, Haines, and Hoffman; the standard reference for real-time graphics.
- [WebGL Programming Guide](https://sites.google.com/site/webglbook/) - Matsuda and Lea's classic, ground-up introduction to WebGL and GLSL.
- [OpenGL SuperBible, 7th ed.](http://www.openglsuperbible.com/) - Sellers, Wright, and Haemel's comprehensive tutorial and reference for modern OpenGL.
- [The Ray Tracer Challenge](https://pragprog.com/titles/jbtracer/the-ray-tracer-challenge/) - Jamis Buck's test-driven, language-agnostic guide to building your first 3D renderer.
- [Foundations of Game Engine Development](https://foundationsofgameenginedev.com/) - Eric Lengyel's series on the mathematics and rendering that engines rely on.
- [Mathematics for 3D Game Programming and Computer Graphics](https://mathfor3dgameprogramming.com/) - Eric Lengyel's thorough math foundation for graphics programming.
- [GPU Pro / GPU Zen](https://www.realtimerendering.com/resources/shaderx/) - Wolfgang Engel's edited anthologies of advanced, production-proven rendering techniques.
- [3D Math Primer for Graphics and Game Development](https://ianparberry.com/books/3dmathprimer/) - Dunn and Parberry's accessible guide to vectors, matrices, and transforms.
- [Real-Time 3D Graphics with WebGL 2](https://github.com/PacktPublishing/Real-Time-3D-Graphics-with-WebGL-2) ⭐267 - Ghayour and Cantor's example-driven WebGL 2 book, with its full code repository.
- [Game Engine Architecture](https://www.gameenginebook.com/) - Jason Gregory's industry-standard book, including GPU and rendering-engine chapters.

## Papers & Course Notes

- [Improving Noise (Perlin, 2002)](https://dl.acm.org/doi/10.1145/566654.566636) - Ken Perlin's paper defining improved and simplex noise, the backbone of procedural shaders.
- [Sphere Tracing (Hart, 1996)](https://kev.town/raymarching-toolkit/media/zeno.pdf) - The foundational paper on distance-field ray marching of implicit surfaces.
- [Improved Alpha-Tested Magnification for Vector Textures (Green, 2007)](https://dl.acm.org/doi/10.1145/1281500.1281665) - Chris Green's Valve paper that introduced signed-distance-field text rendering.
- [Physically-Based Shading at Disney (Burley, 2012)](https://disneyanimation.com/publications/physically-based-shading-at-disney/) - The course notes defining the widely adopted Disney BRDF.
- [Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/) - Stephen Hill's archive of the annual SIGGRAPH physically based shading course notes.
- [Filmic Tonemapping Operators](https://filmicworlds.com/blog/filmic-tonemapping-operators/) - John Hable's reference on the Uncharted 2 filmic tone-mapping curve and alternatives.
- [Advances in Real-Time Rendering in Games](https://advances.realtimerendering.com) - The SIGGRAPH course archive of production-proven real-time rendering techniques.
- [GPU Gems 3 — GPGPU](https://developer.nvidia.com/gpugems/gpugems3/part-vi-gpu-computing) - Foundational chapters on general-purpose computation on the GPU.

## Reference

### Specifications

- [The OpenGL ES Shading Language (GLSL ES) Spec](https://registry.khronos.org/OpenGL/specs/es/3.20/GLSL_ES_Specification_3.20.pdf) - The authoritative language spec that WebGL's GLSL is based on.
- [WGSL Specification](https://www.w3.org/TR/WGSL/) - The official W3C specification for the WebGPU Shading Language.
- [WebGPU Specification](https://www.w3.org/TR/webgpu/) - The official W3C specification for the WebGPU API.

### Cheat Sheets & Quick References

- [WebGL 2 Reference Card](https://www.khronos.org/files/webgl20-reference-guide.pdf) - Khronos' printable cheat sheet of the WebGL 2 and GLSL ES 3.0 API.
- [Shaderific GLSL Reference](https://shaderific.com/glsl.html) - A quick, searchable reference of GLSL built-in functions and types.
- [Inigo Quilez — Useful Little Functions](https://iquilezles.org/articles/functions/) - A reference of small, reusable shaping and utility functions.

### API Documentation

- [MDN — WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) - Practical, example-driven documentation for WebGL in the browser.
- [MDN — WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) - Practical documentation and tutorials for WebGPU.

## Playgrounds & Editors

- [Shadertoy](https://www.shadertoy.com) - The de-facto standard online GLSL fragment-shader editor and community.
- [GLSL Sandbox](https://glslsandbox.com) - A long-running, minimalist live-coding editor for fragment shaders.
- [ShaderFrog](https://shaderfrog.com/app) - Visual and code editor for composing and exporting shaders to Three.js and Babylon.
- [Shdr Editor](http://shdr.bkcore.com) - A live vertex and fragment shader editor with a 3D preview.
- [Compute Toys](https://compute.toys) - A community playground for WebGPU compute shaders in WGSL.
- [KodeLife](https://hexler.net/kodelife) - A real-time GPU shader editor popular for VJ work and prototyping.
- [SHADERed](https://github.com/dfranx/SHADERed) ⭐4.8k - An open-source shader IDE with debugging that pairs well with web workflows.
- [Vertex Shader Art](https://www.vertexshaderart.com) - A playground dedicated to creative vertex shaders driving points and lines.
- [glslCanvas](https://patriciogonzalezvivo.github.io/glslCanvas/) - The editor behind The Book of Shaders, embeddable in any page.
- [Shader Park](https://shaderpark.com) - Author real-time 2D and 3D shaders with a JavaScript-based creative API.

## Examples & Demos

### Galleries & Showcases

- [Shadertoy — Popular](https://www.shadertoy.com/browse) - Browse the most-loved shaders of all time for inspiration and reverse engineering.
- [Awwwards — WebGL](https://www.awwwards.com/websites/webgl/) - A curated showcase of award-winning WebGL and shader-driven websites.
- [Codrops Playground](https://tympanus.net/codrops/category/playground/) - A stream of experimental WebGL and shader demos with write-ups.
- [three.js Examples](https://threejs.org/examples/) - The official gallery, including many shader material and post-processing demos.
- [Babylon.js Community](https://www.babylonjs.com/community/) - Community scenes and shader experiments in the Babylon ecosystem.
- [OGL Examples](https://oframe.github.io/ogl/examples) - A concise gallery of minimal WebGL shader demos.

### Example Source Repositories

- [WebGPU Samples](https://github.com/webgpu/webgpu-samples) ⭐2.1k - The official collection of WebGPU API samples and demos in TypeScript.
- [WebGPU Fundamentals — Source](https://github.com/webgpu/webgpufundamentals) ⭐998 - Source and runnable examples behind the WebGPU Fundamentals lessons.
- [WebGL2 Fundamentals — Source](https://github.com/gfxfundamentals/webgl2-fundamentals) ⭐2.0k - Source and examples behind the WebGL2 Fundamentals lessons.
- [GL Transitions](https://github.com/gl-transitions/gl-transitions) ⭐2.1k - An open collection of GLSL transitions with a simple, portable spec.
- [WebGL Fluid Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) ⭐16k - A widely forked, mesmerizing real-time fluid solver in WebGL.
- [gpu-io](https://github.com/amandaghassaei/gpu-io) ⭐1.5k - A GPGPU library with many readable physics-simulation shader examples.
- [glTF Sample Viewer](https://github.com/KhronosGroup/glTF-Sample-Viewer) ⭐1.5k - A reference WebGL 2 glTF viewer with readable PBR shader source.
- [shader-doodle](https://github.com/halvves/shader-doodle) ⭐587 - A friendly web component for writing and rendering fragment shaders.
- [Orillusion WebGPU Samples](https://github.com/Orillusion/orillusion-webgpu-samples) ⭐269 - Standalone, basic WebGPU samples from the Orillusion team.
- [shader-school](https://github.com/stackgl/shader-school) ⭐4.4k - A workshopper teaching GLSL shaders and graphics programming from the terminal.
- [webgl-workshop](https://github.com/stackgl/webgl-workshop) ⭐1.5k - The sequel to shader-school, teaching the WebGL API interactively.
- [akella — WebGL Image Transitions](https://github.com/akella/webGLImageTransitions) ⭐483 - Source for a popular set of shader-driven image transition demos.
- [WebGPU Ray Tracer](https://github.com/gnikoloff/webgpu-raytracer) ⭐183 - A real-time path tracer built on WebGPU compute shaders.

## Open-Source Projects

### Engines

- [Three.js](https://github.com/mrdoob/three.js) ⭐114k - The most popular web 3D library; `ShaderMaterial` is the standard way to run custom GLSL on the web.
- [Babylon.js](https://github.com/BabylonJS/Babylon.js) ⭐26k - A complete WebGL and WebGPU engine with rich custom-shader and node-material support.
- [PlayCanvas Engine](https://github.com/playcanvas/engine) ⭐16k - A web graphics engine on WebGL 2, WebGPU, and WebXR, with compute-shader support.
- [Orillusion](https://github.com/Orillusion/orillusion) ⭐5.2k - An open-source, WebGPU-first engine with a full material and shader pipeline.
- [ClayGL](https://github.com/pissang/claygl) ⭐2.9k - A WebGL library for scalable Web3D applications with a modular shader system.
- [Hilo3d](https://github.com/hiloteam/Hilo3d) ⭐661 - A 3D WebGL rendering engine with a GLSL material and shader system.
- [Filament](https://github.com/google/filament) ⭐20k - A physically based renderer with a WebAssembly and WebGL backend and material system.

### Notable Experiences

- [folio-2019](https://github.com/brunosimon/folio-2019) ⭐4.7k - Source for Bruno Simon's award-winning WebGL driving-game portfolio.
- [my-room-in-3d](https://github.com/brunosimon/my-room-in-3d) ⭐4.5k - An interactive 3D room with baked lighting and custom shaders.
- [infinite-world](https://github.com/brunosimon/infinite-world) ⭐611 - A procedurally generated, infinite world in WebGL with Three.js.

## Libraries & Frameworks

### WebGL

- [twgl.js](https://github.com/greggman/twgl.js) ⭐3.0k - A tiny library that makes raw WebGL less verbose without hiding it.
- [regl](https://github.com/regl-project/regl) ⭐5.6k - A functional, stateless abstraction over WebGL that pairs cleanly with shader authoring.
- [PicoGL.js](https://github.com/tsherif/picogl.js) ⭐796 - A minimal WebGL 2 rendering library for people who know WebGL.
- [luma.gl](https://github.com/visgl/luma.gl) ⭐2.5k - A GPU toolkit powering deck.gl, with strong shader-module composition.
- [gl-matrix](https://github.com/toji/gl-matrix) ⭐5.7k - The standard high-performance vector and matrix math library for WebGL.

### WebGPU

- [wgpu-matrix](https://github.com/greggman/wgpu-matrix) ⭐470 - Fast matrix and vector math tuned for WebGPU and WGSL layouts.
- [webgpu-utils](https://github.com/greggman/webgpu-utils) ⭐310 - Helpers for uniform buffers, textures, and boilerplate around WebGPU.
- [TypeGPU](https://github.com/software-mansion/TypeGPU) ⭐2.6k - Type-safe WebGPU with WGSL authored from TypeScript.
- [use.gpu](https://usegpu.live/) - Declarative, reactive WebGPU rendering with live shader composition.
- [wgsl_reflect](https://github.com/brendan-duncan/wgsl_reflect) ⭐283 - A WGSL parser and reflection library for JavaScript.

### Three.js Ecosystem

- [three-custom-shader-material](https://github.com/FarazzShaikh/THREE-CustomShaderMaterial) ⭐1.3k - Extend Three.js's built-in materials with your own shader code instead of rewriting lighting.
- [Three.js Shading Language (TSL)](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language) - The node-based shading language that compiles to both GLSL and WGSL.
- [postprocessing](https://github.com/pmndrs/postprocessing) ⭐2.8k - A performant, composable post-processing effect library for Three.js.
- [lamina](https://github.com/pmndrs/lamina) ⭐1.1k - Build materials as a stack of layers without writing raw shader plumbing.
- [three-shader-baker](https://github.com/FarazzShaikh/three-shader-baker) ⭐178 - Bake shader output to textures for performance.

### React

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) ⭐31k - A React renderer for Three.js; the dominant way to build declarative shader scenes in React.
- [drei](https://github.com/pmndrs/drei) ⭐9.7k - A large helper library for R3F, including `shaderMaterial` for one-line custom materials.
- [react-postprocessing](https://github.com/pmndrs/react-postprocessing) ⭐1.3k - Declarative post-processing effects for React Three Fiber.
- [maath](https://github.com/pmndrs/maath) ⭐981 - Math helpers (easing, buffers, noise) commonly used to drive shader uniforms.
- [gl-react](https://github.com/gre/gl-react) ⭐3.0k - Bind fragment shaders to React components for images and effects.

### 2D & Creative Coding

- [PixiJS](https://github.com/pixijs/pixijs) ⭐48k - A fast 2D WebGL renderer with first-class custom filter (shader) support.
- [p5.js](https://github.com/processing/p5.js) ⭐24k - A creative-coding library with `loadShader` for accessible GLSL experimentation.
- [curtains.js](https://github.com/martinlaxenaire/curtainsjs) ⭐1.8k - Turn HTML elements into textured WebGL planes driven by shaders.
- [OGL](https://github.com/oframe/ogl) ⭐4.6k - A minimal, un-opinionated WebGL library ideal for shader-first projects.
- [Hydra](https://github.com/hydra-synth/hydra) ⭐2.7k - A live-codable video synth for the browser, built on fragment shaders.
- [Shader Web Background](https://github.com/xemantic/shader-web-background) ⭐279 - A drop-in library for fullscreen fragment-shader page backgrounds.
- [ShaderGradient](https://github.com/ruucm/shadergradient) ⭐1.9k - Animated gradient shaders for React, Figma, and Framer.

## Shader Utilities

- [Lygia](https://github.com/patriciogonzalezvivo/lygia) ⭐3.4k - A granular, cross-language (GLSL/WGSL/HLSL) shader library of reusable functions; the modern standard.
- [glsl-noise](https://github.com/hughsk/glsl-noise) ⭐406 - Classic, simplex, and periodic noise functions as importable GLSL modules.
- [webgl-noise](https://github.com/stegu/webgl-noise) ⭐584 - Ashima Arts' well-known, dependency-free noise implementations.
- [glNoise](https://github.com/FarazzShaikh/glNoise) ⭐251 - GLSL noise functions with an easy JavaScript API for WebGL.
- [glsl-easings](https://github.com/glslify/glsl-easings) ⭐465 - Robert Penner's easing equations ported to GLSL.
- [glsl-blend](https://github.com/jamieowen/glsl-blend) ⭐1.1k - Photoshop-style blend modes as GLSL functions.
- [glsl-fast-gaussian-blur](https://github.com/Experience-Monks/glsl-fast-gaussian-blur) ⭐746 - An optimized single-pass separable Gaussian blur for GLSL.
- [glsl-film-grain](https://github.com/mattdesl/glsl-film-grain) ⭐204 - Animated film-grain noise as a GLSL module.
- [glsl-lut](https://github.com/mattdesl/glsl-lut) ⭐184 - Apply color-grading lookup tables in a GLSL shader.
- [glsl-atmosphere](https://github.com/wwwtyro/glsl-atmosphere) ⭐634 - Rayleigh and Mie atmospheric scattering as a GLSL function.
- [glsl-sdf-primitives](https://github.com/marklundin/glsl-sdf-primitives) ⭐206 - Signed-distance-field primitives for raymarching in GLSL.
- [glslify](https://github.com/glslify/glslify) ⭐2.3k - A module system for GLSL that enables the npm ecosystem above.
- [glsl-hsv2rgb](https://github.com/hughsk/glsl-hsv2rgb) ⭐29 - Compact color-space conversion helpers for shaders.
- [tsl-textures](https://github.com/boytchev/tsl-textures) ⭐258 - A collection of procedural textures written in Three.js Shading Language.
- [shader-park-core](https://github.com/shader-park/shader-park-core) ⭐823 - A JavaScript library for authoring real-time 2D and 3D SDF shaders.

## Tools

### Editors & Extensions

- [glsl-canvas (VS Code)](https://marketplace.visualstudio.com/items?itemName=circledev.glsl-canvas) - Live preview of GLSL shaders inside VS Code.
- [Shader Toy (VS Code)](https://marketplace.visualstudio.com/items?itemName=stevensona.shader-toy) - Preview Shadertoy-style shaders directly in the editor.
- [glslViewer](https://github.com/patriciogonzalezvivo/glslViewer) ⭐5.3k - A headless and windowed console shader renderer for testing and rendering to video.

### Debuggers & Inspectors

- [Spector.js](https://github.com/BabylonJS/Spector.js) ⭐1.6k - Capture and inspect every WebGL draw call, uniform, and shader.
- [WebGPU Inspector](https://github.com/brendan-duncan/webgpu_inspector) ⭐344 - A browser extension for debugging WebGPU commands and shaders.

### Compilers & Transpilers

- [Naga](https://github.com/gfx-rs/wgpu/tree/trunk/naga) - Shader translation between WGSL, GLSL, SPIR-V, and more.
- [SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross) ⭐2.5k - Convert compiled SPIR-V shaders back to GLSL, MSL, or HLSL.
- [glslang](https://github.com/KhronosGroup/glslang) ⭐3.5k - The Khronos reference GLSL/ESSL front end and SPIR-V generator.
- [shaderc](https://github.com/google/shaderc) ⭐2.2k - Tools and libraries for compiling GLSL and HLSL to SPIR-V.
- [glsl-optimizer](https://github.com/aras-p/glsl-optimizer) ⭐1.8k - Optimize and shrink GLSL for production payloads.
- [Shader Minifier](https://github.com/laurentlb/shader-minifier) ⭐569 - Minify and obfuscate GLSL or HLSL, popular in the demoscene.
- [glslx](https://github.com/evanw/glslx) ⭐443 - A GLSL type checker, formatter, and minifier for WebGL.
- [wgsl-analyzer](https://github.com/wgsl-analyzer/wgsl-analyzer) ⭐678 - Language-server tooling (autocomplete, diagnostics) for WGSL.
- [WESL](https://github.com/wgsl-tooling-wg/wesl-js) ⭐43 - A linker that adds imports and conditional compilation to WGSL.

### Node & Visual Editors

- [NodeToy](https://nodetoy.co) - A browser-based node editor that exports shaders directly to Three.js and R3F.
- [shader-graph-wgsl](https://github.com/deepkolos/shader-graph-wgsl) ⭐124 - A Unity-style node-based shader graph editor that outputs WGSL.

## Techniques & Effects

- [Inigo Quilez — Raymarching SDFs](https://iquilezles.org/articles/raymarchingdf/) - The foundational article on rendering signed distance fields.
- [Inigo Quilez — Distance Functions](https://iquilezles.org/articles/distfunctions/) - The canonical reference of 3D SDF primitives and operations.
- [Raymarching Workshop](https://github.com/electricsquare/raymarching-workshop) ⭐1.0k - A complete, hands-on introduction to raymarching signed distance fields.
- [The Book of Shaders — Noise](https://thebookofshaders.com/11/) - The chapter on value, gradient, and simplex noise, the backbone of procedural effects.
- [GPGPU with Three.js](https://threejs.org/examples/#webgl_gpgpu_birds) - A reference for running simulations (particles, flocking) entirely on the GPU.
- [Real-Time Rendering — Resources](https://www.realtimerendering.com) - The companion site to the standard textbook, with an enormous curated link collection.
- [Physically Based Rendering in Filament](https://google.github.io/filament/Filament.html) - A thorough, free reference on physically based shading theory and math for real-time renderers.
- [Beautiful Effects with WebGL Render Targets](https://blog.maximeheckel.com/posts/beautiful-and-mind-bending-effects-with-webgl-render-targets/) - Render targets and multi-pass effects for the web.
- [Kinetic Typography with Three.js](https://tympanus.net/codrops/2020/06/02/kinetic-typography-with-three-js/) - A representative Codrops tutorial on shader-driven text.

## People to Follow

- [Inigo Quilez](https://iquilezles.org) - Co-creator of Shadertoy; the single most influential author on procedural shading and SDFs.
- [Patricio Gonzalez Vivo](https://patriciogonzalezvivo.com) - Author of The Book of Shaders and the Lygia library.
- [Bruno Simon](https://bruno-simon.com) - Creator of Three.js Journey and award-winning WebGL experiences.
- [Freya Holmér](https://twitter.com/FreyaHolmer) - A beloved educator on the math and intuition behind shaders.
- [Yuri Artiukh](https://twitter.com/akella) - Live-streams building WebGL and shader effects from scratch.
- [Greg Tatum](https://gregtatum.com) - A generative artist and WebGL engineer who shares techniques.
- [Matt DesLauriers](https://www.mattdesl.com) - The creative coder behind many of the glsl-* npm modules.

## Communities

- [Three.js Forum](https://discourse.threejs.org) - An active community for web 3D and custom-shader questions.
- [pmndrs Discord](https://discord.gg/poimandres) - Home of React Three Fiber, drei, and the wider web-graphics ecosystem.
- [Graphics Programming Discord](https://discord.gg/graphicsprogramming) - A large, welcoming server spanning shaders, engines, and math.
- [r/GraphicsProgramming](https://www.reddit.com/r/GraphicsProgramming/) - A broad but active community covering shader and rendering topics.
- [Codrops](https://tympanus.net/codrops/) - A long-running publisher of cutting-edge WebGL and shader tutorials.
- [Khronos Events](https://www.khronos.org/events/) - Talks and recordings on WebGL, WebGPU, and the browser graphics APIs.

## Related Lists

- [awesome-webgl](https://github.com/sjfricke/awesome-webgl) ⭐1.5k - Curated WebGL libraries, tutorials, and resources.
- [awesome-webgpu](https://github.com/mikbry/awesome-webgpu) ⭐1.9k - Curated WebGPU samples, libraries, and articles.
- [awesome-glsl](https://github.com/vanrez-nez/awesome-glsl) ⭐1.4k - Curated GLSL playgrounds, articles, and tools.
- [awesome-graphics](https://github.com/ericjang/awesome-graphics) ⭐1.1k - A broad list spanning real-time and academic computer graphics.
- [awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding) ⭐15k - Creative coding resources, many of them shader-driven.
- [awesome-opengl](https://github.com/eug/awesome-opengl) ⭐2.4k - The desktop OpenGL counterpart, useful for deeper GLSL theory.

## Contributing

Contributions are very welcome! Read the [contribution guidelines](contributing.md) first, then open a pull request. If you have suggestions but don't want to open a PR, you can also open an [issue](../../issues).

---

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

To the extent possible under law, the authors have waived all copyright and related or neighboring rights to this work.
