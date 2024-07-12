         // Iniciar automáticamente la reproducción del primer video al cargar la página
        document.addEventListener('DOMContentLoaded', function () {
            var video1 = document.getElementById('video1');
            var video2 = document.getElementById('video2');
            var video3 = document.getElementById('video3');
            var video4 = document.getElementById('video3');
            video1.play(); 
            video2.play();
            video3.play();
            video4.play();
        });