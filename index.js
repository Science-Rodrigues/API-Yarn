const express = require('express');
const app = express();
app.listen(5000, () => {
    console.log("Teste de API OK...")
});

app.get('/', (req, res) =>{
    res.send("Essa é a primeira rota criada com o express")
});
