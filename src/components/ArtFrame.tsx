import { useTexture, useCursor, Text } from '@react-three/drei';
import { useState, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Artwork } from '../data/artworks';
import ErrorBoundary from './ErrorBoundary';

interface ArtFrameProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
  isActive: boolean;
}

// Inner mesh that actually loads the texture and can suspend/throw errors
function TexturedArtworkMesh({ 
  artwork, 
  width, 
  height, 
  hovered, 
  isActive, 
  onClick 
}: { 
  artwork: Artwork; 
  width: number; 
  height: number; 
  hovered: boolean; 
  isActive: boolean; 
  onClick: () => void;
}) {
  const texture = useTexture(artwork.imageUrl);

  // Auto-center the image texture and preserve aspect-ratio (like background-size: cover)
  const centeredTexture = useMemo(() => {
    if (!texture) return null;
    const t = texture.clone();
    
    t.wrapS = THREE.ClampToEdgeWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    t.matrixAutoUpdate = true;
    
    if (t.image && typeof t.image === 'object' && 'width' in t.image && 'height' in t.image) {
      const img = t.image as { width: number; height: number };
      const imageAspect = img.width / img.height;
      const planeAspect = width / height;

      if (imageAspect > planeAspect) {
        // Texture is wider than frame: crop horizontally, keep vertically centered
        t.repeat.set(planeAspect / imageAspect, 1);
        t.offset.set((1 - planeAspect / imageAspect) / 2, 0);
      } else {
        // Texture is taller than frame: crop vertically, keep horizontally centered
        t.repeat.set(1, imageAspect / planeAspect);
        t.offset.set(0, (1 - imageAspect / planeAspect) / 2);
      }
    }
    t.needsUpdate = true;
    return t;
  }, [texture, width, height]);

  if (!centeredTexture) return null;

  return (
    <mesh 
      position={[0, 0, 0.01]}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial 
        map={centeredTexture} 
        emissive={hovered || isActive ? "#222" : "#000"}
        emissiveIntensity={0.5}
        toneMapped={false}
        polygonOffset
        polygonOffsetFactor={-1}
      />
    </mesh>
  );
}

// Simple fallback mesh when the texture fails to load (offline / invalid URL)
function FallbackArtworkMesh({ 
  width, 
  height, 
  onClick 
}: { 
  width: number; 
  height: number; 
  onClick: () => void;
}) {
  return (
    <mesh 
      position={[0, 0, 0.01]}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial 
        color="#1a1a1a"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

export function ArtFrame({ artwork, onClick, isActive }: ArtFrameProps) {
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  // Directly leverage the customized sizing loaded from the image configuration
  const width = artwork.width;
  const height = artwork.height;

  return (
    <group 
      position={artwork.position} 
      rotation={artwork.rotation}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
    >
      {/* Frame / Border */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[width + 0.25, height + 0.25, 0.08]} />
        <meshStandardMaterial 
          color="#151515" 
          roughness={0.6} 
          metalness={0.2} 
        />
      </mesh>

      {/* Bottom Label Plaque (Artist, Title, Size) */}
      {!(artwork.isLarge || artwork.id === "1") && (
        <group position={[0, -height / 2 - 0.62, 0.01]}>
          {/* Outer border plate */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.50, 0.65, 0.01]} />
            <meshStandardMaterial color="#444444" roughness={0.5} metalness={0.2} />
          </mesh>
          {/* Inner black plate */}
          <mesh position={[0, 0, 0.006]} castShadow receiveShadow>
            <boxGeometry args={[2.44, 0.59, 0.01]} />
            <meshStandardMaterial color="#050505" roughness={0.8} metalness={0.1} />
          </mesh>
          
          {/* Line 1: Artist Name */}
          <Text
            position={[0, 0.17, 0.012]}
            fontSize={0.08}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
            letterSpacing={0.04}
          >
            Grace Refuerzo 
          </Text>

          {/* Line 2: Product Name (Title) */}
          <Text
            position={[0, 0.01, 0.012]}
            fontSize={0.10}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            fontWeight="medium"
          >
            {artwork.title}
          </Text>

          {/* Line 3: Artwork Size */}
          <Text
            position={[0, -0.15, 0.012]}
            fontSize={0.08}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            fontWeight="normal"
          >
            {artwork.size}
          </Text>
        </group>
      )}

      {/* Textured Canvas wrapped in ErrorBoundary + Suspense */}
      <ErrorBoundary fallback={
        <FallbackArtworkMesh 
          width={width} 
          height={height} 
          onClick={() => onClick(artwork)} 
        />
      }>
        <Suspense fallback={
          <FallbackArtworkMesh 
            width={width} 
            height={height} 
            onClick={() => onClick(artwork)} 
          />
        }>
          <TexturedArtworkMesh 
            artwork={artwork}
            width={width}
            height={height}
            hovered={hovered}
            isActive={isActive}
            onClick={() => onClick(artwork)}
          />
        </Suspense>
      </ErrorBoundary>

      {/* Focused Spotlight for active/hovered artwork */}
      {(isActive || hovered) && (
        <spotLight
          position={[0, height / 2 + 2.0, 3.5]}
          target-position={[0, 0, 0]}
          intensity={isActive ? 6 : 3}
          angle={0.45}
          penumbra={1}
          distance={15}
          castShadow={isActive}
          color={isActive ? "#ffffff" : "#fff4e6"}
        />
      )}
    </group>
  );
}
