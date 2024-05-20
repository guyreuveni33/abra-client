// import './App.css';
// import {useEffect, useState} from "react";
// import {HexColorPicker, HexColorInput} from "react-colorful";
// import { fetchAllPets} from "./services/petService";
// import ReactLoading from 'react-loading';
// import * as fetchAllPets from "react-bootstrap/ElementChildren";
//
// function AllPetsView() {
//     const [pets, setPets] = useState('');
//
//     // useEffect(() => {
//     //     const loadPets = async () => {
//     //         try {
//     //             const fetchedPets = await fetchAllPets();
//     //             setPets(fetchedPets.map(pet => ({
//     //                 color: pet.color,
//     //                 name: pet.name,
//     //                 type: pet.type,
//     //                 age: pet.age,
//     //                 createdAt: pet.createdAt
//     //
//     //             })));
//     //         } catch (error) {
//     //             console.error("Error fetching pets:", error.message);
//     //         }
//     //     };
//     //
//     //     loadPets();
//     // }, []);
//
//     useEffect(() => {
//         const loadPets = async () => {
//             try {
//
//                 const fetchedPets = await fetchAllPets();
//                 setPets(fetchedPets.map(pet => ({
//                     ...pet})));
//             } catch (error) {
//                 console.error("Error fetching pets:", error.message);
//             }
//         };
//
//         loadPets();
//     }, []);
//
//     return (
//         <div className="form-container">
//             {pets.map((item) => (
//                 <li key={item.id} className="list-item">
//
//                     <span className="task-text">{item.value} {item.color}</span>
//                 </li>
//             ))}
//
//         </div>
//     );
// }
//
// export default AllPetsView;
