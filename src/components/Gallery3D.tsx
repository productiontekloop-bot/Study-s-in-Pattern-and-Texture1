import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sky, ContactShadows, Environment, Float, PerspectiveCamera, useCursor, MeshReflectorMaterial } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { ARTWORKS, Artwork } from '../data/artworks';
import { ArtFrame } from './ArtFrame';
import ErrorBoundary from './ErrorBoundary';

export type FloorType = 'oak-parquet';

interface Gallery3DProps {
  onArtworkSelect: (artwork: Artwork | null) => void;
  selectedArtwork: Artwork | null;
  currentRoom: number;
  onRoomChange: (nextRoom: number) => void;
}

function Rig({ selectedArtwork, currentRoom }: { selectedArtwork: Artwork | null; currentRoom: number }) {
  const { gl } = useThree();
  const vec = new THREE.Vector3();
  const lookAtVec = new THREE.Vector3();
  
  // Use useRef instead of useState to avoid high-frequency React re-renders while walking
  const keys = useRef({ w: false, a: false, s: false, d: false });
  const pos = useRef(new THREE.Vector3(0, 1.8, 4));
  
  const targetLookAt = useRef(new THREE.Vector3(0, 1.8, -5));
  const rotation = useRef({ yaw: Math.PI, pitch: 0 }); // Start looking towards center
  const isDragging = useRef(false);

  // Reset position on room change
  useEffect(() => {
    pos.current.set(0, 1.8, 4);
    rotation.current = { yaw: Math.PI, pitch: 0 };
    targetLookAt.current.set(0, 1.8, -5);
  }, [currentRoom]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowleft', 'arrowdown', 'arrowright'].includes(key)) {
        const isUp = key === 'w' || key === 'arrowup';
        const isLeft = key === 'a' || key === 'arrowleft';
        const isDown = key === 's' || key === 'arrowdown';
        const isRight = key === 'd' || key === 'arrowright';

        if (isUp) keys.current.w = true;
        if (isLeft) keys.current.a = true;
        if (isDown) keys.current.s = true;
        if (isRight) keys.current.d = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowleft', 'arrowdown', 'arrowright'].includes(key)) {
        const isUp = key === 'w' || key === 'arrowup';
        const isLeft = key === 'a' || key === 'arrowleft';
        const isDown = key === 's' || key === 'arrowdown';
        const isRight = key === 'd' || key === 'arrowright';

        if (isUp) keys.current.w = false;
        if (isLeft) keys.current.a = false;
        if (isDown) keys.current.s = false;
        if (isRight) keys.current.d = false;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Only drag if clicking the left mouse button on the 3D canvas
      if (e.button === 0) {
        isDragging.current = true;
      }
    };
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current && !selectedArtwork) {
        const sensitivity = 0.002;
        rotation.current.yaw -= e.movementX * sensitivity;
        rotation.current.pitch -= e.movementY * sensitivity;
        rotation.current.pitch = THREE.MathUtils.clamp(rotation.current.pitch, -Math.PI / 3, Math.PI / 3);
      }
    };

    // Touch Support for Mobile / Viewport drag
    let lastTouchX = 0;
    let lastTouchY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1 && !selectedArtwork) {
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
        isDragging.current = true;
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current && !selectedArtwork && e.touches.length === 1) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - lastTouchX;
        const deltaY = touch.clientY - lastTouchY;
        
        const sensitivity = 0.003;
        rotation.current.yaw -= deltaX * sensitivity;
        rotation.current.pitch -= deltaY * sensitivity;
        rotation.current.pitch = THREE.MathUtils.clamp(rotation.current.pitch, -Math.PI / 3, Math.PI / 3);
        
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;
      }
    };

    // Attach dragging exclusively to canvas element, while releasing mouse globally
    gl.domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    gl.domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (gl.domElement) {
        gl.domElement.removeEventListener('mousedown', handleMouseDown);
        gl.domElement.removeEventListener('touchstart', handleTouchStart);
      }
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [selectedArtwork, gl]);

  useFrame((state, delta) => {
    if (selectedArtwork) {
      // Zoom into artwork - scale focus distance dynamically on artwork dimensions
      const artRotation = new THREE.Euler(...selectedArtwork.rotation);
      const sizeFactor = Math.max(selectedArtwork.width, selectedArtwork.height);
      const zoomDistance = Math.max(1.8, sizeFactor * 0.75 + 2.30);
      const offset = new THREE.Vector3(0, 0, zoomDistance);
      offset.applyEuler(artRotation);
      
      const artworkPos = new THREE.Vector3(...selectedArtwork.position);
      const camPos = artworkPos.clone().add(offset);
      
      state.camera.position.lerp(camPos, 0.05);
      
      // Look at painting center
      lookAtVec.set(artworkPos.x, artworkPos.y, artworkPos.z);
      targetLookAt.current.lerp(lookAtVec, 0.08);
      state.camera.lookAt(targetLookAt.current);
      
      // Sync internal rotation when an artwork is selected so we look the right way when deselected
      rotation.current.yaw = selectedArtwork.rotation[1] + Math.PI;
      rotation.current.pitch = 0;
    } else {
      // WASD Movement relative to look direction
      const speed = 6;
      let isMoving = false;
      const k = keys.current;
      
      if (k.w || k.s || k.a || k.d) {
        const yaw = rotation.current.yaw;
        const forward = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
        const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
        
        const direction = new THREE.Vector3();
        if (k.w) direction.add(forward);
        if (k.s) direction.sub(forward);
        if (k.a) direction.add(right);
        if (k.d) direction.sub(right);

        if (direction.length() > 0) {
          direction.normalize().multiplyScalar(speed * delta);
          pos.current.add(direction);
          isMoving = true;
        }
      }
      
      // Boundary checks (for ROOM_SIZE x ROOM_SIZE room)
      const limit = ROOM_SIZE / 2 - 1.5;
      pos.current.x = THREE.MathUtils.clamp(pos.current.x, -limit, limit);
      pos.current.z = THREE.MathUtils.clamp(pos.current.z, -limit, limit);
      
      // Head bobbing
      const bobPath = Math.sin(state.clock.elapsedTime * 8) * 0.012 * (isMoving ? 1 : 0);
      
      state.camera.position.lerp(vec.set(
        pos.current.x, 
        pos.current.y + bobPath, 
        pos.current.z
      ), 0.08);
      
      // Dynamic Look-at based on yaw/pitch
      const radius = 8;
      lookAtVec.set(
        pos.current.x + radius * Math.sin(rotation.current.yaw) * Math.cos(rotation.current.pitch),
        pos.current.y + radius * Math.sin(rotation.current.pitch),
        pos.current.z + radius * Math.cos(rotation.current.yaw) * Math.cos(rotation.current.pitch)
      );

      targetLookAt.current.lerp(lookAtVec, 0.15);
      state.camera.lookAt(targetLookAt.current);
    }
  });
  return null;
}

