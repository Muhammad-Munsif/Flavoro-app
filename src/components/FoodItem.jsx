// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../reduxStore/slices/CartSlice";

// const FoodItem = () => {
//   const dispatch = useDispatch();
//   const data = [
//     {
//       id: "iDYSQtYnobP4HV4s8eDnF",
//       title: "Unbranded Steel Fish",
//       description:
//         "The Configurable systemic access Soap offers reliable performance and fixed design",
//       price: 2441.49,
//       discount: 11.59,
//       rating: 1.49,
//       category: "Unbranded",
//       brand: "web services",
//       image: "https://picsum.photos/seed/iDYSQtYnobP4HV4s8eDnF/600/400",
//       createdAt: "2025-10-03T15:52:35.883Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "uLsymZ3flYB-OMRgfC1z9",
//       title: "Ergonomic Bamboo Chair",
//       description:
//         "Stylish Hat designed to make you stand out with firsthand looks",
//       price: 2540.09,
//       discount: 19.25,
//       rating: 2.99,
//       category: "Bespoke",
//       brand: "networks",
//       image: "https://picsum.photos/seed/uLsymZ3flYB-OMRgfC1z9/600/400",
//       createdAt: "2026-05-29T11:34:22.934Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "A08UiOfKjdJMKB1SW4l3O",
//       title: "Handmade Wooden Shoes",
//       description:
//         "New Mouse model with 90 GB RAM, 31 GB storage, and wrong features",
//       price: 13396.16,
//       discount: 31.52,
//       rating: 4.55,
//       category: "Tasty",
//       brand: "blockchains",
//       image: "https://picsum.photos/seed/A08UiOfKjdJMKB1SW4l3O/600/400",
//       createdAt: "2026-06-13T02:57:00.793Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "EZoUPBKwXy3ZhIQlQkQPC",
//       title: "Ergonomic Rubber Towels",
//       description:
//         "Savor the fresh essence in our Sausages, designed for french culinary adventures",
//       price: 4392.79,
//       discount: 11.19,
//       rating: 1.19,
//       category: "Intelligent",
//       brand: "technologies",
//       image: "https://picsum.photos/seed/EZoUPBKwXy3ZhIQlQkQPC/600/400",
//       createdAt: "2024-09-28T13:40:47.303Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "bP9rNSdTX4A3VcvnvjLaX",
//       title: "Refined Bronze Fish",
//       description:
//         "The sleek and insistent Hat comes with cyan LED lighting for smart functionality",
//       price: 7641.49,
//       discount: 38.5,
//       rating: 3.64,
//       category: "Incredible",
//       brand: "solutions",
//       image: "https://picsum.photos/seed/bP9rNSdTX4A3VcvnvjLaX/600/400",
//       createdAt: "2025-12-17T04:41:22.667Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "4UhbK9KV00NDTmRE3C9Kw",
//       title: "Generic Bronze Salad",
//       description:
//         "Featuring Nihonium-enhanced technology, our Keyboard offers unparalleled simplistic performance",
//       price: 9240.39,
//       discount: 32.39,
//       rating: 1.09,
//       category: "Incredible",
//       brand: "smart contracts",
//       image: "https://picsum.photos/seed/4UhbK9KV00NDTmRE3C9Kw/600/400",
//       createdAt: "2025-10-01T05:22:45.660Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "LWgnuRB6GuGp5PUagjaGn",
//       title: "Ergonomic Concrete Computer",
//       description:
//         "Featuring Terbium-enhanced technology, our Computer offers unparalleled elastic performance",
//       price: 15781.53,
//       discount: 30.65,
//       rating: 3.55,
//       category: "Ergonomic",
//       brand: "schemas",
//       image: "https://picsum.photos/seed/LWgnuRB6GuGp5PUagjaGn/600/400",
//       createdAt: "2026-03-08T00:37:52.559Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "8n2mOsaGBZTE8mfGx6jox",
//       title: "Sleek Bronze Tuna",
//       description: "Ergonomic Pizza designed with Rubber for light performance",
//       price: 17732.7,
//       discount: 27.75,
//       rating: 3.39,
//       category: "Fresh",
//       brand: "initiatives",
//       image: "https://picsum.photos/seed/8n2mOsaGBZTE8mfGx6jox/600/400",
//       createdAt: "2024-12-31T22:28:52.376Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "j7mzsAq4GIVMGDcNoTcbR",
//       title: "Electronic Marble Tuna",
//       description:
//         "Rolfson - Feest's most advanced Computer technology increases pale capabilities",
//       price: 1000.39,
//       discount: 7.39,
//       rating: 1.69,
//       category: "Intelligent",
//       brand: "paradigms",
//       image: "https://picsum.photos/seed/j7mzsAq4GIVMGDcNoTcbR/600/400",
//       createdAt: "2026-01-04T23:50:20.039Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "i05Pf3F5_tzicP89ZcImq",
//       title: "Generic Plastic Soap",
//       description:
//         "The Rod Chips is the latest in a series of suburban products from Rosenbaum - Ziemann",
//       price: 18895.99,
//       discount: 12.89,
//       rating: 4.69,
//       category: "Licensed",
//       brand: "networks",
//       image: "https://picsum.photos/seed/i05Pf3F5_tzicP89ZcImq/600/400",
//       createdAt: "2025-11-30T21:38:25.871Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "yxXyWrTRtBApunuGZWax7",
//       title: "Oriental Silk Soap",
//       description:
//         "Discover the important new Ball with an exciting mix of Wooden ingredients",
//       price: 1315.85,
//       discount: 46.65,
//       rating: 2.85,
//       category: "Tasty",
//       brand: "metrics",
//       image: "https://picsum.photos/seed/yxXyWrTRtBApunuGZWax7/600/400",
//       createdAt: "2026-03-10T07:43:48.250Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "r97uIMBnH0HlT16OymvVd",
//       title: "Rustic Marble Mouse",
//       description:
//         "The purple Towels combines Palau aesthetics with Iron-based durability",
//       price: 12070.99,
//       discount: 37.15,
//       rating: 2.49,
//       category: "Generic",
//       brand: "infrastructures",
//       image: "https://picsum.photos/seed/r97uIMBnH0HlT16OymvVd/600/400",
//       createdAt: "2025-01-09T04:53:47.801Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "wHG9bYy8U_Xe-z3JbYGo9",
//       title: "Unbranded Bamboo Bacon",
//       description:
//         "The Mallie Shirt is the latest in a series of thin products from Wisoky, Bernier and Boehm",
//       price: 5051.7,
//       discount: 47.75,
//       rating: 4.59,
//       category: "Bespoke",
//       brand: "channels",
//       image: "https://picsum.photos/seed/wHG9bYy8U_Xe-z3JbYGo9/600/400",
//       createdAt: "2026-07-01T02:07:36.432Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "c2TqPRSoMdgLTldB-bzzQ",
//       title: "Handmade Marble Computer",
//       description:
//         "Volkman, Hettinger and Price's most advanced Towels technology increases great capabilities",
//       price: 5344.6,
//       discount: 38.8,
//       rating: 1.55,
//       category: "Electronic",
//       brand: "mindshare",
//       image: "https://picsum.photos/seed/c2TqPRSoMdgLTldB-bzzQ/600/400",
//       createdAt: "2025-05-20T19:23:55.176Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "jfWfbB7BdPHE89JnV4wKq",
//       title: "Unbranded Concrete Tuna",
//       description: "Soft Chips designed with Rubber for grouchy performance",
//       price: 19296.29,
//       discount: 33.3,
//       rating: 4.05,
//       category: "Gorgeous",
//       brand: "channels",
//       image: "https://picsum.photos/seed/jfWfbB7BdPHE89JnV4wKq/600/400",
//       createdAt: "2026-09-20T21:19:56.962Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "WFpBGXdO3CCOtTmKteHvv",
//       title: "Fantastic Rubber Cheese",
//       description:
//         "Ortiz, Corwin and Daugherty's most advanced Cheese technology increases ecstatic capabilities",
//       price: 11403.25,
//       discount: 44.85,
//       rating: 4.23,
//       category: "Soft",
//       brand: "mindshare",
//       image: "https://picsum.photos/seed/WFpBGXdO3CCOtTmKteHvv/600/400",
//       createdAt: "2024-10-01T14:14:22.711Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "rdIrP5T8ft6nzxcNiNdzR",
//       title: "Fantastic Steel Sausages",
//       description:
//         "Discover the gecko-like agility of our Keyboard, perfect for hairy users",
//       price: 1656.25,
//       discount: 18.69,
//       rating: 3.69,
//       category: "Ergonomic",
//       brand: "large language models",
//       image: "https://picsum.photos/seed/rdIrP5T8ft6nzxcNiNdzR/600/400",
//       createdAt: "2025-03-22T15:27:55.821Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "WvNidCJMaNyEHMlkhSzZM",
//       title: "Luxurious Gold Pizza",
//       description:
//         "The Managed directional contingency Computer offers reliable performance and shiny design",
//       price: 8158.25,
//       discount: 12.55,
//       rating: 1.39,
//       category: "Small",
//       brand: "AI",
//       image: "https://picsum.photos/seed/WvNidCJMaNyEHMlkhSzZM/600/400",
//       createdAt: "2025-10-30T22:27:15.952Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "ORU6kRYXhiuhr72xGWq1L",
//       title: "Tasty Metal Bike",
//       description:
//         "Discover the querulous new Chips with an exciting mix of Bamboo ingredients",
//       price: 13564.15,
//       discount: 14.39,
//       rating: 2.69,
//       category: "Rustic",
//       brand: "infrastructures",
//       image: "https://picsum.photos/seed/ORU6kRYXhiuhr72xGWq1L/600/400",
//       createdAt: "2025-05-01T14:07:36.538Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "OFm3OoEkqJw8w0PD78lA2",
//       title: "Small Cotton Keyboard",
//       description:
//         "Our turtle-friendly Shirt ensures putrid comfort for your pets",
//       price: 9326.69,
//       discount: 23.15,
//       rating: 1,
//       category: "Bespoke",
//       brand: "experiences",
//       image: "https://picsum.photos/seed/OFm3OoEkqJw8w0PD78lA2/600/400",
//       createdAt: "2025-06-28T19:48:59.386Z",
//     },
//     {
//       id: "xpy13k7UVA_CHqxJwrpZq",
//       title: "Handcrafted Marble Sausages",
//       description:
//         "New Gloves model with 16 GB RAM, 780 GB storage, and raw features",
//       price: 13612.59,
//       discount: 7,
//       rating: 2.15,
//       category: "Licensed",
//       brand: "e-commerce",
//       image: "https://picsum.photos/seed/xpy13k7UVA_CHqxJwrpZq/600/400",
//       createdAt: "2025-10-16T01:52:30.392Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "l1m3-LK9q8JJrR9GL3p73",
//       title: "Unbranded Marble Shoes",
//       description:
//         "Ergonomic Fish made with Aluminum for all-day bright support",
//       price: 15720.89,
//       discount: 41.79,
//       rating: 3.35,
//       category: "Refined",
//       brand: "convergence",
//       image: "https://picsum.photos/seed/l1m3-LK9q8JJrR9GL3p73/600/400",
//       createdAt: "2025-09-13T17:52:25.081Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "8Pukz-0YF5PBXYbkGG9O_",
//       title: "Ergonomic Granite Bacon",
//       description:
//         "Discover the whirlwind new Computer with an exciting mix of Wooden ingredients",
//       price: 14306.45,
//       discount: 49.29,
//       rating: 2.65,
//       category: "Practical",
//       brand: "e-commerce",
//       image: "https://picsum.photos/seed/8Pukz-0YF5PBXYbkGG9O_/600/400",
//       createdAt: "2025-10-10T08:22:44.079Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "8WcsdV2h3O9wJZDycutt8",
//       title: "Awesome Aluminum Towels",
//       description:
//         "Experience the salmon brilliance of our Pants, perfect for shadowy environments",
//       price: 9112.3,
//       discount: 48.59,
//       rating: 1.79,
//       category: "Modern",
//       brand: "niches",
//       image: "https://picsum.photos/seed/8WcsdV2h3O9wJZDycutt8/600/400",
//       createdAt: "2025-01-13T02:32:01.799Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "q35Vwz1LBSZlY2XloDS-C",
//       title: "Unbranded Granite Computer",
//       description:
//         "Innovative Salad featuring wicked technology and Aluminum construction",
//       price: 8552.59,
//       discount: 43.75,
//       rating: 4.99,
//       category: "Unbranded",
//       brand: "blockchains",
//       image: "https://picsum.photos/seed/q35Vwz1LBSZlY2XloDS-C/600/400",
//       createdAt: "2025-06-29T19:16:31.117Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "FdJFsFvelm5-Z2wI1Lfng",
//       title: "Practical Concrete Fish",
//       description:
//         "Our tiger-friendly Fish ensures impeccable comfort for your pets",
//       price: 19302.8,
//       discount: 1.69,
//       rating: 1.65,
//       category: "Rustic",
//       brand: "content",
//       image: "https://picsum.photos/seed/FdJFsFvelm5-Z2wI1Lfng/600/400",
//       createdAt: "2025-12-05T19:26:21.529Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "hmR-pYdg8WlQH34iAfm4U",
//       title: "Fresh Ceramic Salad",
//       description:
//         "Ledner - Smith's most advanced Bacon technology increases unfinished capabilities",
//       price: 3711.09,
//       discount: 25.5,
//       rating: 4.9,
//       category: "Fantastic",
//       brand: "lifetime value",
//       image: "https://picsum.photos/seed/hmR-pYdg8WlQH34iAfm4U/600/400",
//       createdAt: "2024-11-03T06:36:15.320Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "vQWQrr8HZ5vn8bGwYQDtS",
//       title: "Incredible Rubber Ball",
//       description: "New teal Tuna with ergonomic design for some comfort",
//       price: 3111.39,
//       discount: 40.99,
//       rating: 1.05,
//       category: "Sleek",
//       brand: "models",
//       image: "https://picsum.photos/seed/vQWQrr8HZ5vn8bGwYQDtS/600/400",
//       createdAt: "2024-12-02T15:03:45.486Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "na3FeST8BYGBw0oz_h5ub",
//       title: "Elegant Cotton Soap",
//       description:
//         "Innovative Chicken featuring elliptical technology and Wooden construction",
//       price: 13257.49,
//       discount: 14.49,
//       rating: 3.19,
//       category: "Soft",
//       brand: "mindshare",
//       image: "https://picsum.photos/seed/na3FeST8BYGBw0oz_h5ub/600/400",
//       createdAt: "2025-01-23T18:27:23.444Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "rrH_q57MGAE5nkkvkCU7c",
//       title: "Practical Granite Bacon",
//       description:
//         "Experience the indigo brilliance of our Salad, perfect for major environments",
//       price: 11188.15,
//       discount: 24.49,
//       rating: 2.89,
//       category: "Elegant",
//       brand: "models",
//       image: "https://picsum.photos/seed/rrH_q57MGAE5nkkvkCU7c/600/400",
//       createdAt: "2026-08-31T17:47:19.854Z",
//       addbutton: "Add to cart",
//     },

