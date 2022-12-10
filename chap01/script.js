window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.8;
  // canvas settings
  ctx.fillStyle = "green";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.shadowColor = "rgba(0,0,0, 0.7)";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 10;

  //effect settings
  let size = 80;
  let sides = 5;
  let scale = 0.5;
  let maxLevel = 3;
  let spread = 0.5;
  let branches = 2;
  let color = `hsl( ${Math.random() * 360}, 100%, 50%)`; // hue, saturation, lighness
  ctx.strokeStyle = color;
  // ctx.fillRect(50, 50, 100, 100);

  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.restore(); // restore -> only affect green box

  function drawBranch(level) {
    if (level > maxLevel) return;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size, 0);
    ctx.stroke();

    for (let i = 0; i < branches; i++) {
      ctx.save();
      ctx.translate(size - (size / branches) * i, 0);
      ctx.rotate(spread);
      ctx.scale(scale, scale);
      drawBranch(level + 1);
      ctx.restore();

      ctx.save();
      ctx.translate(size - (size / branches) * i, 0);
      ctx.rotate(-spread);
      ctx.scale(scale, scale);
      drawBranch(level + 1);
      ctx.restore();
    }
  }

  // ctx.translate(canvas.width / 2, canvas.height / 2);
  // ctx.scale(1, 1);
  // ctx.rotate(0);
  // drawBranch(0);

  function drawFractal() {
    // ctx.save(); // save
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, 1);
    ctx.rotate(0);

    for (let i = 0; i < sides; i++) {
      // ctx.save();
      ctx.rotate((Math.PI * 2) / sides);
      drawBranch(0);
      // ctx.restore();
    }
  }

  drawFractal();
});
