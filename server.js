 const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const fs = require('fs');
const minhaFuncao = require('./indentacao.js');





app.use(express.static(path.join(__dirname)));





const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

 


const multer = require('multer');
const upload = multer();
app.use(cors());

 








const dados = 'Deu certo dessa vez???';
const caminhoArquivo = 'sucesso.json';

fs.writeFile(caminhoArquivo, dados, (err) => {
    if (err) {
        console.error('Erro ao escrever o arquivo:', err);
        return;
    }
    console.log('Arquivo escrito com sucesso!');
});













app.get('/download', (req, res) => {
    const filePath = 'canais.json'; // Substitua pelo caminho correto para o seu arquivo JSON

    // Verifica se o arquivo existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('O arquivo não existe:', err);
            return res.status(404).send('O arquivo não existe');
        }

        // Define os cabeçalhos da resposta para fazer o navegador baixar o arquivo
        res.setHeader('Content-Disposition', 'attachment; filename=canais.json');
        res.setHeader('Content-Type', 'application/json');

        // Faz o stream do arquivo para a resposta HTTP
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    });
});

  



app.get('/canal', (req, res) => {
    const filePath = 'canais.json'; // Substitua pelo caminho correto para o seu arquivo JSON

  
  
  
    // Verifica se o arquivo existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('O arquivo não existe:', err);
            return res.status(404).send('O arquivo não existe');
        }

        // Define os cabeçalhos da resposta para fazer o navegador baixar o arquivo
        res.setHeader('Content-Disposition', 'attachment; filename=canais.json');
        res.setHeader('Content-Type', 'application/json');

        // Faz o stream do arquivo para a resposta HTTP
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    });
});














app.post('/upload', upload.single('arquivoJSON'), (req, res) => {
  // Verifica se um arquivo foi enviado
  if (!req.file) {
      return res.status(400).send('Nenhum arquivo enviado');
  }

  // Aqui você pode acessar os dados do arquivo JSON
  const jsonData = JSON.parse(req.file.buffer.toString('utf8'));
  console.log("sim deu certo")
  res.send("foi enviado com sucesso")

  
  
  
  //const meujson = JSON.stringify(jsonData);
  
  const meujson = minhaFuncao(jsonData);
;
const caminhoArquivo = 'canais.json';

fs.writeFile(caminhoArquivo, meujson, (err) => {
    if (err) {
        console.error('Erro ao escrever o arquivo:', err);
        return;
    }
    console.log('Arquivo escrito com sucesso!');
});

  
  
  
  
  
  
  
  
  
  
  
   


});



app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
