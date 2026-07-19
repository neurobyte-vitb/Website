import { useEffect, useRef } from "react";

/**
 * ShaderGradient — a GPU-shaded flowing plasma of magenta / cyan / violet
 * with organic fBM noise. Cheap: single fullscreen quad, no textures.
 */
export function ShaderGradient({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: true, alpha: true });
    if (!gl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const vs = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
    const fs = `
      precision highp float;
      uniform vec2 uR; uniform float uT; uniform vec2 uM;
      // hash + noise + fbm
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
        return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}
      float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<3;i++){v+=a*n(p);p*=2.02;a*=.5;}return v;}
      void main(){
        vec2 uv=(gl_FragCoord.xy-.5*uR)/uR.y;
        vec2 m=(uM-.5*uR)/uR.y;
        float t=uT*.08;
        vec2 q=vec2(fbm(uv+t),fbm(uv-t+3.7));
        vec2 r=vec2(fbm(uv+q+vec2(1.7,9.2)+t*1.3),fbm(uv+q+vec2(8.3,2.8)-t));
        float f=fbm(uv+r*1.5 + m*.6);
        // biological palette: deep navy → violet → cyan → magenta
        vec3 c1=vec3(.02,.03,.09);
        vec3 c2=vec3(.32,.10,.55);   // violet
        vec3 c3=vec3(.05,.55,.75);   // cyan
        vec3 c4=vec3(.85,.20,.55);   // magenta
        vec3 col=mix(c1,c2,clamp(f*1.2,0.,1.));
        col=mix(col,c3,clamp(length(r)*.6,0.,1.));
        col=mix(col,c4,clamp(pow(f,3.)*1.4,0.,1.));
        // subtle vignette
        col*= 1.-.35*length(uv);
        gl_FragColor=vec4(col,1.);
      }`;

    const mk = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src); gl.compileShader(s); return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, mk(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog); gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const p = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(p);
    gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);

    const uR = gl.getUniformLocation(prog, "uR");
    const uT = gl.getUniformLocation(prog, "uT");
    const uM = gl.getUniformLocation(prog, "uM");
    const mouse = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr * 0.75); canvas.height = Math.round(h * dpr * 0.75);
      gl.viewport(0, 0, canvas.width, canvas.height);
      mouse.x = canvas.width / 2; mouse.y = canvas.height / 2;
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) * (canvas.width / r.width);
      mouse.y = (r.height - (e.clientY - r.top)) * (canvas.height / r.height);
    };
    window.addEventListener("mousemove", onMove);

    const start = performance.now();
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);
    const tick = () => {
      if (visible) {
        const t = (performance.now() - start) / 1000;
        gl.uniform2f(uR, canvas.width, canvas.height);
        gl.uniform1f(uT, reduced ? 0 : t);
        gl.uniform2f(uM, mouse.x, mouse.y);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener("mousemove", onMove); };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
