const express = require('express')

let app = express()

app.set("port", process.env.PORT || 3000 )

app.get('/',(req,res)=>{
    return res.send("Hola Mundo")
})

app.listen(app.get('port'),()=>{
    console.log("http://127.0.0.1:"+app.get('port')+"");
})