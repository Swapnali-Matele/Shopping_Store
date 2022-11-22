const  connectDB = require('./db/connect');
require('dotenv').config();
const furnitureData = require('./db/data');
const furniture = require('./models/furnitureSchema');

// function createFurnitureTableData(furniture){
//     let furnitures = [];
//     for (let i = 0; i < funirtureData.lenght; i++){
//         let furniture_Data = { };

//         furnitures.push (furniture_Data);

//     }
//     return furnitures;
// }

// const furnirure_catalog = createFurnitureTableData(furniture);

const start = async () =>{
    try{

        await connectDB (process.env.DATABASE_URL);
        console.log ("connect to database successfully");
        await furniture.deleteMany ();
        await furniture.create(furnitureData);
        console.log('Successfully inserted into database')
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);

}};

start();

//module.exports = start;