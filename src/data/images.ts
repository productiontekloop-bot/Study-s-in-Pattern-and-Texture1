export interface ImageArtwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  price?: string;
  imageUrl: string;
  productUrl: string;
  isLarge?: boolean;
  width?: number;  // Optional custom width (in meters). Overrides global config.
  height?: number; // Optional custom height (in meters). Overrides global config.
}

export const GALLERY_IMAGES: ImageArtwork[] = [
  // --- 1. THE LARGE VERTICAL HERO IMAGE (223px x 1468px aspect ratio) ---
  {
    id: "1",
    title: "Lines Don’t Meet, Venetian plaster, acrylic on wood, 2 – 30.5in x 36in",
    artist: "Grace Refuerzo",
    description: "A breathtaking vertical installation designed specifically for high-ceiling modernist walls. Original image proportions: 223px by 1468px. /src/data/images.ts",
    price: " 1,200.00",
    imageUrl: "/images/art1.jpg", // Tall aspect ratio placeholder
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1304&quantity=1",
    isLarge: true,
  },

  // --- 2. NORTH WALL (6 Normal Artworks surrounding the Centerpiece) ---
  {
    id: "2",
    title: "Topologyy, Paris plaster on wood, 36in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,500.00",
    imageUrl: "/images/art3.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1246&quantity=1",
    width: 3.0,
    height: 3.0
    
  },
  {
    id: "3",
    title: "Petroglyph, Venetian plaster, acrylic on wood, 36in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,500.00",
    imageUrl: "/images/art4.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1247&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "4",
    title: "Linear, Venetian plaster, acrylic on canvas, 60in x 72in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$5,500.00",
    imageUrl: "/images/art5.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1253&quantity=1",
    width: 5.0,
    height: 6.0
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
    title: "Venetia, Plaster, acrylic on wood, 24in x 36in Available – includes black floating frame",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$5,500.00",
    imageUrl: "/images/art13.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1256&quantity=1",
    width: 2.0,
    height: 3.0
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
    price: "$350",
    imageUrl: "/images/art16.png",
    productUrl: "https://your-link-16.com"
  },
  {
    id: "17",
    title: "Ink Series l Acrylic, plaster, ink on wood 24 in x 24 in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$950",
    imageUrl: "/images/art17.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1284&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "18",
    title: "Ink Series lll Acrylic, plaster, ink on wood 24 in x 24 in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,100",
    imageUrl: "/images/art18.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1286&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "19",
    title: "Ink Series ll Acrylic, plaster, ink on wood 24 in x 24 in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,200.00",
    imageUrl: "/images/art19.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1285&quantity=1",
    width: 2.0,
    height: 3.0
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
    title: "Enlightenment, Venetian plaster, acrylic on canvas, 20in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$800",
    imageUrl: "/images/art24.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1281&quantity=1",
    width: 2.0,
    height: 4.0
  },
  {
    id: "25",
    title: "West Wall Panel 2",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400.00",
    imageUrl: "/images/art25.png",
    productUrl: "https://your-link-25.com"
  },
  {
    id: "26",
    title: "Ink Series 4, Acrylic and metallic ink on wood, 24inx24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400.00",
    imageUrl: "/images/art26.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1281&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "27",
    title: "Ink Series 5, Acrylic and metallic ink on wood, 24inx24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400.00",
    imageUrl: "/images/art27.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1282&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "28",
    title: "Ink Series 6, Acrylic and metallic ink on wood, 24inx24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400.00",
    imageUrl: "/images/art28.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1283&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "29",
    title: "Scrape, Acrylic on canvas, 24in x 48in in black floating frame – US includes black floating frame",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "1,800.00",
    imageUrl: "/images/art29.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1257&quantity=1",
    width: 2.0,
    height: 4.0
  },
  {
    id: "30",
    title: "Rain Series l, Acrylic on wood, 36in x 48in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$3,500.00",
    imageUrl: "/images/art30.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1260&quantity=1",
    width: 3.0,
    height: 4.0
  },
  {
    id: "31",
    title: "Rain Series l, Acrylic on wood, 36in x 48in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$3,500.00",
    imageUrl: "/images/art31.jpg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1260&quantity=1",
    width: 3.0,
    height: 4.0
  }
];

// NOTE: To use your local images later:
// 1. Upload your images to the /public/images/ folder named art1.jpg, art2.jpg, etc.
// 2. Change the fields above (or replace the list) to point to `/images/art${id}.jpg`
