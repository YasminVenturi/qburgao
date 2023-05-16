const express = require("express");
const app = express();

app.unsubscribe(express.urlencoded({extend:true}));

app.get("/", (req,res) => {
    res.json({
        message: "Bem vindo à API MVC do Senac"
    })
});
app.listen(3000, () => {
    console.log("Sevidor rodando na Porta 3000");
})