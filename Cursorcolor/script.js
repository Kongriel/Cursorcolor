const body = document.getElementById("body");

document.addEventListener("mousemove", (e) => {
  const xPercent = (e.clientX / window.innerWidth) * 100;


  const lightness = xPercent;

  // y
  const yPercent = (e.clientY / window.innerHeight) * 100;
  const hue = (yPercent / 100) * 360; 
  
  // baggrundsfarve
  body.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
});
