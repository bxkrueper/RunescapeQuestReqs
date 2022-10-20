"use strict";

class TreeBackground{

	constructor(){
	}

	doOnAdd(){
		this.world.addEventListener(this,'drawWorld',this.drawWorld,this.world.priorities['BackgroundMap']);
		this.world.addEventListener(this,'acceptMouseTarget',this.acceptMouseTarget,this.world.priorities['BackgroundMap']);
		this.world.addEventListener(this,'mouseClicked',this.mouseClicked);
	}

	drawWorld(ctx){
		//black everywhere
		ctx.fillStyle = '#000000';
		ctx.beginPath();
		ctx.rect(-4000,-3000, 16500, 17000);
		ctx.fill();
	}

	acceptMouseTarget(){
		return true;
	}

	mouseClicked(buttonType){
		if(buttonType==='left'){
			this.world.selectedObject = this;
		}
	}

	get isBackground(){
		return true;
	}

	toString(){
		return 'TreeBackground';
	}
}