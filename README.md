# PROJETO-INTEGRADO-III---EP3

Este é o README do projeto Projeto Integrado III - EP3. Aqui você encontrará informações sobre como configurar o ambiente para rodar o projeto localmente.

## Configuração do Ambiente

Antes de iniciar o projeto, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixá-los e instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

Após instalar o Node.js e o npm, siga as etapas abaixo para configurar o ambiente:

### 1. Clonando o Repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/projeto-integrado-iii-ep3.git
```
### 2. Instalando as Dependências

Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências listadas no arquivo `package.json`:

```bash
npm install
```
Isso instalará todas as dependências necessárias para o projeto, incluindo body-parser, cors, express e uuid.

### 3. Iniciando o Servidor
Após instalar as dependências, você pode iniciar o servidor executando o seguinte comando:
```bash
npm start
```
Este comando iniciará o servidor Node.js que servirá a aplicação.

### 4. Acessando a Aplicação
Uma vez que o servidor estiver rodando, você poderá acessar a aplicação em seu navegador, digitando o seguinte endereço:
```bash
http://localhost:5500/public/pages/home-inicial/home.html
```
### 5. Screenshots da Aplicação
#### Home
![Página Home](/public/assets/homeInicial.png)
#### Login
![Página Login](/public/assets/login.png)
#### Cadastro
![Página Cadastro](/public/assets/cadastro.png)
#### Recuperar a senha
![Página Recuperar a senha](/public/assets/recuperarSenha.png)
#### Médicos disponíveis
![Página com as opções de médicos](/public/assets/medicos.png)
#### Modal de agendamento de consulta
![Modal de agendamento de consulta](/public/assets/modalAgendamento.png)
#### Minhas consultas
![Página com das consultas agendadas](/public/assets/consultas.png)
#### Modal de reagendamento de consulta
![Modal de reagendamento de consulta](/public/assets/modalReagendamento.png)
#### Modal de cancelamento de consulta
![Modal de cancelamento de consulta](/public/assets/modalCancelamento.png)
