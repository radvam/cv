const coll = document.getElementsByClassName("collapsible");
const arrayArrows = document.getElementsByClassName('collapsible-img');

const collapse = () => {
  for (let i = 0; i < coll.length; i += 1) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      arrayArrows[i].classList.toggle("active-button");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  }
}

collapse();
