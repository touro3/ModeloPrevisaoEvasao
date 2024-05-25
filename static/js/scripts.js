document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault();
            const feedbackContent = this.nextElementSibling;
            if (feedbackContent.classList.contains('d-none')) {
                feedbackContent.classList.remove('d-none');
                $(feedbackContent).stop().slideDown({
                    duration: 300,
                    start: function() {
                        $(this).css('display', 'block');
                    }
                });
            } else {
                $(feedbackContent).stop().slideUp({
                    duration: 300,
                    complete: function() {
                        $(this).addClass('d-none');
                    }
                });
            }
        });
    });
});