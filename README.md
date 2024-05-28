Sistema de Análise de Evasão Acadêmica
Descrição
Este projeto implementa um sistema para prever a probabilidade de evasão de alunos usando machine learning. O sistema permite que administradores acadêmicos identifiquem estudantes com alto risco de evasão e intervenham apropriadamente.

Tecnologias Utilizadas
Python: Linguagem principal para manipulação de dados e machine learning.
Flask: Framework utilizado para criar o aplicativo web.
HTML/CSS/JavaScript: Tecnologias front-end para a construção das interfaces do usuário.
Pandas: Biblioteca de Python para manipulação de dados.
Scikit-learn: Biblioteca de Python para implementação dos modelos de machine learning.

Funcionalidades
Dashboard de Probabilidade de Evasão: Interface que mostra uma lista de alunos e suas probabilidades de evasão.
Cadastro de Feedback do Professor: Possibilidade de professores adicionarem observações sobre os alunos, que podem ser usadas para enriquecer o modelo.
Calendário de Monitorias: Calendário interativo para agendar e visualizar sessões de tutoria com alunos em risco.

Estrutura do Projeto
app.py: Arquivo principal do Flask que configura o aplicativo e define as rotas.
model.py: Script de machine learning para treinar o modelo e fazer previsões.
templates/: Diretório contendo os arquivos HTML para as interfaces.
static/: Diretório contendo CSS, JavaScript e outros arquivos estáticos.
