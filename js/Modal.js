
const openModal = document.querySelector(".openModal")
const closeModal = document.querySelector(".closeModal")

const card = document.querySelector("#cards")
const header = document.querySelector("header")

openModal.addEventListener("click", () => {
  const Modal = document.querySelector("#Modal")
  Modal.classList.add("show")

  card.style.opacity = ".4"
  header.style.opacity = ".4"
  
})

closeModal.addEventListener("click", () => {
  const Modal = document.querySelector("#Modal")
  Modal.classList.remove("show")

  card.style.opacity = "1"
  header.style.opacity = "1"
})


