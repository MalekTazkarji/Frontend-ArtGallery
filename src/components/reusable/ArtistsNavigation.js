// import {Routes, Route, useState, useNavigate} from 'react-router-dom';
// import Artists from '../../pages/Artists/artists';

// export default function ArtistsNavigation() {
//     const [items, setItems] = useState([]);
//   const navigate = useNavigate();

//     const navigateToArtists = () => {
//       navigate("/artists");
//     };
  
//     return (
//       <Routes>
//         <Route path="/artists" element={<Artists />}>
//           <div>
//             <ul>
//               {items.map((item) => (
//                 <ol>
//                   <li>
//                     <img src={item.image} alt={item.name} />
//                   </li>
//                   <li>Name: {item.name}</li>
//                 </ol>
//               ))}
//             </ul>
//           </div>
//         </Route>
//       </Routes>
//     );
//   }