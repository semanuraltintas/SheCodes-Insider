var setEvents = function () {
    document.querySelectorAll('.number-button, .operator').forEach(function (button) {
        button.addEventListener('click', function (event) {
            var eventValue = event.target.value;
            var currentValue = document.getElementById('answer').value;

            document.getElementById('answer').value = currentValue +eventValue;
        });
    });

    document.querySelector('.equal').addEventListener('click', function () {
        var currentValue = document.getElementById('answer').value;

        document.getElementById('answer').value = eval(currentValue);
    });

    document.querySelector('.clear').addEventListener('click', function () {

        document.getElementById('clear').value = '';
    });
};

setEvents();