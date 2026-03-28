export type Product = {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  url: string;
  category: "styling" | "tools" | "bundles" | "accessories";
  description: string;
  videoUrl?: string;
  usage?: {
    whatItIs: string;
    whatItDoes: string;
    howToUse: string;
    whenToUse: string;
    result: string;
    trust: string;
  };
};

export const products: Product[] = [
  {
    name: "HEEM Styling Powder",
    price: "$15.00",
    image: "https://heembyjv.com/cdn/shop/files/stylingg_powdeeer_1.png?v=1763406613&width=533",
    url: "https://heembyjv.com/products/heem-styling-powder-1",
    category: "styling",
    description: "Are you tired of straight flat hair? Its time to level Up, with The New Heem Styling Powder you can switch up your hair style in multiple way's by adding volume and texture. Save time and money with The Heem Product's. If you get The Heem Powder might as well just get the Heem comb with it goes hand in hand like PB & J.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
    usage: {
      whatItIs: "A lightweight volumizing styling powder.",
      whatItDoes: "Adds instant volume, texture, and natural movement to any hair type.",
      howToUse: "Tap a small amount into your hands, rub together, and work through the top sections of dry hair.",
      whenToUse: "As the final step after cutting and blow drying for a finished, textured look.",
      result: "Hair goes from flat to full with zero visible product. Natural texture that lasts all day.",
      trust: "The #1 product JV reaches for on every single client. Used in every tutorial on his channel.",
    },
  },
  {
    name: "HEEM Sea Salt Spray",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/cecial.png?v=1764273503&width=533",
    url: "https://heembyjv.com/products/heem-sea-salt-spray",
    category: "styling",
    description: "The HEEM Sea Salt Spray adds natural wave, texture, and body to any hair type. Spray it on damp or dry hair before styling for that beachy, lived-in movement that holds all day without stiffness.",
    videoUrl: "https://www.youtube.com/watch?v=xiqtbk_PoTM",
    usage: {
      whatItIs: "A sea salt texturizing spray for natural wave and body.",
      whatItDoes: "Creates beachy, lived-in texture with lightweight hold.",
      howToUse: "Spray onto damp or dry hair, scrunch or blow dry for movement.",
      whenToUse: "Before blow drying for a textured base, or on dry hair for added grit.",
      result: "Natural wave and body that holds all day without stiffness or crunch.",
      trust: "Part of JV's signature textured look workflow. Used before powder for maximum effect.",
    },
  },
  {
    name: "The Heem Pomade 2.0",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/POMADEEEE_1.png?v=1763615382&width=533",
    url: "https://heembyjv.com/products/the-heem-pomade",
    category: "styling",
    description: "Effortlessly refined. Embrace a natural allure with our New Heem Matt Finish Pomade. Premium formula delivers a medium weight hold and a sleek, non-shiny texture. Perfect for defining your style and maintaining a polished look throughout the day.",
    videoUrl: "https://www.youtube.com/watch?v=UOr66Bv390k",
    usage: {
      whatItIs: "A matte finish pomade with medium hold.",
      whatItDoes: "Delivers sleek, non-shiny texture with all-day hold.",
      howToUse: "Work a small amount between palms, apply evenly through styled hair.",
      whenToUse: "When you want a polished, refined look with zero shine.",
      result: "Clean, matte finish that looks natural and holds shape all day.",
      trust: "JV's go-to for clients who want a polished, non-shiny finish.",
    },
  },
  {
    name: "The HEEM Wax",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/584343BB-DD7F-45D7-B098-A8A180FBF48C.jpg?v=1773819881&width=533",
    url: "https://heembyjv.com/products/the-heem-gel-wax",
    category: "styling",
    description: "The Heem Wax brings refreshing smell and feel to your hair. Whether you want a wet look or a firm look this is the right choice for you. The wax is like putty, it can be used to texture, hold, and style in many different ways. Made with No Alcohol.",
    videoUrl: "https://www.youtube.com/watch?v=JL1dCh3imQU",
    usage: {
      whatItIs: "A versatile styling wax with a putty-like texture.",
      whatItDoes: "Creates wet look or firm hold. Textures, holds, and styles in multiple ways.",
      howToUse: "Scoop a small amount, warm between palms, work through hair for desired effect.",
      whenToUse: "When you want a wet, slick look or firm textured hold.",
      result: "Flexible styling from wet to textured. No alcohol, refreshing scent.",
      trust: "JV uses this on clients who want versatile, reworkable hold.",
    },
  },
  {
    name: "The Heem ANTIFRIZZ",
    price: "$22.99",
    image: "https://heembyjv.com/cdn/shop/files/antifrizz.png?v=1763605414&width=533",
    url: "https://heembyjv.com/products/the-heem-antifrizz",
    category: "styling",
    description: "The Heem® ANTIFRIZZ will hydrate your hair and give it a soft wet look to bring your hair to life. Made to give the hair waviness and activate curls, enriched with krafina, controls frizz without leaving heavy hair. Intensifies brightness.",
    usage: {
      whatItIs: "An anti-frizz cream enriched with krafina.",
      whatItDoes: "Hydrates, activates curls, controls frizz, and adds brightness.",
      howToUse: "Apply to damp hair, work through from mid-length to ends.",
      whenToUse: "After washing or on damp hair for curl activation and frizz control.",
      result: "Soft, hydrated hair with activated curls and zero frizz. Protected and shiny all day.",
      trust: "Specifically formulated for textured and curly hair types. JV's clients love the wet, soft look.",
    },
  },
  {
    name: "The Heem Aftershave Cologne",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/TOGETHER.png?v=1763406397&width=533",
    url: "https://heembyjv.com/products/the-heem-aftershave-cologne",
    category: "styling",
    description: "The Heem aftershave cologne brings a refreshing feel and smell when sprayed. Apply after a fresh haircut or a clean shave for a crisp feeling. Made from high-quality, natural ingredients that are safe and gentle on the skin. Free from harsh chemicals.",
    videoUrl: "https://www.youtube.com/watch?v=wBAfEpE0vm0",
    usage: {
      whatItIs: "A premium aftershave cologne spray.",
      whatItDoes: "Refreshes, soothes, and adds a clean scent after cutting.",
      howToUse: "Spray on the neck and hairline after the cut for a clean, fresh finish.",
      whenToUse: "Immediately after a fresh haircut or clean shave.",
      result: "Crisp, refreshing feel. No irritation, premium scent that lasts.",
      trust: "Made from natural ingredients. JV uses it on every client as the final touch.",
    },
  },
  {
    name: "THE HEEM RAZOR",
    price: "$25.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-7143.png?v=1772685669&width=533",
    url: "https://heembyjv.com/products/heem-razor-holder",
    category: "tools",
    description: "Experience precision with the HEEM Straight Razor. Designed for barbers who demand clean, sharp results. Built for balance, durability, and professional performance.",
    usage: {
      whatItIs: "A professional straight razor for precision detail work.",
      whatItDoes: "Delivers clean lineups, tapers, and finishing touches.",
      howToUse: "Use with replaceable blades for precision lining and edge work.",
      whenToUse: "During lineups and detail work on every fade or taper.",
      result: "Razor-sharp edges and clean lines that define the entire cut.",
      trust: "The exact razor JV uses daily. Built for balance and professional performance.",
    },
  },
  {
    name: "THE HEEM CAPE",
    price: "$35.00",
    originalPrice: "$45.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-9783.png?v=1763353574&width=533",
    url: "https://heembyjv.com/products/the-heem-cape",
    category: "tools",
    description: "BEST SIZE, BEST COLORS, BEST FABRIC, ITS HEEM. Available in Purple, Blue, Black, and White. Water-resistant, hair-repellent, and easy to clean.",
    usage: {
      whatItIs: "A premium barber cape available in multiple colors.",
      whatItDoes: "Protects clients during cuts with water-resistant, hair-repellent fabric.",
      howToUse: "Snap around the neck before cutting. Shake off hair after each client.",
      whenToUse: "Every single haircut. Professional presentation and protection.",
      result: "Clean, professional look in the chair. Easy maintenance between clients.",
      trust: "The cape JV uses on every single client. Built for daily professional use.",
    },
  },
  {
    name: "The Gold HEEM Comb",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/Gcomb_compressed.png?v=1763406572&width=533",
    url: "https://heembyjv.com/products/the-gold-heem-comb",
    category: "tools",
    description: "The signature Gold HEEM Comb. Use to distribute product evenly and create clean parts or directional flow. Looks as good as it works.",
  },
  {
    name: "THE HEEM COMB 2.0",
    price: "$10.00",
    image: "https://heembyjv.com/cdn/shop/files/2.0_COMB.png?v=1763962660&width=533",
    url: "https://heembyjv.com/products/the-heem-comb-2-0",
    category: "tools",
    description: "Upgraded design for better grip and smoother glide. Works with all HEEM styling products on damp or dry hair. Balanced tooth spacing for snag-free results.",
  },
  {
    name: "The Heem Texture Comb",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/BCOMP.png?v=1763524317&width=533",
    url: "https://heembyjv.com/products/heem-texture-comb",
    category: "tools",
    description: "The comb JV uses to create his signature textured tops. Run through top sections to break up weight and add natural-looking movement. Goes hand in hand with the Styling Powder.",
  },
  {
    name: "The Heem Crush",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/2_curh_combs.png?v=1764002918&width=533",
    url: "https://heembyjv.com/products/the-heem-crush",
    category: "tools",
    description: "Comb and a brush. Crush through styled hair to break up uniform lines for undone, editorial-style texture with modern movement.",
  },
  {
    name: "The HEEM Shear Pack",
    price: "$200.00",
    originalPrice: "$250.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-7141.jpg?v=1772684657&width=533",
    url: "https://heembyjv.com/products/the-heem-shear-pack",
    category: "tools",
    description: "The exact shears JV uses in his chair. Premium professional shears for point cutting, slide cutting, and precision work.",
    usage: {
      whatItIs: "Professional-grade cutting shears.",
      whatItDoes: "Precision cutting for point cuts, slide cuts, and texturizing.",
      howToUse: "Professional use only — designed for trained barbers and stylists.",
      whenToUse: "For every precision cut that requires detail and control.",
      result: "Clean, precise cuts with smooth action and lasting sharpness.",
      trust: "The exact shears JV uses on every client. Professional-grade construction.",
    },
  },
  {
    name: "THE HEEM SKULLY",
    price: "$15.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-3725.png?v=1769144746&width=533",
    url: "https://heembyjv.com/products/the-heem-skully",
    category: "accessories",
    description: "Premium branded skully for the culture. Rep HEEM anywhere you go.",
  },
  {
    name: "Heem Powder Pack",
    price: "$80.00",
    originalPrice: "$150.00",
    image: "https://heembyjv.com/cdn/shop/files/hereeeem.png?v=1763406553&width=533",
    url: "https://heembyjv.com/products/heem-pack",
    category: "bundles",
    description: "Stock up on the #1 seller. Multiple bottles of HEEM Styling Powder at a discounted bundle price. Never run out of the product that finishes every cut.",
  },
  {
    name: "The Flow Combo",
    price: "$42.99",
    originalPrice: "$50.00",
    image: "https://heembyjv.com/cdn/shop/files/FRIZZ_COMBOI.png?v=1764087076&width=533",
    url: "https://heembyjv.com/products/untitled-nov19_21-48",
    category: "bundles",
    description: "Curated by JV — everything you need in one box. Complete styling system for natural, textured looks.",
  },
  {
    name: "The Heem Texture Combo",
    price: "$40.00",
    originalPrice: "$50.00",
    image: "https://heembyjv.com/cdn/shop/files/HEEM_COMBO.png?v=1763406332&width=533",
    url: "https://heembyjv.com/products/the-heem-texture-combo",
    category: "bundles",
    description: "The exact combo JV uses for his most popular textured cuts. Includes texture tools and styling products designed to work together.",
  },
  {
    name: "The Heem Bundle",
    price: "$160.00",
    originalPrice: "$200.00",
    image: "https://heembyjv.com/cdn/shop/files/fixed_bundle_bf3d6c6d-9905-434a-8904-059f43ba4f87.jpg?v=1770447985&width=533",
    url: "https://heembyjv.com/products/the-heem-bundle",
    category: "bundles",
    description: "All products for a Heem Deal. HEEM POWDER, HEEM WAX, HEEM GEL, HEEM SEA SALT, HEEM ANTIFRIZZ, HEEM POMADE, HEEM AFTERSHAVE, HEEM GOLD COMB, HEEM BLACK COMB, HEEM CRUSH, HEEM COMB 2.0. Save $40 and get the entire lineup.",
  },
];

export const categories = [
  { key: "styling" as const, label: "Styling Products" },
  { key: "tools" as const, label: "Professional Tools" },
  { key: "bundles" as const, label: "Bundles & Value Packs" },
  { key: "accessories" as const, label: "Accessories" },
];
