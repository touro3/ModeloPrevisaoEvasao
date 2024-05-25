var alunos = [];

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['dayGrid'],
      initialView: 'dayGridMonth',
      events: [  // Lista de eventos (dias de monitoria)
          { title: 'Monitoria de Matemática - Ana', date: '2024-06-03' },
          { title: 'Monitoria de Física - Pedro', date: '2024-06-10' },
          { title: 'Monitoria de Química - Lúcia', date: '2024-06-17' }
      ]
  });
  calendar.render();
});

document.getElementById('adicionar-aluno').addEventListener('click', function() {
  var nomeAluno = document.getElementById('nome-aluno').value;
  var desempenhoAluno = document.getElementById('desempenho-aluno').value;

  document.addEventListener('DOMContentLoaded', function () {
    // Interatividade existente, considere adicionar interações visuais com Animate.css ou Hover.css onde necessário  
  });
  
  // Adiciona o aluno à lista de alunos
  alunos.push({ nome: nomeAluno, desempenho: desempenhoAluno });

  // Limpa os campos de entrada
  document.getElementById('nome-aluno').value = '';
  document.getElementById('desempenho-aluno').value = '';
});

document.getElementById('baixar-csv').addEventListener('click', function() {
  // Cria o conteúdo do CSV
  var csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Nome,Desempenho\n";
  alunos.forEach(function(aluno) {
    csvContent += aluno.nome + "," + aluno.desempenho + "\n";
  });

  // Cria o arquivo CSV
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "feedback_alunos.csv");
  document.body.appendChild(link); // Necessário para o Firefox
  link.click(); // Dispara o download
});