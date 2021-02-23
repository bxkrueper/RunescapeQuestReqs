"use strict";

class Icon{

	static outlineStrokeThickness = 3;

	constructor(itemInfo){
		this._itemInfo = itemInfo;
		this.itemInfo.icon = this;//set itemInfo's reference
		this.size = this.itemInfo.size==null?40:this.itemInfo.size;//default to 40
		if(this.itemInfo.questPointReward===0){
			this.size = 25;//make miniquests smaller
		}
		if(itemInfo.pictureName==null){//if no picture, assume it is a quest icon
			this._pic = Images.get("Quest Icons/" + itemInfo.name + ".png");
		}else{
			this._pic = Images.get(itemInfo.pictureName);
		}
		

		if(this.itemInfo.hitboxType==='circle'){
			this.containsPoint = this.containsPointCircle;
			this.drawOutline = this.drawOutlineCircle;
		}else{//default to rect
			this.containsPoint = this.containsPointRect;
			this.drawOutline = this.drawOutlineRect;
		}
	}

	doOnAdd(){
		if(this._itemInfo.priorityName==null){//default
			this._priority=this.world.priorities['IconDefault'];//don't call setter for first initilization
		}else{
			this._priority=this.world.priorities[this._itemInfo.priorityName];//don't call setter for first initilization
		}
		
		this._have = false;

		this.world.addEventListener(this,'drawScreen',this.drawScreen,this.priority);
		if(!this._itemInfo.nonCollectable){
			this.world.addEventListener(this,'acceptMouseTarget',this.acceptMouseTarget,this.priority);
		}
		this.world.addEventListener(this,'mouseClicked',this.mouseClicked);
	}

	get itemInfo(){
		return this._itemInfo;
	}

	get priority(){
		return this._priority;
	}
	set priority(newPriority){
		this._priority = newPriority;
		this.world.changePriority(this,'drawScreen',this.drawScreen,newPriority);
		this.world.changePriority(this,'acceptMouseTarget',this.acceptMouseTarget,newPriority);
	}

	get have(){
		return this._have;
	}
	set have(newHave){
		let oldHave = this._have;
		this._have = newHave;
		if(oldHave!=newHave){
			let priority = this._have?this.world.priorities['IconObtained']:this.world.priorities['IconDefault'];
			this.priority = priority;//update priority (still sends it to front of others with the same proirity)
		}

		if(this.world.loadingSave){
			//stop here. don't bother with Counters. those are set directly while loading. Also don't waste time shuffling order on the same priority
			return;
		}

		// this.exchangeCurrencyReqs(this._have);
		this.addToUponGetting(this._have);
		if(oldHave===newHave){
			this.priority = this.priority;//shuffle to front of others with same priority if priority wasn't already changed
		}
		
		if(this._have && this.world.selectedObject === this){
			this.world.selectedObject = null;//deselect object after claiming
		}

		//look for special functions to do when claiming or unclaiming
		if(this._have && this.itemInfo.doOnClaimed!=null){
			this.itemInfo.doOnClaimed();
		}
		if(!this._have && this.itemInfo.doOnUnClaimed!=null){
			this.itemInfo.doOnUnClaimed();
		}
	}
	haveToggle(){
		this.have = !this.have;
	}


	//pay the shop   obtained: if you bought it. if this is false, this means a refund
	// exchangeCurrencyReqs(obtained){
	// 	for(let i in this.itemInfo.requirements){
	// 		let req = this.itemInfo.requirements[i];
	// 		if(CounterInventory.isCurrencyItem(req.name)){
	// 			let cost = obtained?-req.quantity:req.quantity;
	// 			CounterInventory.addTo(req.name,cost);
	// 		}
	// 	}
	// }
	//obtained: if you got it. if this is false, this means a refund
	addToUponGetting(obtained){
		let addToOnClaimed = this.itemInfo.addToOnClaimed;
		if(addToOnClaimed!=null){
			//addToOnClaimed could be a {name:'name',quantity:#} or an array of them
			if(Array.isArray(addToOnClaimed)){
				for(let addToObject of addToOnClaimed){
					let quantity = obtained?addToObject.quantity:-addToObject.quantity;
					CounterInventory.addTo(addToObject.name,quantity);
				}
			}else{
				let quantity = obtained?addToOnClaimed.quantity:-addToOnClaimed.quantity;
				CounterInventory.addTo(addToOnClaimed.name,quantity);
			}
		}

		//handle quest points seperately to reduce clutter in item database
		if(this.itemInfo.questPointReward!=null){
			let quantity = obtained?this.itemInfo.questPointReward:-this.itemInfo.questPointReward;
			CounterInventory.addTo("Quest Point",quantity);
		}
	}

