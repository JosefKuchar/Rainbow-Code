"use strict";

var k = 3;

var Orbit = function(x, y, r, n, p) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.n = n;
    this.speed = (radians(pow(k, this.n - 1))) / resolution;
    this.parent = p;
    this.child = null;
    this.angle = -PI/2;
}

Orbit.prototype.addChild = function() {
    var newr = this.r / 3.0;
    var newx = this.x + this.r + newr;
    var newy = this.y;
    this.child = new Orbit(newx, newy, newr, this.n + 1, this);
    return this.child;
}

Orbit.prototype.update = function() {
    if (this.parent != null) {
        this.angle += this.speed;
        var rsum = this.r + this.parent.r;
        this.x = this.parent.x + rsum + cos(this.angle);
        this.y = this.parent.y + rsum + sin(this.angle);
        //console.log(this.parent.x, this.parent.y);
    }
}

Orbit.prototype.show = function() {
    stroke(255, 100);
    strokeWeight(1);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
}