document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('.searchContainer .genderSelection span');

    spans.forEach(span => {
        span.addEventListener('click', function() {
            spans.forEach(s => s.classList.remove('active'));

            this.classList.add('active');
        })
    })
})