document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        editable: true,
        eventLimit: true, // permitir "mais" link quando há muitos eventos

        // Eventos podem ser carregados aqui de uma fonte de dados externa
        events: [
            // Exemplo de evento
            {
                title: 'Reunião de Mentoria',
                start: '2024-06-01',
                className: 'hvr-float-shadow' // Classe do Hover.css para efeito no evento
            },
            {
                title: 'Sessão de Estudo',
                start: '2024-06-05',
                end: '2024-06-07',
                className: 'hvr-float-shadow'
            }
        ],

        eventClick: function(info) {
            // Animação ao clicar em um evento
            $(info.el).addClass('animate__animated animate__pulse');
        },

        dateClick: function(info) {
            // Animação ao clicar em uma data
            alert('Data selecionada: ' + info.dateStr);
        },

        eventMouseEnter: function(info) {
            // Efeito ao passar o mouse sobre um evento
            info.el.classList.add('hvr-grow');
        },

        eventMouseLeave: function(info) {
            // Remover o efeito quando o mouse sai do evento
            info.el.classList.remove('hvr-grow');
        },

        datesRender: function(info) {
            // Animação AOS ao mudar de mês
            AOS.init({
                duration: 1000 // duração da animação em milissegundos
            });
        }
    });

    calendar.render();
});