function CenterSculpture() {
  const sculptureRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (sculptureRef.current) {
      sculptureRef.current.rotation.y = elapsed * 0.45;
      sculptureRef.current.rotation.x = elapsed * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = -elapsed * 0.25;
      ringRef.current.rotation.z = elapsed * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Pedestal Base Steps */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.55, 0.1, 48]} />
        <meshStandardMaterial color="#dfd9ce" roughness={0.6} metalness={0.1} />
      </mesh>
      
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.1, 1.8]} />
        <meshStandardMaterial color="#ebdccb" roughness={0.5} metalness={0.1} />
      </mesh>

      {/* Main Pedestal Column - Sleek Fluted White Marble Cylinder */}
      <mesh position={[0, 0.65, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.9, 36]} />
        <meshStandardMaterial color="#faf9f5" roughness={0.25} metalness={0.2} />
      </mesh>

      {/* Gold Trim Collars (Top and Bottom of Pedestal) */}
      <mesh position={[0, 0.21, 0]} castShadow>
        <cylinderGeometry args={[0.58, 0.58, 0.04, 36]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 1.09, 0]} castShadow>
        <cylinderGeometry args={[0.58, 0.58, 0.04, 36]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Showcase Base Plate */}
      <mesh position={[0, 1.13, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.04, 40]} />
        <meshStandardMaterial color="#dfd9ce" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Glass Enclosure with thick polished edges */}
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.68, 0.68, 1.6, 40, 1, true]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transparent
          opacity={0.18}
          roughness={0.02}
          metalness={0.15}
          transmission={0.95}
          ior={1.5}
          thickness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Sleek Golden Support Rods for the Display corner brackets */}
      {[-0.45, 0.45].map((x, idx) => 
        [-0.45, 0.45].map((z, jdx) => (
          <mesh key={`rod-${idx}-${jdx}`} position={[x, 1.95, z]} castShadow>
            <cylinderGeometry args={[0.015, 0.015, 1.6, 12]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
          </mesh>
        ))
      )}

      {/* Showcase Top Cover Plate (Cap) */}
      <mesh position={[0, 2.77, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.04, 40]} />
        <meshStandardMaterial color="#dfd9ce" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0, 2.81, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.04, 36]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Floating Kinetic Abstract Sculpture inside the showcase */}
      <Float speed={2.0} rotationIntensity={0.6} floatIntensity={0.15} position={[0, 1.95, 0]}>
        <group>
          {/* Main Core - Elegant Golden Torus Knot */}
          <mesh 
            ref={sculptureRef} 
            castShadow 
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
            onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
          >
            <torusKnotGeometry args={[0.26, 0.07, 150, 16, 2, 3]} />
            <meshStandardMaterial 
              color={hovered ? "#fff5cc" : "#D4AF37"} 
              metalness={0.95} 
              roughness={0.03}
              emissive={hovered ? "#221a00" : "#000000"}
              emissiveIntensity={1}
            />
          </mesh>

          {/* Outer Gyroscopic Orbit Ring */}
          <mesh ref={ringRef}>
            <torusGeometry args={[0.48, 0.015, 16, 100]} />
            <meshStandardMaterial color="#e5c158" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      </Float>

      {/* Soft internal pedestal uplight revealing the sculpture texture */}
      <pointLight 
        position={[0, 1.2, 0]} 
        intensity={1.2} 
        distance={3} 
        color="#ffe080" 
      />

      {/* Dedicated overhead spotlight */}
      <spotLight
        position={[0, 7.8, 0]}
        target-position={[0, 1.95, 0]}
        intensity={6}
        angle={0.28}
        penumbra={1}
        distance={10}
        castShadow
        color="#ffffff"
        shadow-bias={-0.00005}
      />
    </group>
  );
}

