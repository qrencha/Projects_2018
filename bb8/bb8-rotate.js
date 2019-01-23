let angle = 0.0;

function setup() {
	createCanvas(400,400);
	// rectMode(CENTER);
}

function draw() {

	background('lightblue');
	noStroke();
	fill('khaki');
	rect(0,200,400,200);
	fill('darkkhaki');
	ellipse(300,350,200,20);

	push();
	translate(200,200+50);
	rotate(angle);
	
	// body
	stroke('black');
	strokeWeight(8);
	fill('white');
	ellipse(0,0,200);

	// Body
	strokeWeight(5);
	triangle(0+60,0+40,0-95,0+20,0,0-85);

	// top donut
	stroke('black');
	fill('orange');
	arc(0,0-85,80,80,0-0.1,PI+0.1,OPEN);
	fill('white');
	arc(0,0-85,40,40,0-0.3,PI+0.3,OPEN);

	// bottom donut
	stroke('black');
	fill('orange');
	arc(0+59,0+37,80,80,HALF_PI,0-0.5,OPEN);
	fill('white');
	ellipse(0+62,0+38,40);
	
	// left yellow
	fill('orange');
	ellipse(0-80,0,34,100);
	
	angle += 0.1;
	pop();

	// shade - should not rotate
	noFill();
	strokeWeight(10);
	stroke(70,70,70,100);
	arc(200,200+50,180,180,PI+HALF_PI,HALF_PI);

	
	// Head
	fill('white');
	stroke('black');
	strokeWeight(8);
	arc(200,200-35,140,140,PI,0);
	stroke('gray');
	// strokeWeight(8);
	line(200-63,200-35,200+63,200-35);

	// shade
	noFill();
	strokeWeight(10);
	stroke(70,70,70,100);
	arc(200,200-35,126,126,PI+HALF_PI,0);
	
	// eye
	stroke('black');
	strokeWeight('5');
	fill('gray');
	ellipse(200,200-65,40);
	
	// small circle next to eye
	ellipse(200+40,200-50,5);
	// reflection in eye
	noStroke();
	fill('white');
	ellipse(200-10,200-60,7);
	
}