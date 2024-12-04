const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('discente');
});

app.post('/docente', (req, res) => {
    res.send('docente');
});

app.delete('/curso', (req, res) => {
    res.send('curso');
});

app.put('/disciplina', (req, res) => {
    res.send('disciplina');
});

app.listen(port, () => {
    console.log('Servidor em execução');
});