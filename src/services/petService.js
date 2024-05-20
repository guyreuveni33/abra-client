
export const addPet = async (newPet) => {
    const response = await fetch("http://localhost:5038/Pets", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPet)
    });
    if (!response.ok) throw new Error('Failed to add pet');
    console.log("r:",response);
    return await response;
};

export const fetchAllPets = async () => {
    const response = await fetch("http://localhost:5038/Pets");
    if (!response.ok) throw new Error('Failed to fetch pets');
    return await response.json();
};