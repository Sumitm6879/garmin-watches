import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';

function WatchModel() {
  const watchRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (watchRef.current) {
      watchRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      watchRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group>
      {/* Watch Body */}
      <mesh
        ref={watchRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
        <meshPhysicalMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Watch Screen */}
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.02, 32]} />
        <meshPhysicalMaterial
          color="#000000"
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          thickness={0.1}
        />
      </mesh>

      {/* Watch Crown */}
      <mesh position={[1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.2, 8]} />
        <meshPhysicalMaterial
          color="#ff6b35"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Watch Band */}
      <mesh position={[0, -0.2, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.15, 8, 16]} />
        <meshPhysicalMaterial
          color="#2a2a2a"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      <mesh position={[0, -0.2, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.15, 8, 16]} />
        <meshPhysicalMaterial
          color="#2a2a2a"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}

interface Watch3DProps {
  className?: string;
}

export function Watch3D({ className = "" }: Watch3DProps) {
  return (
    <div className={`h-64 w-64 ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 2, 5]} />
        <Environment preset="studio" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b35" />
        
        <WatchModel />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
