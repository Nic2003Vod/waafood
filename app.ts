import express from 'express';

const app = express();


const port = 8000;
app.listen(port, ()=>{
    console.log(`Serveur en cours d'exécution sur localhost:${port}`);
});