const ROOM_SIZE = 44;
const ROOM_HEIGHT = 8;

function Room({ currentRoom }: { currentRoom: number }) {
  const wallProps = useMemo(() => {
    return {
      color: "#ffffff",
      roughness: 0.95, 
      metalness: 0.05,
    };
  }, []);

  // Procedurally generate the classic Warm Oak parquet wood texture in-memory.
  const { floorTexture, floorProps } = useMemo(() => {
    const defaultData = {
      floorTexture: null as THREE.Texture | null,
      floorProps: { roughness: 0.55, metalness: 0.08, color: '#a07c57', mirror: 0.15 }
    };
    if (typeof document === 'undefined') return defaultData;

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return defaultData;

    // Elegant warm classic Oak Chevron/Brick parquet background
    ctx.fillStyle = '#9e7b56';
    ctx.fillRect(0, 0, 1024, 1024);

    // Fine wood grain background noise
    for (let y = 0; y < 1024; y += 4) {
      ctx.fillStyle = `rgba(125, 95, 65, ${0.07 + Math.random() * 0.1})`;
      ctx.fillRect(0, y, 1024, 1 + Math.random() * 2);
    }

    const numRows = 16;
    const rowHeight = 1024 / numRows;
    const numPlanks = 8;
    const plankWidth = 1024 / numPlanks;

    for (let r = 0; r < numRows; r++) {
      const yCoord = r * rowHeight;
      ctx.strokeStyle = '#4e3a26';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, yCoord);
      ctx.lineTo(1024, yCoord);
      ctx.stroke();

      const shiftX = (r % 2) * (plankWidth / 2);
      for (let p = -1; p <= numPlanks; p++) {
        const xCoord = p * plankWidth + shiftX;
        ctx.beginPath();
        ctx.moveTo(xCoord, yCoord);
        ctx.lineTo(xCoord, yCoord + rowHeight);
        ctx.stroke();

        const seed = (r * 13 + p * 23) % 100;
        ctx.fillStyle = `rgba(0, 0, 0, ${(seed % 10) * 0.015})`;
        ctx.fillRect(xCoord + 1, yCoord + 1, plankWidth - 2, rowHeight - 2);

        // Wood grain details
        ctx.strokeStyle = `rgba(50, 30, 10, 0.05)`;
        ctx.lineWidth = 1;
        for (let g = 0; g < 3; g++) {
          const gy = yCoord + 4 + (seed * (g + 1) * 7) % (rowHeight - 8);
          ctx.beginPath();
          ctx.moveTo(xCoord + 4, gy);
          ctx.lineTo(xCoord + plankWidth - 4, gy + (g - 1) * 2);
          ctx.stroke();
        }
      }
    }

    const roughness = 0.55;
    const metalness = 0.08;
    const color = '#a07c57';
    const mirror = 0.15;
    const repeat = 8;

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat, repeat);
    return { floorTexture: tex, floorProps: { roughness, metalness, color, mirror } };
  }, []);

  return (
    <group>
      {/* Floor with MeshReflectorMaterial for high-end look */}
      <group position={[0, 0, 0]}>
        {/* Base slab featuring luxurious Warm Oak classic parquet wood texture */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
          <planeGeometry args={[ROOM_SIZE + 20, ROOM_SIZE + 20]} />
          <MeshReflectorMaterial
            blur={[200, 50]}
            resolution={1024}
            mixBlur={1}
            mixStrength={1.8}
            roughness={floorProps.roughness}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.6}
            color={floorProps.color}
            metalness={floorProps.metalness}
            mirror={floorProps.mirror}
            map={floorTexture || undefined}
          />
        </mesh>
        
        {/* Luxury Concentric Gold Weave Area Rug underneath the central bench */}
        <group position={[0, 0.012, 0]}>
          {/* Main Rug Body */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <ringGeometry args={[0, 3.8]} />
            <meshStandardMaterial 
              color="#eedfc5" 
              roughness={0.8} 
              metalness={0.1} 
            />
          </mesh>
          {/* Elegant Outer Brass Trim */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
            <ringGeometry args={[3.75, 3.8, 64]} />
            <meshStandardMaterial 
              color="#D4AF37" 
              metalness={0.9} 
              roughness={0.1} 
            />
          </mesh>
          {/* Elegant Inner Brass Accent Rings */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
            <ringGeometry args={[2.0, 2.03, 64]} />
            <meshStandardMaterial 
              color="#D4AF37" 
              metalness={0.9} 
              roughness={0.2} 
            />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
            <ringGeometry args={[0.8, 0.82, 64]} />
            <meshStandardMaterial 
              color="#D4AF37" 
              metalness={0.9} 
              roughness={0.2} 
            />
          </mesh>
        </group>
        
        {/* Physical 3D Brass Inlay Joints at main room quadrants (Creates stunning physical shadowing) */}
        {useMemo(() => {
          const lines = [];
          const gridCoords = [-22, 0, 22];
          gridCoords.forEach((coord) => {
            // X-axis Brass bars
            lines.push(
              <mesh key={`grid-brass-3d-x-${coord}`} position={[coord, 0.011, 0]}>
                <boxGeometry args={[0.04, 0.016, ROOM_SIZE + 20]} />
                <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.05} />
              </mesh>
            );
            // Z-axis Brass bars
            lines.push(
              <mesh key={`grid-brass-3d-z-${coord}`} position={[0, 0.011, coord]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[0.04, 0.016, ROOM_SIZE + 20]} />
                <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.05} />
              </mesh>
            );
          });
          return lines;
        }, [])}
      </group>

      {/* Decorative Baseboard - Improved with cap */}
      <group>
        {/* North Baseboard */}
        <group position={[0, 0, -ROOM_SIZE / 2 + 0.1]}>
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[ROOM_SIZE, 0.3, 0.1]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[ROOM_SIZE + 0.1, 0.05, 0.15]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
        
        {/* South Baseboard */}
        <group position={[0, 0, ROOM_SIZE / 2 - 0.1]}>
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[ROOM_SIZE, 0.3, 0.1]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[ROOM_SIZE + 0.1, 0.05, 0.15]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>

        {/* West Baseboard */}
        <group position={[-ROOM_SIZE / 2 + 0.1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[ROOM_SIZE, 0.3, 0.1]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[ROOM_SIZE + 0.1, 0.05, 0.15]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>

        {/* East Baseboard */}
        <group position={[ROOM_SIZE / 2 - 0.1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[ROOM_SIZE, 0.3, 0.1]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[ROOM_SIZE + 0.1, 0.05, 0.15]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </group>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, ROOM_HEIGHT, 0]}>
        <planeGeometry args={[ROOM_SIZE + 20, ROOM_SIZE + 20]} />
        <meshStandardMaterial color="#0a0a0a" roughness={1} />
      </mesh>

      {/* Walls */}
      <group>
        {/* North */}
        <mesh position={[0, ROOM_HEIGHT / 2, -ROOM_SIZE / 2]} receiveShadow>
          <boxGeometry args={[ROOM_SIZE, ROOM_HEIGHT, 0.2]} />
          <meshStandardMaterial {...wallProps} />
        </mesh>
        {/* South */}
        <mesh position={[0, ROOM_HEIGHT / 2, ROOM_SIZE / 2]} receiveShadow>
          <boxGeometry args={[ROOM_SIZE, ROOM_HEIGHT, 0.2]} />
          <meshStandardMaterial {...wallProps} />
        </mesh>
        {/* West */}
        <mesh position={[-ROOM_SIZE / 2, ROOM_HEIGHT / 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[ROOM_SIZE, ROOM_HEIGHT, 0.2]} />
          <meshStandardMaterial {...wallProps} />
        </mesh>
        {/* East */}
        <mesh position={[ROOM_SIZE / 2, ROOM_HEIGHT / 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[ROOM_SIZE, ROOM_HEIGHT, 0.2]} />
          <meshStandardMaterial {...wallProps} />
        </mesh>
      </group>

      {/* Dynamic Museum Masterpiece Centerpiece Sculpture */}
      <CenterSculpture />

      {/* Lights */}
      <group>
        <ambientLight intensity={1.3} />
        <directionalLight 
          position={[10, 20, 10]} 
          intensity={1.0} 
          castShadow 
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
        />
        {/* Triple point light array for brilliant, even illumination across the 44-meter space */}
        <pointLight position={[0, ROOM_HEIGHT - 1.5, -12]} intensity={2.0} distance={70} />
        <pointLight position={[0, ROOM_HEIGHT - 1.5, 0]} intensity={2.0} distance={70} />
        <pointLight position={[0, ROOM_HEIGHT - 1.5, 12]} intensity={2.0} distance={70} />
      </group>
    </group>
  );
}

export default function Gallery3D({ onArtworkSelect, selectedArtwork, currentRoom, onRoomChange }: Gallery3DProps) {
  return (
    <div className="w-full h-full bg-[#0A0A0A]">
      <Canvas 
        shadows 
        camera={{ position: [0, 1.8, 10], fov: 60 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0A0A0A']} />
        
        <Suspense fallback={null}>
          <Room currentRoom={currentRoom} />
          
          <group>
            {ARTWORKS.filter(art => art.room === currentRoom).map((artwork) => (
              <ArtFrame 
                key={artwork.id} 
                artwork={artwork} 
                onClick={onArtworkSelect}
                isActive={selectedArtwork?.id === artwork.id}
              />
            ))}
          </group>
          
          <Rig selectedArtwork={selectedArtwork} currentRoom={currentRoom} />
        </Suspense>
      </Canvas>
    </div>
  );
}

