// import { useEffect, useState } from "react";

// export default function searchFunction() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   const [q,setQ] = useState("");
//   const [searchParam] = useState(["name","bio"]);

//   useEffect(() => {
//     fetch("http://localhost:5000/artists")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div> Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div> Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name} {item.image}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }