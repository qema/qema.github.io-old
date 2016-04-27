var entities = [];
var mouseX = 0, mouseY = 0;

// user controlled parameters
var AF = 1.0/3, CF = 1.0/3, RF = 1.0/3, FF = 1.0;
var turnSpeed = 0.03, flockSize = 100;
var followRed = true, fearRed = false;

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

function angle(l, r) {
  var d = (l - r).mod(2*Math.PI);
  if (d > Math.PI) d -= 2*Math.PI;
  return d;
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
}

function closestEntities(x, y) {
  var e = entities.slice(0);  // copy array
  e.sort(function(b, a) {return dist(x, y, b.x, b.y) - dist(x, y, a.x, a.y)});
  e = e.slice(1);  // don't include self
  return e;
}

function Entity(x, y) {
  this.t = 0;  // angle
  this.x = x;
  this.y = y;

  this.maxVel = Math.random() * 10 + 3;

  this.ar = 0; // radial accel
  this.at = Math.random() * Math.PI * 2; // angle accel
  this.vr = 0;
  this.vt = 0;

  this.accel = function() {
    var closest = closestEntities(this.x, this.y).slice(0, flockSize);
    if (followRed) {
      closest.push(entities[0]);
    }
    
    // alignment
    var avgHeading = 0;
    for (var i = 0; i < closest.length; i++) {
      avgHeading += closest[i].t;
    }
    avgHeading /= closest.length;
    var alignmentDR = 10;
    var alignmentDT = angle(avgHeading, this.t);

    // cohesion
    var cx = 0, cy = 0;
    for (var i = 0; i < closest.length; i++) {
      cx += closest[i].x;
      cy += closest[i].y;
    }
    cx /= closest.length;
    cy /= closest.length;
    var cohesionDR = dist(this.x, this.y, cx, cy);
    var cohesionDT = angle(Math.atan2(cy - this.y, cx - this.x), this.t);

    // repulsion
    var repulsionDR = dist(this.x, this.y, closest[0].x, closest[0].y) < 20 ? 10 : 0;
    var repulsionDT = -angle(Math.atan2(closest[0].y - this.y, closest[0].x - this.x), this.t);
    //this.ar = Math.log(closestDist / 10 + 0.000001) * 1;
    //console.log(closestDist / 100 + 0.000001);

    // fear (repulsion of mouse-controlled bird)
    var fearDR = 100 * dist(this.x, this.y, entities[0].x, entities[0].y) < 40 ? 10 : 0;
    var fearDT = -angle(Math.atan2(entities[0].y - this.y, entities[0].x - this.x), this.t);

    this.at = AF*alignmentDT + CF*cohesionDT +
      RF*repulsionDT + RF*fearDT;
    this.ar = AF*alignmentDR + CF*cohesionDR +
      RF*repulsionDR + RF*fearDT;
    //if (this.ar < 0) {
    //  this.ar *= 100;
    //  this.at *= -1;
    //}
  }

  this.update = function() {
    this.maxAngVel = turnSpeed;
    
    this.accel();
    
    this.vr += this.ar;
    this.vt += this.at;
    if (this.vr < -this.maxVel) this.vr = -this.maxVel;
    if (this.vt < -this.maxAngVel) this.vt = -this.maxAngVel;
    if (this.vr > this.maxVel) this.vr = this.maxVel;
    if (this.vt > this.maxAngVel) this.vt = this.maxAngVel;
    this.t += this.vt;
    this.x += this.vr * Math.cos(this.t);
    this.y += this.vr * Math.sin(this.t);

    var canvas = document.getElementById("swarm-canvas");
    if (this.x >= canvas.width) this.x = 0;
    if (this.y >= canvas.height) this.y = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y < 0) this.y = canvas.height;
  }
}

function mouseMove(e) {
  mouseX = e.offsetX * 2;
  mouseY = e.offsetY * 2;
}

function redraw() {
  var canvas = document.getElementById("swarm-canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    ctx.beginPath();
    ctx.arc(entity.x, entity.y, 4, 0, 2 * Math.PI, false);
    var color = "hsl(" + (Math.floor(entity.t.mod(Math.PI*2)*180/Math.PI)) + ",70%,50%)";
    ctx.fillStyle = (i === 0) ? "red" : color;
    ctx.lineWidth = 0;
    //ctx.strokeStyle = "#003300";
    ctx.fill();
    //ctx.stroke();
  }
}

function updateUI() {
  // sliders
  var c = Number(document.getElementById("cohesion").value);
  var a = Number(document.getElementById("adhesion").value);
  var r = Number(document.getElementById("repulsion").value);
  CF = c / 100.0;
  AF = a / 100.0;
  RF = r / 100.0;

  turnSpeed = Number(document.getElementById("turn-speed").value) / 1000;
  flockSize = Math.max(3, Math.floor(Number(document.getElementById("flock-size").value) / 100.0 * entities.length))

  // checkboxes
  followRed = document.getElementById("follow-red").checked;
  fearRed = document.getElementById("fear-red").checked;
}

function update() {
  updateUI();
  
  for (var i = 0; i < entities.length; i++) {
    entities[i].update();
  }
  
  redraw();
}

function keyPress(e) {
  if (e.keyCode === 32) {   // " "
    var hud = document.getElementById("hud");
    hud.style.visibility =
      (hud.style.visibility == "hidden") ? "visible" : "hidden";
  }
}

function init() {
  var canvas = document.getElementById("swarm-canvas");
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;
  canvas.style.width = window.innerWidth;
  canvas.style.height = window.innerHeight;

  for (var i = 0; i < 225; i++)
    entities.push(new Entity(Math.random() * canvas.width, Math.random() * canvas.height));

  entities[0].accel = function() {
    this.ar = 0.1;
    this.at = angle(Math.atan2(mouseY - this.y, mouseX - this.x), this.t);
  }

  canvas.addEventListener("mousemove", mouseMove);
  addEventListener("keypress", keyPress);
  setInterval(update, 1000 / 60.0);
}
