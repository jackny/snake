 //自调用游戏对象
  (function(){
	  var that=null;
	  //游戏的构造函数
	  function Game(map){
		  this.food=new Food();
		  this.snake=new Snake();
		  this.map=map;
		  that=this;
	  }
	  Game.prototype.init=function(){
		  this.food.init(this.map);
		  this.snake.init(this.map);
		  //调用自动移动小蛇的方法
		  this.runSnake(this.food,this.map);
		  this.bindKey();//改变小蛇移动的方向
	  };
	  //添加原型方法，设置小蛇自动移动
	  Game.prototype.runSnake=function(food,map){
		var timeId=setInterval(function(){ 		
			this.snake.move(food,map);
			this.snake.init(map);
			//横坐标的最大值
			var maxX=map.offsetWidth/this.snake.width;
			//纵坐标的最大值
			var maxY=map.offsetHeight/this.snake.height;
            //小蛇头的坐标
			var headX=this.snake.body[0].x;
			var headY=this.snake.body[0].y;
			if(headX>=maxX || headX<0)
			{   
				//撞墙
				clearInterval(timeId);
				alert("Game over!");
			}
			if(headY>=maxY || headY<0)
			{   
				//撞墙
				clearInterval(timeId);
				alert("Game over!");
			}
			}.bind(that),150);
	  };
	  //获取用户按键，设置小蛇移动的方向
	  Game.prototype.bindKey=function(){
		  document.addEventListener("keydown",function(e){
			  //获取按键值
			  switch(e.keyCode){
				  case 37:this.snake.direction="left";break;
				  case 38:this.snake.direction="top";break;
				  case 39:this.snake.direction="right";break;
				  case 40:this.snake.direction="bottom";break;
			  }
		  }.bind(that),false);
	  };
	  //var gm=new Game(document.querySelector(".map"));
	  //gm.init();
	  window.Game=Game;
  }());