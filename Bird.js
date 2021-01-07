class Bird extends BaseClass {
  constructor(x,y,a){
if(a===1){
    super(x,y,50,50);}
    if(a===2){
      super(x,y,100,100);} 
    
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
