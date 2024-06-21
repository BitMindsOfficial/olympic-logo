canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function drawRect(x, y, width, height, color, lineWidth) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.rect(x, y, width, height);
  ctx.stroke();
}

function drawCircle(x, y, radius, color, lineWidth) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

drawRect(180, 200, 430, 200, "grey", 4);

drawCircle(295, 280, 40, "blue", 5);
drawCircle(395, 280, 40, "black", 5);
drawCircle(495, 280, 40, "red", 5);
drawCircle(345, 320, 40, "yellow", 5);
drawCircle(445, 320, 40, "green", 5);