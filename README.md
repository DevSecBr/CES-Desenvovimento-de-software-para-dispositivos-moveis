# CES-Desenvovimento-de-software-para-dispositivos-moveis
Repositório da tarefa de desenvolvimento

Este projeto de software para dispositivos móveis permite a visualização e interação de eventos em uma única plataforma, permitindo para as empresas postarem seus eventos e aos usuários interagirem com esses eventos.

## Instalação
Para realizar o deploy dessa aplicação, é necessário instalar as seguintes dependências : 

<ul>
  <li> EXPO: plataforma de desenvolvimento de aplicativos móveis que inclui um conjunto de ferramentas e bibliotecas para construir aplicativos iOS e Android</li>
  <li> React-native: biblioteca que permite construir aplicativos móveis usando JavaScript e React</li>
  <li> Yarn: gerenciador de pacotes para instalar e gerenciar as dependências do projeto</li>
  <li> React-navigation: pacote para gerenciar o fluxo de navegação entre as telas do aplicativo</li>
  <li> React-navigation-stack: pacote que fornece um conjunto de opções de navegação empilhada para o react-navigation </li>
  <li> Node.js: é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. </li>  
</ul> 

## Escopo de telas da aplicação
Inicialmente a aplicação deverá conter um total de 13 screens (telas), sendo elas:
<ul>
  <li> SplashScreen: tela de abertura mostrando o logo da aplicação e dando um feedback visual enquanto a aplicação carrega.</li>
  <li> LoginPage: tela para os usuários inserirem suas credenciais (email e senha) e fazerem login na aplicação.</li>
  <li> RegisterPage: tela para novos usuários se cadastrarem fornecendo informações básicas, como nome, email, senha e confirmação de senha.</li>
  <li> DashboardPage: tela principal que será exibida após o usuário fazer login. Essa tela exibi um resumo dos eventos e das empresas registradas e fornece acesso rápido às principais funcionalidades da aplicação.</li>
  <li> EventsListPage: tela que lista todos os eventos disponíveis com opções para filtrar, pesquisar e ordenar os eventos. Cada evento deve ter opções para visualizar detalhes, editar e excluir.</li>
  <li> EventDetailsPage: tela que exibe informações detalhadas sobre um evento específico, incluindo data, hora, local e descrição. </li> 
  <li> CreateEditEventPage: tela para criar um novo evento ou editar um evento existente, incluindo campos para título, data, hora, local e descrição. </li> 
  <li> CompaniesListPage: tela que lista todas as empresas registradas com opções para filtrar, pesquisar e ordenar as empresas. Cada empresa deve ter opções para visualizar detalhes, editar e excluir. </li> 
  <li> CreateEditCompanyPage: tela para criar uma nova empresa ou editar uma empresa existente, incluindo campos para CNPJ, nome, endereço e telefone. </li> 
  <li> UserProfilePage: tela que exibe informações do usuário logado, permitindo que ele atualize seus dados pessoais, como nome e email, e também altere sua senha. </li> 
  <li> LogoutPage: tela que confirma a ação de sair da aplicação e efetua o logout do usuário. </li> 
</ul> 
