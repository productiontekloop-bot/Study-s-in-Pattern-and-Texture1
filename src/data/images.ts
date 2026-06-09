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
    title: "Lines Don’t Meet, Venetian plaster, acrylic on wood, 2 - 20in x 36in",
    artist: "Grace Refuerzo",
    description: "A breathtaking vertical installation designed specifically for high-ceiling modernist walls. Original image proportions: 223px by 1468px. /src/data/images.ts",
    price: "$1,200",
    imageUrl: "/images/art1.jpg", // Tall aspect ratio placeholder
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1304&quantity=1",
    isLarge: true,
  },

  // --- 2. NORTH WALL (6 Normal Artworks surrounding the Centerpiece) ---
  {
    id: "2",
    title: "Black and Tan, 36in x 48in framed in pewter floater frame",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$4,800",
    imageUrl: "/images/art2.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1270&quantity=1",
    width: 3.0,
    height: 4.0
    
  },
  {
    id: "3",
    title: "Topology, Paris plaster on wood, 36in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,500",
    imageUrl: "/images/art3.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1246&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "4",
    title: "Petroglyph, Venetian plaster on wood, 36in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,500",
    imageUrl: "/images/art4.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1247&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "5",
    title: "Linear, Venetian plaster, acrylic on canvas, 60in x 72in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$5,500",
    imageUrl: "/images/art5.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2464&quantity=1",
    width: 4.0,
    height: 5.0
  },
  {
    id: "6",
    title: "Night Sky Series l, Encaustic on wood, 24in x 24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/art6.jpg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2466&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "7",
    title: "Night Sky ll, Encaustic on wood, 24in x 24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/art7.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2468&quantity=1",
    width: 3.0,
    height: 3.0
  },

  // --- 3. EAST WALL (8 Normal Artworks) ---
  {
    id: "8",
    title: "Night Sky Series lll, Encaustic on wood, 24in x 24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/art8.jpg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2470&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "9",
    title: "Night Sky lV, Encaustic on wood, 24in x 24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/art9.jpg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2472&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "10",
    title: "Squares Meet, (pairs together), Encaustic on wood, 6 - 12in x 12in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/art10.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2474&quantity=1",
    width: 2.0,
    height: 2.0
  },
  {
    id: "11",
    title: "Gloom l, Encaustic on wood, 24in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$3,500",
    imageUrl: "/images/art11.jpg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2476&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "12",
    title: "Gloom ll, Encaustic on wood, 24in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$3,500",
    imageUrl: "/images/art12.jpg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2478&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "13",
    title: "Venetia, Plaster, acrylic on wood, 24in x 36in Available – includes black floating frame",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$4,500",
    imageUrl: "/images/art13.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1256&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "14",
    title: "Lava Flow, Encaustic, ink on wood, 2 - 20in x 48in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$4,500",
    imageUrl: "/images/art14.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2480&quantity=1",
    width: 2.0,
    height: 4.0
  },
  {
    id: "15",
    title: "Ocean Aerial Series 1, Encaustic on wood, 36in x 48in, (single)",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$4,500",
    imageUrl: "/images/art15.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2483&quantity=1",
    width: 3.0,
    height: 4.0
  },

  // --- 4. SOUTH WALL (8 Normal Artworks) ---
  {
    id: "16",
    title: "Ocean Aerial Series 2, Encaustic on wood, 36in x 48in, $4,500 (single) (pair)",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$9,000",
    imageUrl: "/images/art16.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2485&quantity=1",
    width: 3.0,
    height: 4.0
  },
  {
    id: "17",
    title: "Ink Series l, Acrylic, plaster, ink on wood, 24in x 24in,",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400",
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
    price: "$1,200",
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
    price: "$1,200",
    imageUrl: "/images/art19.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1285&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "20",
    title: "City Scape, Venetian plaster, acrylic on wood 30in x 40in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$4,500",
    imageUrl: "/images/art20.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1240&quantity=1",
    width: 3.0,
    height: 4.0
  },
  {
    id: "21",
    title: "Texture l, Acrylic on canvas, 36in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,500",
    imageUrl: "/images/art21.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1276&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "22",
    title: "Texture ll, Acrylic on canvas, 36in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,500",
    imageUrl: "/images/art22.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1269&quantity=1",
    width: 3.0,
    height: 3.0
  },
  {
    id: "23",
    title: "Enlightenment, Venetian plaster, acrylic on canvas, 20in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/art24.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1270&quantity=1",
    width: 2.0,
    height: 3.0
  },

  // --- 5. WEST WALL (8 Normal Artworks) ---
  {
    id: "24",
    title: "Ocean Storm, Plaster, Encaustic, acrylic on wood, 30in x 40in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$3,500",
    imageUrl: "/images/art25.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2487&quantity=1",
    width: 3.0,
    height: 4.0
  },
  {
    id: "25",
    title: "Ink Series 4, Acrylic and metallic ink on wood, 24inx24in,",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400.00",
    imageUrl: "/images/art28.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1281&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "26",
    title: "Ink Series 5, Acrylic and metallic ink on wood, 24inx24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400",
    imageUrl: "/images/art27.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1282&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "27",
    title: "Ink Series 6, Acrylic and metallic ink on wood, 24inx24in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$2,400.00",
    imageUrl: "/images/art26.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1283&quantity=1",
    width: 2.0,
    height: 3.0
  },
  {
    id: "28",
    title: "Scrape, Acrylic on canvas, 24in x 48in in black floating frame",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$1,800",
    imageUrl: "/images/art29.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1257&quantity=1",
    width: 2.0,
    height: 4.0
  },
  {
    id: "29",
    title: "Rain Series l, Acrylic on wood, 36in x 48in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "4,500",
    imageUrl: "/images/art30.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1260&quantity=1",
    width: 3.0,
    height: 4.0
  },
  {
    id: "30",
    title: "Rain Series ll, Acrylic on wood, 36in x 48in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$3,500.00",
    imageUrl: "/images/art31.jpg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2490&quantity=1",
    width: 3.0,
    height: 4.0
  },
  {
    id: "31",
    title: "City Scape Series, Acrylc on wood, 24in x 36in",
    artist: "Artist Room 1",
    description: "Elegant gallery-level exhibition frame. Ready for replacement.",
    price: "$3,500.00",
    imageUrl: "/images/art32.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1239&quantity=1",
    width: 3.0,
    height: 3.0
  }
];

// NOTE: To use your local images later:
// 1. Upload your images to the /public/images/ folder named art1.jpg, art2.jpg, etc.
// 2. Change the fields above (or replace the list) to point to `/images/art${id}.jpg`
