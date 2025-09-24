import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../reduxStore/slices/CartSlice";

import React from 'react'

const FoodItems = () => {
  return (
    <div>
      <FoodCard />
    </div>
  )
}

export default FoodItems


// const FoodItems = () => {
//   const dispatch = useDispatch();
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

// export default FoodItems;
