const menu = document.getElementById('ham')
const innerNav = document.getElementById('nav')



const cancel =
  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>';

const stack =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>';
let toggle = false
const dropdown = () => {

}
menu.addEventListener('click', () => {
  innerNav.style.display = toggle ? "none" : "block";
  menu.innerHTML = toggle ? stack : cancel;
    if (toggle == false) {
      toggle = true;
    } else if (toggle ==true) {
      toggle = false;
    }
})


  if (menu.style.display == 'none') {
    toggle = false
  }