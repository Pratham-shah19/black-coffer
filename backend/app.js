const express = require('express');
const cors = require('cors');

//express async middleware automatically acts on any async function (controller)
require('express-async-errors');
//to use the environment variables of .env file
require('dotenv').config();


//to access the documents

const router = require('./routes/main');

//user defined middlewares
const errorHandler = require('./middleware/error-handler');
const notfound = require("./middleware/not-found");

//connection between backend and database
const connectDB = require('./db/connect');

//initializing the app
const app = express();


//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use('/api/v1',router);
app.use(errorHandler);
app.use(notfound);




//A startup function to start the server...
const start = async ()=>{
        try {
            // console.log(process.env.MONGO_URI);
            await connectDB(process.env.MONGO_URI);
            app.listen(process.env.PORT || 5050,()=>console.log("server listening on port 5050"));

        } catch (error) {
            console.log(error);
        }
}
start();



//barplot https://www.d3-graph-gallery.com/circular_barplot.html
//donuts https://www.d3-graph-gallery.com/donut.html
//bubble plot https://www.d3-graph-gallery.com/bubble.html
//lollipop chart https://www.d3-graph-gallery.com/lollipop.html
//cicular packing https://www.d3-graph-gallery.com/circularpacking.html
//spider chart https://www.d3-graph-gallery.com/spider.html