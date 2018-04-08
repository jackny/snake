 //ʳ��
  (function(){
	  var elements=[];//����ÿ��С����
	  //ʳ���ߣ���ɫ��λ��
	 function Food(x,y,width,height,color){
		//��������
		this.x=x||0;
		this.y=y||0;
		//���
		this.width=width||20;
		this.height=height||20;
		//������ɫ
		this.color=color||"green";
	  }
	  //�Ѿֲ�Food��¶��window����
	 //Ϊԭ����ӳ�ʼ������
	 Food.prototype.init=function(map){
		//��ɾ��Сʳ��
		remove();
		//����div
		var div=document.createElement("div");
		//��div�ӵ�map
		map.appendChild(div);
		//����div��ʽ
		div.style.position="absolute";//�����ĵ���
		div.style.width=this.width+"px";
		div.style.height=this.height+"px";
		div.style.backgroundColor=this.color;
		
		//�����������
		this.x=parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
		this.y=parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
		div.style.left=this.x+"px";
		div.style.top=this.y+"px";
		
		//��div�ӵ�elements��
		elements.push(div); 
	 };

	 //ɾ��ʳ��
	 function remove(){
		 for(var i=0;i<elements.length;i++)
		 {
			 var ele=elements[i];
			 //�ҵ���Ԫ��ɾ�������Ԫ��
			 ele.parentNode.removeChild(ele);
			 //��elements��ɾ�������Ԫ��
			 elements.splice(i,1);
		 }
	 }
	 window.Food=Food;
  }());