	//center of pic
	get xWorld(){
		return this.itemInfo.x;
	}
	get yWorld(){
		return this.itemInfo.y;
	}
	get xScreen(){
		return this.world.camera.worldXToScreenX(this.xWorld);
	}
	get yScreen(){
		return this.world.camera.worldYToScreenY(this.yWorld);
	}

	//how many pixles wide the image is
	get sizeScreen(){
		return this.size;
	}
	get radiusScreen(){
		return this.sizeScreen/2;
	}

	get widthScreen(){
		return this.sizeScreen;
	}
	get heightScreen(){//height is based of the width. Keeps the picture scaled
		return this.sizeScreen*(this._pic.height/this._pic.width);
	}
	get widthWorld(){
		return this.world.camera.screenXToWorldX(this.widthScreen);
	}
	get heightWorld(){//height is based of the width. Keeps the picture scaled
		return this.world.camera.screenYToWorldY(this.heightScreen);
	}

	///////////optimize finding top left later
	get leftScreen(){
		return this.xScreen-this.widthScreen/2;
	}
	get topScreen(){
		return this.yScreen-this.heightScreen/2;
	}
	get rightScreen(){
		this.world.camera.worldXToScreenX(this.xWorld)+this.widthScreen/2;
	}
	get bottomScreen(){
		return this.world.camera.worldYToScreenY(this.yWorld)+this.heightScreen/2;
	}

	get hoveredOver(){
		return this.world.currentTarget === this;
	}
	get selected(){
		return this.world.selectedObject === this;
	}

	get status(){//locked, available, have,       availableNR  (not reccommended)
		if(this.world.selectedObject===this){
			console.log('here');
		}
		if(this.have){
			return 'have';
		}

		let missingOptional = false;
		for(let req of this.itemInfo.questRequirements){
			if(Icon.meetsReq(req)){
				continue;
			}else{//doesn't meet
				if(req.optional){
					if(this.world.enforceOptionalQuestRequirements){
						return 'locked';//it is locked. Don't bother going on
					}else{
						missingOptional = true;
					}
					
				}else{
					return 'locked';//it is locked. Don't bother going on
				}
			}
		}
		for(let req of this.itemInfo.skillRequirements){
			if(Icon.meetsReq(req)){
				continue;
			}else{
				return 'locked';
			}
		}

		if(missingOptional){
			return 'availableNR';
		}else{
			return 'available';
		}
		
	}

	static meetsReq(req){
		if(CounterInventory.isCollectionItem(req.name)){
			if(!RSQuestWorld.ironman && req.iron){
				return true;
			}
			return CounterInventory.count(req.name)>=req.quantity;
		}
		// else if(req.name==='-choose1-'){
		// 	let choose1List = req.choose1List;
		// 	for(let i in choose1List){
		// 		let optionReq = choose1List[i];
		// 		if(Icon.meetsReq(optionReq)){
		// 			return true;
		// 		}
		// 	}
		// 	return false;
		// }else if(req.name==='-all-'){
		// 	let allList = req.allList;
		// 	for(let i in allList){
		// 		let optionReq = allList[i];
		// 		if(!Icon.meetsReq(optionReq)){
		// 			return false;
		// 		}
		// 	}
		// 	return true;
		// }
		else{
			let reqItemInfo = ItemInfoDatabase.getItemInfo(req.name);
			return reqItemInfo.icon.have;
		}
		
	}

	//containsPoint(xScreen,yScreen) is chosen from the ones below
	containsPointCircle(xScreen,yScreen){
		return Math.hypot(xScreen-this.xScreen,yScreen-this.yScreen)<this.radiusScreen;
	}
	containsPointRect(xScreen,yScreen){
		return xScreen>(this.xScreen-this.widthScreen/2) && xScreen<(this.xScreen+this.widthScreen/2) && yScreen>(this.yScreen-this.heightScreen/2) && yScreen<(this.yScreen+this.heightScreen/2);
	}

