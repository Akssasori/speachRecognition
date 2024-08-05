(function () {

    var speakBtn = document.querySelector('#speakbt');
    var resultSpeaker = document.querySelector('#resultSpeak');

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();

        myRecognition.lang= 'pt-BR';

        speakBtn.addEventListener("click", function () {

            try {

                myRecognition.start();

                resultSpeaker.innerHTML = "Estou te ouvindo";
                
            } catch (error) {
                alert('erro:' + error.message);
            }

        }, false);

        myRecognition.addEventListener('result', function (evt) {
            var resultSpeak = evt.results[0][0].transcript;
            console.log(resultSpeak);
            resultSpeak.innerHTML = resultSpeak;

            readCommand(resultSpeak.toLowerCase())

        }, false)

        function readCommand(message) {
            if (message.includes('vídeo') || message.includes('video') || message.includes('criar um vídeo') || message.includes('criar')) {
                window.open("http://localhost:8080/video.mp4");
            }
            
        }

        myRecognition.addEventListener('error', function () {
            resultSpeaker.innerHTML = 'Se você disse alguma coisa, não ouvi muito bem!';


        }, false);
    } else {
        resultSpeaker.innerHTML = 'Seu navegador, necessário atualizar seu navegador';
    }
    
})();