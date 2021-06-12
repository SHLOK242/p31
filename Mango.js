class Mango{

    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body)
    }

    display(){

    imageMode (CENTER)
    image (this.image,this.body.position.x,this.body.position.y,50,50)
    }
}