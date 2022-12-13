
let icon = document.getElementById("dark-mode-toggle");
let darkMode = localStorage.getItem('darkMode');

icon.onclick = function() {
    if(document.body.classList.toggle("darkmode")) {
         icon.src = "assets/images/sun.png";
     } else {
         icon.src = "assets/images/moon.png";
     }
 }
 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

icon.onclick = function() {
   if(document.body.classList.toggle("darkmode")) {
        icon.src = "assets/Images/sun.png";
    } else {
        icon.src = "assets/Images/moon.png";
    }
}



