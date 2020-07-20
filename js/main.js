$(document).ready(function () {

    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }

    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas accusamus aliquid eaqueerror ,mollitia assumenda saepe, sapiente at quam cumque nobis? Impedit quaerat non harum autemblanditiis nobis sit?'
            },
            {
                title: 'Prueba de titulo 2',
                date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas accusamus aliquid eaqueerror ,mollitia assumenda saepe, sapiente at quam cumque nobis? Impedit quaerat non harum autemblanditiis nobis sit?'
            },
            {
                title: 'Prueba de titulo 3',
                date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas accusamus aliquid eaqueerror ,mollitia assumenda saepe, sapiente at quam cumque nobis? Impedit quaerat non harum autemblanditiis nobis sit?'
            },
            {
                title: 'Prueba de titulo 4',
                date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas accusamus aliquid eaqueerror ,mollitia assumenda saepe, sapiente at quam cumque nobis? Impedit quaerat non harum autemblanditiis nobis sit?'
            },
            {
                title: 'Prueba de titulo 5',
                date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas accusamus aliquid eaqueerror ,mollitia assumenda saepe, sapiente at quam cumque nobis? Impedit quaerat non harum autemblanditiis nobis sit?'
            },
            {
                title: 'Prueba de titulo 6',
                date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas accusamus aliquid eaqueerror ,mollitia assumenda saepe, sapiente at quam cumque nobis? Impedit quaerat non harum autemblanditiis nobis sit?'
            }

        ];

        posts.forEach((item, indice) => {
            var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
        `;
            $("#post").append(post);
        });

    }

    //cambiador de themas

    var theme = $('#theme');
    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    });

    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    });

    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    });

    //scrool arriba de la web

    $('.subir').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 0
        }, 500);
    });

    //identificador en el localstorage
    $('#login form').submit(function () {
        var for_name = $('#for-name').val();

        localStorage.setItem('for_name', for_name);

    });

    var for_name = localStorage.getItem('for_name');
    if (for_name != null && for_name != 'undefined') {
        var about_parrafo = $('.about p');

        about_parrafo.html('<br><strong>Bienvenido' + ',' + for_name + '</strong>');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //accordion
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
        $(".ui-accordion-header").css("background", "green")
            .css("color", "white")
    }

    //reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(() => {
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);

    }

    //validacion
    if (window.location.href.indexOf('contacto') > -1) {

        $('form input[name="date"]').datepicker({
            dateFormat : "mm-dd-yy"
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
            
        });

    }

});