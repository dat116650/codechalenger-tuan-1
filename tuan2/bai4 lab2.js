(function() {
    const header = document.querySelector('h1');
    header.style.color = 'blue';
    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'yellow';

    });



})();