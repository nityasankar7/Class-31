class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
   if(this.body.velocity.x>10 && this.body.position.x>200){
    for(var i=0;i<this.trajectory.length;i++){
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
  }
}

//t=[]
//t=[[23,45]]= image(this.smokeImage,t[0][0],t[0][1])

//t=[[23.45],[30,55]]=image(this.smokeImage,t[1][0],t[1][1])
//t=[[23,45],[30,55],[35,60]]=image(this.smokeImage,t[2][0],t[2][1])
//for(var i=0;i<)