	//drawOutline(ctx) is chosen from the ones below
	drawOutlineCircle(ctx){
		ctx.strokeStyle = this.getColor();
		ctx.lineWidth = Icon.outlineStrokeThickness;
		ctx.beginPath();
		ctx.arc(this.xScreen,this.yScreen, this.radiusScreen, 0, 2 * Math.PI);
		ctx.stroke();
	}
	drawOutlineRect(ctx){
		ctx.strokeStyle = this.getColor();
		ctx.lineWidth = Icon.outlineStrokeThickness;
		ctx.beginPath();
		ctx.rect(this.leftScreen,this.topScreen, this.widthScreen, this.heightScreen);
		ctx.stroke();
	}

	getColor(){
		if(this.status === 'locked'){
			return '#FF0000';//red
		}else if(this.status === 'availableNR' && !this.world.enforceOptionalQuestRequirements){
			return '#FF8800'//orange
		}else{
			return '#00FF00';//green
		}
	}

	drawRequirementLines(ctx,backtraceAllTheWay){
		ctx.lineWidth = Icon.outlineStrokeThickness;
		for(let req of this.itemInfo.questRequirements){
			if(Icon.meetsReq(req)){
				continue;
			}
				

			ctx.strokeStyle = req.optional&&!this.world.enforceOptionalQuestRequirements?'#FF8800':'#FF0000';
			let reqItemInfo = ItemInfoDatabase.getItemInfo(req.name);
			// if(reqItemInfo==null){
			// 	return;
			// }

			reqItemInfo.icon.drawArrowTo(this,ctx);
			if(backtraceAllTheWay){
				reqItemInfo.icon.drawRequirementLines(ctx,backtraceAllTheWay);
			}


			
		}

	}

	drawUnlockLines(ctx,backtraceAllTheWay){
		ctx.lineWidth = Icon.outlineStrokeThickness;
		for(let unlock of this.itemInfo.unlocks){	

			ctx.strokeStyle = unlock.optional&&!this.world.enforceOptionalQuestRequirements?'#444488':'#00FFFF';
			let unlockItemInfo = ItemInfoDatabase.getItemInfo(unlock.name);
			if(unlockItemInfo==null){
				return;
			}

			this.drawArrowTo(unlockItemInfo.icon,ctx);
			if(backtraceAllTheWay){
				unlockItemInfo.icon.drawUnlockLines(ctx,backtraceAllTheWay);
			}


			
		}
	}

	
	hideIfLocked(){
		return this.world.hideLockedCheckbox;
		// return (this.world.hideLockedCheckbox && !this.world.worldView.keyIsDown('ctrl')) || (!this.world.hideLockedCheckbox && this.world.worldView.keyIsDown('ctrl'));
	}

	//ctx properties assumed to be already set
	// drawLineTo(itemInfo2,ctx){
	// 	ctx.beginPath();
	// 	ctx.moveTo(this.xScreen,this.yScreen);
	// 	ctx.lineTo(itemInfo2.icon.xScreen,itemInfo2.icon.yScreen);
	// 	ctx.stroke();
	// }

	//ctx properties assumed to be already set. Draws the arrow to the edge of icon2's radius
	drawArrowTo(icon2,ctx){
		let xEnd = icon2.xScreen;
		let yEnd = icon2.yScreen;
		let arrowDirection = MyMath.findAngleFromTo(this.xScreen,this.yScreen,xEnd,yEnd);
		xEnd -= (icon2.sizeScreen/2+Icon.outlineStrokeThickness)*Math.cos(arrowDirection);
		yEnd -= (icon2.sizeScreen/2+Icon.outlineStrokeThickness)*Math.sin(arrowDirection);

		Icon.drawArrow(ctx,this.xScreen,this.yScreen,xEnd,yEnd,15,2.5);
	}

	//ctx properties assumed to be already set
	//headAngleChange: in radians. pi points them back to x1,y1. pi/2 makes a T 0 keeps the line going  2.5 is a good value
	static drawArrow(ctx,x1,y1,x2,y2,headLength,headAngleChange){
		let arrowDirection = MyMath.findAngleFromTo(x1,y1,x2,y2);
		ctx.beginPath();
		//main part
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);

