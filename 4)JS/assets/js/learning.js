const formEl = document.querySelector('form')
const divEl = document.querySelector('form div')
const pEl = document.querySelector('form p ')

formEl.addEventListener('click',(e)=>{
    alert('Form')
})

divEl.addEventListener('click',(e)=>{
    alert('div')
    e.stopPropagation()
    
})

pEl.addEventListener('click',(e)=>{
    alert('para')
})