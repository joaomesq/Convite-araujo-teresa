document.addEventListener("DOMContentLoaded", function() {
    const evento = new Date("Nov 20, 2025 16:00:00").getTime();
        
            const timer = setInterval(function() {
                const agora = new Date().getTime();
                const distancia = evento - agora;
                const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((distancia % (1000 *60 * 60 * 24)) / (1000 * 60 * 60));
                const min = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
                const seg = Math.floor((distancia % (1000 * 60)) / 1000);
                
                document.getElementById("contador").innerHTML = dias +"d " + horas + "h " + min + "m " + seg + "s ";
                if(distancia < 0){
                    clearInterval(timer);
                    document.getElementById("contador").innerHTML = "O grande dia chegou!";
                }
            }, 1000);
});