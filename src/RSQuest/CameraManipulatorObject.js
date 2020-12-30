"use strict";

class CameraManipulatorObject{
	constructor(){
		this._zoomFactor = 1.1;

		this._originalCameraXCenter = 0;
        this._originalCameraYCenter = 0;
        this._originalCanvasMouseX = 0;
        this._originalCanvasMouseY = 0;
        this._shouldDrag = false;

        //worldCoordinates
        this._leftBorder = 0;
        this._rightBorder = 6000;
        this._topBorder = 0;
        this._bottomBorder = 4217;

        this._maxPixelsPerUnit = 2.25;
        this._minPixelsPerUnit = 0.15;
	}

	doOnAdd(){
		this.world.addEventListener(this,'mouseButtonDown',this.mouseButtonDown);
		this.world.addEventListener(this,'mouseMoved',this.mouseMoved);
		this.world.addEventListener(this,'mouseButtonUp',this.mouseButtonUp);
		// this.addEventListener('drawScreen',this.drawScreen);
		this.world.addEventListener(this,'scroll',this.scroll);
	}

	scroll(direction){
		if(this.world.getObjectByName('StatBox')===this.world.currentTarget){
			return;
		}

		var camera = this.world.camera;
		let x = this.world.worldView.currentXWorld;//should be constant during zooming
		let y = this.world.worldView.currentYWorld;//should be constant during zooming
		const ratioX = (x-camera.lowestX)/camera.width;//should be constant during zooming ratio of how far along the screen mouse is
		const ratioY = (y-camera.lowestY)/camera.height;//should be constant during zooming
		if(direction=='up'){
			camera.pixelsPerUnitX *= this._zoomFactor;
			camera.pixelsPerUnitY *= this._zoomFactor;
		}else{//'down'
			camera.pixelsPerUnitX /= this._zoomFactor;
			camera.pixelsPerUnitY /= this._zoomFactor;
		}
		camera.lowestX = x-ratioX*camera.width;
		camera.lowestY = y-ratioY*camera.height;
		
		this._keepZoomInBorders();
		this._keepInBorders();

		//trigger mouse moved event because mouseWorld position changed due to zooming
		this.world.worldView.mouseMoved();
		
	}

	mouseButtonDown(buttonType){
		if(buttonType=='middle' || (buttonType=='left')){
			var camera = this.world.camera;
			this._originalCameraXCenter = camera.xCenter;
        	this._originalCameraYCenter = camera.yCenter;
        	this._originalCanvasMouseX = this.world.worldView.previousXScreen;
        	this._originalCanvasMouseY = this.world.worldView.previousYScreen;
        	this._shouldDrag = true;
		}
	}
	mouseMoved(){
		if(this._shouldDrag){
			var camera = this.world.camera;
			camera.xCenter = this._originalCameraXCenter-(this.world.worldView.currentXScreen-this._originalCanvasMouseX)*camera.unitsPerPixelX;
			camera.yCenter = this._originalCameraYCenter-(this.world.worldView.currentYScreen-this._originalCanvasMouseY)*camera.unitsPerPixelY;
		
			this._keepInBorders();
		}
	}
	mouseButtonUp(buttonType){
		this._shouldDrag = false;
	}

	_keepZoomInBorders(){
		var camera = this.world.camera;
		if(camera.pixelsPerUnitX<this._minPixelsPerUnit){
			camera.pixelsPerUnitX = this._minPixelsPerUnit;
			camera.pixelsPerUnitY = this._minPixelsPerUnit;
		}
		if(camera.pixelsPerUnitX>this._maxPixelsPerUnit){
			camera.pixelsPerUnitX = this._maxPixelsPerUnit;
			camera.pixelsPerUnitY = this._maxPixelsPerUnit;
		}
	}

	_keepInBorders(){
		var camera = this.world.camera;

		if(camera.left<this._leftBorder){
			camera.left = this._leftBorder;
		}
		if(camera.right>this._rightBorder){
			camera.right = this._rightBorder;
		}
		if(camera.left<this._leftBorder-1 || camera.right>this._rightBorder+1){//give some leway due to precision errors
			camera.xCenter = BackgroundMap.width/2;//top left is 0,0
		}
		
		if(camera.top<this._topBorder){
			camera.top = this._topBorder;
		}
		if(camera.bottom>this._bottomBorder){
			camera.bottom = this._bottomBorder;
		}
		if(camera.top<this._topBorder-1 && camera.bottom>this._bottomBorder+1){//give some leway due to precision errors
			camera.yCenter = BackgroundMap.height/2;//top left is 0,0
		}
		
	}

	toString(){
		return "CameraManipulatorObject";
	}

}