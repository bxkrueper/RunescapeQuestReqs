"use strict";

class BackgroundMap{
	static width = 4849;
	static height = 4217;

	static arcStartX = 4700;
	static arcStartY = 2300;
	static acrWidth = 800;
	static arcHeight = 893;


	constructor(){
		this._pic = Images.get('Main Map.png');
		this._arcPic = Images.get('The Arc.png');
	}

	doOnAdd(){
		this.world.addEventListener(this,'drawWorld',this.drawWorld,this.world.priorities['BackgroundMap']);
		this.world.addEventListener(this,'acceptMouseTarget',this.acceptMouseTarget,this.world.priorities['BackgroundMap']);
		this.world.addEventListener(this,'mouseClicked',this.mouseClicked);

		let world = this.world;
		this._pic.onload = function(){
			world.worldView.redraw();
		};
	}

	drawWorld(ctx){
		//black everywhere
		ctx.fillStyle = '#88909d';
		ctx.beginPath();
		ctx.rect(-4000,-3000, 16500, 17000);
		ctx.fill();

		//draw main picture
		ctx.drawImage(this._pic, 0, 0,BackgroundMap.width,BackgroundMap.height);
		ctx.drawImage(this._arcPic, BackgroundMap.arcStartX, BackgroundMap.arcStartY,BackgroundMap.acrWidth,BackgroundMap.arcHeight);
	}

	acceptMouseTarget(){
		return true;
	}

	mouseClicked(buttonType){
		if(buttonType==='left'){
			this.world.selectedObject = this;
		}
	}

	toString(){
		return 'BackgroundMap';
	}
}