const express = require('express');
const { postData, appointmentList, putData, deleteData } = require('../routes/data.js');
const { v4: uuidv4 } = require('uuid');
const routes = express.Router();
const id = uuidv4();
const novaConsulta = {
  "id": "",
  "name": "",
  "medical_specialty": "",
  "address": "",
  "deleted": false
}

//retorna usuários
routes.get('/api', (req, res) => {
  if (appointmentList.length === 0) {
    res.status(400).json({ error: "Nenhum usuário cadastrado!" });
  } else {
  const usuarioAtivos = appointmentList.filter(elem => elem.deleted === false);
  console.log(usuarioAtivos);
  return res.status(200).json(usuarioAtivos);
  }
});

//adicionar dados
routes.post('/api', (req, res) => {

    const { name, medical_specialty, address, appointment } = req.body;
    
    novaConsulta.id = id;
    novaConsulta.name = name;
    novaConsulta.medical_specialty = medical_specialty;
    novaConsulta.address = address;
    novaConsulta.appointment = appointment;

  
    if (novaConsulta.name !== "" && novaConsulta.medical_specialty !== "") {
        postData(novaConsulta);
    }
  return res.status(200).json(novaConsulta);
})

//alterar dados
routes.put('/api/:id', (req, res) => {
  const idUsuario = req.params.id;
  const { appointment } = req.body;

  novaConsulta.id = idUsuario;
  novaConsulta.appointment = appointment;

  if (novaConsulta.appointment !== "") {
    putData(idUsuario, novaConsulta.appointment );
  }
  return res.status(200).json(novaConsulta);
});

//deletar dados
routes.delete('/api/:id', (req, res) => {
  const idUsuario = req.params.id;
  console.log("rota delete");

  if (idUsuario === undefined || idUsuario === null || novaConsulta.id === true) {
    res.status(400).json({ error: "Id inválido!" });
  } else {
  deleteData(idUsuario);
  }
  return res.status(200).json({ message: 'Dados deletados com sucesso!' });
});



module.exports = routes;