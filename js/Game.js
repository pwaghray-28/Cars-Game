class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(400,200)
    car4 = createSprite(500,200)
    cars = [car1,car2,car3,car4]
  }
  play(){ console.log(gameState)
     form.hide();
    player.getPlayers();
    if(allplayers !== undefined){
      var x = 0,y,index = 0
      for(var i in allplayers){
        //textSize(70)
        //text(allplayers[i].name+":"+allplayers[i].distance,250,position)
        //position = position+20
        index = index+1
       x= x+130
       y = displayHeight-allplayers[i].distance
       cars[index - 1].x = x
       cars[index - 1].y = y
       if(index === player.index){
         cars [index-1].shapeColor = "blue"
         camera.position.x =  displayWidth/2
         camera.position.y = cars[index-1].y 
       }
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
      player.distance = player.distance+20
      player.update()
    }
    drawSprites();
  }
}
