import * as fs from 'fs/promises';


try {
    let result = await fs.readFile('boardgames.json');
    console.log("result", JSON.parse(result));
} catch (error) {
    console.log("error", error);
}

/*
//get data from the file
let result = await fs.readFile('boardgames.json');
let data =JSON.parse(result);
//loop over the boardgames
for(let i in data)
    //create filename
    let filename = `${i}.json`
    //stringify the value
    let bg = JSON.stringify(data[i]);
    //save to file
    await fs.writeFile(filename,bg);
    */