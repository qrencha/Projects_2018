class Creature{
	constructor(_x, _y, _sz,_spd){
		rectMode(CENTER);
		this.X = _x;
		this.Y = _y;
		this.sz = _sz;
		this.spd = _spd;
	}
	
	display(){
		// Landing gear of spaceship
		stroke('darkblue');
		strokeWeight(20*this.sz);
	
		// left leg
		line(this.X-70*this.sz,this.Y+60*this.sz,this.X-90*this.sz,this.Y+90*this.sz);
		// right leg
		line(this.X+70*this.sz,this.Y+60*this.sz,this.X+90*this.sz,this.Y+90*this.sz);
		
		// back of glass
		noStroke();
		fill(255,100);
		ellipse(this.X,this.Y-50*this.sz,160*this.sz,180*this.sz);
	
		// Spaceship base
		noStroke();
		fill('blue');
		ellipse(this.X,this.Y+30*this.sz,220*this.sz,110*this.sz);
		
		// Front LEDs
		fill(random(0,230),random(0,230),0);
		ellipse(this.X+50*this.sz,this.Y+60*this.sz,10*this.sz);
		ellipse(this.X-50*this.sz,this.Y+60*this.sz,10*this.sz);
		ellipse(this.X+25*this.sz,this.Y+66*this.sz,10*this.sz);
		ellipse(this.X-25*this.sz,this.Y+66*this.sz,10*this.sz);
		ellipse(this.X,this.Y+70*this.sz,10*this.sz);
		
		// Creature Body color
		fill('aqua');
		noStroke();
		strokeWeight(1);
		
		//Top-body
		arc(this.X,this.Y-60*this.sz,80*this.sz,80*this.sz,PI,TWO_PI);
		
		//Mid-body
		rect(this.X,this.Y-30*this.sz,80*this.sz,62*this.sz);
		
		//Bottom-body
		arc(this.X,this.Y,80*this.sz,60*this.sz,0,PI);
		
		// Eye
		fill(255);
		ellipse(this.X,this.Y-50*this.sz,40*this.sz,40*this.sz);
		fill(0);
		ellipse(this.X,this.Y-50*this.sz,20*this.sz,20*this.sz);
		
		// Mouth
		stroke(0);
		line(this.X,this.Y,this.X-10*this.sz,this.Y-10*this.sz);
		line(this.X,this.Y,this.X+10*this.sz,this.Y-10*this.sz);
		
		// Spaceship Glass 
		noStroke();
		fill(254,110);
		ellipse(this.X,this.Y-50*this.sz,160*this.sz,180*this.sz);
	}
	
	move(){
		this.X = this.X + this.spd;
		if (this.X < 0 || this.X > width){
			this.spd = this.spd * -1;
		}
	}
}