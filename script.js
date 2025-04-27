spinner(document.getElementById('pic1'))
spinner(document.getElementById('pic2'))
spinner(document.getElementById('pic3'))
spinner(document.getElementById('pic4'))
spinner(document.getElementById('pic5'))
spinner(document.getElementById('pic6'))
spinner(document.getElementById('pic7'))
spinner(document.getElementById('pic8'))
spinner(document.getElementById('pic9'))
spinner(document.getElementById('pic10'))
spinner(document.getElementById('pic11'))
spinner(document.getElementById('pic12'))

let audio = new Audio('assets/ding.mp3');

function spinner(pic){
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function spin(picture) {
        for (let i = 0; i <= 360; i++){
            picture.style.rotate = `${i}deg`;
            await sleep(1);
        }
    }

    pic.addEventListener('click', spinning)
    function spinning() {
        audio.play();
        spin(pic)
    }
}