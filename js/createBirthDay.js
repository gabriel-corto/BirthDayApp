
const cards = document.querySelector("main#cards")
function createBrithDay(name, category, date){
  return(
  `<div class="card">
      <div class="card-title">
        <p id="name">${name}</p>
        <p>${category}</p>
      </div>
      <div class="card-date">
        <div>
          <p>Data de Aniversário:</p>
          <h3>${date}</h3>
        </div>
        <div>
          <div class="LoveThis">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="DeleteThis">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>`
  )
}

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  
  const getName = document.querySelector("input#name")
  const getCategory = document.querySelector("input#category")
  const getDate = document.querySelector("input#date")

  cards.innerHTML += createBrithDay(
    `${getName.value}`,`${getCategory.value}`,`${getDate.value}`
  )

  //Love BirthDay Event
  const LoveButtons = document.querySelectorAll(".LoveThis")
  
  LoveButtons.forEach((love) => {
    love.addEventListener("click", ()=> {
      love.classList.toggle("active")
      
      const myLovesBirthDays = document.querySelectorAll(".active")
      
      if(myLovesBirthDays.length > 0){
        if(myLovesBirthDays.length > 9){
          document.title = `(+9) Aniversariantes Favoritos`
        }else {
          document.title = `(${myLovesBirthDays.length}) Aniversariantes Favoritos`
        }
      }else {
        document.title = "Calendário de Aniversariantes "
      }
    })
    
  })

  //Delete BirthDay Event
  const DeleteButtons = document.querySelectorAll(".DeleteThis")
  
  DeleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", ()=> {

      const dialog = document.querySelector("#dialog")
      dialog.classList.add("show")

      dialog.addEventListener("click", (event)=> {
        if(event.target.classList.contains("action-yes")){
          
          deleteButton.parentElement.parentElement
            .parentElement.remove()
            dialog.classList.remove("show")
            
        }
        else {
          dialog.classList.remove("show")
        }
      })

    })
  })


})