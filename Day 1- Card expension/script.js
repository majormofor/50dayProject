// create a constant and assign all the class of panel to it
const panels = document.querySelectorAll(".panel");

// use the constant panels to create an event listener that adds active to a class

panels.forEach((panel) => {
  // create an event listener that listens to a click on the mouse
  panel.addEventListener("click", () => {
    // first remove the all other active listener
    removeActiveClasses();
    // add the active class to the clicked panel
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
