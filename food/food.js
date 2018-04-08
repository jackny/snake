 //食物
  (function(){
	  var elements=[];//保存每个小方块
	  //食物，宽高，颜色，位置
	 function Food(x,y,width,height,color){
		//横纵坐标
		this.x=x||0;
		this.y=y||0;
		//宽高
		this.width=width||20;
		this.height=height||20;
		//背景颜色
		this.color=color||"green";
	  }
	  //把局部Food暴露给window对象
	 //为原型添加初始化方法
	 Food.prototype.init=function(map){
		//先删除小食物
		remove();
		//创建div
		var div=document.createElement("div");
		//把div加到map
		map.appendChild(div);
		//设置div样式
		div.style.position="absolute";//脱离文档流
		div.style.width=this.width+"px";
		div.style.height=this.height+"px";
		div.style.backgroundColor=this.color;
		
		//随机横纵坐标
		this.x=parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
		this.y=parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
		div.style.left=this.x+"px";
		div.style.top=this.y+"px";
		
		//把div加到elements中
		elements.push(div); 
	 };

	 //删除食物
	 function remove(){
		 for(var i=0;i<elements.length;i++)
		 {
			 var ele=elements[i];
			 //找到父元素删除这个子元素
			 ele.parentNode.removeChild(ele);
			 //在elements中删除这个子元素
			 elements.splice(i,1);
		 }
	 }
	 window.Food=Food;
  }());