import * as THREE from 'three';

export function initScene(canvas: HTMLCanvasElement): () => void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);

  // --- Outer wireframe icosahedron (UEF blue) ---
  const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0x0088cc,
    wireframe: true,
    transparent: true,
    opacity: 0.55
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  scene.add(outerMesh);

  // --- Inner solid core ---
  const innerGeo = new THREE.IcosahedronGeometry(0.9, 2);
  const innerMat = new THREE.MeshPhongMaterial({
    color: 0x00d4ff,
    emissive: 0x003366,
    transparent: true,
    opacity: 0.35,
    wireframe: false
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  // --- Mid wireframe ring ---
  const midGeo = new THREE.IcosahedronGeometry(1.3, 1);
  const midMat = new THREE.MeshBasicMaterial({
    color: 0x00ccaa,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const midMesh = new THREE.Mesh(midGeo, midMat);
  scene.add(midMesh);

  // --- Point lights ---
  const pointLight = new THREE.PointLight(0x0088cc, 8, 20);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0x001133, 2);
  scene.add(ambientLight);

  const rimLight = new THREE.PointLight(0x00d4ff, 4, 15);
  rimLight.position.set(-3, -2, 2);
  scene.add(rimLight);

  // --- Particle field ---
  const particleCount = isMobile ? 200 : 800;
  const positions = new Float32Array(particleCount * 3);
  const particleSizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 3 + Math.random() * 6;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    particleSizes[i] = Math.random() * 0.04 + 0.01;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0x00d4ff,
    size: 0.04,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true
  });

  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // --- Resize handler ---
  function handleResize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', handleResize);

  let animId: number;
  let time = 0;

  if (prefersReducedMotion) {
    renderer.render(scene, camera);
  } else {
    function animate() {
      animId = requestAnimationFrame(animate);
      time += 0.005;

      outerMesh.rotation.y = time * 0.4;
      outerMesh.rotation.x = time * 0.15;

      innerMesh.rotation.y = -time * 0.6;
      innerMesh.rotation.z = time * 0.2;

      midMesh.rotation.x = time * 0.3;
      midMesh.rotation.z = -time * 0.25;

      particles.rotation.y = time * 0.05;

      // Energy pulse on point light
      pointLight.intensity = 6 + Math.sin(time * 2.5) * 3;
      rimLight.intensity = 3 + Math.cos(time * 1.8) * 2;

      renderer.render(scene, camera);
    }
    animate();
  }

  return function cleanup() {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', handleResize);
    outerGeo.dispose();
    outerMat.dispose();
    innerGeo.dispose();
    innerMat.dispose();
    midGeo.dispose();
    midMat.dispose();
    particleGeo.dispose();
    particleMat.dispose();
    renderer.dispose();
  };
}
