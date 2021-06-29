//burger menu
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    menuNav.classList.add('slide-in-top');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    menuNav.classList.remove('slide-in-top');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

//end burger menu



//scrollTop button
//Get the button:
mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add('showScroll');
  } else {
    mybutton.classList.remove('showScroll');
  }
};

//scroll on top with smoothy effect
$('#scrollTop').click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});


//social icons animations in footer (animista rotation)
let social = document.getElementsByClassName("fab");

for (var i = 0; i < social.length; i++) {
  social[i].addEventListener('mouseover', function () {
    this.classList.add("rotate-center");

  });
  social[i].addEventListener('mouseout', function () {
    this.classList.remove("rotate-center");

  });
}



//tab accordion in privacy.html
function openTab(evt, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
}


//in privacy.html
//onclik show a different svg on the left of the vertical tabs
function showSvgLeft(section) {
  //declare the three image
  let img1 = document.getElementById('priv');
  let img2 = document.getElementById('coo');
  let img3 = document.getElementById('term');

  if (section === 'terms') {
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
  } else if (section === 'cookie') {
    img1.style.display = 'none';
    img2.style.display = 'block';
    img3.style.display = 'none';
  } else if (section === 'privacy') {
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
  }
}




