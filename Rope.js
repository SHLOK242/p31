class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 4
        }
        this.pointB=pointB
        this.Rope= Constraint.create(options);
        World.add(world, this.Rope);
    }

      display(){
            var bodyA = this.Rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(this.Rope.bodyA.position.x,this.Rope.bodyA.position.y, this.Rope.pointB.x, this.Rope.pointB.y);
        
    }
    
}
