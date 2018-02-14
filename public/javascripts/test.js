$(document).ready(function() {
    let path = window.location.pathname.split('/');
    $('a').on('click', function() {
        if(path[4] != undefined){
            $.ajax({
                url: '/saveQuestion',
                data: {
                    id: path[2],
                    question: path[4],
                    answer: $('textarea').val()
                },
                type: 'POST',
                success: function(data, status, jqXHR) {
                    console.log(status);
                } 
            });
        }
        
    });    

    //https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                $('a').trigger('click');
                timer = 0;
                clearInterval();
            }
        }, 1000);
    }

    var time = 180, 
        display = document.querySelector('#timer');
    startTimer(time, display);

});