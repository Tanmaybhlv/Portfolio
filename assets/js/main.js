/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title',{});
// sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

sr.reveal(".qualif__icon", { delay: 400 });
sr.reveal(".qualif__subtitle", { delay: 400 });
sr.reveal(".qualif__text", { delay: 400 });
/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 600 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
//sr.reveal('.work__img',{});
//acheivement section
//sr.reveal('.certificate__img',{});
/*SCROLL CONTACT*/
// sr.reveal(".contact__input", { interval: 10 });

var typed = new Typed(".typing", {
  strings: [
    "Data Engineer",
    "Data Analyst",
    "BI Developer",
    "An Aspiring Data Scientist"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var modeSwitcher = document.getElementById('mode-switcher');
function toggleMode(event) {
  event.preventDefault();
  // toggle between day and night mode
  var iElement = modeSwitcher.getElementsByTagName("i")[0];
  if (iElement.classList.contains("fa-sun")) {
    iElement.className = "fas fa-moon";
    var elementsToChange = document.querySelectorAll('.home, .homebg,.about, .skills, body');
    for (var i = 0; i < elementsToChange.length; i++) {
      elementsToChange[i].style.background = "white"; 
    }
    var elementsToChangeColor = document.querySelectorAll('.experience, .education, .achievements, .contact, .project');
    for (var i = 0; i < elementsToChangeColor.length; i++) {
      elementsToChangeColor[i].style.background = "white";
      elementsToChangeColor[i].style.color = "black";
    }
    var elementsTextcolorChange = document.querySelectorAll('.home__title1, .section-title,.home__title, .about__subtitle, .home__title-color2, .about__text, .heading_55px, .cta');
    for (var i = 0; i < elementsTextcolorChange.length; i++) {
      elementsTextcolorChange[i].style.color = "black";
    }
    var modeSwitcherChange = document.querySelectorAll('#mode-switcher, #mode-switcher i');
    for (var i = 0; i < modeSwitcherChange.length; i++) {
      modeSwitcherChange[i].style.backgroundColor = "black";
    }
    var backGroundDiv = document.querySelectorAll('.timeline .timeline-item-inner, .education__data');
    for (var i = 0; i < backGroundDiv.length; i++) {
      backGroundDiv[i].style.backgroundColor = "rgb(132, 132, 132)";
    }
    var textColor = document.querySelectorAll('.timeline .timeline-item-inner h3, .timeline .timeline-item-inner h4, .timeline .timeline-item-inner p');
    for (var i = 0; i < textColor.length; i++) {
      textColor[i].style.color = "black";
    }


  } else {
    iElement.className = "fas fa-sun";
    var elementsToChange = document.querySelectorAll('.home, .homebg, .about, .skills, body');
    for (var i = 0; i < elementsToChange.length; i++) {
      elementsToChange[i].style.background = "black"; /*background color is changing from here*/
    }
    var elementsToChangeColor = document.querySelectorAll('.experience, .education, .achievements, .contact, .project');
    for (var i = 0; i < elementsToChangeColor.length; i++) {
      elementsToChangeColor[i].style.background = "black"; /* middle background color is changing from here*/
      elementsToChangeColor[i].style.color = "white";
    }
    var elementsTextcolorChange = document.querySelectorAll('.home__title1, .section-title:not(.Certifications .section-title),.home__title, .about__subtitle, .home__title-color2, .about__text, .heading_55px, .cta');
    for (var i = 0; i < elementsTextcolorChange.length; i++) {
      elementsTextcolorChange[i].style.color = "white"; /* HEADING FONTS color is changing from here*/
    }
    var modeSwitcherChange = document.querySelectorAll('#mode-switcher, #mode-switcher i');
    for (var i = 0; i < modeSwitcherChange.length; i++) {
      modeSwitcherChange[i].style.backgroundColor = "black";
    }
    var backGroundDiv = document.querySelectorAll('.timeline .timeline-item-inner, .education__data');
    for (var i = 0; i < backGroundDiv.length; i++) {
      backGroundDiv[i].style.backgroundColor = "rgb(132, 132, 132)"; /* extra curricular pad color is changing from here*/
    }
    var textColor = document.querySelectorAll('.timeline .timeline-item-inner h3, .timeline .timeline-item-inner h4, .timeline .timeline-item-inner p');
    for (var i = 0; i < textColor.length; i++) {
      textColor[i].style.color = "white"; /* extra curricular fonts color is changing from here*/
    }
  }
}


var footerIcons = document.getElementsByClassName("footer__icon");
for (var i = 0; i < footerIcons.length; i++) {
  footerIcons[i].addEventListener("mouseover", myfun);
  footerIcons[i].addEventListener("mouseout", myfun2);
}

function myfun(event){
  event.target.style.color = "black"; /* bottom social media icon color is changing from here*/
}

function myfun2(event){
  event.target.style.color = "white"; /* bottom social media icon color is changing from here*/
}


// mail
(function() {
  emailjs.init('j6_KGairaidgNLD6g');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var data = {
          from_name: document.getElementById('name').value,
          from_email: document.getElementById('email').value,
          reply_to: document.getElementById('email').value,
          message: document.getElementById('message').value
      };

      emailjs.send('service_o6yd01s', 'template_mtb18xs', data)
          .then(function() {
              var message = document.getElementById("msg");
              message.innerHTML = "Your mail has been sent successfully!";
              message.style.display = "inline-block";
              console.log(message)
              setTimeout(function() {
              msg.style.display = "none";
              }, 2000);
              console.log('SUCCESS!');
          }, function(error) {
              console.log(error)
              var message = document.getElementById("msg");
              message.innerHTML = "Your mail was not sent successfully!";
              message.style.background = "rgb(132, 132, 132)";
              message.style.display = "inline-block";
              setTimeout(function() {
              msg.style.display = "none";
              }, 2000);
              console.log('FAILED...', error);
          });
  });
}