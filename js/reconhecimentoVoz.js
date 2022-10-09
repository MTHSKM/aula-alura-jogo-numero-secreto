window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


//Seleção dos elementos
const elementoChute = document.querySelector('#chute')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//Funções
function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaChute(chute)
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse </div>
        <spam class="box">${chute}</spam>
    `
}

//Eventos
recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', () => recognition.start())