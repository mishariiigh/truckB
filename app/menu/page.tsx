"use client";

import Image from "next/image";

const categories = [
  {
    // Creative & Shorter Title
    name: "Signature Creations", 
    bgColor: "bg-pink-400", // Soft Pink
    textColor: "text-white", // white for the Category Title
    image: "/images/icecream5.png",
    items: [
      { name: "Blueberry", price: "$7" },
      { name: "Pineapple", price: "$7" },
      { name: "Butterscotch", price: "$7" },
      { name: "Strawberry", price: "$7" },
      { name: "Banana Boat", price: "$9" },
    ],
  },
  {
    // Creative & Shorter Title
    name: "Frosty Chillers", 
    bgColor: "bg-blue-300", // Icy Blue
    textColor: "text-white", 
    image: "/images/slush.png",
    items: [
      { name: "Strawberry Slush", price: "$6" },
      { name: "Raspberry Slush", price: "$6" },
      { name: "Blueberry Slush", price: "$6" },
      { name: "Lemon Lime Slush", price: "$6" },
      { name: "Bubble Gum Slush", price: "$6" },
      { name: "Orange Slush", price: "$6" },
      { name: "Grape Slush", price: "$6" },
      { name: "Cherry Slush", price: "$6" },
      { name: "Iceberg (Slush + Ice Cream)", price: "$8" },
      { name: "Peanut Buster", price: "$8" },
    ],
  },
  {
    // Creative & Shorter Title
    name: "Creamy Shakes", 
    bgColor: "bg-yellow-300", // Vanilla/Cream Yellow
    textColor: "text-white", 
    image: "/images/milkshake.png",
    items: [
      { name: "Strawberry Milk Shake", price: "$6" },
      { name: "Chocolate Milk Shake", price: "$6" },
      { name: "Vanilla Milk Shake", price: "$6" },
      { name: "Banana Milk Shake", price: "$6" },
    ],
  },
  {
    // Creative & Shorter Title
    name: "Scoops & Dips", 
    bgColor: "bg-green-300", // Mint Green
    textColor: "text-white", 
    image: "/images/softserve.png",
    items: [
      { name: "Vanilla Soft Serve", price: "$4" },
      { name: "Chocolate Soft Serve", price: "$4" },
      { name: "Twist Soft Serve", price: "$4" },
      { name: "Sugar Cone", price: "$0.50" },
      { name: "Waffle Cone", price: "$1.50" },
      { name: "Sprinkles", price: "$1" },
      { name: "Choc Dip", price: "$1.50" },
      { name: "Dip & Sprinkles", price: "$2.50" },
      { name: "Dip & Peanuts", price: "$2.50" },
      { name: "Cartwheel", price: "$5" },
    ],
  },
];

export default function Page() {
  return (
    <div className="py-8 px-4 max-w-5xl mx-auto font-sans">
      {/* Main title section */}
      <h1 className="text-center text-3xl font-black text-pink-600 drop-shadow-lg [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]">
        🍦 The Creamery Menu 🍨
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-8 text-base italic">
        Dive into every scoop — handcrafted & made fresh daily.
      </p>

      {/* Grid container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`rounded-xl border-2 border-white shadow-lg hover:shadow-pink-500/30 transition-shadow duration-300 overflow-hidden flex flex-col ${cat.bgColor}`}
          >
            {/* Image Header Section */}
            <div className="relative h-40 md:h-52 lg:h-64 rounded-t-xl overflow-hidden group">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                priority
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Category Name */}
              <h2
                className={`absolute bottom-3 left-4 text-base md:text-m font-extrabold drop-shadow-md uppercase tracking-wide ${cat.textColor}`}
              >
                {cat.name}
              </h2>

              {/* Decorative pulse accent */}
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-yellow-100/90 shadow-md animate-ping-slow"></div>
            </div>

            {/* Menu Items Section */}
            <div className="p-4 flex flex-col flex-grow bg-white/50 backdrop-blur-sm">
              <ul className="space-y-1 mt-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between text-md font-bold border-b border-gray-300 pb-0.5 text-gray-900"
                  >
                    <p>{item.name}</p>
                    <p className="font-extrabold text-pink-600">{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* --- New Separate Image Section --- */}
      <div className="mt-16 flex justify-center">
        <Image
          src="/images/RealMenu.jpeg" // replace with your actual image
          alt="Ice cream collection"
          width={900}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>
    </div>
  );
}