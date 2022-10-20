//ideas:
//--remember toggle preferences
//circle around bosses
//max save: 0;99;120;99;99;99;99;99;99;99;120;120;99;99;99;120;99;120;99;99;99;99;99;120;99;99;99;99;99;138;2898^^0000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//max save: 417;99;120;99;99;99;99;99;99;99;120;120;99;99;99;120;99;120;99;99;99;99;99;120;99;99;99;99;99;138;2898^^ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
class RSQuestWorld extends World{

	static ironman;//set by menu strip

	constructor(){
		super();
		this._selectedObject = null;
		this.draggingObject = null;
		this._setPriorities();

		this.hideLockedCheckbox;//set by menu strip
		this.recursiveQuestRequirements;//set by menu strip
		this.recursiveSkillRequirements;//set by menu strip
		this.enforceOptionalQuestRequirements;//set by menu strip
		this.coordsType = 'location';//changed by menu strip. 'location' for general quest location, 'tree' for a more requirement focus


		this.debugMode = false;
		this.add(new DebugToggle('d',['shift']));
		this.add(new DisplayUpdaterObject());
		this.add(new CameraManipulatorObject());

		ItemInfoDatabase.initilizeDatabase();
		this._dontShowMap = {};/////not needed?
	}

	dontShowType(type){
		return this._dontShowMap[type];
	}
	setDontShow(type,val){
		this._dontShowMap[type] = val;
	}

	//override
	doOnWorldViewSet(){
		this.redrawAfter('mouseButtonDown');
		this.redrawAfter('mouseButtonUp');
		// this.redrawAfter('mouseMoved');
		this.redrawAfter('mouseDraged');
		this.redrawAfter('keyUp');
		this.redrawAfter('keyInput');
		this.redrawAfter('scroll');

		this.backgroundMap = new BackgroundMap();
		this.treeBackground = new TreeBackground();
		if(this.coordsType==='location'){
			this.add(this.backgroundMap);
		}else{
			this.add(this.treeBackground);
		}
		

		this.addIcons();

		let statBox = new StatBox(0,0);
		this.add(statBox);
	}

	addIcons(){
		let self = this;
		ItemInfoDatabase.doForAllItemInfo(function(itemInfo){
			self.add(new Icon(itemInfo));
		});
	}

	toggleLayout(){
		this.coordsType=this.coordsType==='location'?'tree':'location';
		ItemInfoDatabase.switchCoords(this.coordsType);
		if(this.coordsType==='location'){
			this.add(this.backgroundMap);
			this.delete(this.treeBackground);
		}else{//tree
			this.add(this.treeBackground);
			this.delete(this.backgroundMap);
		}
		this.worldView.redraw();
	}


	get selectedObject(){
		return this._selectedObject;
	}
	set selectedObject(newSelected){
		let prevSelected = this._selectedObject;
		this._selectedObject=newSelected;
		if(prevSelected===newSelected){
			//do nothing
		}else{
			if(prevSelected!=null&&((typeof prevSelected['deSelected']) == "function")){
				prevSelected.deSelected();
			}
			if(newSelected!=null&&((typeof newSelected['becameSelected']) == "function")){
				newSelected.becameSelected();
			}
		}
	}

	//override
	generateCamera(){
		return new MoveZoomCamera(2420,3000,0.5,0.5);
	}

	//override   to implement selecting
	// doFunctionToAllObjects(methodName,param){
	// 	super.doFunctionToAllObjects(methodName,param);
	// 	if(methodName=='mouseClicked'){
	// 		this.selectedObject=this.currentTarget;
	// 	}
	// }

	

	_setPriorities(){
		this.priorities['BackgroundMap'] = 0;
		this.priorities['NonCollectableIcon'] = 0.2;
		this.priorities['IconObtained'] = 0.5;
		this.priorities['IconDefault'] = 1;
		this.priorities['InfoBox'] = 2;
		this.priorities['StatBox'] = 10;
	}




	loadSaveString(saveString){
		this.loadingSave = true;//lets Icon know not to bother with selecting or shuffling order, as many things are being claimed at once

		saveString = saveString.trim();//remove any surounding white space from someone's text editer when it was copied

		try{
			let stringArray = saveString.split("^^");
			let counterString = stringArray[0];
			let bitString = MyAlgs.hexStringToBinaryString(stringArray[1]);
console.log(bitString);
console.log(bitString.length);

			let counterStringArray = counterString.split(";");

			//set counter ammounts
			for(let i=0;i<counterStringArray.length;i++){
				let name = CounterInventory.keys[i];
				CounterInventory.setDontUpdateCalcValues(name,Number(counterStringArray[i]));
			}
			CounterInventory.updateCalculatedValues();

			//set icon have/not have.  Ignore uncollectables
			let keys = ItemInfoDatabase.keys;
			let length = Math.min(keys.length,bitString.length);//slight protection against corrupted data
			for(let bitStringIndex=0;bitStringIndex<length;bitStringIndex++){
				if(bitString[bitStringIndex]==='1'){//have it
					ItemInfoDatabase.getItemInfo(keys[bitStringIndex]).icon.have = true;
				}else{//0. don't have
					ItemInfoDatabase.getItemInfo(keys[bitStringIndex]).icon.have = false;
				}
			}

			this.worldView.redraw();
			alert("Import successful!");
		}catch(e){
			this.worldView.redraw();
			alert("Error reading save text!");
			console.log("Problem occured: " + e);
		}
		
		
		this.loadingSave = false;
	}

///////'π'.charCodeAt(0).toString(2).padStart(16,0);   returns '0000001111000000'
///////String.fromCharCode(parseInt('0000001111000000', 2));  returns 'π'

	
	getSaveText(){
		let string = "";

		CounterInventory.keys.forEach(function(value, index, array){
			let amount = CounterInventory.count(value);
			string += amount.toString() + ';';
		});

		string = string.slice(0,string.length-1);//get rid of last comma
		string += "^^";//seperator between counters and havs

		//ignore uncollectables at the end
		let haveBinString = '';
		ItemInfoDatabase.keys.forEach(function(value, index, array){
			let itemInfo = ItemInfoDatabase.getItemInfo(value);
				let addOn = itemInfo.icon.have?'1':'0';
  				haveBinString += addOn;
		});

console.log(haveBinString);
console.log(haveBinString.length);
		string += MyAlgs.binaryStringToHexString(haveBinString);
		return string;
	}
	
}