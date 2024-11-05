var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)  
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  anime({
    targets: '.ml1',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

let paragraphs = [...document.querySelectorAll('p')];

paragraphs.forEach(paragraph => {
  let htmlString = '';
  let pArray = paragraph.textContent.split('');
  pArray.forEach(char => {
    htmlString += `<span>${char}</span>`;
  });
  paragraph.innerHTML = htmlString;
});

const spans = document.querySelectorAll('p span');

function revealSpans() {
  spans.forEach((span) => {
    if (span.parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
      let { left, top } = span.getBoundingClientRect();
      top = top - (window.innerHeight * 1);
      let opacityValue = 1 - ((top * 0.07) + (left * 0.01));
      opacityValue = Math.max(0.1, Math.min(1, opacityValue));
      span.style.opacity = opacityValue.toFixed(3);
    }
  });
}
  window.addEventListener('scroll', revealSpans);
revealSpans();
