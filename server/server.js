const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200  
};
const data = require('./db');

app.set('port', 8000);
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.route('/api/employees/').get((req, res) => {
    res.send({
        data
    });
});

app.route('/api/employees/names/:names').get((req, res) => {
    const requestedName = req.params['names'];
    const result = data['employees'].filter((employee) => {
        return (employee['First Name'].toLowerCase()).includes(requestedName.toLowerCase()) || (employee['Surname'].toLowerCase()).includes(requestedName.toLowerCase());
    });
    res.send({ result });
});

app.route('/api/employees/name/:name').get((req, res) => {
    const requestedName = req.params['name'];
    const result = data['employees'].filter((employee) => {
        return (employee['First Name'].toLowerCase()).includes(requestedName.toLowerCase());
    });
    res.send({ result });
});

app.route('/api/employees/surname/:surname').get((req, res) => {
    const requestedName = req.params['surname'];
    const result = data['employees'].filter((employee) => {
        return (employee['Surname'].toLowerCase()).includes(requestedName.toLowerCase());
    });
    res.send({ result });
});

app.route('/api/employees/ID/:id').get((req, res) => {
    const requestedId = parseInt(req.params['id']);
    const result = data['employees'].filter((employee) => {
        return employee['ID'] === requestedId;
    });
    res.send({ result });
});

app.listen(8000, () => {
    console.log('Server is now working on port :8000');
});
