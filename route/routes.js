const {select_medicine, add_medicine, delete_medicine} = require("../backend/back_mongodb");
const {parse} = require("url");
const Employee = require('../backend/employee');
module.exports = function(app, db) {
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.get('/medicine', (req, res) => {
        select_medicine().then(AllDocuments => {
            console.log(AllDocuments)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.post('/medicine', (req, res) => {
        const new_medicine = req.body;
        console.log(new_medicine)
        module.exports = {new_medicine}

        add_medicine().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.delete('/medicine/:id', function(req, res) {
        const id_delete_medicine = req.params.id;
        module.exports = {id_delete_medicine};
        delete_medicine().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.get('/employee', async (req, res) => {
        try {
            const employee = await Employee.findAll();
            if (employee) {
                res.json(employee);
            } else {
                res.status(404).json({ error: 'Ошибка корректности данных' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    app.post('/employee', async (req, res) => {
        try {
            const employee = await Employee.create(req.body);
            res.json(employee);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    app.delete('/employee/:id', async (req, res) => {
        try {
            const deleted = await Employee.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Пользователь не существует' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};