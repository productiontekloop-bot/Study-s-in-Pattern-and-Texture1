import { GALLERY_IMAGES, ImageArtwork } from './images';

export interface Artwork extends ImageArtwork {
  position: [number, number, number];
  rotation: [number, number, number];
  room: number;
  width: number;
  height: number;
}

// GLOBAL IMAGE SIZE CONTROLS (Edit these values directly to rescale elements globally)
export const GLOBAL_ART_CONFIG = {
  defaultStandardWidth: 3.3,   // Width of standard 1:1 square artwork frames
  defaultStandardHeight: 3.3,  // Height of standard 1:1 square artwork frames
  defaultLargeHeight: 6.4,     // Height of the large monolithic centerpiece scroll
  defaultLargeWidth: 6.4 * (223 / 1468) // Calculated width based on the artwork aspect ratio
};

const ROOM_HALF_SIZE = 21.85;

export const ARTWORKS: Artwork[] = GALLERY_IMAGES.map((img, i) => {
  let position: [number, number, number] = [0, 4.0, 0];
  let rotation: [number, number, number] = [0, 0, 0];

  if (i < 7) {
    // North Wall: 7 images (index 0 is the majestic large vertical scroll centered at X=0)
    let x = 0;
    if (i === 0) {
      x = 0;
    } else {
      const remainingSlots = [-15, -10, -5, 5, 10, 15];
      x = remainingSlots[i - 1];
    }
    // Center frames vertically on the wall
    const y = 4.0;
    position = [x, y, -ROOM_HALF_SIZE];
    rotation = [0, 0, 0];
  } else if (i < 15) {
    // East Wall: 8 images
    const localIndex = i - 7;
    const z = [-17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5][localIndex];
    position = [ROOM_HALF_SIZE, 4.0, z];
    rotation = [0, -Math.PI / 2, 0];
  } else if (i < 23) {
    // South Wall: 8 images
    const localIndex = i - 15;
    const x = [-17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5][localIndex];
    position = [x, 4.0, ROOM_HALF_SIZE];
    rotation = [0, Math.PI, 0];
  } else {
    // West Wall: 8 images
    const localIndex = i - 23;
    const z = [-17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5][localIndex];
    position = [-ROOM_HALF_SIZE, 4.0, z];
    rotation = [0, Math.PI / 2, 0];
  }

  // Resolve final image sizes (preferred custom values vs defaults)
  const isLarge = img.isLarge === true;
  const defaultHeight = isLarge ? GLOBAL_ART_CONFIG.defaultLargeHeight : GLOBAL_ART_CONFIG.defaultStandardHeight;
  const defaultWidth = isLarge ? GLOBAL_ART_CONFIG.defaultLargeWidth : GLOBAL_ART_CONFIG.defaultStandardWidth;

  const width = img.width !== undefined ? img.width : defaultWidth;
  const height = img.height !== undefined ? img.height : defaultHeight;

  return {
    ...img,
    position,
    rotation,
    room: 1, // Only 1 room exists now
    width,
    height
  };
});
