import anime from '../node_modules/animejs/lib/anime.es.js';
var textWrapper = document.querySelector('.nameHeader');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// KAVEN MURALEITHARAN HEADER
anime.timeline({loop: false})
  .add({
    targets: '.nameHeader .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  })

//CS AND AIML HEADER
