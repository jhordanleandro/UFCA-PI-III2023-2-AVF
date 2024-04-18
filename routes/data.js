const fs = require('fs');

const dadosConsulta = fs.readFileSync('appointmentList.json');

const appointmentList = JSON.parse(dadosConsulta);

// saving data in a json file
function postData(novoConsulta) {
  
    appointmentList.push(novoConsulta);
    const data = JSON.stringify(appointmentList, null, 2);
    fs.writeFileSync('appointmentList.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

  // function put data 
  function putData(idConsulta, appointmentInput) {
    appointmentList.forEach((consulta) => {
      if (consulta.id === idConsulta && consulta.deleted === false) {
        consulta.appointment = appointmentInput;
      }
    });
    const data = JSON.stringify(appointmentList, null, 2);
    fs.writeFileSync('appointmentList.json', data, (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  // function delete data
  function deleteData(idConsulta) {
    appointmentList.forEach((consulta) => {
      console.log(consulta.id === idConsulta, consulta.deleted === false);
      if (consulta.id === idConsulta && consulta.deleted === false) {
        consulta.deleted = true;
      }
    });
    const data = JSON.stringify(appointmentList, null, 2);
    fs.writeFileSync('appointmentList.json', data, (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  
  }

exports.putData = putData;
exports.deleteData = deleteData;
exports.postData = postData;
exports.appointmentList = appointmentList;