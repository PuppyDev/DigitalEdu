// list cards 
const cards = [
    {
        id : 1,
        img: "./img/bt1/ab.jpg",
        header : "Hello world!",
        time: "12:34 pm",
        type : "education"
    },
    {
        id : 2,
        img: "./img/bt1/ab1.jpg",
        header : "Using Creative Problem Solving lorem ipsum",
        time: "12:20 pm",
        type : "Learning"
    },
    {
        id : 3,
        img: "./img/bt1/ab2.jpg",
        header : "Learn by doing with Real World Projects",
        time: "12:19 pm",
        type : "Online"
    },
    {
        id : 4,
        img: "./img/bt1/ab5.jpg",
        header : "Weekend tour in Switzerland, Davos",
        time: "12:18 pm",
        type : "education"
    },
    {
        id : 5,
        img: "./img/bt1/ab4.jpg",
        header : "Budget Trips for Winter Break",
        time: "12:18 pm",
        type : "Online"
    },
    {
        id : 6,
        img: "./img/bt1/ab3.jpg",
        header : "Find the Right Learning Path for your Group Course online",
        time: "12:18 pm",
        type : "Learning"
    },
    {
        id : 7,
        img: "./img/bt1/ab6.jpg",
        header : "Learning to Write as a Professional Author",
        time: "12:18 pm",
        type : "education"
    },
    {
        id : 8,
        img: "./img/bt1/ab7.jpg",
        header : "Hello world!",
        time: "12:18 pm",
        type : "Online"
    },
]
const addCard = document.querySelector('#add-card')
const amount = document.querySelector('#amountPage')
const cardLength = Math.ceil(cards.length / 6)
const btnNext = document.querySelector('#next')

start = () => {
    
    renderAmout()
    render(cards)
    
}

start ()


document.addEventListener('click', function(e) {
    const target = e.target
    if(target.parentNode.id === 'amountPage') {
        
        renderChange(target)
    }
})


function renderChange(target) {
    
    const currentIndex = document.querySelectorAll('a.active')[2]
    const allEle = document.querySelectorAll('a.page')
    var newIndex = 1
    if(target.dataset.id == 'next') {

        var count = +currentIndex.text
        newIndex = ++count

    }

    
    currentIndex.classList.remove('active')
    target.classList.add('active')
    clearAll()
    render(cards)
    
}

function renderAmout() {
    for (let i = 1; i <= cardLength; i++) {;
        const atag = document.createElement('a')
        i == 1 ? atag.classList.add('active') : ''
        atag.classList.add(`page`)
        atag.dataset.id = `item${i}`
        atag.href = '#'
        atag.innerHTML = i
        amount.appendChild(atag)
    }
}

// function renderFirstLast () {
//     const currentIndex = document.querySelectorAll('a.active')[2]

//     if(currentIndex != undefined) {
//         const atag = document.createElement('a')
//         if(currentIndex.dataset.id != 1) {

//             atag.dataset.id = `prev`
//             atag.innerHTML = `Prev`
//             atag.href = '#'
            
//         }

//         if (currentIndex.dataset.id != cardLength) {

//             atag.dataset.id = `next`
//             atag.href = '#'
//             atag.innerHTML = `Next`

//         }
//         amount.appendChild(atag)
//     }
// }

function clearAll () {

    addCard.innerHTML = ''

}

function render(cards) {
    const current = document.querySelectorAll('a.active')[2]
    const sl = +current.innerHTML;
    const eleRender = cards.filter((ele,index )=> {
        return ((index < (+current.text * 6)) && (index >= (+current.text - 1) * 6)) ? ele : ''
    })
    
    eleRender.forEach( (card,index) => {

        const div = document.createElement('div')
        div.classList.add('card')
        div.dataset.id = card.id
        div.innerHTML = `
            <div class="img">
                <img src="${card.img}" alt="">
            </div>

            <div class="description-card">
                <a href="#" class="card-header">
                    ${card.header}
                </a>
                <div class="contact d-flex">
                    <div class="img">
                        <img src="./img/bt1/w3.jpeg" alt="">
                    </div>
                    <div class="right">
                        <p>W3Layouts</p>
                        <div class="time">
                            May 10, 2021 .  <i class="far fa-clock"></i> ${card.time}
                        </div>
                    </div>
                </div>                                                          
            </div>`
        addCard.appendChild(div)
    })
} 


