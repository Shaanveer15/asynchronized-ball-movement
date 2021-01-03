class Game{
consturctor(){}
getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on ("value", function(data){
        gameState=data.val();
    })
}
update(state){
    database.ref('/').update({gameState:state})
}

async Start(){
if(gameState===0){
player=new Player();
var PlayerCountRef=await database.ref('playerCount').once("value")
if(PlayerCountRef.exists()){
    playerCount=PlayerCountRef.val();
    player.getCount(); 
}

form=new Form();
form.display();
}

}
Play(){
form.hide();
textSize(13)
text("gameStart", 150,100)
Player.getPlayerInfo();
if(allPlayers!==undefined){
var displayposition=130
for(var plr in allPlayers){
if(plr==="player"+player.index)
fill("red")
else fill("black")
displayposition+=20
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayposition)
}
} 
if(keyIsDown(UP_ARROW)&&Player.index!==null){
    player.distance+=50
    player.update();
}
}
}

