class Form{
constructor(){
 this.input=createInput("name")
 this.button=createButton('Play')
 this.greeting=createElement('h3')
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
display(){
    var title=createElement('h2')
    title.html('Car Racing Game')
    title.position(430,0);

  
    this.input.position(430,160)
    this.button.position(250,200)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1
        player.index=playerCount;
        player.update(0);
        player.updateCount(playerCount);
        
        this.greeting.html("hello  "+player.name)
        this.greeting.position(430,160)
       })
    }
}