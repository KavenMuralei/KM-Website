//Preloader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitioned", () => {
        document.body.removeChild(loader)
    });
});

//Navbar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }

//My work scroll
function scroll_Left(){
  var left= document.querySelector(".scroll-images");
  left.scrollBy (265,0)
}

function scroll_Right(){
  var right = document.querySelector(".scroll-images");
  right.scrollBy(-265,0)
}

// function disableScroll() {
//   // Get the current page scroll position
//   scrollTop =
//       window.pageYOffset ||
//       document.documentElement.scrollTop;
//   scrollLeft =
//       window.pageXOffset ||
//       document.documentElement.scrollLeft,

//       // if any scroll is attempted,
//       // set this to the previous value
//       window.onscroll = function () {
//           window.scrollTo(scrollLeft, scrollTop);
//       };
// }

// function enableScroll() {
//   window.onscroll = function () { };
// }



//Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//MODAL 1
modalIndicator(modal)

//MODAL 2
modalIndicator(modal2)

//MODAL 3
modalIndicator(modal3)



function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
function modalIndicator(modal){
  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
}







