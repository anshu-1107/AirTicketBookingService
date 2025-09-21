const express = require("express")
const app = express();
const body_parser = require("body-parser")
const {PORT, DB_SYNC} = require("./config/serverConfig")
const apiRoutes = require("./routes/index")
const db = require('./models/index')

const setup_and_startServer = ()=>{

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:true}))

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server started on PORT: ${PORT}`);
        if(DB_SYNC==true)
        {
            db.sequelize.sync({alter:true});
        }
    })
}

setup_and_startServer();