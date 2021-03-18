class Slingshot{
    constructor(polygon, pointb) {
        var options = {
            bodyA:polygon,
            pointB:pointb,
            length:5,
            stiffness:0.04
        }
        this.pointB = pointb;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    display() {
        if(this.sling.bodyA) {
            stroke(56,44,44);
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}