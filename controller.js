import query from "./db/utils";

async function findOne(name){
    return await query("SELECT * FROM species WHERE speciesName = ?",[name]);
}

async function findAll(){
    return await query("SELECT * FROM species");
}

async function addSpecies(newSpecies){
    return await query("INSERT INTO species VALUES (?)", [newSpecies]);
};

async function updateSpecies(name, updatedSpecies){
    console.log(updatedSpecies);
    return await query("UPDATE species SET ? WHERE speciesName = ?", [updatedSpecies, name]);
};

async function removeOne(name){
    return await query("DELETE FROM species WHERE speciesName = ?", [name]);
};

export default{
    findOne,
    findAll,
    addSpecies,
    updateSpecies,
    removeOne
}