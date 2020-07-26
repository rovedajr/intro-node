const express = require('express')
const { uuid } = require('uuidv4')
const { response } = require('express')
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

    const project = { id: uuid(), title, owner }

    projects.push(project)

    return res.json(project)


})

app.put('/projects/:id', (req, res, next) => {
    const { id } = req.params
    const { title, owner } = req.body

    const projectIndex = projects.findIndex((project) => project.id === id)

    if (projectIndex < 0) {
        return res.status(400).json({ error: "Project not found" })
    }

    const project = { id, title, owner }

    projects[projectIndex] = project

    return res.json(project)
})

app.delete('/projects/:id', (req, res, next) => {


    const { id } = req.params
    const { title, owner } = req.body

    const projectIndex = projects.findIndex((project) => project.id === id)

    if (projectIndex < 0) {
        return res.status(400).json({ error: "Project not found" })
    }

    const project = { id, title, owner }

    projects.splice(projectIndex, 1)
    console.log(projects[projectIndex]);

    return res.json(project)
})

app.listen(porta, () => {
    console.log(`🚀 Fuckery began on port ${porta} 🚀`)
});