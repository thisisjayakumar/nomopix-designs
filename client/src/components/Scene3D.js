import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ParticleRing() {
  const points = useRef();

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
  });

  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const radius = 4 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;

    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
        <ParticleRing />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

