import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Gate({ isOpening, onOpenComplete }) {
  const leftGateRef = useRef();
  const rightGateRef = useRef();
  const [openingState, setOpeningState] = useState(0);

  useFrame((state, delta) => {
    if (isOpening) {
      if (openingState < 2) { // Rotate up to ~114 degrees
        setOpeningState(prev => prev + delta * 0.5);
        if (leftGateRef.current && rightGateRef.current) {
          leftGateRef.current.rotation.y = openingState;
          rightGateRef.current.rotation.y = -openingState;
        }
      } else {
        onOpenComplete();
      }
    } else {
      // Idle animation
      if (leftGateRef.current && rightGateRef.current) {
        const bounce = Math.sin(state.clock.elapsedTime * 2) * 0.01;
        leftGateRef.current.position.y = bounce;
        rightGateRef.current.position.y = bounce;
      }
    }
  });

  return (
    <group position={[0, -2, -5]}>
      {/* Left Gate */}
      <group position={[-2.5, 0, 0]} ref={leftGateRef}>
        {/* The mesh needs to pivot from the left edge, so we offset the geometry */}
        <mesh position={[2.5, 4, 0]}>
          <boxGeometry args={[5, 8, 0.5]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9} 
            roughness={0.2}
            emissive="#1a1a1a"
          />
        </mesh>
        
        {/* Gate Details/Bars Left */}
        {[0, 1, 2, 3, 4].map(i => (
          <mesh key={`l-${i}`} position={[0.5 + i, 4, 0.3]}>
            <cylinderGeometry args={[0.05, 0.05, 8]} />
            <meshStandardMaterial color="#FFB700" metalness={1} roughness={0} emissive="#443300" />
          </mesh>
        ))}
      </group>

      {/* Right Gate */}
      <group position={[2.5, 0, 0]} ref={rightGateRef}>
        {/* Pivot offset */}
        <mesh position={[-2.5, 4, 0]}>
          <boxGeometry args={[5, 8, 0.5]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9} 
            roughness={0.2} 
            emissive="#1a1a1a"
          />
        </mesh>

        {/* Gate Details/Bars Right */}
        {[0, 1, 2, 3, 4].map(i => (
          <mesh key={`r-${i}`} position={[-0.5 - i, 4, 0.3]}>
            <cylinderGeometry args={[0.05, 0.05, 8]} />
            <meshStandardMaterial color="#FFB700" metalness={1} roughness={0} emissive="#443300" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function MysticalEnvironment({ isOpening }) {
  const cameraRef = useRef();

  useFrame((state, delta) => {
    // Slight camera sway
    if (!isOpening && cameraRef.current) {
      cameraRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      cameraRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.2 + 1;
    } else if (isOpening && cameraRef.current) {
      // Move camera forward through the gates
      cameraRef.current.position.z -= delta * 3;
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1, 5]} fov={60} />
      
      <color attach="background" args={['#02040a']} />
      <fog attach="fog" args={['#02040a', 2, 15]} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={1} color="#00E5FF" />
      <pointLight position={[0, 3, -2]} intensity={2} color="#FFB700" distance={10} decay={2} />

      <Sparkles count={500} scale={15} size={2} speed={0.4} opacity={0.5} color="#00E5FF" />
      <Sparkles count={200} scale={10} size={4} speed={0.2} opacity={0.8} color="#FFB700" />
      
      <Environment preset="night" />
    </>
  );
}

export default function EntryGate({ onEnter }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="w-full h-screen relative cursor-pointer" onClick={() => setIsOpening(true)}>
      <Canvas>
        <MysticalEnvironment isOpening={isOpening} />
        <Gate isOpening={isOpening} onOpenComplete={onEnter} />
      </Canvas>
      
      {!isOpening && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center animate-pulse">
            <p className="text-magicBlue font-magic text-xl tracking-widest text-glow mb-4">
              Enter The Realm
            </p>
            <p className="text-gold font-sans text-sm opacity-70">
              Click anywhere to open the gates
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
