let num_click = 0
values = [
        'elephant.png',
        'elephant.png',
        'wild-pig.png',
        'wild-pig.png', 
        'dog.png',
        'dog.png',
        'giraffe.png',
        'giraffe.png'
]

let boxes = document.querySelectorAll('img')
let player1
let player2
let playerNow = 1
let player1Score = 0
let player2Score = 0


const btnStart = document.querySelector('#start')
const panelPlayer1 = document.querySelector('#panel-player1')
const inputPlayerNow = document.querySelector('#now') 

btnStart.addEventListener('click', function(){
    player1 = document.querySelector('#player1').value
    player2 = document.querySelector('#player2').value
    inputPlayerNow.value = `${player1} - azul`
    document.querySelector('.modal').classList.remove('modal-active')

})
function randOrd() {
    return (Math.round(Math.random())-0.5);
}
let values_random = values.sort(randOrd);

boxes.forEach((element, index)=>{
    boxes[index].src = values_random[index]
})


function selected(event){
    const card_select = event.currentTarget
    card_select.classList.add("active")
    num_click++

    if(num_click >= 2){
        list_click = document.querySelectorAll(".active")
        if(list_click.length >= 2){
            if(list_click[0].children[0].src == list_click[1].children[0].src){
                console.log("acertou!")
                if(playerNow == 1){
                    player1Score++;
                    list_click.forEach((element, index)=>{
                        list_click[index].classList.remove("active")
                        list_click[index].classList.add("correct")
                        list_click[index].onclick = ''
                        list_click[index].classList.add("player1")
                        document.querySelector('#scorePlayer1').value = player1Score;
                    })
                }else{
                    player2Score++;
                    list_click.forEach((element, index)=>{
                        list_click[index].classList.remove("active")
                        list_click[index].classList.add("correct")
                        list_click[index].onclick = ''
                        list_click[index].classList.add("player2")
                        document.querySelector('#scorePlayer2').value = player2Score;
                    })
                }
                
                check_win()
            }else{
                console.log("errou")
                console.log(playerNow)
                if(playerNow == 1){
                    playerNow = 2
                    inputPlayerNow.value = `${player2} - Vermelho`
                }else{
                    playerNow = 1
                    inputPlayerNow.value = `${player1} - Azul`
                }           
                setTimeout(() => {
                    list_click[0].classList.remove("active")
                    list_click[1].classList.remove("active")
                }, 500);
               
            }
            num_click = 0 
        }
    } 
}

function check_win(){
    if(document.querySelectorAll(".correct").length > 7){
        console.log(player1Score)
        console.log(player2Score)
        if(player1Score > player2Score){
            alert(`${player1}(azul) venceu`)
        }else{
            alert(`${player2}(vermelho) venceu`)
        }
    }
}

