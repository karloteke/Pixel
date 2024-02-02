let colourSelected = 'white'
let drawing = false

window.onload = function() {
    console.log('loaded');
    let container = document.getElementById('container')

    for (let i=0; i<10; i++) {
        let row = document.createElement ('div')

        for (let j=0; j<10; j++) {
            let pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixel.onclick = ClickMe

            pixel.onmousedown = () => {
                console.log('on mouse down');
                drawing = true
            }

            pixel.onmouseup = () => {
                console.log('on mouse up');
                drawing = false
            }

            pixel.onmouseover = (event) => {
                console.log('on mouse over');  
            if(drawing) {
                event.target.style['background-color'] = colourSelected 
                }
            }
            row.appendChild(pixel)
        }
        container.appendChild(row)
    }

    initColours()
    initButtons()
}

function initColours(){ 
    let colours = document.getElementsByClassName('colour')

    for(const colour of colours){
        colour.onclick = clickColour
    }
}

function initButtons() {
    document.querySelector('button').onclick = () => {
        const pixels = document.querySelectorAll('.pixel')
        for(const pixel of pixels) {
            pixel.style['background-color'] = 'white'
        }
    }
}

function ClickMe(event){
    // if(event.target.className === 'pixel'){
    //     event.target.className = 'pixel-blue'
    // }else{
    //     event.target.className = 'pixel'
    // }
    event.target.style['background-color'] = colourSelected
}

function clickColour(event){
    console.log('colour clicked' + event.target.style['background-color']);
    colourSelected = event.target.style['background-color']

    document.querySelector('.colour-selected').style['background-color'] = colourSelected
}