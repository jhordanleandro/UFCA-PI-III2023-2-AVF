let numAppointments = [];
//datasReagendamento
async function getData() {
    try {
        const response = await fetch('http://localhost:3000/api');

        const data = await response.json();

        numAppointments = Object.values(data);
        
        createAppointmentsHTML();
             // Selecionando elementos do DOM após os dados terem sido obtidos
            const ModalCancelar = document.querySelector('.ModalCancelar');
            const ModalReagendar =document.querySelector('.ModalReagendar');
            const btnreschedule = document.querySelectorAll('.btn-reschedule');
            const buttonCancelar = document.querySelector('.buttonCancelar');
            const buttonIconClose = document.querySelector('.iconClose');
            const buttonIconCloseReagendar = document.querySelector('.iconCloseReagendar');
            const buttonSair =document.querySelector('.buttonSair');
            const buttonCancelarAgenda = document.querySelector('.buttonCancelarAgenda');
            const buttonConfirmar = document.querySelector('.buttonConfirmar');
            const btncancel = document.querySelectorAll(".btn-cancel");
            
            //botões para fechar o modal
            buttonSair.addEventListener("click", function() {
                 ModalCancelar.classList.add("off");
                 ModalReagendar.classList.add("off");
             });
     
            buttonCancelar.addEventListener("click", function() {
                 ModalCancelar.classList.add("off");
                 ModalReagendar.classList.add("off");
             });

            buttonIconClose.addEventListener("click", function() {
                ModalCancelar.classList.add("off");
            });
            buttonIconCloseReagendar.addEventListener("click", function() {
                ModalReagendar.classList.add("off");
            });
            //fim dos botões para fechar o modal	

            //Selecionando os elementos do DOM após os dados terem sido obtidos
            const boxappointment = document.querySelectorAll('.box-appointment')

            boxappointment.forEach(box =>{
                //botões para abrir o modal
                btncancel.forEach(cancelar=>{
                    cancelar.addEventListener('click',function(){
                        ModalCancelar.classList.remove("off")
                    })
                })

                btnreschedule.forEach(reagendar=> {
                    reagendar.addEventListener('click',function(){
                        ModalReagendar.classList.remove("off")
                    })
                })
                //fim dos botões para abrir o modal
                
                box.addEventListener('click',function(e){
                    buttonCancelarAgenda.addEventListener("click",function(){
                        ModalCancelar.classList.add("off")
                        box.classList.add("removido")
                        deleteData(box.getAttribute('key'))
                        
                    })

                    let horario =''
                    let dia =''
                    let diaMes =''

                    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
                    const currentDate = new Date();
                
                    // Encontra a div de datas específica para este médico
                    const datasContainer = document.querySelector('.datasReagendamento');
                    const setaContainer = document.querySelector('#seta');
                    if (!datasContainer) {
                        return;
                    }
                    datasContainer.innerHTML = '';
                    // Renderiza 6 dias
                    for (let i = 0; i < 6; i++) {
                        const date = new Date();
                        date.setDate(currentDate.getDate() + i);
                    
                        const day = daysOfWeek[date.getDay()];
                        const dayOfMonth = date.getDate();
                        const fullMonthName = new Date().toLocaleString('default', { month: 'long' });
                        const month = fullMonthName.replace(/^\w/, (c) => c.toUpperCase());

                        const div = document.createElement('div');
                        div.classList.add('date-item-reschedule');
                        div.innerHTML = `
                            <h5 class="appointmentDay">${day}</h5>
                            <span class="appointmentDayText">${dayOfMonth} de ${month}<span>
                            <p class="appointmentTime marginTime">8:00</p>
                            <p class="appointmentTime">10:00</p>
                        `;
                    
                        datasContainer.appendChild(div);
                    }

                    setaContainer.innerHTML = '';
                    
                    const setaImg = document.createElement('img');
                    
                    setaImg.src = '/public/assets/setaRight.png';
                    setaImg.alt = 'seta';
                    setaContainer.appendChild(setaImg); 
                    
                    setaContainer.addEventListener('click', function () {
                        const proximoDiaVisivel = datasContainer.querySelector('.date-item-reschedule:not([style*="display: none"])');
                        const posicaoProximoDiaVisivel = proximoDiaVisivel.offsetLeft;
                        
                        datasContainer.scrollTo({
                            left: posicaoProximoDiaVisivel,
                            behavior: 'smooth'
                        });
                    });
                    
                    let dataToBeUpdated= {}

                    ModalReagendar.addEventListener('click',function(e){
                        
                        if (e.target.tagName === 'P' && e.target.textContent !== '----') {
                            let todosHorarios = document.querySelectorAll('.ModalReagendar .datasReagendamento p');
                            todosHorarios.forEach(function(horario) {
                                horario.style.backgroundColor = ''; // Remove a cor de fundo
                                horario.style.borderRadius = ''; // Remove o border-radius
                            });
                            e.target.style.backgroundColor = '#FF725E'
                            e.target.style.borderRadius = '5px'
                            horario = e.target.textContent;
                            const container = e.target.closest('.date-item-reschedule');
                            dia = container.querySelector('.appointmentDay').textContent;
                            diaMes = container.querySelector('.appointmentDayText').textContent;
                            const diaMesText = diaMes.trim(); // Remover espaços em branco extras
                            const partes = diaMesText.split(' '); // Dividir a string em partes com base no espaço em branco
                            const date = new Date();
                            const year = date.getFullYear();
                            const diaMesFinal = partes[0] + ' ' + partes[1] + ' ' + partes[2] + ' de ' + year; // Pegar apenas o dia e o mês
                            const timeDay = horario + ', ' +  dia;

                            dataToBeUpdated = {
                                appointment: {
                                    data: diaMesFinal,
                                    time: timeDay
                                }
                            }
                        }

                    })

                    buttonConfirmar.addEventListener('click', function(){
                        const idToBeUpdated = box.getAttribute('key');
                        const url = 'http://localhost:3000/api/' + idToBeUpdated;
                        fetch(url, {
                            method: 'PUT',
                            body: JSON.stringify(dataToBeUpdated),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            console.log(data);
                            alert('Consulta reagendada com sucesso!');
                        })
                        .catch(error => {
                            console.error('Erro ao realizar a requisição:', error);
                        });
                        ModalCancelar.classList.add("off")
                        ModalReagendar.classList.add("off")
                    })

                })
            })
    } catch (error) {
        console.log(error);
    }
};

