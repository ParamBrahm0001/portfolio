let ullist = document.querySelector('.ullist').querySelectorAll('a')

ullist.forEach((element)=>{
    element.addEventListener('click',function(){
        ullist.forEach((e)=>e.classList.remove('active'))
        this.classList.add('active')
    })
})

let resume = document.querySelector('.resume')
let image = document.querySelector('.resumeImg')
let resumeOpen = document.querySelector('.resumeCloseHide')

let resumeClose = document.querySelector('.resumeClose')


resume.addEventListener('click', function(){
    image.classList.remove('resumeImgRemove')
    resumeOpen.classList.remove('resumeCloseHide')
})

resumeClose.addEventListener('click', function(){
    image.classList.add('resumeImgRemove')
    resumeOpen.classList.add('resumeCloseHide')
})