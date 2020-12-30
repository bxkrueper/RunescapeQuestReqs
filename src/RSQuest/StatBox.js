"use strict";

class StatBox{

	constructor(xLeft,yTop){
		this.xLeft = xLeft;
		this.yTop = yTop;
		this.totalWidth = 250;
		this.totalHeight = 400;

		this.nameArray = [
			['Attack', 'Constitution','Mining'],
			['Strength', 'Agility','Smithing'],
			['Defence', 'Herblore','Fishing'],
			['Ranged', 'Thieving','Cooking'],
			['Prayer', 'Crafting','Firemaking'],
			['Magic', 'Fletching','Woodcutting'],
			['Runecrafting', 'Slayer','Farming'],
			['Construction', 'Hunter','Summoning'],
			['Dungeoneering', 'Divination','Invention'],
			['Archaeology', null,null],
			['Total', 'Combat','Quest Point'],
		];

		this.cellWidth = this.totalWidth/this.nameArray[0].length;
		this.cellHeight = this.totalHeight/this.nameArray.length;
		// this.xColumn1 =
	}

	doOnAdd(){
		this.priority=this.world.priorities['StatBox'];
		this.world.registerName('StatBox',this);

		this._visable = false;
		this.toggleVisable();//actually make it true while adding methods
	}

	toggleVisable(){
		console.log('toggled stats');

		if(this._visable){
			this.world.removeEventListener(this,'drawScreen',this.drawScreen);
			this.world.removeEventListener(this,'scroll',this.scroll);
			this.world.removeEventListener(this,'acceptMouseTarget',this.acceptMouseTarget);
		}else{
			this.world.addEventListener(this,'drawScreen',this.drawScreen,this.priority);
			this.world.addEventListener(this,'scroll',this.scroll);
			this.world.addEventListener(this,'acceptMouseTarget',this.acceptMouseTarget,this.priority);
		}
		this._visable = !this._visable;

		this.world.worldView.redraw();
	}

	acceptMouseTarget(){
		let mouseX = this.world.worldView.currentXScreen;
		let mouseY = this.world.worldView.currentYScreen;
		return this.containsPoint(mouseX,mouseY);
		
	}

	containsPoint(xScreen,yScreen){
		return xScreen>this.xLeft && xScreen<this.xLeft+this.totalWidth && yScreen>this.yTop && yScreen<this.yTop+this.totalHeight;
	}

	scroll(direction){
		if(this.world.currentTarget===this){
			let mouseX = this.world.worldView.currentXScreen;
			let mouseY = this.world.worldView.currentYScreen;
			let row = this.screenYToRow(mouseY);
			let column = this.screenXToColumn(mouseX);
			if(row<0||row>=this.nameArray.length || column<0||column>=this.nameArray[0].length){
				return;
			}
			let name = this.nameArray[row][column];
			if(name==null || name==='Quest Point' || CounterInventory.isCalculatedItem(name)){
				//null is for the empty boxes. Quest points are kept track of by right clicking the icons
				//calculated values shouldn't be changed manually
				return;
			}
			
			//increment
			CounterInventory.addTo(name,direction==='up'?1:-1);
		}
	}

	screenYToRow(screenY){
		return Math.floor((screenY-this.yTop)/this.cellHeight);
	}
	screenXToColumn(screenX){
		return Math.floor((screenX-this.xLeft)/this.cellWidth);
	}


	drawScreen(ctx){
		ctx.fillStyle = 'grey';
		ctx.beginPath();
		ctx.rect(this.xLeft,this.yTop,this.totalWidth,this.totalHeight);
		ctx.fill();

		for(let row=0;row<this.nameArray.length;row++){
			for(let column=0;column<this.nameArray[0].length;column++){
				this._drawCell(ctx,row,column);
			}
		}
	}

	_drawCell(ctx,row,column){
		let name = this.nameArray[row][column];
		if(name==null){
			return;
		}
		let xLeftCell = this.xLeft+this.cellWidth*column;
		let yTopCell = this.yTop+this.cellHeight*row;
		let cellInnerBoarder = 3;

		//draw cell background
		ctx.fillStyle = '#999999';
		ctx.beginPath();
		ctx.rect(xLeftCell,yTopCell,this.cellWidth,this.cellHeight);
		ctx.fill();

		ctx.lineWidth = 2;
		ctx.strokeStyle = 'black';
		ctx.beginPath();
		ctx.rect(xLeftCell,yTopCell,this.cellWidth,this.cellHeight);
		ctx.stroke();

		//draw icon
		let image = CounterInventory.getImageFor(name);
		ctx.drawImage(image,xLeftCell+cellInnerBoarder,yTopCell+cellInnerBoarder,(this.cellWidth-cellInnerBoarder*2)/3,this.cellHeight-cellInnerBoarder*2);
		
		//draw number
		let number = CounterInventory.count(name);
		let textSize;
		let xNumberStart;
		if(number.toString().length===3){//3 digits
			textSize = this.cellHeight-cellInnerBoarder*2-2;
			xNumberStart = xLeftCell+cellInnerBoarder+(this.cellWidth-cellInnerBoarder*2)/3;
		}else if(number.toString().length===4){//4 digits
			textSize = this.cellHeight-cellInnerBoarder*2-8;
			xNumberStart = xLeftCell+cellInnerBoarder+(this.cellWidth-cellInnerBoarder*2)/3;
		}else{//assume 2 digits
			textSize = this.cellHeight-cellInnerBoarder*2;
			xNumberStart = xLeftCell+cellInnerBoarder+(this.cellWidth-cellInnerBoarder*2)/3+8;
		}
		ctx.font = textSize + 'px ' + 'Arial';
		ctx.textBaseline = 'bottom';
		ctx.fillStyle = 'black';
		ctx.fillText(number.toString(),xNumberStart,yTopCell+this.cellHeight-cellInnerBoarder+2);
	}



	toString(){
		return 'StatBox';
	}


}