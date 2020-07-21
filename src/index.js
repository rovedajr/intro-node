const express = require('express')
const app = express()
const porta = 3333

app.get('/projects', (req, res, next) => {
    return res.json(['Projeto 1', 'Projeto 2'])
})

app.post('/projects', (req, res, next) => {
    return res.json(['Projeto 1', 'Projeto 2', 'Projeto 3'])
})

app.put('/projects/:id', (req, res, next) => {
    return res.json(['Projeto 4', 'Projeto 2', 'Projeto 3'])
})

app.delete('/projects/:id', (req, res, next) => {
    return res.json(['Projeto 2', 'Projeto 3'])
})

app.listen(porta, () => {
    console.log(`🚀 Fuckery began on port ${porta} 🚀`)
});