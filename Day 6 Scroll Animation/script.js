const boxes = document.querySelectorAll('.box')

// To listen to event
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const scrollTrigger = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    // to get the postion of the top of the box
    const boxTopPosition = box.getBoundingClientRect().top;

    if (boxTopPosition < scrollTrigger) {
      box.classList.add("active");
    } else {
      box.classList.remove("active")
    }
  })
}
