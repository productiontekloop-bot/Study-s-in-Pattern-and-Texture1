export interface ImageArtwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  price?: string;
  imageUrl: string;
  productUrl: string;
  isLarge?: boolean;
}

export const GALLERY_IMAGES: ImageArtwork[] = [
  // --- 1. THE LARGE VERTICAL HERO IMAGE (223px x 1468px aspect ratio) ---
  {
    id: "1",
    title: "Lines Don’t Meet, Venetian plaster, acrylic on wood, 2 — 30.5in x 36in",
    artist: "Grace Refuerzo",
    description: "A breathtaking vertical installation designed specifically for high-ceiling modernist walls. Original image proportions: 223px by 1468px. /src/data/images.ts",
    price: " 1,200.00",
    imageUrl: "/images/art1.jpg", // Tall aspect ratio placeholder
    productUrl: "https://your-link-1.com",
    isLarge: true
  },

  // --- 2. NORTH WALL (6 Normal Artworks surrounding the Centerpiece) ---
  {
    id: "2",
    title: "North Wall Elevation - Panel A",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,250",
    imageUrl: "/images/art2.png",
    productUrl: "https://your-link-2.com"
  },
  {
    id: "3",
    title: "North Wall Elevation - Panel B",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,400",
    imageUrl: "/images/art3.png",
    productUrl: "https://your-link-3.com"
  },
  {
    id: "4",
    title: "North Wall Elevation - Panel C",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$950",
    imageUrl: "/images/art4.png",
    productUrl: "https://your-link-4.com"
  },
  {
    id: "5",
    title: "North Wall Elevation - Panel D",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,100",
    imageUrl: "/images/art5.png",
    productUrl: "https://your-link-5.com"
  },
  {
    id: "6",
    title: "North Wall Elevation - Panel E",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,850",
    imageUrl: "/images/art6.jpg",
    productUrl: "https://your-link-6.com"
  },
  {
    id: "7",
    title: "North Wall Elevation - Panel F",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,100",
    imageUrl: "/images/art7.png",
    productUrl: "https://your-link-7.com"
  },

  // --- 3. EAST WALL (8 Normal Artworks) ---
  {
    id: "8",
    title: "East Wall Panel 1",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$850",
    imageUrl: "/images/art8.jpg",
    productUrl: "https://your-link-8.com"
  },
  {
    id: "9",
    title: "East Wall Panel 2",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$900",
    imageUrl: "/images/art9.jpg",
    productUrl: "https://your-link-9.com"
  },
  {
    id: "10",
    title: "East Wall Panel 3",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,350",
    imageUrl: "/images/art10.png",
    productUrl: "https://your-link-10.com"
  },
  {
    id: "11",
    title: "East Wall Panel 4",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,150",
    imageUrl: "/images/art11.jpg",
    productUrl: "https://your-link-11.com"
  },
  {
    id: "12",
    title: "East Wall Panel 5",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,600",
    imageUrl: "/images/art12.jpg",
    productUrl: "https://your-link-12.com"
  },
  {
    id: "13",
    title: "East Wall Panel 6",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,450",
    imageUrl: "/images/art13.png",
    productUrl: "https://your-link-13.com"
  },
  {
    id: "14",
    title: "East Wall Panel 7",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,300",
    imageUrl: "/images/art14.png",
    productUrl: "https://your-link-14.com"
  },
  {
    id: "15",
    title: "East Wall Panel 8",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,950",
    imageUrl: "/images/art15.png",
    productUrl: "https://your-link-15.com"
  },

  // --- 4. SOUTH WALL (8 Normal Artworks) ---
  {
    id: "16",
    title: "South Wall Panel 1",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$750",
    imageUrl: "/images/art16.png",
    productUrl: "https://your-link-16.com"
  },
  {
    id: "17",
    title: "South Wall Panel 2",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$950",
    imageUrl: "/images/art17.png",
    productUrl: "https://your-link-17.com"
  },
  {
    id: "18",
    title: "South Wall Panel 3",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,100",
    imageUrl: "/images/art18.png",
    productUrl: "https://your-link-18.com"
  },
  {
    id: "19",
    title: "South Wall Panel 4",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,200",
    imageUrl: "/images/art19.png",
    productUrl: "https://your-link-19.com"
  },
  {
    id: "20",
    title: "South Wall Panel 5",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,500",
    imageUrl: "/images/art20.png",
    productUrl: "https://your-link-20.com"
  },
  {
    id: "21",
    title: "South Wall Panel 6",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,000",
    imageUrl: "/images/art21.png",
    productUrl: "https://your-link-21.com"
  },
  {
    id: "22",
    title: "South Wall Panel 7",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,800",
    imageUrl: "/images/art22.png",
    productUrl: "https://your-link-22.com"
  },
  {
    id: "23",
    title: "South Wall Panel 8",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,650",
    imageUrl: "/images/art23.png",
    productUrl: "https://your-link-23.com"
  },

  // --- 5. WEST WALL (8 Normal Artworks) ---
  {
    id: "24",
    title: "West Wall Panel 1",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$800",
    imageUrl: "/images/art24.png",
    productUrl: "https://your-link-24.com"
  },
  {
    id: "25",
    title: "West Wall Panel 2",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,050",
    imageUrl: "/images/art25.png",
    productUrl: "https://your-link-25.com"
  },
  {
    id: "26",
    title: "West Wall Panel 3",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,300",
    imageUrl: "/images/art26.png",
    productUrl: "https://your-link-26.com"
  },
  {
    id: "27",
    title: "West Wall Panel 4",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,400",
    imageUrl: "/images/art27.png",
    productUrl: "https://your-link-27.com"
  },
  {
    id: "28",
    title: "West Wall Panel 5",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,750",
    imageUrl: "/images/art28.png",
    productUrl: "https://your-link-28.com"
  },
  {
    id: "29",
    title: "West Wall Panel 6",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,250",
    imageUrl: "/images/art29.png",
    productUrl: "https://your-link-29.com"
  },
  {
    id: "30",
    title: "West Wall Panel 7",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,200",
    imageUrl: "/images/art30.png",
    productUrl: "https://your-link-30.com"
  },
  {
    id: "31",
    title: "West Wall Panel 8",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/art31.jpg",
    productUrl: "https://your-link-31.com"
  }
];

// NOTE: To use your local images later:
// 1. Upload your images to the /public/images/ folder named art1.jpg, art2.jpg, etc.
// 2. Change the fields above (or replace the list) to point to `/images/art${id}.jpg`
