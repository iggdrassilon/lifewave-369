/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceBackground = React.forwardRef((props, ref: any) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const starsRef = useRef(null);

  const starCount = 1000; // Количество звезд
  const starLimit = 1000; // Ограничение по расстоянию для звезд

  useEffect(() => {
    if (!containerRef.current || !ref.current) return;

    const parentH = ref.current.offsetHeight;
    const parentW = ref.current.offsetWidth;

    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, parentW / parentH, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });

    const renderer = rendererRef.current;
    renderer.setSize(parentW, parentH);
    containerRef.current.appendChild(renderer.domElement);

    const createStars = () => {
      if (starsRef.current) {
        sceneRef.current.remove(starsRef.current); // Удаляем предыдущие звезды
      }

      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
      });

      const starsVertices = [];
      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * starLimit;
        const y = (Math.random() - 0.5) * starLimit;
        const z = (Math.random() - 0.5) * starLimit;
        starsVertices.push(x, y, z);
      }

      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
      starsRef.current = new THREE.Points(starsGeometry, starsMaterial);
      sceneRef.current.add(starsRef.current);
    };

    createStars(); // Создаем звезды при первом рендере

    // Позиция камеры
    cameraRef.current.position.z = 5;

    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);
      if (starsRef.current) {
        starsRef.current.rotation.x += 0.0001;
        starsRef.current.rotation.y += 0.0001;
      }

      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Обработка события изменения размера
    const handleResize = () => {
      const newParentH = ref.current.offsetHeight;
      const newParentW = ref.current.offsetWidth;

      cameraRef.current.aspect = newParentW / newParentH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newParentW, newParentH);

      createStars(); // Пересоздаем звезды при изменении размера
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [ref]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-[-1]"
      style={{ background: 'linear-gradient(to top, #0a1930 0%, #000 100%)' }}
    />
  );
});

export default SpaceBackground;
