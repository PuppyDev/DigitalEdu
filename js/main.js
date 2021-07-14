const bar = document.querySelector('.nav-bar ')
const headerEle = document.querySelector('header')
const mainHeader = document.querySelector('.main-header')
const hidden = document.querySelector('.right')
const counters = document.querySelectorAll('.count')
const btnPage = document.querySelector('.page-active')
const elePage = document.querySelector('.second-nav')
const backEle = $('.backToTop')
const progress = document.querySelectorAll('.progress')
const speed = 1000
var isClick = false
var isShow = false

// percent skills 
progress.forEach (ele => {

    const valueUpTo = +ele.dataset.percent
    const firstchild = ele.firstElementChild

    const UpdatePercent = () => {

        const valueShow = firstchild.style.width
        const valueCurrent = valueShow.substr(0,valueShow.length - 1) === '' ? 0 : valueShow.substr(0,valueShow.length - 1)
        if (valueCurrent < valueUpTo) {
    
            var newvalue = +valueCurrent + .5
            firstchild.style.width = `${newvalue}%`
            setTimeout(UpdatePercent, 1)
    
        }
    }

    setTimeout(UpdatePercent, 3000)
    
})

// counts 
counters.forEach( (counter) => {

    const target = +counter.getAttribute('data-target')
    const UpdateCount = () => {

        const count = format(counter.innerText)
        const inc = target / speed
        if(target > count) {

            var number = Math.round(count + inc)
            counter.innerText = number.toLocaleString()
            setTimeout(UpdateCount, 1)

        } 
    }

    const format = (string) => {
        
        return +string.replaceAll(",","")

    }

    UpdateCount()
    
});


window.addEventListener('resize', function() {

})

// When you click task-bar 
bar.addEventListener('click', function(e) {

    var scroll = window.scrollY || document.documentElement.scrollTop
    isClick = !isClick

    if(scroll < 70) {
        
        headerEle.style.background = isClick ? 'rgba(0, 0, 0, 0.7)' : 'transparent'
    
    } else {

        headerEle.style.background = isClick ? 'white' : 'null'

    }

    if(isClick) {

        mainHeader.style.height = '420px'
        bar.innerHTML = '<i class="fas fa-times"></i>';
    
    } else {

        mainHeader.style.height = '80px'
        bar.innerHTML = '<i class="fas fa-bars"></i>';
    
    }
    
})


// show menu level 2 
btnPage.addEventListener('click', function(e) {

    isShow = !isShow
    if(isShow) {

        elePage.style.color = '#f35b04'
        elePage.style.display = 'block'

    }
    else {

        elePage.style.color = 'black'
        elePage.style.display = 'none'

    }

})

// when webpage on scroll top 
document.onscroll = (() => {

    var scroll = window.scrollY || document.documentElement.scrollTop

    if(scroll < 70) {

        headerEle.classList.remove('bg-header')
        backEle.css('display','none')
        headerEle.style.background = isClick ? 'rgba(0, 0, 0, 0.7)' : ''


    }else {
        
        headerEle.style.background = isClick ? 'white' : ''
        backEle.css('display','flex')
        headerEle.classList.add('bg-header')
        
    }
})


