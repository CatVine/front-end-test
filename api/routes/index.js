const { Tasks } = require('../db');
const { v4: uuidv4 } = require('uuid');
const LATENCY = 500;

module.exports = app => {

    app.get('/api/todo', (req, res) => {
        setTimeout(async () => {
            try {
                const data = await Tasks.findAll();
                res.json(data);
            }
            catch(e){
                res.status(500).send({ error: e });
            }
        }, LATENCY);
    });

    app.get('/api/todo/:id', async (req, res) => {
        setTimeout(async () => {
            try {
                const result = await Tasks.findByPk(req.params.id);
                res.json(result);
            }
            catch(e){
                res.status(500).send({ error: e });
            }
        }, LATENCY);
    });

    app.post('/api/todo', async (req, res) => {
        const id = uuidv4();
        setTimeout(async () => {
            try {
                await Tasks.create({
                    ...req.body,
                    id,
                    isDone: req.body.isDone === undefined ? '0' : req.body.isDone,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                const result = await Tasks.findByPk(id);
                res.json(result);
            }
            catch(e){
                res.status(500).send({ error: e });
            }
        }, LATENCY);
    });

    app.patch('/api/todo/:id', async (req, res) => {
        setTimeout(async () => {
            try {
                await Tasks.update(req.body, { where: { id: req.params.id }});
                const data = await Tasks.findByPk(req.params.id);
                res.json(data);
            }
            catch(e){
                res.status(500).send({ error: e });
            }
        });
    });

    app.delete('/api/todo/:id', async (req, res) => {
        setTimeout(async () => {
            try {
                await Tasks.destroy({ where: { id: req.params.id }});
                res.json(true);
            }
            catch(e){
                res.status(500).send({ error: e });
            }
        });
    });
};