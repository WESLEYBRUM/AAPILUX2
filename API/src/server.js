const app = require('./app'); // pegando os dados do app.js

require('dotenv').config(); // consumindo o dotenv
const PORT=process.env.PORT || "3000" ; // salvando a port na variavel

app.listen(PORT,() => console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`)); // console 
git remote add origin https://github.com/WESLEYBRUM/AAPILUX2.git
git branch -M main
git push -u origin main