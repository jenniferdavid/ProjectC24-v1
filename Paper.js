class Paper{
    constructor(x,y,r){
        var options = {
            'density': 1.2,
            'friction' : 0.5,
            isStatic: false,
            'restitution': 0.3
        }

        this.radius = r;
        this.body = Bodies.circle(x,y,(this.radius)/2,options)
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        strokeWeight(3);
        fill('red')
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}