//     {
//       id: "gR1DCT5z_-QcB-nkv2wLp",
//       title: "Tasty Marble Computer",
//       description:
//         "Refined Hat designed with Marble for experienced performance",
//       price: 4689.85,
//       discount: 3.85,
//       rating: 3.35,
//       category: "Bespoke",
//       brand: "supply-chains",
//       image: "https://picsum.photos/seed/gR1DCT5z_-QcB-nkv2wLp/600/400",
//       createdAt: "2026-06-16T18:13:47.270Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "Ace_FdQ04mc91Ce1h_3bC",
//       title: "Luxurious Bamboo Computer",
//       description:
//         "The Streamlined bottom-line infrastructure Hat offers reliable performance and partial design",
//       price: 16170.79,
//       discount: 4.89,
//       rating: 1.69,
//       category: "Soft",
//       brand: "large language models",
//       image: "https://picsum.photos/seed/Ace_FdQ04mc91Ce1h_3bC/600/400",
//       createdAt: "2025-02-23T14:49:06.976Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "Wkq0oQNeX7QpH3S7tmEcW",
//       title: "Tasty Gold Chicken",
//       description:
//         "Featuring Potassium-enhanced technology, our Shirt offers unparalleled sentimental performance",
//       price: 11567.45,
//       discount: 48.09,
//       rating: 1.5,
//       category: "Handcrafted",
//       brand: "networks",
//       image: "https://picsum.photos/seed/Wkq0oQNeX7QpH3S7tmEcW/600/400",
//       createdAt: "2025-08-19T11:13:24.187Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "XurE3L7K8gXHw3GBgZjJF",
//       title: "Unbranded Wooden Pizza",
//       description:
//         "The sleek and untidy Bike comes with olive LED lighting for smart functionality",
//       price: 5019.35,
//       discount: 45.39,
//       rating: 4.3,
//       category: "Recycled",
//       brand: "users",
//       image: "https://picsum.photos/seed/XurE3L7K8gXHw3GBgZjJF/600/400",
//       createdAt: "2024-12-04T22:59:55.582Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "yq3nFWZqmuwhihaRMmj6q",
//       title: "Generic Granite Ball",
//       description:
//         "Ergonomic Sausages made with Aluminum for all-day delicious support",
//       price: 5864.79,
//       discount: 13.39,
//       rating: 4.68,
//       category: "Frozen",
//       brand: "metrics",
//       image: "https://picsum.photos/seed/yq3nFWZqmuwhihaRMmj6q/600/400",
//       createdAt: "2026-07-24T06:51:54.566Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "5U7ZWNI6PMaLrAgoR9iHj",
//       title: "Unbranded Rubber Salad",
//       description:
//         "Discover the wolf-like agility of our Chips, perfect for same users",
//       price: 7427.25,
//       discount: 44.39,
//       rating: 4.85,
//       category: "Electronic",
//       brand: "large language models",
//       image: "https://picsum.photos/seed/5U7ZWNI6PMaLrAgoR9iHj/600/400",
//       createdAt: "2025-02-17T22:39:17.399Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "uelQ_T-gpntuizc_KdA8W",
//       title: "Refined Aluminum Soap",
//       description:
//         "Discover the deer-like agility of our Computer, perfect for possible users",
//       price: 18945.15,
//       discount: 37.79,
//       rating: 2.29,
//       category: "Refined",
//       brand: "smart contracts",
//       image: "https://picsum.photos/seed/uelQ_T-gpntuizc_KdA8W/600/400",
//       createdAt: "2025-04-07T00:15:08.214Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "0-ixiIuHnHJHwvYjtBf7_",
//       title: "Soft Concrete Table",
//       description:
//         "Our penguin-friendly Ball ensures grave comfort for your pets",
//       price: 10093.29,
//       discount: 36.85,
//       rating: 2.09,
//       category: "Refined",
//       brand: "models",
//       image: "https://picsum.photos/seed/0-ixiIuHnHJHwvYjtBf7_/600/400",
//       createdAt: "2025-01-06T16:28:24.109Z",
//       addbutton: "Add to cart",
//     },
//     {
//       id: "CosWUwrmQmWNn4by10KiM",
//       title: "Unbranded Bamboo Ball",
//       description: "Sleek Shirt designed with Metal for lone performance",
//       price: 14000.79,
//       discount: 35.29,
//       rating: 1.99,
//       category: "Gorgeous",
//       brand: "niches",
//       image: "https://picsum.photos/seed/CosWUwrmQmWNn4by10KiM/600/400",
//       createdAt: "2025-12-08T18:35:26.367Z",
//       addbutton: "Add to cart",
//     },
//   ];
//   return (
//     <div className="mx-6">
//       <h1 className="text-xl font-semibold">fooditem</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="border rounded-lg p-4 shadow hover:shadow-lg  transition-all duration-300 ease-in-out"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className=" hover:scale-110 w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
//             <p className="text-gray-600 mb-2">
//               {item.description.slice(0, 50)}...
//             </p>
//             <div className="flex justify-between items-center">
//               <p className="text-gray-400">{item.brand}</p>
//               <p className="text-green-600 font-bold">
//                 ${item.price.toFixed(2)}
//               </p>
//             </div>
//             <div className="flex justify-between items-center mt-2">
//               <p className="text-sm text-gray-500">Category: {item.category}</p>
//               <p className="text-yellow-500">Rating: {item.rating}</p>
//             </div>
//             <div>
//               <button
//                 onClick={() => {
//                   console.log(dispatch(addToCart({ item, quantity: 1 })));
//                 }}
//                 className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
//               >
//                 {item.addbutton}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
