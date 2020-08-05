const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];

$(document).ready(function () {
    myInit();

    $('.buttons--newq').on('click', myInit);

    $('.buttons-tumblr').on('click', function () {
        $('.buttons-tumblr').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,antl&caption='  + $('.quote-author').text() + '&content=' + $('#text').text() + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button') ;
    });

    $('#tweet-quote').on('click', function () {
        $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=antl&text='+ $('#text').text() + " " + $('.quote-author').text());
    });
});

function myInit() {

    const color = Math.floor(Math.random() * colors.length);


     $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function (data) {
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

         $('#new-quote').animate({
             backgroundColor: colors[color]
         }, 500);
    });

}


