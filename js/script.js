var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$(document).ready(function () {
    myInit();

    $('.buttons--newq').on('click', myInit);


});

function myInit() {

    var color = Math.floor(Math.random() * colors.length);


     $.get('https://random-quote-generator.herokuapp.com/api/quotes/random', function (data) {
        $(".quote-text").animate({
                opacity: 0
            }, 500,
            function() {
                $(this).animate({
                    opacity: 1
                }, 500);
                $('#text').html(data.quote);
            });

        $(".quote-author").animate({
                opacity: 0
            }, 500,
            function() {
                $(this).animate({
                    opacity: 1
                }, 500);
                $('.quote-author').html(data.author);
        });

         $('html body').animate({
             backgroundColor: colors[color],
             color: colors[color]
         }, 500);

         $('.buttons--newq').animate({
             backgroundColor: colors[color]
         }, 500);
    });

}


