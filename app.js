let form_w = document.querySelector('.form__w')
let form_inp = document.querySelector('.form__w input')
let ulList = document.querySelector('#ulList')
let DATA = JSON.parse(localStorage.getItem('data')) || []
function liCreated(data) {
    data.forEach(item => {
        let li = document.createElement('li')
        li.classList.add('del')
        li.textContent = item.title
        let del = document.createElement('i')
        del.classList.add('fa-solid', 'fa-trash')
        li.appendChild(del)
        ulList.appendChild(li)
        del.addEventListener('click',()=>{
            li.style.display = 'none'
            deleteTask(item.id)
        })
    })
}
liCreated(DATA)
form_w.addEventListener('submit', (e) => {
    e.preventDefault()
    let inpVAL = form_inp.value;
    if (!inpVAL) return
    let newToDo = {
        id: new Date().getTime(),
        title: inpVAL
    }
    DATA.push(newToDo)
    liCreated([newToDo])
    localStorage.setItem('data', JSON.stringify(DATA))
    form_inp.value = ''
})
function deleteTask(id) {
    DATA = DATA.filter(item => item.id !== id)
    localStorage.setItem('data', JSON.stringify(DATA));
}

