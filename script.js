let text = "Let's get started"
let i = 0
let speed = 100

function type() {
    if (i <= text.length) {
        document.querySelector('h2').textContent += text.charAt(i)
        i++
        setTimeout (type, speed)
    }
}
type()

const answer = Math.floor(Math.random()*20) + 1
//console.log (answer)

const input = document.querySelector('.input')
input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        play()
    }
})

const btn = document.querySelector('.button')
btn.addEventListener('click', play)

function play() {
    const userNumber = document.querySelector('.input').value
    
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            text: 'enter a number from 1 to 20!',
        })
    } 

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            text: 'enter a number from 1 to 20!',
        })
    } 

    else {
        if (userNumber < answer) {
            Swal.fire({
            title: 'computer is winning',
            text: 'enter the number above',
            })
        }

        else if (userNumber > answer) {
            Swal.fire({
            title: 'computer is winning',
            text: 'enter the number below',
            })
        }

        else {
            Swal.fire({
            title: 'YOU WIN!',
            imageUrl: 'jason-dent-WNVGLwGMCAg-unsplash.jpg',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'YOU WIN',
            })
        }
    }
}
