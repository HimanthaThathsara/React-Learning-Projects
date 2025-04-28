document.addEventListener("mousemove", onMouseMove);
let cursor = document.getElementById("cursor");
const onMouseMove = (event) => {
  cursor.style.left = event.pageX + "px";
  cursor.style.top = event.pageY + "px";

  if (event.target.hasAttribute("cursor-type")) {
    let cursorSize = event.target.getAttribute("cursor-type");
    cursor.classList.add(cursorSize);
  } else {
    cursor.classList = "";
  }
};
