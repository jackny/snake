 //小蛇
  (function(){
	  var elements=[];//存放小蛇的每个身体部分 
	  function Snake(width,height,direction){
		  
		  this.width=width||20;
		  this.height=height||20;
		  //蛇的身体
		  this.body=[
					 {x:3,y:2,color:"red"},//头
					 {x:2,y:2,color:"orange"},//身体
					 {x:1,y:2,color:"orange"}//身体
					 ];
		  //方向
		  this.direction=direction||"right";
	  }
	  //为原型添加初始化方法,画蛇
	  Snake.prototype.init=function(map)
	  {
		  //先删除原来的小蛇
		  remove();
		  //遍历创建div
		  for(var i=0;i<this.body.length;i++){
			  var obj=this.body[i];
			  var div=document.createElement("div");
			  //把div追加到map
			  map.appendChild(div);
			  //设置div样式
			  div.style.position="absolute";
			  div.style.width=this.width+"px";
			  div.style.height=this.height+"px";
			  //横纵坐标
			  div.style.left=obj.x*this.width+"px";
			  div.style.top=obj.y*this.height+"px";
			  //背景颜色
			  div.style.backgroundColor=obj.color;
			  //方向
				
			  //把div加入到elements中
			  elements.push(div);
		  }
	  }
	  //小蛇动
	  Snake.prototype.move=function(food,map){
		  var i=this.body.length-1;
		  //改变蛇身
		  for(;i>0;i--){
			  this.body[i].x=this.body[i-1].x;
			  this.body[i].y=this.body[i-1].y;
		  }
		  //改变蛇头
		  //判断方向
		  switch(this.direction){
			  case "right":this.body[0].x+=1;break;
			  case "left":this.body[0].x-=1;break;
			  case "top":this.body[0].y-=1;break;
			  case "bottom":this.body[0].y+=1;break;
		  }

		  //判断有没有吃到食物
		  //蛇头的坐标
		  var headX=this.body[0].x*this.width;
		  var headY=this.body[0].y*this.height;
		  //食物的坐标
		  var foodX=food.x;
		  var foodY=food.y;
		  //判断头的坐标和食物的坐标是否相同
		  if(headX==foodX && headY==foodY)
		  {
			  //获取小蛇的尾巴
			  var last=this.body[this.body.length-1];
			  //把最后的蛇尾复制一份，重新加入到小蛇的body
			  this.body.push({
				  x:last.x,
				  y:last.y,
				  color:last.color
			  });
			  //删除食物，重新出现食物
			  food.init(map);
		  }

	  }
	  //删除蛇的函数
	  function remove(){
		  //获取数组
		  var i=elements.length-1;
		  for(;i>=0;i--){
			  //找到父级元素，删除子元素
			  var ele=elements[i];
			  ele.parentNode.removeChild(ele);
			  elements.splice(i,1);
		  }
	  }
	  //把snake暴露给window
	  window.Snake=Snake;
  }());