		//head
		let headDirection = arrowDirection+headAngleChange;
		ctx.lineTo(x2+headLength*Math.cos(headDirection),y2+headLength*Math.sin(headDirection));
		headDirection = arrowDirection-headAngleChange;
		ctx.moveTo(x2,y2);
		ctx.lineTo(x2+headLength*Math.cos(headDirection),y2+headLength*Math.sin(headDirection));

		ctx.stroke();
	}



	hasCounterReqs(){
		return this.itemInfo.skillRequirements.length>0;
		// for(let req of this.itemInfo.requirements){
		// 	if(CounterInventory.isCollectionItem(req.name)){
		// 		return true;
		// 	}
		// }
		// return false;
	}

	becameSelected(){
		//move to front in its tier
		this.priority = this.priority;

		//add an InfoBox
		this.addInfoBox();
	}
	deSelected(){
		//delete the infobox that was added when it was selected
		this.deleteInfoBox();
	}
	addInfoBox(){
		this._infoBox = new InfoBox(this);
		this.world.add(this._infoBox);
	}
	deleteInfoBox(){
		if(this._infoBox!=null){
			this.world.delete(this._infoBox);
			delete this._infoBox;
		}
	}


	shouldHide(){
		return (this.itemInfo.type!=null && this.world.dontShowType(this.itemInfo.type)) || (this.itemInfo.nonCollectable && !this.world.showNonCollectables) || (this.hideIfLocked() && this.status==='locked');
	}

	
	drawScreen(ctx){
		if(this.shouldHide()){
			return;
		}

		let status = this.status;

		if(this.selected){  // && (status==='locked' || status==='availableNR')
			let recursiveRequirements = (this.world.recursiveQuestRequirements && !this.world.worldView.keyIsDown('ctrl')) || (!this.world.recursiveQuestRequirements && this.world.worldView.keyIsDown('ctrl'));
			this.drawRequirementLines(ctx,recursiveRequirements);
			this.drawUnlockLines(ctx,recursiveRequirements);
		}

		//draw outline. red means reqs not met. green means ready
		if(status==='have'){

		}else{
			let thickness = 2;
			ctx.fillStyle = this.getColor();
			ctx.beginPath();
			ctx.rect(this.leftScreen-thickness, this.topScreen-thickness,this.widthScreen+thickness*2,this.heightScreen+thickness*2);
			ctx.fill();
		}
		

		//draw icon
		if(this.have){
			//if mouse is near, draw faintly
			let xScreen=this.world.worldView.currentXScreen;
			let yScreen=this.world.worldView.currentYScreen;
			//height and width not /2 to show if mouse is further out
			if((xScreen>(this.xScreen-this.widthScreen*1.5) && xScreen<(this.xScreen+this.widthScreen*1.5) && yScreen>(this.yScreen-this.heightScreen*1.5) && yScreen<(this.yScreen+this.heightScreen*1.5)) || (this.itemInfo.showAsNonCollectable&&this.world.showNonCollectables)){
				ctx.globalAlpha = 0.5;
				ctx.drawImage(this._pic, this.leftScreen, this.topScreen,this.widthScreen,this.heightScreen);
				ctx.globalAlpha = 1;

			}else{
				//draw nothing
			}
			
		}else{//don't have
			ctx.drawImage(this._pic, this.leftScreen, this.topScreen,this.widthScreen,this.heightScreen);
			// if(this.selected){
			// 	this.drawOutline(ctx);
			// }
		}
	}

	

	acceptMouseTarget(){
		if(this.shouldHide()){
			return false;
		}
		
		return this.containsPoint(this.world.worldView.currentXScreen,this.world.worldView.currentYScreen);
	}

	mouseClicked(buttonType){
		if(buttonType==='left'){
			this.world.selectedObject = this;
		}
		if(buttonType==='right'){
			if(this.status==='locked' && !this.world.worldView.keyIsDown('shift')){//holding shift will override reqs
				this.world.selectedObject = this;
			}else{
				this.haveToggle();
			}
			
		}
	}

	toString(){
		return "Icon: " + this.itemInfo.name;
	}
}