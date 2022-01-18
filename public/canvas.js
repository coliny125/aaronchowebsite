function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {


  var time2 = new Date();
  //ctx.translate(time2.getSeconds(), 0);
  // Draw triangle
  ctx.save();
  ctx.beginPath();


  ctx.stroke();
  ctx.restore();

  ctx.save();
  var time = new Date();
  ctx.rotate(time.getSeconds() + time.getMilliseconds() / 1000);
  ctx.translate(-5*time.getSeconds(), 0);
  ctx.beginPath();
  ctx.moveTo(160, -120);
  ctx.lineTo(-190, 230);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  var time = new Date();
  ctx.translate(5*time.getSeconds(), 0);
  ctx.beginPath();
  ctx.arc(160, 55, 80, 0, Math.PI * 2, false);
  ctx.rect(-190,-120,350,350);
  ctx.stroke();
  ctx.restore();
  //ctx.beginPath();
  //ctx.moveTo(-190, -120);
  //ctx.stroke();



}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();





  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
