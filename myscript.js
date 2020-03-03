const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme(); //initTheme fn for localStorage
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});


function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
    document.body.removeAttribute('data-theme');
}


function resetTheme() { //checks if toggle is switched or not to save choice in navigation
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkSwitch');
  }
}


//include wrappers and navbars (Note: Bootstrap already has navbar-dark and bg-dark classes for nav and dropdown css)
