class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png")
    this.path= [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
if(this.body.position.x>220&& this.body.velocity.x>8){
  var position = [this.body.position.x,this.body.position.y];
   this.path.push(position);
}
    
// this.path = [[x1,y1],[x2,y2],[x3,y3]]

for(var i=0;i<this.path.length;i+=1){
image(this.smoke,this.path[i][0],this.path[i][1])
  
}






  }
}
