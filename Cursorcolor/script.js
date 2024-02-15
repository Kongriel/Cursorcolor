const body = document.getElementById("body");

document.addEventListener("mousemove", (e) => {
  const xPercent = (e.clientX / window.innerWidth) * 100;

  // Map xPercent to a range of lightness values (0 to 100)
  const lightness = xPercent;

  // Calculate hue based on the y position (vertical position)
  const yPercent = (e.clientY / window.innerHeight) * 100;
  const hue = (yPercent / 100) * 360; // Map yPercent to a range of hues (0 to 360)

  // baggrundsfarve
  body.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
});
