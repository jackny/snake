 //С��
  (function(){
	  var elements=[];//���С�ߵ�ÿ�����岿�� 
	  function Snake(width,height,direction){
		  
		  this.width=width||20;
		  this.height=height||20;
		  //�ߵ�����
		  this.body=[
					 {x:3,y:2,color:"red"},//ͷ
					 {x:2,y:2,color:"orange"},//����
					 {x:1,y:2,color:"orange"}//����
					 ];
		  //����
		  this.direction=direction||"right";
	  }
	  //Ϊԭ����ӳ�ʼ������,����
	  Snake.prototype.init=function(map)
	  {
		  //��ɾ��ԭ����С��
		  remove();
		  //��������div
		  for(var i=0;i<this.body.length;i++){
			  var obj=this.body[i];
			  var div=document.createElement("div");
			  //��div׷�ӵ�map
			  map.appendChild(div);
			  //����div��ʽ
			  div.style.position="absolute";
			  div.style.width=this.width+"px";
			  div.style.height=this.height+"px";
			  //��������
			  div.style.left=obj.x*this.width+"px";
			  div.style.top=obj.y*this.height+"px";
			  //������ɫ
			  div.style.backgroundColor=obj.color;
			  //����
				
			  //��div���뵽elements��
			  elements.push(div);
		  }
	  }
	  //С�߶�
	  Snake.prototype.move=function(food,map){
		  var i=this.body.length-1;
		  //�ı�����
		  for(;i>0;i--){
			  this.body[i].x=this.body[i-1].x;
			  this.body[i].y=this.body[i-1].y;
		  }
		  //�ı���ͷ
		  //�жϷ���
		  switch(this.direction){
			  case "right":this.body[0].x+=1;break;
			  case "left":this.body[0].x-=1;break;
			  case "top":this.body[0].y-=1;break;
			  case "bottom":this.body[0].y+=1;break;
		  }

		  //�ж���û�гԵ�ʳ��
		  //��ͷ������
		  var headX=this.body[0].x*this.width;
		  var headY=this.body[0].y*this.height;
		  //ʳ�������
		  var foodX=food.x;
		  var foodY=food.y;
		  //�ж�ͷ�������ʳ��������Ƿ���ͬ
		  if(headX==foodX && headY==foodY)
		  {
			  //��ȡС�ߵ�β��
			  var last=this.body[this.body.length-1];
			  //��������β����һ�ݣ����¼��뵽С�ߵ�body
			  this.body.push({
				  x:last.x,
				  y:last.y,
				  color:last.color
			  });
			  //ɾ��ʳ����³���ʳ��
			  food.init(map);
		  }

	  }
	  //ɾ���ߵĺ���
	  function remove(){
		  //��ȡ����
		  var i=elements.length-1;
		  for(;i>=0;i--){
			  //�ҵ�����Ԫ�أ�ɾ����Ԫ��
			  var ele=elements[i];
			  ele.parentNode.removeChild(ele);
			  elements.splice(i,1);
		  }
	  }
	  //��snake��¶��window
	  window.Snake=Snake;
  }());