window.addEventListener("DOMContentLoaded", () => {
  console.log("hello")
  const menuToggle = document.querySelector(".menuToggle")

  function handleClickMenuToggle() {
    console.log("click")
    menuToggle.classList.toggle("active")
  }

  menuToggle.addEventListener("click", handleClickMenuToggle)
})

