class Paper{

	constructor (x, y){

	 var options={
		 'density' : 1.5,
		 'friction' : 1.0,
		 'restitution' : 0.8,
		 'isStatic' : false
	 }
		this.x = x;
		this.y = y;
		this.Width = 60;
		this.Height = 60;
		
		
		this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(this.x, this.y, this.Width, this.Height , options)
		World.add(world, this.body)
		

	}
	display()
	{
			var pos_y = this.body.position.y;
			var pos_x = this.body.position.x
			var angle = this.body.angle;

			push()
			translate(pos_x , pos_y);
			rotate(angle)
		    imageMode(CENTER)
			
			image(this.image, 0, 0, this.Width, this.Height)
			pop()
			
	}

}
