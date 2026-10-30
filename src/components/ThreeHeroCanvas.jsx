import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    // Warm atmospheric lighting
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.2);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xd4be8d, 2.4);
    goldKeyLight.position.set(5, 7, 6);
    goldKeyLight.castShadow = true;
    scene.add(goldKeyLight);

    const forestRimLight = new THREE.DirectionalLight(0x183d32, 2.0);
    forestRimLight.position.set(-6, -4, -3);
    scene.add(forestRimLight);

    const softFillLight = new THREE.PointLight(0xffeedb, 1.5, 15);
    softFillLight.position.set(0, 2, 4);
    scene.add(softFillLight);

    // Helper to generate procedural book cover texture with title
    function createCoverTexture(title, author, baseColorHex) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 768;
      const ctx = canvas.getContext('2d');

      // Leather/canvas base
      ctx.fillStyle = baseColorHex;
      ctx.fillRect(0, 0, 512, 768);

      // Gold filigree border
      ctx.strokeStyle = '#D4BE8D';
      ctx.lineWidth = 6;
      ctx.strokeRect(28, 28, 456, 712);

      ctx.strokeStyle = '#B69A65';
      ctx.lineWidth = 2;
      ctx.strokeRect(38, 38, 436, 692);

      // Spine shadow effect on left
      const spineGradient = ctx.createLinearGradient(0, 0, 40, 0);
      spineGradient.addColorStop(0, 'rgba(0,0,0,0.5)');
      spineGradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = spineGradient;
      ctx.fillRect(0, 0, 40, 768);

      // Gold Foil Typography
      ctx.fillStyle = '#E8D8B5';
      ctx.font = 'bold 34px Georgia, serif';
      ctx.textAlign = 'center';

      // Title lines wrap
      const words = title.split(' ');
      let line = '';
      let y = 220;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 380 && n > 0) {
          ctx.fillText(line, 256, y);
          line = words[n] + ' ';
          y += 44;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 256, y);

      // Decorative divider
      ctx.strokeStyle = '#B69A65';
      ctx.beginPath();
      ctx.moveTo(180, y + 30);
      ctx.lineTo(332, y + 30);
      ctx.stroke();

      // Author
      ctx.fillStyle = '#D4BE8D';
      ctx.font = '20px sans-serif';
      ctx.fillText(author, 256, y + 70);

      // Emblem seal at bottom
      ctx.beginPath();
      ctx.arc(256, 620, 26, 0, Math.PI * 2);
      ctx.strokeStyle = '#B69A65';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.font = '16px serif';
      ctx.fillText('VAULT', 256, 626);

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 4;
      return texture;
    }

    // Helper for page sides texture
    function createPagesTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#EDE8DE';
      ctx.fillRect(0, 0, 64, 256);
      ctx.fillStyle = '#D8D1C3';
      for (let i = 0; i < 256; i += 3) {
        ctx.fillRect(0, i, 64, 1);
      }
      return new THREE.CanvasTexture(canvas);
    }

    const pagesTexture = createPagesTexture();

    // Create 3D Book mesh
    function createBookMesh(coverTexture, width = 1.9, height = 2.7, thickness = 0.38) {
      const geometry = new THREE.BoxGeometry(width, height, thickness);

      const coverMaterial = new THREE.MeshStandardMaterial({
        map: coverTexture,
        roughness: 0.35,
        metalness: 0.15,
      });

      const pagesMaterial = new THREE.MeshStandardMaterial({
        map: pagesTexture,
        roughness: 0.8,
        metalness: 0.05,
      });

      const darkLeatherMaterial = new THREE.MeshStandardMaterial({
        color: 0x183D32,
        roughness: 0.4,
        metalness: 0.1,
      });

      // Box materials: [right, left, top, bottom, front, back]
      const materials = [
        pagesMaterial,      // right (open edge pages)
        darkLeatherMaterial,// left (spine)
        pagesMaterial,      // top pages
        pagesMaterial,      // bottom pages
        coverMaterial,      // front cover
        coverMaterial       // back cover
      ];

      const mesh = new THREE.Mesh(geometry, materials);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }

    // Group of floating books
    const booksGroup = new THREE.Group();
    scene.add(booksGroup);

    // Book 1: Primary Centerpiece (Constitutional Law / Deep Forest Green)
    const texture1 = createCoverTexture('CONSTITUTIONAL LAW OF INDIA', 'National Law School', '#14352B');
    const book1 = createBookMesh(texture1, 2.1, 2.9, 0.42);
    book1.position.set(0.7, 0.1, 0.4);
    book1.rotation.set(0.18, -0.45, 0.1);
    booksGroup.add(book1);

    // Book 2: Floating Upper Left (Distributed Systems / Deep Charcoal Gold)
    const texture2 = createCoverTexture('DISTRIBUTED SYSTEMS IN PRACTICE', 'Karthik Balasubramanian', '#1A1E1A');
    const book2 = createBookMesh(texture2, 1.8, 2.5, 0.35);
    book2.position.set(-2.2, 1.3, -1.2);
    book2.rotation.set(-0.25, 0.35, -0.15);
    booksGroup.add(book2);

    // Book 3: Lower Right Floating (Indian Macroeconomics / Vintage Warm Olive)
    const texture3 = createCoverTexture('INDIAN MACROECONOMICS & MPC', 'Dr. M. Sundaram', '#243F35');
    const book3 = createBookMesh(texture3, 1.7, 2.4, 0.32);
    book3.position.set(2.4, -1.4, -0.8);
    book3.rotation.set(0.3, -0.25, -0.2);
    booksGroup.add(book3);

    // Atmospheric Floating Gold Dust Particles
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      particleScales[i] = Math.random() * 0.04 + 0.01;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xD4BE8D,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Group subtle sway and mouse responsiveness
      booksGroup.rotation.y = mouseX * 0.6;
      booksGroup.rotation.x = -mouseY * 0.4;

      // Individual book float bobbing
      book1.position.y = 0.1 + Math.sin(elapsedTime * 1.2) * 0.08;
      book1.rotation.z = 0.1 + Math.sin(elapsedTime * 0.8) * 0.03;

      book2.position.y = 1.3 + Math.cos(elapsedTime * 1.4) * 0.09;
      book2.rotation.y = 0.35 + Math.sin(elapsedTime * 0.9) * 0.05;

      book3.position.y = -1.4 + Math.sin(elapsedTime * 1.1 + 1) * 0.07;
      book3.rotation.z = -0.2 + Math.cos(elapsedTime * 0.7) * 0.04;

      // Subtle particle float
      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = elapsedTime * 0.008;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[580px] overflow-hidden select-none">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      {/* Editorial overlay vignette */}
      <div className="pointer-events-none absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(244,240,232,0.85)_100%]" />
      
      {/* Floating interactive hint */}
      <div className="pointer-events-none absolute bottom-4 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#183D32]/90 text-[#F4F0E8] text-xs font-mono tracking-wider border border-[#B69A65]/40 backdrop-blur-md shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#B69A65] animate-pulse" />
        <span>THREE.JS 3D KNOWLEDGE VAULT</span>
      </div>
    </div>
  );
}
