"use strict";
//for items that are in a group and are interchangable (all geo, simple keys are the same)
class CounterInventory{
	static _map = CounterInventory.getDefaultMap();
	static keys = Object.keys(CounterInventory._map);

	static getDefaultMap(){
		return {
			"Quest Point":0,

			"Agility":1,
			"Archaeology":1,
			"Attack":1,
			"Constitution":10,
			"Construction":1,
			"Cooking":1,
			"Crafting":1,
			"Defence":1,
			"Divination":1,
			"Dungeoneering":1,
			"Farming":1,
			"Firemaking":1,
			"Fishing":1,
			"Fletching":1,
			"Herblore":1,
			"Hunter":1,
			"Invention":1,
			"Magic":1,
			"Mining":1,
			"Prayer":1,
			"Ranged":1,
			"Runecrafting":1,
			"Slayer":1,
			"Smithing":1,
			"Strength":1,
			"Summoning":1,
			"Thieving":1,
			"Woodcutting":1,

			//calculated
			"Combat":3,
			"Total":37
		};
	}

	static resetMap(){
		CounterInventory._map = CounterInventory.getDefaultMap();
	}

	static isCollectionItem(name){
		return CounterInventory._map[name]!=null;
	}
	static isCalculatedItem(name){
		return name==='Combat' || name==='Total';
	}
	static isBaseSkill(name){
		return name!=null && name!='Quest Point' && !CounterInventory.isCalculatedItem(name);
	}
	static getMin(name){
		switch(name){
			case 'Quest Point':return 0;
			case 'Combat':return 3;
			case 'Total':return 37;
			default:return 1;
		}
	}
	static getMax(name){
		switch(name){
			case 'Quest Point':return 999;
			case 'Combat':return 138;
			case 'Total':return 2898;
			case 'Dungeoneering':case 'Invention':case 'Archaeology':case 'Slayer':case 'Farming':case 'Herblore':return 120;
			default:return 99;
		}
	}

	static count(name){
		return CounterInventory._map[name];
	}

	static addTo(name,amount){
		if(CounterInventory._map[name]!=null){
			CounterInventory.set(name,CounterInventory.count(name)+amount);
		}
	}

	static set(name,amount){
		CounterInventory.setDontUpdateCalcValues(name,amount);
		CounterInventory.updateCalculatedValues();
	}

	static setDontUpdateCalcValues(name,amount){
		if(CounterInventory._map[name]!=null){
			CounterInventory._map[name]=amount;

			//enforce min/max
			if(CounterInventory._map[name]<CounterInventory.getMin(name)){
				CounterInventory._map[name]=CounterInventory.getMin(name);
			}
			if(CounterInventory._map[name]>CounterInventory.getMax(name)){
				CounterInventory._map[name]=CounterInventory.getMax(name);
			}

			CounterInventory.updateLabel(name);
		}
	}

	static updateCalculatedValues(){
		let total = 0;
		for (const [name, level] of Object.entries(CounterInventory._map)) {
			if(CounterInventory.isBaseSkill(name)){
				total+=level;
			}
		}
		CounterInventory._map['Total']=total;
		CounterInventory.updateLabel('Total');

		let combat = CounterInventory.calculateCombatLevel();
		CounterInventory._map['Combat']=combat;
		CounterInventory.updateLabel('Combat');
	}

	static calculateCombatLevel(){
		let attack = CounterInventory.count('Attack');
		let strength = CounterInventory.count('Strength');
		let ranged = CounterInventory.count('Ranged');
		let magic = CounterInventory.count('Magic');
		let defence = CounterInventory.count('Defence');
		let constitution = CounterInventory.count('Constitution');
		let prayer = CounterInventory.count('Prayer');
		let summoning = CounterInventory.count('Summoning');

		let dec = (1.3*Math.max(attack+strength,ranged*2,magic*2) + defence+constitution + Math.floor(.5*prayer)+Math.floor(.5*summoning))/4;
		return Math.floor(dec);
	}

	static updateLabel(name,count){
		if(count==null){
			count = CounterInventory.count(name);
		}

		let label = document.getElementById(name + " Label");
		if(label!=null){
			if(label.type==='text'){
				label.value = count;//MyAlgs.thousands_separators(count);
			}else{
				//assume it is a label
				label.innerHTML = count;//MyAlgs.thousands_separators(count);
			}
			
		}
	}

	static updateAllLabels(){
		for (const [name, amount] of Object.entries(CounterInventory._map)) {
			CounterInventory.updateLabel(name,amount);
		}
	}

	static getImageFor(name){
		return Images.get("Skill Icons/" + name + ".png");
	}

	//func accepts (name,itemInfo)
	static doForAllCounters(func){
		for (const [name, amount] of Object.entries(CounterInventory._map)) {
			func(name,amount);
		}
	}
}