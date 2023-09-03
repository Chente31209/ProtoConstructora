const express = require('express')

let app = express()

app.set("port", process.env.PORT || 3000 )

app.use("/", express.static('public'));

app.listen(app.get('port'),()=>{
    console.log("http://127.0.0.1:"+app.get('port')+"");
})