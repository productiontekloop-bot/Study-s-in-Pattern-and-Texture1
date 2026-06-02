import { GALLERY_IMAGES, ImageArtwork } from './images';

export interface Artwork extends ImageArtwork {
  position: [number, number, number];
  rotation: [number, number, number];
  room: number;
}

const ROOM_HALF_SIZE = 21.85;

export const ARTWORKS: Artwork[] = GALLERY_IMAGES.map((img, i) => {
  let position: [number, number, number] = [0, 3.5, 0];
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
    // High-impact center-flush placement for the vertical scroll, standard eye-level for others
    const y = i === 0 ? 3.5 : 3.5;
    position = [x, y, -ROOM_HALF_SIZE];
    rotation = [0, 0, 0];
  } else if (i < 15) {
    // East Wall: 8 images
    const localIndex = i - 7;
    const z = [-17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5][localIndex];
    position = [ROOM_HALF_SIZE, 3.5, z];
    rotation = [0, -Math.PI / 2, 0];
  } else if (i < 23) {
    // South Wall: 8 images
    const localIndex = i - 15;
    const x = [-17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5][localIndex];
    position = [x, 3.5, ROOM_HALF_SIZE];
    rotation = [0, Math.PI, 0];
  } else {
    // West Wall: 8 images
    const localIndex = i - 23;
    const z = [-17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5][localIndex];
    position = [-ROOM_HALF_SIZE, 3.5, z];
    rotation = [0, Math.PI / 2, 0];
  }

  return {
    ...img,
    position,
    rotation,
    room: 1, // Only 1 room exists now
  };
});
