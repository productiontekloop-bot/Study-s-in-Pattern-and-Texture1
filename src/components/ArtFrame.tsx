import { useTexture, useCursor } from '@react-three/drei';
import { useState, Suspense } from 'react';
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
        map={texture} 
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

  // Normal artworks are square 3.3m, large vertical artwork is 6.4m with exact aspect ratio (223 x 1468)
  const isLarge = artwork.isLarge === true;
  const height = isLarge ? 6.4 : 3.3;
  const width = isLarge ? 6.4 * (223 / 1468) : 3.3;

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