getData();

async function deleteData(id) {
    const url = 'http://localhost:3000/api/' + id;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        alert('Consulta cancelada com sucesso!');
    } catch (error) {
        console.log(error);
    }
};

function createAppointmentHTML(i, appointments) {
    const { name, medical_specialty, address, appointment, id } = appointments;
    return `
    <div class="box-appointment" key=${id}>
        <div class="container-my-appointments">
            <img src="/public/assets/perfil.svg" alt="mental-health" style="margin-right: 25px;">
            <div>
                <p class="title-appointment">${name}</p>
                <p class="subtitle-appointment-specialty">${medical_specialty}</p>
                <div class="stars">
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/gray-star.svg" alt="star"/>
                </div>
                <p class="subtitle-appointment-adress">Endereço</p>
                <hr class="divider">
                <p class="subtitle-appointment-full-adress">
                    <img src="/public/assets/point-marker.svg"/>
                    ${address}</p>
            </div>
        </div>
        <div class="divider-between-containers"></div>
        <div class="container-detail-appointments">
            <p class="title-detail-appointment">Detalhes da <strong style="font-weight: 600;">consulta</strong></p>
            <p class="subtitle-detail-appointment" style="margin-top: 5px;">${appointment.data}</p>
            <p class="subtitle-detail-appointment">${appointment.time}</p>
            <div class="btn-container">
                <button class="btn-cancel" data-id="${id}">Cancelar a consulta</button>
                <button class="btn-reschedule" data-id="${id}">Reagendar a consulta</button>
            </div>
        </div>
        
    </div>
    `;
}

function createAppointmentsHTML() {
    const appointmentsContainer = document.getElementById('appointments-container');
    appointmentsContainer.innerHTML = ''; 
    
    numAppointments.forEach((appointments, i) => {
        const appointmentHTML = createAppointmentHTML(i, appointments);
        appointmentsContainer.innerHTML += appointmentHTML;
    });
}


