const express = require('express')
const app = express()
const porta = 3333
const projects = []

app.use(express.json())

app.get('/projects', (req, res) => {
    // const { title, owner } = req.query

    // console.log(title)
    // console.log(owner)
    // console.log(req.query);

    return res.json(projects)
})

app.post('/projects', (req, res, next) => {
    const { title, owner } = req.body

    const projects = { title, owner }

    return res.json()
})

app.put('/projects/:id', (req, res, next) => {
    const { id } = req.params
    console.log(id);

    return res.json(['Projeto 4', 'Projeto 2', 'Projeto 3'])
})

app.delete('/projects/:id', (req, res, next) => {
    return res.json(['Projeto 2', 'Projeto 3'])
})

app.listen(porta, () => {
    console.log(`🚀 Fuckery began on port ${porta} 🚀`)
});