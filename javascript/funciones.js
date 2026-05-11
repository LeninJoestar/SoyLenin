$(document).ready(function(){
    efectoEnlaces();
    efectoBotones();
    efectoEnlacesDesplegable();
    efectoBotones();
    cerrarMenuDesplegable();
});

function efectoEnlaces()
{
    $(".enlace").hover(
        function() {
            $(this).animate({ backgroundColor: "#a7a7a7" }, 100);
            $(this).animate({ color: "#ebebeb" }, 100);
        }, 
        function() {
            $(this).animate({ backgroundColor: "#d1d1d1" }, 100);
            $(this).animate({ color: "#000000" }, 100);
        }
    );
}

function efectoEnlacesDesplegable()
{
    $(".desplegable-elemento").hover(
        function() {
            $(this).animate({ backgroundColor: "#a7a7a7" }, 100);
            $(this).animate({ color: "#ebebeb" }, 100);
        }, 
        function() {
            $(this).animate({ backgroundColor: "#d1d1d1" }, 100);
            $(this).animate({ color: "#000000" }, 100);
        }
    );
}

function cerrarMenuDesplegable()
{
    $(".menu-desplegable").on('click', function() {
        $('.sidebar').toggleClass('sidebar-desplegar');
        $('#overlay').toggleClass('semi-oscuro');
    });
    $('#overlay').on('click', function() {
        $('.sidebar').removeClass('sidebar-desplegar');
        $('#overlay').removeClass('semi-oscuro');
    });
}

function efectoBotones()
{
    $("#curriculum").hover(
        function() {
            $(this).animate({ backgroundColor: "#ffffff" }, 200);
        }, 
        function() {
            $(this).animate({ backgroundColor: "#F7D0A9" }, 200);
        }
    );
    $("#proyectos").hover(
        function() {
            $(this).animate({ backgroundColor: "#ffffff" }, 200);
        }, 
        function() {
            $(this).animate({ backgroundColor: "#A1C0AE" }, 200);
        }
    );
    $("#certificados").hover(
        function() {
            $(this).animate({ backgroundColor: "#ffffff" }, 200);
        }, 
        function() {
            $(this).animate({ backgroundColor: "#B4585D" }, 200);
        }
    );
}