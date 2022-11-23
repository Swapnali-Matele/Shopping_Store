const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const port = process.env.PORT || 3000
const dotenv = require('dotenv')
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL
const productCatalog = require('./routes/productCatalog');
const userRoutes = require('./routes/userRoutes');
const cartRouter = require('./routes/cartRoutes');



//load routes
app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api' ,productCatalog)
app.use('/cart', cartRouter)

//database connection 
const start = async () => {
    try{

        await connectDB(DATABASE_URL)
        console.log('sucessfully connected to database')
        app.listen(port, () => {
            console.log('Server listening on port %s', port);
        });
        
    }catch(err){
        console.log(err)
    }
}

start();