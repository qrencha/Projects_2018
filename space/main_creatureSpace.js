let speed;
let myCreature;

function setup() {
	createCanvas(400,400);
	myCreature = new Creature();
	speed = 5;
}

function draw() {
	background(200);
	myCreature.display(1);
	myCreature.move(speed);
}

class Creature{
	constructor(){
		rectMode(CENTER);
		this.X = random(20,width-20);
		this.Y = random(20,height-20);
		this.spd = 1;
	}
	
	display(sz){
		// Landing gear of spaceship
		stroke('darkblue');
		strokeWeight(20*sz);
	
		// left leg
		line(this.X-70*sz,this.Y+60*sz,this.X-90*sz,this.Y+90*sz);
		// right leg
		line(this.X+70*sz,this.Y+60*sz,this.X+90*sz,this.Y+90*sz);
		
		// back of glass
		noStroke();
		fill(255,100);
		ellipse(this.X,this.Y-50*sz,160*sz,180*sz);
	
		// Spaceship base
		noStroke();
		fill('blue');
		ellipse(this.X,this.Y+30*sz,220*sz,110*sz);
		
		// Front LEDs
		fill(random(0,230),random(0,230),0);
		ellipse(this.X+50*sz,this.Y+60*sz,10*sz);
		ellipse(this.X-50*sz,this.Y+60*sz,10*sz);
		ellipse(this.X+25*sz,this.Y+66*sz,10*sz);
		ellipse(this.X-25*sz,this.Y+66*sz,10*sz);
		ellipse(this.X,this.Y+70*sz,10*sz);
		
		// Creature Body color
		fill('aqua');
		noStroke();
		strokeWeight(1);
		
		//Top-body
		arc(this.X,this.Y-60*sz,80*sz,80*sz,PI,TWO_PI);
		
		//Mid-body
		rect(this.X,this.Y-30*sz,80*sz,62*sz);
		
		//Bottom-body
		arc(this.X,this.Y,80*sz,60*sz,0,PI);
		
		// Eye
		fill(255);
		ellipse(this.X,this.Y-50*sz,40*sz,40*sz);
		fill(0);
		ellipse(this.X,this.Y-50*sz,20*sz,20*sz);
		
		// Mouth
		stroke(0);
		line(this.X,this.Y,this.X-10*sz,this.Y-10*sz);
		line(this.X,this.Y,this.X+10*sz,this.Y-10*sz);
		
		// Spaceship Glass 
		noStroke();
		fill(254,110);
		ellipse(this.X,this.Y-50*sz,160*sz,180*sz);
	}
	
	move(spd){
		this.X = this.X + spd;
		// this.Y = this.Y + spd;
		console.log('X is ',spd)
		if (this.X < 0 || this.X > width){
			speed = speed * -1;
		}
	}
}