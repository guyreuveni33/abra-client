import './App.css';
import {useState} from "react";
import {HexColorPicker, HexColorInput} from "react-colorful";
import {addPet} from "./services/petService";
import {Link} from "@chakra-ui/react"; // Ensure your custom styles are applied
import { useNavigate } from 'react-router-dom';

function PetsScreen() {
    const [petName, setPetName] = useState('');
    const [petAge, setPetAge] = useState('');
    const [selectedType, setSelectedType] = useState('Cat');
    const petTypes = ["Dog", "Cat", "horse", "Other"]; // Example colors
    const [color, setColor] = useState("#aabbcc");
    const [loading, setLoading] = useState(false); // Track loading state
    const navigate = useNavigate();
    const handleNoAccount = () => {
        navigate('/AllPetsView');
    }
    const handleAddPet = async () => {
        if (petName.trim() !== "") {
            setLoading(true);
            const newPet = {name: petName, color: color, type: selectedType, age: petAge};
            console.log("New Pet:", newPet)
            const res = await addPet(newPet);
            setLoading(false);
            setPetName(""); // Clear input after adding
            if (res.status === 201) {
                myAlertSuccess();
            } else {
                myAlertFailed();
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPetName(petName);  // Assuming you manage authentication here
    };
    if (loading) {
        return <p>Loading...!</p>; // Show loading message while waiting for response

    }

    function myAlertSuccess() {
        alert("Your pet is being uploaded!")
    }

    function myAlertFailed() {
        alert("Your pet is being uploaded!")
    }
    // function handlePetsButton(){
    //     setNavigate('/AllPetsView');
    // }


    return (
        <div className="form-container">
            <button>

            <Link onClick={handleNoAccount} cursor="pointer" to="/AllPetsView" className="link">Pets</Link>
            </button>

            <form>
                <div>
                    <label>
                        Your Pet Name:
                        <input
                            className="input-text"
                            type="text"
                            maxLength={25}
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <label>
                    Your Pet Age:
                    <input
                        max={20}
                        className="input-text"

                        type="number"
                        value={petAge}
                        onChange={(e) => setPetAge(e.target.value)}
                        required
                    />
                </label>

                <div className="containerAgeColor">
                    <div className="color">
                        <HexColorPicker className="colorA" color={color} onChange={setColor}/>
                        <HexColorInput className="colorB" color={color} onChange={setColor}/>
                    </div>
                    <select className="type" value={selectedType}
                            onChange={event => setSelectedType(event.target.value)}>
                        {petTypes.map(petType => (
                            <option key={petType}
                                    value={petType}>
                                {petType}
                            </option>

                        ))}

                    </select>


                </div>
                <div>



                </div>

            </form>

        </div>
    );
}

export default PetsScreen;
