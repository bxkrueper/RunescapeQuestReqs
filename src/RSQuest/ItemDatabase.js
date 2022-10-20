"use strict";

class ItemInfoDatabase{
	static _mapObject = {};//name string to Item
	static keys = null;//for saving and loading. does not include non-collectables

	static getItemInfo(name){
		return ItemInfoDatabase._mapObject[name];
	}

	static doForAllItemInfo(func){
		for (const [name, itemInfo] of Object.entries(ItemInfoDatabase._mapObject)) {
			func(itemInfo);
		}
	}

	static initilizeDatabase(){
		ItemInfoDatabase._initilizeRawStats();
		ItemInfoDatabase._setOtherVars();
		ItemInfoDatabase.keys = Object.keys(ItemInfoDatabase._mapObject);
		ItemInfoDatabase.keys = ItemInfoDatabase.keys.filter(function(itemName){
			return !ItemInfoDatabase.getItemInfo(itemName).nonCollectable;
		});
		// console.log(ItemInfoDatabase.keys);
	}
	static _initilizeRawStats(){
		const fithAgePicStr = "Quest Icons/5th Age.png";
		const miniFifthAgePicStr = "Quest Icons/Miniquest 5th Age.png";
		const miniSixthAgePicStr = "Quest Icons/Miniquest 6th Age.png";
		const miniAnyAgePicStr = "Quest Icons/Miniquest Any Age.png";

		ItemInfoDatabase._mapObject = 
		{
			//        https://runescape.wiki/w/List_of_quests         https://runescape.wiki/w/Miniquests

			"All Fired Up":{ x:2725,y:2265,
			questRequirements:[{name:"Priest in Peril"}],
			skillRequirements:[{name:"Firemaking",quantity:43}],
			questPointReward:1, },

			"Animal Magnetism":{ x:2468,y:2490,
			questRequirements:[{name:"Ernest the Chicken"},{name:"Priest in Peril"},{name:"The Restless Ghost"}],
			skillRequirements:[{name:"Slayer",quantity:18},{name:"Crafting",quantity:19},{name:"Ranged",quantity:30},{name:"Woodcutting",quantity:35},{name:"Thieving",quantity:15}],
			questPointReward:1, },

			"Another Slice of H.A.M.":{ x:2634,y:3000,
			questRequirements:[{name:"Death to the Dorgeshuun"},{name:"The Dig Site"},{name:"The Giant Dwarf"}],
			skillRequirements:[{name:"Attack",quantity:15},{name:"Prayer",quantity:25}],
			questPointReward:1, },

			"As a First Resort":{ x:1407,y:3509,
			questRequirements:[{name:"Zogre Flesh Eaters"}],
			skillRequirements:[{name:"Hunter",quantity:48},{name:"Firemaking",quantity:51},{name:"Woodcutting",quantity:58}],
			questPointReward:1,
			notes:"ironmen need a way to get 4 spears" },

			"Back to my Roots":{ x:1552,y:2586,pictureName:fithAgePicStr,
			questRequirements:[{name:"A Fairy Tale I - Growing Pains"},{name:"The Hand in the Sand"},{name:"One Small Favour"},{name:"Tribal Totem"}],
			skillRequirements:[{name:"Agility",quantity:55},{name:"Farming",quantity:53},{name:"Slayer",quantity:59},{name:"Woodcutting",quantity:72}],
			questPointReward:1, },

			"Back to the Freezer":{ x:2854,y:3365,
			questRequirements:[{name:"Ernest the Chicken"},{name:"Some Like It Cold"}],
			skillRequirements:[{name:"Slayer",quantity:37},{name:"Runecrafting",quantity:45},{name:"Divination",quantity:50}],
			questPointReward:1, },

			"Beneath Cursed Tides":{ x:2479,y:2833,
			questRequirements:[],
			skillRequirements:[{name:"Attack",quantity:30},{name:"Strength",quantity:30},{name:"Magic",quantity:30},{name:"Mining",quantity:30},{name:"Smithing",quantity:30},{name:"Woodcutting",quantity:30},{name:"Firemaking",quantity:30},{name:"Cooking",quantity:30},],
			questPointReward:1, },

			"Between a Rock":{ x:1740,y:1752,
			questRequirements:[{name:"Dwarf Cannon"},{name:"Fishing Contest"}],
			skillRequirements:[{name:"Defence",quantity:30},{name:"Mining",quantity:40},{name:"Smithing",quantity:50}],
			questPointReward:2, },

			"Big Chompy Bird Hunting":{ x:1557,y:3223,
			questRequirements:[],
			skillRequirements:[{name:"Cooking",quantity:30},{name:"Ranged",quantity:30},{name:"Fletching",quantity:5}],
			questPointReward:2, },

			"Biohazard":{ x:1460,y:2538,pictureName:fithAgePicStr,
			questRequirements:[{name:"Plague City"}],
			skillRequirements:[],
			questPointReward:3, },

			"Birthright of the Dwarves":{ x:1740,y:1782,
			questRequirements:[{name:"King of the Dwarves"}],
			skillRequirements:[{name:"Mining",quantity:80},{name:"Smithing",quantity:82},{name:"Strength",quantity:85}],
			questPointReward:2, },

			"The Blood Pact":{ x:2781,y:2813,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Blood Runs Deep":{ x:454,y:1347,
			questRequirements:[{name:"Dream Mentor"},{name:"Glorious Memories"},{name:"Horror from the Deep"},{name:"Fremennik Hard Tasks"}],
			skillRequirements:[{name:"Attack",quantity:75},{name:"Strength",quantity:75},{name:"Slayer",quantity:65}],
			questPointReward:2,
			notes:"also need the hard Fremennik Tasks" },

			"The Branches of Darkmeyer":{ x:3564,y:2476,
			questRequirements:[{name:"Legacy of Seergaze"},{name:"Legends' Quest"}],
			skillRequirements:[{name:"Woodcutting",quantity:76},{name:"Fletching",quantity:70},{name:"Magic",quantity:70},{name:"Slayer",quantity:67},{name:"Crafting",quantity:64},{name:"Farming",quantity:63},{name:"Agility",quantity:63}],
			questPointReward:2,
			notes:"70 attack and range are recommended" },

			"Bringing Home the Bacon":{ x:2326,y:2636,
			questRequirements:[],
			skillRequirements:[{name:"Farming",quantity:14},{name:"Summoning",quantity:14},{name:"Construction",quantity:14}],
			questPointReward:1, },

			"The Brink of Extinction":{ x:1974,y:2877,
			questRequirements:[{name:"The Elder Kiln"}],
			skillRequirements:[{name:"Defence",quantity:80},{name:"Smithing",quantity:80},{name:"Mining",quantity:72}],
			questPointReward:3, },

			"Broken Home":{ x:3010,y:2262,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1,
			notes:"have all skills 90+ to loot all chests" },

			"Buyers and Cellars":{ x:2725,y:2671,
			questRequirements:[],
			skillRequirements:[{name:"Thieving",quantity:5}],
			questPointReward:1, },

			"Cabin Fever":{ x:3625,y:2216,
			questRequirements:[{name:"Pirate's Treasure"},{name:"Rum Deal"}],
			skillRequirements:[{name:"Agility",quantity:42},{name:"Crafting",quantity:45},{name:"Smithing",quantity:50},{name:"Ranged",quantity:40}],
			questPointReward:2, },

			"Call of the Ancestors":{ x:2497,y:3171,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Carnillean Rising":{ x:1422,y:2655,
			questRequirements:[{name:"The Blood Pact"},{name:"Hazeel Cult"}],
			skillRequirements:[{name:"Quest Point",quantity:50},{name:"Thieving",quantity:33},{name:"Construction",quantity:31}],
			questPointReward:1, },

			"Catapult Construction":{ x:650,y:2843,
			questRequirements:[{name:"Regicide"}],
			skillRequirements:[{name:"Fletching",quantity:42},{name:"Construction",quantity:44},{name:"Smithing",quantity:30,iron:true}],
			questPointReward:2,
			notes:"ironmen need mahogany plankes" },

			"Chef's Assistant":{ x:2568,y:2313,
			questRequirements:[{name:"Cook's Assistant"}],
			skillRequirements:[{name:"Cooking",quantity:32}],
			questPointReward:1, 
			notes: "ironmen need 38 cooking or access to the Culinaromancer's Chest"},

			"Children of Mah":{ x:971,y:2500,////start location?
			questRequirements:[{name:"Dishonour among Thieves"},{name:"The Light Within"},{name:"Koschei's Troubles",optional:true}],
			skillRequirements:[],
			questPointReward:2, },

			"The Chosen Commander":{ x:2630,y:3032,
			questRequirements:[{name:"Land of the Goblins"}],
			skillRequirements:[{name:"Agility",quantity:46},{name:"Strength",quantity:46},{name:"Thieving",quantity:46}],
			questPointReward:3, },

			"Clock Tower":{ x:1418,y:2724,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"A Clockwork Syringe":{ x:3445,y:3196,
			questRequirements:[{name:"Rocking Out"}],
			skillRequirements:[{name:"Dungeoneering",quantity:50},{name:"Slayer",quantity:61},{name:"Construction",quantity:62},{name:"Summoning",quantity:65},{name:"Smithing",quantity:74},{name:"Thieving",quantity:74},{name:"Defence",quantity:76}],
			questPointReward:1, },

			"Cold War":{ x:1582,y:1159,
			questRequirements:[],
			skillRequirements:[{name:"Hunter",quantity:10},{name:"Construction",quantity:34},{name:"Crafting",quantity:30},{name:"Agility",quantity:30},{name:"Thieving",quantity:15},{name:"Mining",quantity:20,iron:true},{name:"Smithing",quantity:20,iron:true}],
			questPointReward:1,
			notes:"ironmen need mahogany plankes" },

			"Contact!":{ x:2900,y:3750,
			questRequirements:[{name:"Icthlarin's Little Helper"}],
			skillRequirements:[],
			questPointReward:1, },

			"Cook's Assistant":{ x:2703,y:2781,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Creature of Fenkenstrain":{ x:3381,y:2102,
			questRequirements:[{name:"Priest in Peril"},{name:"The Restless Ghost"}],
			skillRequirements:[{name:"Crafting",quantity:20},{name:"Thieving",quantity:25},{name:"Mining",quantity:20,iron:true},{name:"Smithing",quantity:20,iron:true}],
			questPointReward:2, },

			"Crocodile Tears":{ x:2700,y:4017,
			questRequirements:[{name:"Dealing with Scabaras"},{name:"The Jack of Spades"},{name:"Missing My Mummy"},{name:"Spirits of the Elid"}],
			skillRequirements:[{name:"Hunter",quantity:73},{name:"Fishing",quantity:72},{name:"Woodcutting",quantity:47},{name:"Agility",quantity:30}],
			questPointReward:1,
			notes:"Also need rank 3 Menaphos Reputation and to Bring Leela back to Senliten's tomb" },

			"The Curse of Arrav":{ x:3123,y:3335,
			questRequirements:[{name:"Defender of Varrock"},{name:"Missing My Mummy"},{name:"Shades of Mort'ton"},{name:"The Tale of the Muspah"},{name:"Troll Romance"}],
			skillRequirements:[{name:"Slayer",quantity:37},{name:"Summoning",quantity:41},{name:"Agility",quantity:61},{name:"Ranged",quantity:64},{name:"Strength",quantity:64},{name:"Mining",quantity:64},{name:"Thieving",quantity:66},{name:"Fletching",quantity:59,iron:true}],
			questPointReward:1,
			notes:"also need Senliten fully restored." },

			"Curse of the Black Stone":{ x:3311,y:1824,
			questRequirements:[{name:"Impressing the Locals"},{name:"Sliske's Endgame",optional:true},{name:"Pieces of Hate",optional:true}],
			skillRequirements:[{name:"Agility",quantity:12},{name:"Woodcutting",quantity:34}],
			questPointReward:4, },

			"The Darkness of Hallowvale":{ x:3509,y:2716,
			questRequirements:[{name:"In Aid of the Myreque"}],
			skillRequirements:[{name:"Construction",quantity:5},{name:"Mining",quantity:20},{name:"Thieving",quantity:22},{name:"Agility",quantity:26},{name:"Crafting",quantity:32},{name:"Magic",quantity:33},{name:"Strength",quantity:40}],
			questPointReward:2, },

			"Deadliest Catch":{ x:1462,y:2365,
			questRequirements:[{name:"Tower of Life"}],
			skillRequirements:[{name:"Herblore",quantity:3},{name:"Hunter",quantity:67},{name:"Thieving",quantity:70},{name:"Fishing",quantity:70}],
			questPointReward:1, },

			"Dealing with Scabaras":{ x:2927,y:3751,
			questRequirements:[{name:"Contact!"},{name:"The Feud"},{name:"Zogre Flesh Eaters"}],
			skillRequirements:[{name:"Firemaking",quantity:21},{name:"Agility",quantity:50},{name:"Thieving",quantity:60},{name:"Strength",quantity:60}],
			questPointReward:1,
			notes:"higher Agility, Thieving and Strength recommended" },

			"The Death of Chivalry":{ x:2386,y:2201,
			questRequirements:[{name:"The World Wakes",optional:true}],
			skillRequirements:[],
			questPointReward:3, },

			"Death Plateau":{ x:2117,y:2085,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Death to the Dorgeshuun":{ x:2598,y:3000,
			questRequirements:[{name:"The Lost Tribe"}],
			skillRequirements:[{name:"Thieving",quantity:23},{name:"Agility",quantity:23}],
			questPointReward:1, },

			"Defender of Varrock":{ x:2689,y:2215,
			questRequirements:[{name:"Demon Slayer"},{name:"Family Crest"},{name:"Garden of Tranquillity"},{name:"The Knight's Sword"},{name:"Shield of Arrav"},{name:"Temple of Ikov"},{name:"What Lies Below"}],
			skillRequirements:[{name:"Agility",quantity:51},{name:"Hunter",quantity:51},{name:"Smithing",quantity:54},{name:"Mining",quantity:59}],
			questPointReward:2, },

			"Demon Slayer":{ x:2785,y:2250,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:3, },

			"Desert Treasure":{ x:2624,y:3125,
			questRequirements:[{name:"The Dig Site"},{name:"Priest in Peril"},{name:"Temple of Ikov"},{name:"The Tourist Trap"},{name:"Troll Stronghold"},{name:"Waterfall Quest"}],
			skillRequirements:[{name:"Slayer",quantity:10},{name:"Firemaking",quantity:50},{name:"Magic",quantity:50},{name:"Thieving",quantity:53},{name:"Mining",quantity:50}],
			questPointReward:3,
			notes:"ironmen need magic logs" },

			"Desperate Measures":{ x:2072,y:2072,
			questRequirements:[{name:"Desperate Times"}],
			skillRequirements:[{name:"Agility",quantity:50},{name:"Archaeology",quantity:50}],
			questPointReward:3, },

			"Desperate Times":{ x:2060,y:2072,
			questRequirements:[{name:"The Needle Skips"},{name:"You Are It"},{name:"Sliske's Endgame",optional:true},{name:"Curse of the Black Stone",optional:true}],
			skillRequirements:[{name:"Mining",quantity:50},{name:"Smithing",quantity:50},{name:"Divination",quantity:50}],
			questPointReward:3, },

			"Devious Minds":{ x:3069,y:2245,pictureName:fithAgePicStr,
			questRequirements:[{name:"Troll Stronghold"},{name:"Wanted!"},{name:"What's Mine is Yours"},{name:"Enter the Abyss"}],
			skillRequirements:[{name:"Runecrafting",quantity:50},{name:"Fletching",quantity:50},{name:"Smithing",quantity:65}],
			questPointReward:1, },

			"Diamond in the Rough":{ x:2870,y:2844,
			questRequirements:[{name:"Stolen Hearts"}],
			skillRequirements:[],
			questPointReward:1, },

			"The Dig Site":{ x:2994,y:2520,
			questRequirements:[],
			skillRequirements:[{name:"Thieving",quantity:25},{name:"Agility",quantity:10},{name:"Herblore",quantity:10}],
			questPointReward:2, },

			"Dimension of Disaster":{ x:2690,y:2362,
			questRequirements:[{name:"The Curse of Arrav"},{name:"Shadow of the Storm"}],
			skillRequirements:[],
			questPointReward:10, },

			"Dishonour among Thieves":{ x:3041,y:2241,
			questRequirements:[{name:"Hazeel Cult"},{name:"Missing, Presumed Death"},{name:"Nomad's Requiem",optional:true},{name:"Nadir",optional:true}],///priest in peril?
			skillRequirements:[{name:"Agility",quantity:30},{name:"Thieving",quantity:30}],
			questPointReward:2, },

			"Do No Evil":{ x:1879,y:3637,
			questRequirements:[{name:"Animal Magnetism"},{name:"Dealing with Scabaras"},{name:"Desert Treasure"},{name:"Missing My Mummy"},{name:"Recipe for Disaster: Freeing King Awowogei",partial:true},{name:"Shadow of the Storm"},{name:"Smoking Kills"},{name:"Garden of Tranquillity"},{name:"Creature of Fenkenstrain"}],
			skillRequirements:[{name:"Ranged",quantity:50},{name:"Construction",quantity:64},{name:"Crafting",quantity:68},{name:"Magic",quantity:70},{name:"Thieving",quantity:70}],
			questPointReward:1,
			notes:"also need to Bring Leela back to Senliten's tomb" },

			"Dragon Slayer":{ x:2666,y:2497,
			questRequirements:[],
			skillRequirements:[{name:"Quest Point",quantity:33}],
			questPointReward:2,
			notes:"37 paryer and 40+ in a combat stat is recommended" },

			"Dream Mentor":{ x:567,y:1317,
			questRequirements:[{name:"Eadgar's Ruse"},{name:"Lunar Diplomacy"}],
			skillRequirements:[{name:"Combat",quantity:85}],
			questPointReward:2, },

			"Druidic Ritual":{ x:2104,y:2206,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:4, },

			"Dwarf Cannon":{ x:1439,y:2253,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Eadgar's Ruse":{ x:2050,y:1862,
			questRequirements:[{name:"Druidic Ritual"},{name:"Troll Stronghold"}],
			skillRequirements:[{name:"Herblore",quantity:31},{name:"Agility",quantity:15}],
			questPointReward:1, },

			"Eagles' Peak":{ x:946,y:2234,
			questRequirements:[],
			skillRequirements:[{name:"Hunter",quantity:27}],
			questPointReward:2, },

			"The Elder Kiln":{ x:1995,y:2877,
			questRequirements:[],
			skillRequirements:[{name:"Magic",quantity:75},{name:"Agility",quantity:60},{name:"Mining",quantity:41}],
			questPointReward:2, },

			"Elemental Workshop I":{ x:1700,y:2235,
			questRequirements:[],
			skillRequirements:[{name:"Mining",quantity:20},{name:"Smithing",quantity:20},{name:"Crafting",quantity:20}],
			questPointReward:1, },

			"Elemental Workshop II":{ x:1700,y:2205,
			questRequirements:[{name:"Elemental Workshop I"}],
			skillRequirements:[{name:"Magic",quantity:20},{name:"Smithing",quantity:30}],
			questPointReward:1, },

			"Elemental Workshop III":{ x:1700,y:2175,
			questRequirements:[{name:"Elemental Workshop II"}],
			skillRequirements:[{name:"Defence",quantity:33},{name:"Mining",quantity:20},{name:"Smithing",quantity:33}],
			questPointReward:1, },

			"Elemental Workshop IV":{ x:1700,y:2145,
			questRequirements:[{name:"Elemental Workshop III"}],
			skillRequirements:[{name:"Crafting",quantity:41},{name:"Runecrafting",quantity:39},{name:"Thieving",quantity:39},{name:"Defence",quantity:40},{name:"Smithing",quantity:42}],
			questPointReward:2, },

			"Enakhra's Lament":{ x:2657,y:3339,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:50},{name:"Firemaking",quantity:45},{name:"Magic",quantity:13},{name:"Mining",quantity:45,iron:true}],
			questPointReward:2, },

			"Enlightened Journey":{ x:1907,y:2466,
			questRequirements:[],
			skillRequirements:[{name:"Quest Point",quantity:21},{name:"Firemaking",quantity:20},{name:"Farming",quantity:30},{name:"Crafting",quantity:36}],
			questPointReward:1, },

			"Ernest the Chicken":{ x:2506,y:2552,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:4, },

			/////quest req: partial
			"Evil Dave's Big Day Out":{ x:2438,y:2212,
			questRequirements:[{name:"Recipe for Disaster: Freeing Evil Dave"}],
			skillRequirements:[{name:"Agility",quantity:30},{name:"Cooking",quantity:30},{name:"Herblore",quantity:30},{name:"Magic",quantity:30}],
			questPointReward:2, },

			"The Eyes of Glouphrie":{ x:1095,y:2368,
			questRequirements:[{name:"The Grand Tree"}],
			skillRequirements:[{name:"Construction",quantity:5},{name:"Magic",quantity:46}],
			questPointReward:2, },

			"A Fairy Tale I - Growing Pains":{ x:2690,y:2840,
			questRequirements:[{name:"Lost City"},{name:"Nature Spirit"}],
			skillRequirements:[],
			questPointReward:2,
			notes:"you may need to start Jungle Potion if volencia moss is requested" },

			"A Fairy Tale II - Cure a Queen":{ x:2690,y:2870,
			questRequirements:[{name:"A Fairy Tale I - Growing Pains"}],
			skillRequirements:[{name:"Thieving",quantity:40},{name:"Farming",quantity:49},{name:"Herblore",quantity:57}],
			questPointReward:2, },

			"A Fairy Tale III - Battle at Ork's Rift":{ x:2690,y:2900,
			questRequirements:[{name:"A Fairy Tale II - Cure a Queen"}],
			skillRequirements:[{name:"Magic",quantity:59},{name:"Farming",quantity:54},{name:"Thieving",quantity:51},{name:"Summoning",quantity:37},{name:"Crafting",quantity:36}],
			questPointReward:2, },

			"Family Crest":{ x:2844,y:2410,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:40},{name:"Smithing",quantity:40},{name:"Mining",quantity:40},{name:"Magic",quantity:59}],
			questPointReward:1,
			notes:"ironmen need 45 cooking and 50 fishing or a drop" },

			"Fate of the Gods":{ x:1019,y:2502,
			questRequirements:[{name:"Missing, Presumed Death"}],
			skillRequirements:[{name:"Summoning",quantity:67},{name:"Agility",quantity:73},{name:"Divination",quantity:75},{name:"Slayer",quantity:76},{name:"Magic",quantity:79}],
			questPointReward:2, },

			"The Feud":{ x:2890,y:2795,
			questRequirements:[],
			skillRequirements:[{name:"Thieving",quantity:30}],
			questPointReward:1, },

			"Fight Arena":{ x:1473,y:2885,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2,
			notes:"need to beat up to a level 77 monster" },

			"The Firemaker's Curse":{ x:1011,y:2416,///////exact start?
			questRequirements:[],
			skillRequirements:[{name:"Firemaking",quantity:74},{name:"Constitution",quantity:76},{name:"Agility",quantity:64}],
			questPointReward:2, },

			"Fishing Contest":{ x:1947,y:2240,
			questRequirements:[],
			skillRequirements:[{name:"Fishing",quantity:10}],
			questPointReward:1, },

			"Forgettable Tale of a Drunken Dwarf":{ x:1705,y:1781,
			questRequirements:[{name:"The Giant Dwarf"},{name:"Fishing Contest"}],
			skillRequirements:[{name:"Cooking",quantity:22},{name:"Farming",quantity:17}],
			questPointReward:2, },

			"Forgiveness of a Chaos Dwarf":{ x:1712,y:1806,pictureName:fithAgePicStr,
			questRequirements:[{name:"Forgettable Tale of a Drunken Dwarf"},{name:"Between a Rock"}],
			skillRequirements:[{name:"Hunter",quantity:61},{name:"Firemaking",quantity:61},{name:"Strength",quantity:69}],
			questPointReward:2, },

			"The Fremennik Isles":{ x:1020,y:1576,
			questRequirements:[{name:"The Fremennik Trials"}],
			skillRequirements:[{name:"Construction",quantity:20},{name:"Crafting",quantity:46},{name:"Agility",quantity:40},{name:"Woodcutting",quantity:56}],
			questPointReward:1, },

			"The Fremennik Trials":{ x:1600,y:1871,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:40},{name:"Fletching",quantity:25},{name:"Woodcutting",quantity:40}],
			questPointReward:3,
			notes:"need to beat a level 96 npc" },

			"Fur'n'Seek":{ x:3058,y:2174,
			questRequirements:[{name:"Rag and Bone Man"}],
			skillRequirements:[{name:"Slayer",quantity:25}],
			questPointReward:2,
			notes:"50 combat is recommended" },

			"Garden of Tranquillity":{ x:2741,y:2229,
			questRequirements:[{name:"Creature of Fenkenstrain"}],
			skillRequirements:[{name:"Farming",quantity:25}],
			questPointReward:2, },

			"Gertrude's Cat":{ x:2585,y:2394,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Ghosts Ahoy":{ x:3601,y:2192,
			questRequirements:[{name:"Priest in Peril"},{name:"The Restless Ghost"}],
			skillRequirements:[{name:"Agility",quantity:25},{name:"Cooking",quantity:20}],
			questPointReward:2, },

			"The Giant Dwarf":{ x:1703,y:1753,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:12},{name:"Firemaking",quantity:16},{name:"Magic",quantity:33},{name:"Thieving",quantity:14},{name:"Mining",quantity:20,iron:true},{name:"Smithing",quantity:10,iron:true}],
			questPointReward:2, },

			"Glorious Memories":{ x:1600,y:1839,
			questRequirements:[{name:"Royal Trouble"},{name:"The Fremennik Isles"},{name:"Mountain Daughter"}],
			skillRequirements:[{name:"Magic",quantity:57},{name:"Agility",quantity:50},{name:"Herblore",quantity:43},{name:"Hunter",quantity:41}],
			questPointReward:1, },

			"Goblin Diplomacy":{ x:2197,y:2184,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:5, },

			"The Golem":{ x:3258,y:3031,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:20},{name:"Thieving",quantity:25}],
			questPointReward:1, },

			"Gower Quest":{ x:2791,y:2522,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"The Grand Tree":{ x:1215,y:2222,
			questRequirements:[],
			skillRequirements:[{name:"Agility",quantity:25}],
			questPointReward:5, },

			"The Great Brain Robbery":{ x:3854,y:3564,
			questRequirements:[{name:"Creature of Fenkenstrain"},{name:"Cabin Fever"},{name:"Recipe for Disaster: Freeing Pirate Pete"}],
			skillRequirements:[{name:"Crafting",quantity:16},{name:"Construction",quantity:30},{name:"Prayer",quantity:50}],
			questPointReward:2, },

			"Grim Tales":{ x:2107,y:2457,
			questRequirements:[{name:"Witch's House"}],
			skillRequirements:[{name:"Farming",quantity:45},{name:"Herblore",quantity:52},{name:"Thieving",quantity:58},{name:"Agility",quantity:59},{name:"Woodcutting",quantity:71}],
			questPointReward:1, },

			"Gunnar's Ground":{ x:2480,y:2360,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:5}],
			questPointReward:5, },

			"The Hand in the Sand":{ x:1371,y:3015,
			questRequirements:[],
			skillRequirements:[{name:"Thieving",quantity:17},{name:"Crafting",quantity:49}],
			questPointReward:1, },

			"Haunted Mine":{ x:3166,y:2743,
			questRequirements:[{name:"Priest in Peril"}],
			skillRequirements:[{name:"Agility",quantity:15},{name:"Crafting",quantity:35}],
			questPointReward:2,
			notes:"the boss is hard to hit" },

			"Hazeel Cult":{ x:1420,y:2682,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Heart of Stone":{ x:2510,y:2849,
			questRequirements:[{name:"Carnillean Rising"},{name:"Rune Memories"},{name:"Rune Mechanics",optional:true},{name:"The Elder Kiln",optional:true},{name:"Fate of the Gods",optional:true}],
			skillRequirements:[{name:"Runecrafting",quantity:25},{name:"Magic",quantity:35}],
			questPointReward:1, },

			"Hero's Welcome":{ x:1535,y:1789,
			questRequirements:[{name:"Lunar Diplomacy"},{name:"Barbarian Training"},{name:"The World Wakes",optional:true},{name:"Ritual of the Mahjarrat",optional:true},{name:"One of a Kind",optional:true}],
			skillRequirements:[{name:"Divination",quantity:60},{name:"Mining",quantity:67},{name:"Slayer",quantity:62},{name:"Smithing",quantity:67}],
			questPointReward:2, },

			"Heroes' Quest":{ x:2102,y:2182,
			questRequirements:[{name:"Shield of Arrav"},{name:"Lost City"},{name:"Dragon Slayer"},{name:"Merlin's Crystal"},{name:"Druidic Ritual"}],
			skillRequirements:[{name:"Quest Point",quantity:56},{name:"Cooking",quantity:53},{name:"Fishing",quantity:53},{name:"Herblore",quantity:25},{name:"Defence",quantity:25},{name:"Mining",quantity:50}],/////defence only for black gang members
			questPointReward:1, },

			"Holy Grail":{ x:1805,y:2184,
			questRequirements:[{name:"Merlin's Crystal"}],
			skillRequirements:[{name:"Attack",quantity:30}],
			questPointReward:2, },

			"Horror from the Deep":{ x:1300,y:1928,
			questRequirements:[{name:"Bar Crawl"}],
			skillRequirements:[{name:"Agility",quantity:35}],
			questPointReward:2, },

			"Hunt for Red Raktuber":{ x:1561,y:3000,
			questRequirements:[{name:"Cold War"},{name:"Sea Slug"}],
			skillRequirements:[{name:"Thieving",quantity:38},{name:"Construction",quantity:45},{name:"Hunter",quantity:45}],
			questPointReward:1, },

			"Icthlarin's Little Helper":{ x:2914,y:3503,pictureName:fithAgePicStr,
			questRequirements:[{name:"Diamond in the Rough"},{name:"Gertrude's Cat"}],
			skillRequirements:[],
			questPointReward:2, },

			"Imp Catcher":{ x:2501,y:2912,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Impressing the Locals":{ x:2343,y:2816,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"In Aid of the Myreque":{ x:3264,y:2747,
			questRequirements:[{name:"In Search of the Myreque"}],
			skillRequirements:[{name:"Crafting",quantity:25},{name:"Magic",quantity:7},{name:"Mining",quantity:15},{name:"Mining",quantity:30,iron:true},{name:"Smithing",quantity:30,iron:true}],
			questPointReward:2, },

			"In Pyre Need":{ x:878,y:1953,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[{name:"Firemaking",quantity:55},{name:"Crafting",quantity:52},{name:"Fletching",quantity:53}],
			questPointReward:1, },

			"In Search of the Myreque":{ x:3283,y:2258,
			questRequirements:[{name:"Nature Spirit"}],
			skillRequirements:[{name:"Agility",quantity:25}],
			questPointReward:2, },

			"The Jack of Spades":{ x:2696,y:3572,
			questRequirements:[{name:"Diamond in the Rough"}],
			skillRequirements:[],
			questPointReward:1, },

			"Jungle Potion":{ x:1892,y:3037,
			questRequirements:[],
			skillRequirements:[{name:"Herblore",quantity:3}],
			questPointReward:1, },

			"Kennith's Concerns":{ x:1715,y:2634,pictureName:fithAgePicStr,
			questRequirements:[{name:"The Slug Menace"}],
			skillRequirements:[{name:"Mining",quantity:46}],
			questPointReward:1, },

			"Kindred Spirits":{ x:2051,y:2183,
			questRequirements:[{name:"Missing, Presumed Death"}],
			skillRequirements:[{name:"Agility",quantity:60},{name:"Crafting",quantity:60},{name:"Herblore",quantity:60},{name:"Smithing",quantity:60}],
			questPointReward:1, },

			"King of the Dwarves":{ x:1745,y:1810,
			questRequirements:[{name:"Forgiveness of a Chaos Dwarf"},{name:"My Arm's Big Adventure"}],
			skillRequirements:[{name:"Mining",quantity:68},{name:"Smithing",quantity:70},{name:"Strength",quantity:77}],
			questPointReward:2, },

			"King's Ransom":{ x:1794,y:2154,pictureName:fithAgePicStr,
			questRequirements:[{name:"Holy Grail"},{name:"Murder Mystery"},{name:"One Small Favour"}],
			skillRequirements:[{name:"Magic",quantity:45},{name:"Defence",quantity:65}],
			questPointReward:1, },

			"The Knight's Sword":{ x:2223,y:2524,
			questRequirements:[],
			skillRequirements:[{name:"Mining",quantity:10},{name:"Cooking",quantity:10,iron:true},{name:"Smithing",quantity:10,iron:true}],
			questPointReward:1, },

			"Land of the Goblins":{ x:2588,y:3032,
			questRequirements:[{name:"Another Slice of H.A.M."},{name:"Fishing Contest"}],
			skillRequirements:[{name:"Prayer",quantity:30},{name:"Agility",quantity:36},{name:"Fishing",quantity:36},{name:"Thieving",quantity:36},{name:"Herblore",quantity:37}],
			questPointReward:1, },

			"Legacy of Seergaze":{ x:3570,y:2636,
			questRequirements:[{name:"The Darkness of Hallowvale"},{name:"Shades of Mort'ton",optional:true}],
			skillRequirements:[{name:"Construction",quantity:20},{name:"Agility",quantity:29},{name:"Slayer",quantity:31},{name:"Mining",quantity:35},{name:"Firemaking",quantity:40},{name:"Crafting",quantity:47},{name:"Magic",quantity:49}],
			questPointReward:2, },

			"Legends' Quest":{ x:1741,y:2481,/////magic req not needed (family crest needs 59)
			questRequirements:[{name:"Family Crest"},{name:"Heroes' Quest"},{name:"Shilo Village"},{name:"Underground Pass"},{name:"Waterfall Quest"}],
			skillRequirements:[{name:"Quest Point",quantity:107},{name:"Agility",quantity:50},{name:"Crafting",quantity:50},{name:"Herblore",quantity:45},{name:"Magic",quantity:56},{name:"Mining",quantity:52},{name:"Prayer",quantity:42},{name:"Smithing",quantity:50},{name:"Strength",quantity:50},{name:"Thieving",quantity:50},{name:"Woodcutting",quantity:50}],
			questPointReward:4,
			notes:"50 range is recommended" },

			"Let Them Eat Pie":{ x:2064,y:2317,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"The Light Within":{ x:702,y:2420,
			questRequirements:[{name:"Fate of the Gods"},{name:"Meeting History"},{name:"Plague's End"},{name:"The Temple at Senntisten"},{name:"The World Wakes"}],
			skillRequirements:[{name:"Agility",quantity:80},{name:"Crafting",quantity:80},{name:"Divination",quantity:80},{name:"Herblore",quantity:80},{name:"Prayer",quantity:80},{name:"Slayer",quantity:80},{name:"Woodcutting",quantity:80},{name:"Crafting",quantity:89,iron:true},{name:"Mining",quantity:81,iron:true}],
			questPointReward:2, },

			"The Lord of Vampyrium":{ x:3388,y:2495,
			questRequirements:[{name:"The Branches of Darkmeyer"}],
			skillRequirements:[{name:"Attack",quantity:75},{name:"Defence",quantity:75},{name:"Strength",quantity:75},{name:"Constitution",quantity:75},{name:"Construction",quantity:79},{name:"Slayer",quantity:78},{name:"Hunter",quantity:76}],
			questPointReward:2, },

			"Lost City":{ x:2656,y:2897,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:31},{name:"Woodcutting",quantity:36}],
			questPointReward:3,
			notes:"need to kill a level 63 spirit while bringing no armour or weapons" },

			"The Lost Tribe":{ x:2534,y:3029,
			questRequirements:[{name:"Goblin Diplomacy"}],
			skillRequirements:[{name:"Agility",quantity:13},{name:"Mining",quantity:17},{name:"Thieving",quantity:13}],
			questPointReward:1, },

			"Love Story":{ x:2572,y:2605,
			questRequirements:[{name:"Swan Song"},{name:"Recipe for Disaster: Freeing Sir Amik Varze"}],
			skillRequirements:[{name:"Magic",quantity:77},{name:"Construction",quantity:68},{name:"Smithing",quantity:68},{name:"Crafting",quantity:67}],
			questPointReward:2, },

			"Lunar Diplomacy":{ x:583,y:1474,
			questRequirements:[{name:"Lost City"},{name:"The Fremennik Trials"},{name:"Shilo Village"}],
			skillRequirements:[{name:"Crafting",quantity:61},{name:"Defence",quantity:40},{name:"Firemaking",quantity:49},{name:"Mining",quantity:60},{name:"Herblore",quantity:5},{name:"Magic",quantity:65},{name:"Woodcutting",quantity:55}],
			questPointReward:2, },

			"Making History":{ x:1154,y:2517,pictureName:fithAgePicStr,
			questRequirements:[{name:"The Restless Ghost"},{name:"Priest in Peril"}],
			skillRequirements:[{name:"Crafting",quantity:24,iron:true}],
			questPointReward:3, },

			"Meeting History":{ x:1180,y:2517,pictureName:fithAgePicStr,
			questRequirements:[{name:"Making History"}],
			skillRequirements:[{name:"Herblore",quantity:3}],
			questPointReward:1, },

			"Merlin's Crystal":{ x:1813,y:2223,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:6, },

			"The Mighty Fall":{ x:2628,y:3059,
			questRequirements:[{name:"Missing, Presumed Death"},{name:"The Chosen Commander"},{name:"My Arm's Big Adventure"},{name:"The Hunt for Surok"}],
			skillRequirements:[{name:"Slayer",quantity:69},{name:"Defence",quantity:72},{name:"Constitution",quantity:78},{name:"Attack",quantity:79},{name:"Strength",quantity:79}],
			questPointReward:2, },

			"Missing My Mummy":{ x:3278,y:3166,
			questRequirements:[{name:"The Golem"},{name:"Icthlarin's Little Helper"},{name:"Diamond in the Rough"}],
			skillRequirements:[{name:"Construction",quantity:35},{name:"Cooking",quantity:35},{name:"Crafting",quantity:35},{name:"Magic",quantity:35},{name:"Prayer",quantity:35}],
			questPointReward:1,
			notes:"combat with level 42-70 monsters" },

			"Missing, Presumed Death":{ x:3011,y:2235,
			questRequirements:[{name:"The World Wakes",optional:true},{name:"Ritual of the Mahjarrat",optional:true},{name:"The Death of Chivalry",optional:true},{name:"Koschei's Troubles",optional:true},{name:"The Chosen Commander",optional:true}],
			skillRequirements:[],
			questPointReward:2, },

			"Monk's Friend":{ x:1494,y:2790,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Monkey Madness":{ x:1808,y:3804,
			questRequirements:[{name:"The Grand Tree"},{name:"Tree Gnome Village"}],
			skillRequirements:[],
			questPointReward:3,
			notes:"defeat a level 70 jungle demon" },

			"Mountain Daughter":{ x:1854,y:1864,
			questRequirements:[],
			skillRequirements:[{name:"Agility",quantity:20}],
			questPointReward:2,
			notes:"defeat a level 32 monster" },

			"Mourning's End Part I":{ x:1117,y:2678,pictureName:fithAgePicStr,
			questRequirements:[{name:"Big Chompy Bird Hunting"},{name:"Sheep Herder"},{name:"Roving Elves"}],
			skillRequirements:[{name:"Ranged",quantity:60},{name:"Thieving",quantity:50}],
			questPointReward:2, },

			"Mourning's End Part II":{ x:1060,y:2678,pictureName:fithAgePicStr,
			questRequirements:[{name:"Mourning's End Part I"}],
			skillRequirements:[],
			questPointReward:2, },

			"Murder Mystery":{ x:1765,y:2052,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:3, },

			"My Arm's Big Adventure":{ x:1903,y:1854,
			questRequirements:[{name:"Eadgar's Ruse"},{name:"The Feud"},{name:"Jungle Potion"}],
			skillRequirements:[{name:"Woodcutting",quantity:10},{name:"Farming",quantity:29}],
			questPointReward:1,
			notes:"61 magic recommended for Trollheim teleport" },

			"Myths of the White Lands":{ x:2692,y:2727,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2,
			notes:"30 Crafting, 55 Agility, and 80 Woodcutting can give you additional rewards" },

			"Nature Spirit":{ x:3163,y:2536,pictureName:fithAgePicStr,
			questRequirements:[{name:"Priest in Peril"},{name:"The Restless Ghost"}],
			skillRequirements:[{name:"Crafting",quantity:18,iron:true},{name:"Smithing",quantity:20,iron:true}],
			questPointReward:2, },

			"The Needle Skips":{ x:677,y:1850,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Nomad's Elegy":{ x:709,y:3524,
			questRequirements:[{name:"Dishonour among Thieves"},{name:"Heart of Stone"},{name:"The Mighty Fall"},{name:"Throne of Miscellania"},{name:"Nomad's Requiem"},{name:"The Void Stares Back"},{name:"While Guthix Sleeps",optional:true},{name:"Blood Runs Deep",optional:true}],
			skillRequirements:[{name:"Mining",quantity:75},{name:"Construction",quantity:75},{name:"Woodcutting",quantity:75}],
			questPointReward:1, },

			"Nomad's Requiem":{ x:709,y:3489,
			questRequirements:[{name:"King's Ransom"},{name:"Knight Waves training ground"}],///////king's ransome redundant?
			skillRequirements:[{name:"Magic",quantity:75},{name:"Prayer",quantity:70},{name:"Mining",quantity:66},{name:"Hunter",quantity:65},{name:"Construction",quantity:60}],
			questPointReward:3,
			notes:"76 Constitution recommended" },

			"Observatory Quest":{ x:1163,y:2887,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2, },

			"Olaf's Quest":{ x:1771,y:1722,
			questRequirements:[{name:"The Fremennik Trials"}],
			skillRequirements:[{name:"Firemaking",quantity:40},{name:"Woodcutting",quantity:50}],
			questPointReward:1,
			notes:"high Agility recommended" },

			"Once Upon a Slime":{ x:2195,y:2785,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"One of a Kind":{ x:2804,y:2312,
			questRequirements:[{name:"A Tail of Two Cats"},{name:"The World Wakes"},{name:"King's Ransom"},{name:"Missing, Presumed Death"}],
			skillRequirements:[{name:"Divination",quantity:40},{name:"Dungeoneering",quantity:67},{name:"Summoning",quantity:74},{name:"Magic",quantity:81}],
			questPointReward:1,
			notes:"completing Ritual of the Mahjarrat unlocks an additional reward" },

			"One Piercing Note":{ x:3152,y:2881,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2, },

			"One Small Favour":{ x:1954,y:3242,
			questRequirements:[{name:"Rune Mysteries"},{name:"Shilo Village"},{name:"Druidic Ritual"}],
			skillRequirements:[{name:"Herblore",quantity:18},{name:"Crafting",quantity:25},{name:"Smithing",quantity:30},{name:"Agility",quantity:36},{name:"Herblore",quantity:20,iron:true},{name:"Mining",quantity:20,iron:true}],
			questPointReward:2, },

			"Our Man in the North":{ x:2680,y:3673,
			questRequirements:[{name:"Do No Evil"},{name:"Crocodile Tears"}],
			skillRequirements:[],
			questPointReward:1,
			notes:"also need rank 6 Menaphos reputaion" },

			"The Path of Glouphrie":{ x:925,y:3010,
			questRequirements:[{name:"Waterfall Quest"},{name:"The Eyes of Glouphrie"},{name:"Tree Gnome Village"}],
			skillRequirements:[{name:"Strength",quantity:60},{name:"Thieving",quantity:56},{name:"Slayer",quantity:56},{name:"Ranged",quantity:47},{name:"Agility",quantity:45}],
			questPointReward:1,
			notes:"ironmen need a mithril grapple" },

			"Perils of Ice Mountain":{ x:2280,y:2307,
			questRequirements:[],
			skillRequirements:[{name:"Farming",quantity:5},{name:"Hunter",quantity:5},{name:"Thieving",quantity:5},{name:"Construction",quantity:5}],
			questPointReward:1, },

			"'Phite Club":{ x:2570,y:3753,
			questRequirements:[{name:"Our Man in the North"}],
			skillRequirements:[],
			questPointReward:1,
			notes:"also need rank 9 Menaphos reputaion. 85 Magic or Ranged recommended." },

			"Pieces of Hate":{ x:3521,y:3413,
			questRequirements:[{name:"Gertrude's Cat"},{name:"A Clockwork Syringe"}],
			skillRequirements:[{name:"Construction",quantity:81},{name:"Firemaking",quantity:82},{name:"Agility",quantity:83},{name:"Thieving",quantity:85}],
			questPointReward:2, },

			"Pirate's Treasure":{ x:2378,y:2685,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2, },

			"Plague City":{ x:1339,y:2600,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Plague's End":{ x:762,y:2690,
			questRequirements:[{name:"Making History"},{name:"Catapult Construction"},{name:"Within the Light"}],
			skillRequirements:[{name:"Agility",quantity:75},{name:"Construction",quantity:75},{name:"Crafting",quantity:75},{name:"Dungeoneering",quantity:75},{name:"Herblore",quantity:75},{name:"Mining",quantity:75},{name:"Prayer",quantity:75},{name:"Ranged",quantity:75},{name:"Summoning",quantity:75},{name:"Woodcutting",quantity:75}],
			questPointReward:2, },

			"Priest in Peril":{ x:3092,y:2212,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1,
			notes:"must defeat a level 33 Ceberus" },

			"The Prisoner of Glouphrie":{ x:1079,y:2805,
			questRequirements:[{name:"The Path of Glouphrie"},{name:"Roving Elves"}],
			skillRequirements:[{name:"Agility",quantity:64},{name:"Construction",quantity:62},{name:"Runecrafting",quantity:61},{name:"Thieving",quantity:64}],
			questPointReward:1, },

			"Quiet Before the Swarm":{ x:1594,y:3866,
			questRequirements:[{name:"Imp Catcher"},{name:"Wanted!"}],
			skillRequirements:[{name:"Attack",quantity:35},{name:"Strength",quantity:42}],
			questPointReward:1, },

			"Rag and Bone Man":{ x:3004,y:2197,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2,
			notes:"should be able to beat a level 52 monster" },

			"Rat Catchers":{ x:2584,y:2420,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2, },

			"Recipe for Disaster: Another Cook's Quest":{ x:2675,y:2777,pictureName:"Quest Icons/Recipe for Disaster Another Cook's Quest.png",
			questRequirements:[{name:"Cook's Assistant"}],
			skillRequirements:[{name:"Cooking",quantity:10}],
			questPointReward:1, },

			"Recipe for Disaster: Freeing the Goblin Generals":{ x:2623,y:2600,pictureName:"Quest Icons/Recipe for Disaster Freeing the Goblin Generals.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"},{name:"Goblin Diplomacy"}],
			skillRequirements:[],
			questPointReward:1, },

			"Recipe for Disaster: Freeing the Mountain Dwarf":{ x:2623,y:2630,pictureName:"Quest Icons/Recipe for Disaster Freeing the Mountain Dwarf.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"},{name:"Fishing Contest"}],
			skillRequirements:[],
			questPointReward:1, },

			"Recipe for Disaster: Freeing Evil Dave":{ x:2623,y:2660,pictureName:"Quest Icons/Recipe for Disaster Freeing Evil Dave.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"},{name:"Gertrude's Cat"},{name:"Shadow of the Storm"}],
			skillRequirements:[{name:"Cooking",quantity:25}],
			questPointReward:1, },

			"Recipe for Disaster: Freeing the Lumbridge Sage":{ x:2623,y:2690,pictureName:"Quest Icons/Recipe for Disaster Freeing the Lumbridge Sage.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"},{name:"Big Chompy Bird Hunting"},{name:"Biohazard"},{name:"Demon Slayer"},{name:"Murder Mystery"},{name:"Nature Spirit"},{name:"Witch's House"}],
			skillRequirements:[{name:"Cooking",quantity:40}],
			questPointReward:1, },

			"Recipe for Disaster: Freeing Pirate Pete":{ x:2623,y:2720,pictureName:"Quest Icons/Recipe for Disaster Freeing Pirate Pete.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"}],
			skillRequirements:[],
			questPointReward:1, },

			"Recipe for Disaster: Freeing Skrach Uglogwee":{ x:2623,y:2750,pictureName:"Quest Icons/Recipe for Disaster Freeing Skrach Uglogwee.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"},{name:"Big Chompy Bird Hunting"}],
			skillRequirements:[{name:"Cooking",quantity:41},{name:"Firemaking",quantity:20}],
			questPointReward:1, },

			"Recipe for Disaster: Freeing Sir Amik Varze":{ x:2623,y:2780,pictureName:"Quest Icons/Recipe for Disaster Freeing Sir Amik Varze.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"},{name:"Lost City"},{name:"Legends' Quest"}],//////started legends quest
			skillRequirements:[],
			questPointReward:1,
			notes:"must beat a level 100 dragon" },

			"Recipe for Disaster: Freeing King Awowogei":{ x:2623,y:2810,pictureName:"Quest Icons/Recipe for Disaster Freeing King Awowogei.png",
			questRequirements:[{name:"Recipe for Disaster: Another Cook's Quest"},{name:"Monkey Madness"}],
			skillRequirements:[{name:"Cooking",quantity:70},{name:"Agility",quantity:48}],
			questPointReward:1, },

			"Recipe for Disaster: Defeating the Culinaromancer":{ x:2700,y:2752,pictureName:"Quest Icons/Recipe for Disaster Defeating the Culinaromancer.png",
			questRequirements:[{name:"Recipe for Disaster: Freeing the Goblin Generals"},{name:"Recipe for Disaster: Freeing the Mountain Dwarf"},{name:"Recipe for Disaster: Freeing Evil Dave"},
						{name:"Recipe for Disaster: Freeing the Lumbridge Sage"},{name:"Recipe for Disaster: Freeing Pirate Pete"},{name:"Recipe for Disaster: Freeing Skrach Uglogwee"},
						{name:"Recipe for Disaster: Freeing Sir Amik Varze"},{name:"Recipe for Disaster: Freeing King Awowogei"},{name:"Desert Treasure"},{name:"Horror from the Deep"}],
			skillRequirements:[{name:"Quest Point",quantity:176}],
			questPointReward:1, },

			"Recruitment Drive":{ x:2278,y:2463,
			questRequirements:[],
			skillRequirements:[{name:"Herblore",quantity:3}],
			questPointReward:1, },

			"Regicide":{ x:656,y:2926,pictureName:fithAgePicStr,
			questRequirements:[{name:"Underground Pass"}],
			skillRequirements:[{name:"Agility",quantity:56},{name:"Crafting",quantity:10}],
			questPointReward:3, },

			"The Restless Ghost":{ x:2773,y:2777,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Ritual of the Mahjarrat":{ x:2065,y:1456,
			questRequirements:[{name:"Enakhra's Lament"},{name:"A Fairy Tale III - Battle at Ork's Rift"},{name:"Fight Arena"},
						{name:"Hazeel Cult"},{name:"Rocking Out"},{name:"The Slug Menace"},
						{name:"A Tail of Two Cats"},{name:"The Temple at Senntisten"},{name:"While Guthix Sleeps"},
						{name:"The General's Shadow",optional:true}],
			skillRequirements:[{name:"Crafting",quantity:76},{name:"Agility",quantity:77},{name:"Mining",quantity:76}],
			questPointReward:3, },

			"River of Blood":{ x:3386,y:2455,
			questRequirements:[{name:"The Lord of Vampyrium"},{name:"Defender of Varrock"},{name:"All Fired Up"}],
			skillRequirements:[{name:"Herblore",quantity:80},{name:"Constitution",quantity:80},{name:"Attack",quantity:78},{name:"Ranged",quantity:78},{name:"Magic",quantity:78},{name:"Firemaking",quantity:76},{name:"Fletching",quantity:75},{name:"Mining",quantity:72}],
			questPointReward:3, },

			"Rocking Out":{ x:2349,y:3247,pictureName:fithAgePicStr,
			questRequirements:[{name:"The Great Brain Robbery"}],
			skillRequirements:[{name:"Agility",quantity:60},{name:"Thieving",quantity:63},{name:"Crafting",quantity:66},{name:"Smithing",quantity:69}],
			questPointReward:2, },

			"Roving Elves":{ x:863,y:2818,pictureName:fithAgePicStr,
			questRequirements:[{name:"Regicide"},{name:"Waterfall Quest"}],
			skillRequirements:[],
			questPointReward:1, },

			"Royal Trouble":{ x:1511,y:1456,
			questRequirements:[{name:"Throne of Miscellania"}],
			skillRequirements:[{name:"Agility",quantity:40},{name:"Slayer",quantity:40}],
			questPointReward:1, },

			"Rum Deal":{ x:3641,y:2136,
			questRequirements:[{name:"Priest in Peril"},{name:"Zogre Flesh Eaters"}],
			skillRequirements:[{name:"Farming",quantity:40},{name:"Crafting",quantity:42},{name:"Prayer",quantity:47},{name:"Fishing",quantity:50},{name:"Slayer",quantity:42}],
			questPointReward:2, },

			"Rune Mechanics":{ x:3010,y:2600,
			questRequirements:[],
			skillRequirements:[{name:"Magic",quantity:27},{name:"Runecrafting",quantity:20},{name:"Construction",quantity:25}],
			questPointReward:1, },

			"Rune Memories":{ x:2548,y:2916,
			questRequirements:[{name:"Rune Mysteries"}],
			skillRequirements:[],
			questPointReward:1, },

			"Rune Mysteries":{ x:2548,y:2873,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Salt in the Wound":{ x:1762,y:2600,
			questRequirements:[{name:"Kennith's Concerns"}],
			skillRequirements:[{name:"Defence",quantity:60},{name:"Constitution",quantity:50},{name:"Herblore",quantity:47},{name:"Summoning",quantity:45},{name:"Dungeoneering",quantity:35}],
			questPointReward:2, },

			"Scorpion Catcher":{ x:1685,y:2400,
			questRequirements:[{name:"Bar Crawl"}],
			skillRequirements:[{name:"Prayer",quantity:31}],
			questPointReward:1, },

			"Sea Slug":{ x:1834,y:2643,
			questRequirements:[],
			skillRequirements:[{name:"Firemaking",quantity:30}],
			questPointReward:1, },

			"Shades of Mort'ton":{ x:3262,y:2630,
			questRequirements:[],
			skillRequirements:[{name:"Crafting",quantity:20},{name:"Firemaking",quantity:5},{name:"Herblore",quantity:15}],
			questPointReward:3, },

			"Shadow of the Storm":{ x:3295,y:3030,
			questRequirements:[{name:"Demon Slayer"},{name:"The Golem"}],
			skillRequirements:[{name:"Crafting",quantity:30}],
			questPointReward:1,
			notes:"boss is level 84" },

			"A Shadow over Ashdale":{ x:1234,y:3831,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Sheep Herder":{ x:1486,y:2461,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:4, },

			"Shield of Arrav":{ x:2709,y:2438,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Shilo Village":{ x:2042,y:3306,
			questRequirements:[{name:"Jungle Potion"}],
			skillRequirements:[{name:"Crafting",quantity:20},{name:"Agility",quantity:32}],
			questPointReward:2, },

			"Sliske's Endgame":{ x:2990,y:3440,
			questRequirements:[{name:"The Death of Chivalry"},{name:"Children of Mah"},{name:"Hero's Welcome"},{name:"Kindred Spirits"},{name:"Nomad's Elegy"},{name:"One of a Kind"}],
			skillRequirements:[],
			questPointReward:3, },

			"The Slug Menace":{ x:1760,y:2637,
			questRequirements:[{name:"Sea Slug"},{name:"Wanted!"}],
			skillRequirements:[{name:"Crafting",quantity:30},{name:"Runecrafting",quantity:30},{name:"Slayer",quantity:30},{name:"Thieving",quantity:30}],
			questPointReward:1, },

			"Smoking Kills":{ x:2999,y:3209,
			questRequirements:[{name:"Icthlarin's Little Helper"},{name:"The Restless Ghost"}],
			skillRequirements:[{name:"Slayer",quantity:35},{name:"Crafting",quantity:25}],
			questPointReward:1, },

			"Some Like It Cold":{ x:1275,y:1155,
			questRequirements:[{name:"Hunt for Red Raktuber"}],
			skillRequirements:[{name:"Fishing",quantity:65},{name:"Crafting",quantity:56},{name:"Construction",quantity:50},{name:"Thieving",quantity:50}],
			questPointReward:1, },

			"Song from the Depths":{ x:2233,y:2755,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"A Soul's Bane":{ x:2897,y:2305,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Spirit of Summer":{ x:2712,y:1730,
			questRequirements:[{name:"The Restless Ghost"}],
			skillRequirements:[{name:"Summoning",quantity:19},{name:"Farming",quantity:26},{name:"Prayer",quantity:35},{name:"Construction",quantity:40}],
			questPointReward:1, },

			"Spirits of the Elid":{ x:3025,y:2946,
			questRequirements:[],
			skillRequirements:[{name:"Magic",quantity:33},{name:"Ranged",quantity:37},{name:"Mining",quantity:37},{name:"Thieving",quantity:37}],
			questPointReward:2,
			notes:"must beat 3 level 77 golems" },

			"Stolen Hearts":{ x:2465,y:2662,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:3, },

			"Summer's End":{ x:2708,y:1645,
			questRequirements:[{name:"Spirit of Summer"}],
			skillRequirements:[{name:"Summoning",quantity:23},{name:"Hunter",quantity:35},{name:"Woodcutting",quantity:37},{name:"Mining",quantity:45},{name:"Firemaking",quantity:47},{name:"Prayer",quantity:55}],
			questPointReward:1, },

			"Swan Song":{ x:970,y:1894,
			questRequirements:[{name:"Garden of Tranquillity"},{name:"One Small Favour"}],
			skillRequirements:[{name:"Quest Point",quantity:101},{name:"Magic",quantity:66},{name:"Cooking",quantity:62},{name:"Fishing",quantity:62},{name:"Smithing",quantity:45},{name:"Firemaking",quantity:42},{name:"Crafting",quantity:40}],
			questPointReward:2, },

			"Swept Away":{ x:2447,y:2601,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2, },

			"Tai Bwo Wannai Trio":{ x:2000,y:3082,
			questRequirements:[{name:"Jungle Potion"}],
			skillRequirements:[{name:"Agility",quantity:15},{name:"Fishing",quantity:5},{name:"Cooking",quantity:30},{name:"Fishing",quantity:65,iron:true},{name:"Herblore",quantity:34,iron:true}],
			questPointReward:2,
			notes:"ironmen need a spear" },

			"A Tail of Two Cats":{ x:2121,y:2129,
			questRequirements:[{name:"Icthlarin's Little Helper"}],
			skillRequirements:[],
			questPointReward:2, },

			"The Tale of the Muspah":{ x:1770,y:1760,
			questRequirements:[],
			skillRequirements:[{name:"Firemaking",quantity:6},{name:"Mining",quantity:8},{name:"Magic",quantity:10},{name:"Woodcutting",quantity:10}],
			questPointReward:1, },

			"Tears of Guthix":{ x:2463,y:3078,
			questRequirements:[],
			skillRequirements:[{name:"Quest Point",quantity:44},{name:"Firemaking",quantity:49},{name:"Mining",quantity:20},{name:"Crafting",quantity:20},{name:"Smithing",quantity:20,iron:true},{name:"Crafting",quantity:49,iron:true}],
			questPointReward:1, },

			"The Temple at Senntisten":{ x:2110,y:1338,
			questRequirements:[{name:"Desert Treasure"},{name:"Devious Minds"},{name:"The Curse of Arrav"}],
			skillRequirements:[{name:"Prayer",quantity:50}],
			questPointReward:2,
			notes:"also need 125 Varrock Museum Kudos" },/////////

			"Temple of Ikov":{ x:1640,y:2394,
			questRequirements:[],
			skillRequirements:[{name:"Thieving",quantity:42},{name:"Ranged",quantity:40}],
			questPointReward:1, },

			"Throne of Miscellania":{ x:1286,y:1489,pictureName:fithAgePicStr,
			questRequirements:[{name:"Heroes' Quest"},{name:"The Fremennik Trials"}],
			skillRequirements:[],
			questPointReward:1, },

			"TokTz-Ket-Dill":{ x:1982,y:2838,
			questRequirements:[],
			skillRequirements:[{name:"Construction",quantity:50},{name:"Strength",quantity:45},{name:"Crafting",quantity:43},{name:"Mining",quantity:40}],
			questPointReward:1, },

			"The Tourist Trap":{ x:2863,y:3158,
			questRequirements:[],
			skillRequirements:[{name:"Fletching",quantity:10},{name:"Smithing",quantity:20}],
			questPointReward:2, },

			"Tower of Life":{ x:1581,y:2775,
			questRequirements:[],
			skillRequirements:[{name:"Construction",quantity:10}],
			questPointReward:2, },

			"Tree Gnome Village":{ x:1335,y:2878,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:2,
			notes:"must beat a level 53 Khazard warlord" },

			"Tribal Totem":{ x:1875,y:2811,
			questRequirements:[],
			skillRequirements:[{name:"Thieving",quantity:21}],
			questPointReward:1, },

			"Troll Romance":{ x:1850,y:1500,
			questRequirements:[{name:"Troll Stronghold"}],
			skillRequirements:[{name:"Agility",quantity:28},{name:"Woodcutting",quantity:45,iron:true},{name:"Mining",quantity:10,iron:true},{name:"Smithing",quantity:10,iron:true}],
			questPointReward:2, },

			"Troll Stronghold":{ x:1948,y:1843,
			questRequirements:[{name:"Death Plateau"}],
			skillRequirements:[{name:"Agility",quantity:15},{name:"Thieving",quantity:30}],
			questPointReward:1, },

			"Underground Pass":{ x:1140,y:2579,
			questRequirements:[{name:"Biohazard"}],
			skillRequirements:[{name:"Ranged",quantity:25}],
			questPointReward:5,
			notes:"50 agility recommended" },

			"Vampyre Slayer":{ x:2514,y:2496,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:3,
			notes:"must beat a level 28 vampyre" },

			"Violet is Blue":{ x:1980,y:2271,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"A Void Dance":{ x:1590,y:3927,
			questRequirements:[{name:"Quiet Before the Swarm"},{name:"Druidic Ritual"}],
			skillRequirements:[{name:"Hunter",quantity:46},{name:"Construction",quantity:47},{name:"Mining",quantity:47},{name:"Summoning",quantity:48},{name:"Herblore",quantity:49},{name:"Woodcutting",quantity:52},{name:"Thieving",quantity:54}],
			questPointReward:1, },

			"The Void Stares Back":{ x:1590,y:3977,
			questRequirements:[{name:"A Void Dance"}],
			skillRequirements:[{name:"Magic",quantity:80},{name:"Attack",quantity:78},{name:"Strength",quantity:78},{name:"Firemaking",quantity:71},{name:"Construction",quantity:70},{name:"Crafting",quantity:70},{name:"Smithing",quantity:70},{name:"Summoning",quantity:55},{name:"Defence",quantity:25}],
			questPointReward:1, },

			"Wanted!":{ x:2310,y:2462,
			questRequirements:[{name:"Recruitment Drive"},{name:"The Lost Tribe"},{name:"Priest in Peril"},{name:"Enter the Abyss"}],
			skillRequirements:[{name:"Quest Point",quantity:33}],
			questPointReward:1, },

			"Watchtower":{ x:1376,y:2980,
			questRequirements:[],
			skillRequirements:[{name:"Herblore",quantity:14},{name:"Magic",quantity:14},{name:"Thieving",quantity:15},{name:"Agility",quantity:25},{name:"Mining",quantity:40}],
			questPointReward:4,
			notes:"must beat a level 53 ogre" },

			"Waterfall Quest":{ x:1303,y:2286,pictureName:fithAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"What Lies Below":{ x:2820,y:2545,
			questRequirements:[],
			skillRequirements:[{name:"Runecrafting",quantity:35}],
			questPointReward:1,
			notes:"Enter the Abyss and 42 mining is recommended" },

			"What's Mine is Yours":{ x:2201,y:2332,
			questRequirements:[],
			skillRequirements:[{name:"Smithing",quantity:5}],
			questPointReward:1, },

			"While Guthix Sleeps":{ x:2514,y:3080,
			questRequirements:[{name:"Defender of Varrock"},{name:"Dream Mentor"},{name:"The Hand in the Sand"},
						{name:"King's Ransom"},{name:"Legends' Quest"},{name:"The Path of Glouphrie"},
						{name:"Tears of Guthix"},{name:"Wanted!"},{name:"The Hunt for Surok"}],
			skillRequirements:[{name:"Agility",quantity:25},{name:"Summoning",quantity:23},{name:"Hunter",quantity:55},{name:"Thieving",quantity:60},{name:"Defence",quantity:65},{name:"Farming",quantity:65},{name:"Herblore",quantity:65},{name:"Magic",quantity:75}],
			questPointReward:5, },

			"Witch's House":{ x:2140,y:2482,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:4,
			notes:"must beat 4 monsters up to level 49" },

			"Within the Light":{ x:1000,y:2676,pictureName:fithAgePicStr,
			questRequirements:[{name:"Mourning's End Part II"}],
			skillRequirements:[{name:"Agility",quantity:69},{name:"Fletching",quantity:70},{name:"Ranged",quantity:75},{name:"Woodcutting",quantity:75}],
			questPointReward:2, },

			"Wolf Whistle":{ x:2144,y:2313,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"The World Wakes":{ x:1691,y:2464,
			questRequirements:[{name:"Ritual of the Mahjarrat",optional:true},{name:"The Chosen Commander",optional:true},{name:"The Void Stares Back",optional:true},{name:"The Branches of Darkmeyer",optional:true},{name:"The Firemaker's Curse",optional:true}],
			skillRequirements:[],
			questPointReward:3,
			notes:"100+ combat recommended" },

			"You Are It":{ x:1572,y:2242,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Zogre Flesh Eaters":{ x:1251,y:3117,
			questRequirements:[{name:"Big Chompy Bird Hunting"},{name:"Jungle Potion"}],
			skillRequirements:[],
			questPointReward:1,
			notes:"20 Crafting and Strength recommended. Must defend against some ogres" },






			//miniquests__________________________________
			"Bar Crawl":{ x:1372,y:2071,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:0, },

			"Benedict's World Tour":{ x:2692,y:2425,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Stolen Hearts"}],////partial
			skillRequirements:[],
			questPointReward:0, },

			"Boric's Tasks":{ x:2199,y:2306,
			questRequirements:[{name:"What's Mine is Yours"}],
			skillRequirements:[{name:"Mining",quantity:60}],
			questPointReward:0, },

			"The Curse of Zaros":{ x:1398,y:2319,pictureName:miniFifthAgePicStr,
			questRequirements:[{name:"Desert Treasure"},{name:"The Restless Ghost"}],/////both started
			skillRequirements:[{name:"Prayer",quantity:31}],
			questPointReward:0, },

			"Damage Control":{ x:BackgroundMap.arcStartX+707,y:BackgroundMap.arcStartY+412,
			questRequirements:[{name:"Harbinger"}],
			skillRequirements:[],
			questPointReward:0, },

			"Desert Slayer Dungeon":{ x:2997,y:3268,
			questRequirements:[{name:"Smoking Kills"}],
			skillRequirements:[{name:"Slayer",quantity:70}],
			questPointReward:0,
			notes:"43 Prayer and 50 Magic are recommended" },

			"Doric's Tasks":{ x:2227,y:2332,
			questRequirements:[{name:"What's Mine is Yours"},{name:"Death Plateau"}],
			skillRequirements:[{name:"Smithing",quantity:70},{name:"Mining",quantity:70,iron:true}],
			questPointReward:0, },

			"Enter the Abyss":{ x:2498,y:2093,pictureName:miniFifthAgePicStr,
			questRequirements:[{name:"Rune Mysteries"}],
			skillRequirements:[],
			questPointReward:0, },

			"Eye for an Eye":{ x:BackgroundMap.arcStartX+551,y:BackgroundMap.arcStartY+766,
			questRequirements:[{name:"Jed Hunter"}],
			skillRequirements:[{name:"Mining",quantity:90}],
			questPointReward:0, },

			"Father and Son":{ x:4197,y:583,pictureName:miniSixthAgePicStr,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:0, },

			"Final Destination":{ x:BackgroundMap.arcStartX+344,y:BackgroundMap.arcStartY+700,
			questRequirements:[{name:"Tuai Leit's Own"},{name:"Ghosts from the Past"},{name:"Damage Control"}],
			skillRequirements:[],
			questPointReward:0, },

			"Flag Fall":{ x:BackgroundMap.arcStartX+89,y:BackgroundMap.arcStartY+381,
			questRequirements:[{name:"Impressing the Locals"}],
			skillRequirements:[],
			questPointReward:0, },

			"From Tiny Acorns":{ x:2751,y:2668,
			questRequirements:[{name:"Buyers and Cellars"}],
			skillRequirements:[{name:"Thieving",quantity:24}],
			questPointReward:0, },

			"The General's Shadow":{ x:1673,y:1966,pictureName:miniFifthAgePicStr,
			questRequirements:[{name:"The Curse of Zaros"},{name:"Fight Arena"}],
			skillRequirements:[],
			questPointReward:0, },

			"Ghosts from the Past":{ x:BackgroundMap.arcStartX+492,y:BackgroundMap.arcStartY+558,
			questRequirements:[{name:"Harbinger"}],
			skillRequirements:[],
			questPointReward:0, },

			"A Guild of Our Own":{ x:2723,y:2640,
			questRequirements:[{name:"The Feud"},{name:"Lost Her Marbles"}],//////the feud: just started
			skillRequirements:[{name:"Thieving",quantity:62},{name:"Agility",quantity:40},{name:"Herblore",quantity:46}],
			questPointReward:0, },

			"Harbinger":{ x:BackgroundMap.arcStartX+486,y:BackgroundMap.arcStartY+786,
			questRequirements:[{name:"Eye for an Eye"}],
			skillRequirements:[],
			questPointReward:0, },

			"Head of the Family":{ x:BackgroundMap.arcStartX+147,y:BackgroundMap.arcStartY+366,
			questRequirements:[{name:"Impressing the Locals"}],
			skillRequirements:[{name:"Woodcutting",quantity:90},{name:"Fishing",quantity:90},{name:"Cooking",quantity:91}],
			questPointReward:0, },

			"Helping Laniakea":{ x:4261,y:529,pictureName:miniSixthAgePicStr,
			questRequirements:[],
			skillRequirements:[{name:"Hunter",quantity:75,iron:true},{name:"Slayer",quantity:55,iron:true}],
			questPointReward:0, },

			"Hopespear's Will":{ x:2681,y:3025,
			questRequirements:[{name:"Land of the Goblins"},{name:"A Fairy Tale I - Growing Pains"},{name:"A Fairy Tale II - Cure a Queen"},{name:"Desert Treasure"}],////fairy tale II, desert treasure: started
			skillRequirements:[{name:"Prayer",quantity:40}],
			questPointReward:0, },

			"The Hunt for Surok":{ x:2851,y:2275,
			questRequirements:[{name:"What Lies Below"}],
			skillRequirements:[{name:"Prayer",quantity:43},{name:"Mining",quantity:42}],
			questPointReward:0, },

			"In Memory of the Myreque":{ x:3305,y:2132,
			questRequirements:[{name:"The Lord of Vampyrium"}],
			skillRequirements:[],
			questPointReward:0, },

			"Jed Hunter":{ x:BackgroundMap.arcStartX+90,y:BackgroundMap.arcStartY+350,
			questRequirements:[{name:"Flag Fall"},{name:"Spiritual Enlightenment"},{name:"Head of the Family"},{name:"Deadliest Catch",optional:true}],
			skillRequirements:[{name:"Hunter",quantity:90},{name:"Crafting",quantity:91}],
			questPointReward:0, },

			"Knight Waves training ground":{ x:1829,y:2155,pictureName:fithAgePicStr,
			questRequirements:[{name:"King's Ransom"}],
			skillRequirements:[],
			questPointReward:0,
			notes:"the knights drain your stats heavily" },

			"Koschei's Troubles":{ x:1619,y:1819,
			questRequirements:[{name:"Blood Runs Deep"},{name:"Ritual of the Mahjarrat"}],
			skillRequirements:[],
			questPointReward:0,
			notes:"90 Strength and 90 Prayer for total completion" },

			"Lair of Tarn Razorlor":{ x:3164,y:2703,
			questRequirements:[{name:"Haunted Mine"}],
			skillRequirements:[{name:"Slayer",quantity:40}],
			questPointReward:0, },

			"Lost Her Marbles":{ x:2703,y:2650,
			questRequirements:[{name:"From Tiny Acorns"}],
			skillRequirements:[{name:"Thieving",quantity:41}],
			questPointReward:0, },

			"The Lost Toys":{ x:3260,y:2219,
			questRequirements:[{name:"The Lord of Vampyrium"}],
			skillRequirements:[],
			questPointReward:0, },

			"Mahjarrat Memories":{ x:1649,y:1819,
			questRequirements:[{name:"Koschei's Troubles"},{name:"Missing, Presumed Death"}],
			skillRequirements:[{name:"Divination",quantity:60}],
			questPointReward:0, },

			"Nadir":{ x:3137,y:1772,
			questRequirements:[{name:"Ritual of the Mahjarrat",optional:true}],
			skillRequirements:[{name:"Dungeoneering",quantity:35},{name:"Thieving",quantity:45},{name:"Attack",quantity:60}],
			questPointReward:0,
			notes:"need 55 Dungeoneering for unabridged reward" },

			"One Foot in the Grave":{ x:2066,y:3222,
			questRequirements:[{name:"Back to my Roots"}],////back to my roots: started
			skillRequirements:[],
			questPointReward:0,
			notes:"defend against monsters in the Jade vine maze" },

			"Purple Cat":{ x:2446,y:2556,
			questRequirements:[{name:"Swept Away"},{name:"Gertrude's Cat"}],
			skillRequirements:[],
			questPointReward:0, },

			"Rebuilding Edgeville":{ x:2487,y:2193,
			questRequirements:[{name:"Ritual of the Mahjarrat"}],
			skillRequirements:[],
			questPointReward:0, },

			"Sheep Shearer":{ x:2673,y:2626,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:0, },

			"Sins of the Father":{ x:4149,y:433,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Desperate Measures"}],
			skillRequirements:[],
			questPointReward:0,
			notes:"need 85 in Crafting, Runecrafting, Smithing, or Invention" },////////////

			"Spiritual Enlightenment":{ x:BackgroundMap.arcStartX+357,y:BackgroundMap.arcStartY+662,
			questRequirements:[{name:"Impressing the Locals"}],
			skillRequirements:[{name:"Slayer",quantity:90}],
			questPointReward:0,
			notes:"must have meet the Assassin in Player-Owned Ports" },

			"Tales of Nomad":{ x:854,y:3544,
			questRequirements:[{name:"Nomad's Elegy"}],
			skillRequirements:[],
			questPointReward:0, },

			"Tales of the God Wars":{ x:3036,y:3445,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Troll Stronghold"}],//////started
			skillRequirements:[{name:"Constitution",quantity:70}],
			questPointReward:0,
			notes:"also need 60 Strength or Agility" },

			"Thok It To 'Em":{ x:3137,y:1802,
			questRequirements:[],
			skillRequirements:[{name:"Dungeoneering",quantity:59},{name:"Strength",quantity:70}],
			questPointReward:0, },

			"Thok Your Block Off":{ x:3167,y:1802,
			questRequirements:[{name:"Thok It To 'Em"}],
			skillRequirements:[{name:"Dungeoneering",quantity:71}],
			questPointReward:0,
			notes:"need 75 Strength for unabridged reward" },

			"Three's Company":{ x:3137,y:1712,
			questRequirements:[],
			skillRequirements:[{name:"Dungeoneering",quantity:6},{name:"Attack",quantity:30},{name:"Magic",quantity:30},{name:"Ranged",quantity:30}],
			questPointReward:0, },

			"Tuai Leit's Own":{ x:BackgroundMap.arcStartX+62,y:BackgroundMap.arcStartY+74,
			questRequirements:[{name:"Harbinger"}],
			skillRequirements:[{name:"Farming",quantity:86},{name:"Divination",quantity:90}],
			questPointReward:0, },

			"Vengeance":{ x:3137,y:1742,
			questRequirements:[],
			skillRequirements:[{name:"Dungeoneering",quantity:23},{name:"Agility",quantity:55},{name:"Thieving",quantity:55}],
			questPointReward:0, },

			"Wandering Ga'al":{ x:2020,y:2805,
			questRequirements:[{name:"The Brink of Extinction"},{name:"Desert Treasure"}],////desert treasure: started
			skillRequirements:[],
			questPointReward:0, },

			"Witch's Potion":{ x:2219,y:2798,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:0, },

			//task sets
			"Ardougne Easy Tasks":{ x:1515,y:2594,pictureName:"Task Icons/Ardougne Easy.png",
			questRequirements:[{name:"Biohazard"},{name:"Gertrude's Cat"},{name:"Monk's Friend"},
								{name:"Plague City"},{name:"Tower of Life"}],
			skillRequirements:[{name:"Fishing",quantity:15},{name:"Thieving",quantity:16},{name:"Construction",quantity:10},
								{name:"Crafting",quantity:27,iron:true},{name:"Magic",quantity:27,iron:true}],
			questPointReward:0, },

			"Ardougne Medium Tasks":{ x:1604,y:2605,pictureName:"Task Icons/Ardougne Medium.png",
			questRequirements:[{name:"Ardougne Easy Tasks"},{name:"Enlightened Journey"},{name:"A Fairy Tale II - Cure a Queen"},
								{name:"Kennith's Concerns"},{name:"Meeting History"},{name:"Plague City"},
								{name:"Sea Slug"},{name:"The Hand in the Sand"},{name:"Tower of Life"}],
			skillRequirements:[{name:"Mining",quantity:46},{name:"Strength",quantity:38},{name:"Agility",quantity:39},
								{name:"Fishing",quantity:3},{name:"Ranged",quantity:21},{name:"Thieving",quantity:38},
								{name:"Firemaking",quantity:50},{name:"Magic",quantity:51},{name:"Farming",quantity:49},
								{name:"Herblore",quantity:57},{name:"Fletching",quantity:59,iron:true},{name:"Smithing",quantity:30,iron:true},],
			questPointReward:0, },

			"Ardougne Hard Tasks":{ x:1416,y:3044,pictureName:"Task Icons/Ardougne Hard.png",
			questRequirements:[{name:"Ardougne Medium Tasks"},{name:"Back to my Roots"},{name:"Catapult Construction"},
								{name:"Legends' Quest"},{name:"Lunar Diplomacy"},{name:"Monkey Madness"},
								{name:"Tower of Life"},{name:"Watchtower"}],
			skillRequirements:[{name:"Thieving",quantity:65},{name:"Magic",quantity:71},{name:"Hunter",quantity:59},
								{name:"Combat",quantity:63},{name:"Slayer",quantity:59},{name:"Woodcutting",quantity:72},
								{name:"Farming",quantity:57},{name:"Agility",quantity:57},{name:"Herblore",quantity:45},////also 500 music
								{name:"Crafting",quantity:72,iron:true}],
			questPointReward:0, },

			"Ardougne Elite Tasks":{ x:1416,y:3074,pictureName:"Task Icons/Ardougne Elite.png",
			questRequirements:[{name:"Ardougne Hard Tasks"},{name:"Rune Mysteries"}],
			skillRequirements:[{name:"Smithing",quantity:50},{name:"Fishing",quantity:81},{name:"Thieving",quantity:82},
								{name:"Crafting",quantity:10},{name:"Fletching",quantity:69},{name:"Runecrafting",quantity:75},
								{name:"Summoning",quantity:93},{name:"Cooking",quantity:93,iron:true},{name:"Mining",quantity:73}],////also need rocktail
			questPointReward:0, },

			"Daemonheim Easy Tasks":{ x:3242,y:1700,pictureName:"Task Icons/Daemonheim Easy.png",
			questRequirements:[],
			skillRequirements:[{name:"Dungeoneering",quantity:23},{name:"Smithing",quantity:7},{name:"Divination",quantity:10}],
			questPointReward:0, },

			"Daemonheim Medium Tasks":{ x:3242,y:1730,pictureName:"Task Icons/Daemonheim Medium.png",/////////ironmen need waterfall quest
			questRequirements:[{name:"Daemonheim Easy Tasks"},{name:"Waterfall Quest",iron:true}],
			skillRequirements:[{name:"Divination",quantity:45},{name:"Fletching",quantity:43},{name:"Thieving",quantity:40},
								{name:"Hunter",quantity:40},{name:"Farming",quantity:40},{name:"Herblore",quantity:36},
								{name:"Dungeoneering",quantity:35},{name:"Magic",quantity:32},{name:"Attack",quantity:30},
								{name:"Ranged",quantity:30}],
			questPointReward:0, },

			"Daemonheim Hard Tasks":{ x:3242,y:1760,pictureName:"Task Icons/Daemonheim Hard.png",
			questRequirements:[{name:"Daemonheim Medium Tasks"},{name:"Salt in the Wound"},{name:"A Clockwork Syringe"}],
			skillRequirements:[{name:"Construction",quantity:75},{name:"Strength",quantity:75},{name:"Farming",quantity:68},
								{name:"Dungeoneering",quantity:71},{name:"Divination",quantity:70},{name:"Cooking",quantity:69},
								{name:"Prayer",quantity:65},{name:"Attack",quantity:60},{name:"Agility",quantity:55},
								{name:"Smithing",quantity:74},{name:"Thieving",quantity:74},{name:"Defence",quantity:76},
								{name:"Summoning",quantity:65},{name:"Slayer",quantity:61},{name:"Runecrafting",quantity:54},
								{name:"Magic",quantity:30},{name:"Ranged",quantity:30}],
			questPointReward:0, },

			"Daemonheim Elite Tasks":{ x:3242,y:1790,pictureName:"Task Icons/Daemonheim Elite.png",
			questRequirements:[{name:"Daemonheim Hard Tasks"}],
			skillRequirements:[{name:"Dungeoneering",quantity:95},{name:"Cooking",quantity:90},{name:"Crafting",quantity:98},
								{name:"Smithing",quantity:95},{name:"Constitution",quantity:80},{name:"Divination",quantity:86},
								{name:"Magic",quantity:90}],
			questPointReward:0, },

			"Desert Easy Tasks":{ x:2872,y:2912,pictureName:"Task Icons/Desert Easy.png",//Icthlarin's Little Helper: only started
			questRequirements:[{name:"Diamond in the Rough"},{name:"Stolen Hearts"},{name:"One Piercing Note"},
								{name:"Icthlarin's Little Helper",iron:true}],
			skillRequirements:[{name:"Hunter",quantity:5},{name:"Runecrafting",quantity:14},{name:"Thieving",quantity:21},
								{name:"Magic",quantity:7}],
			questPointReward:0, },

			"Desert Medium Tasks":{ x:3168,y:3435,pictureName:"Task Icons/Desert Medium.png",
			questRequirements:[{name:"Desert Easy Tasks"},{name:"Eagles' Peak"},{name:"The Feud"},
								{name:"Spirits of the Elid"},{name:"A Fairy Tale II - Cure a Queen"},{name:"Missing My Mummy"}],
			skillRequirements:[{name:"Prayer",quantity:45},{name:"Defence",quantity:3},{name:"Woodcutting",quantity:35},
								{name:"Summoning",quantity:25},{name:"Mining",quantity:45},{name:"Crafting",quantity:33},
								{name:"Farming",quantity:49},{name:"Herblore",quantity:57},{name:"Agility",quantity:30},
								{name:"Ranged",quantity:37},{name:"Strength",quantity:19},{name:"Fletching",quantity:59,iron:true},{name:"Smithing",quantity:30,iron:true},],
			questPointReward:0, },

			"Desert Hard Tasks":{ x:3003,y:3271,pictureName:"Task Icons/Desert Hard.png",
			questRequirements:[{name:"Desert Medium Tasks"},{name:"Dream Mentor"},{name:"Dealing with Scabaras"},
								{name:"Smoking Kills"},{name:"Do No Evil"},{name:"Enakhra's Lament"},
								{name:"Desert Treasure"},{name:"Contact!"},{name:"Deadliest Catch"}],//also 450 kills in the Dominion Tower
			skillRequirements:[{name:"Magic",quantity:70},{name:"Hunter",quantity:67},{name:"Fishing",quantity:70},
								{name:"Runecrafting",quantity:50},{name:"Fletching",quantity:52},{name:"Cooking",quantity:58},
								{name:"Slayer",quantity:65},{name:"Farming",quantity:55},{name:"Thieving",quantity:61},
								{name:"Thieving",quantity:75}],
			questPointReward:0, },

			"Desert Elite Tasks":{ x:3260,y:2991,pictureName:"Task Icons/Desert Elite.png",
			questRequirements:[{name:"Desert Hard Tasks"},{name:"Smoking Kills"},{name:"Desert Treasure"},
								{name:"One Piercing Note"},{name:"The Restless Ghost"},{name:"Diamond in the Rough"},////also all dominion tower achievements done
								{name:"Do No Evil"},{name:"As a First Resort"}],
			skillRequirements:[{name:"Slayer",quantity:79},{name:"Crafting",quantity:89},{name:"Thieving",quantity:91},
								{name:"Agility",quantity:80},{name:"Mining",quantity:81},{name:"Herblore",quantity:85}],
			questPointReward:0, },

			"Falador Easy Tasks":{ x:2382,y:2703,pictureName:"Task Icons/Falador Easy.png",
			questRequirements:[],
			skillRequirements:[{name:"Defence",quantity:25},{name:"Construction",quantity:16}],
			questPointReward:0, },

			"Falador Medium Tasks":{ x:2149,y:2791,pictureName:"Task Icons/Falador Medium.png",
			questRequirements:[{name:"Falador Easy Tasks"},{name:"Recruitment Drive"},{name:"Wanted!"},
								{name:"The Knight's Sword"},{name:"Garden of Tranquillity"},{name:"Gertrude's Cat"}],////Garden of Tranquillity started
			skillRequirements:[{name:"Prayer",quantity:10},{name:"Mining",quantity:10},{name:"Smithing",quantity:10},
								{name:"Ranged",quantity:19},{name:"Defence",quantity:20},{name:"Farming",quantity:23},
								{name:"Agility",quantity:26},{name:"Crafting",quantity:36},{name:"Strength",quantity:37},
								{name:"Thieving",quantity:40},{name:"Firemaking",quantity:49},{name:"Smithing",quantity:20,iron:true},
								{name:"Crafting",quantity:49,iron:true},{name:"Farming",quantity:47,iron:true},{name:"Fletching",quantity:59,iron:true},
								{name:"Smithing",quantity:30,iron:true}],
			questPointReward:0, },

			"Falador Hard Tasks":{ x:2256,y:2525,pictureName:"Task Icons/Falador Hard.png",
			questRequirements:[{name:"Falador Medium Tasks"},{name:"A Fairy Tale II - Cure a Queen"},{name:"The Slug Menace"},////also mogre miniquest
								{name:"The Hand in the Sand"}],
			skillRequirements:[{name:"Construction",quantity:16},{name:"Defence",quantity:30},{name:"Runecrafting",quantity:56},
								{name:"Summoning",quantity:56},{name:"Mining",quantity:60},{name:"Prayer",quantity:70},
								{name:"Slayer",quantity:72},{name:"Farming",quantity:60},{name:"Woodcutting",quantity:60}],
			questPointReward:0, },

			"Falador Elite Tasks":{ x:2256,y:2555,pictureName:"Task Icons/Falador Elite.png",
			questRequirements:[{name:"Falador Hard Tasks"},{name:"Lunar Diplomacy"},{name:"The Temple at Senntisten"}],
			skillRequirements:[{name:"Fishing",quantity:90},{name:"Cooking",quantity:93},{name:"Mining",quantity:80},
								{name:"Farming",quantity:75},{name:"Woodcutting",quantity:75},{name:"Summoning",quantity:80},
								{name:"Magic",quantity:80},{name:"Prayer",quantity:95}],
			questPointReward:0, },

			"Fremennik Easy Tasks":{ x:1594,y:2026,pictureName:"Task Icons/Fremennik Easy.png",
			questRequirements:[],
			skillRequirements:[{name:"Slayer",quantity:10}],
			questPointReward:0, },

			"Fremennik Medium Tasks":{ x:1545,y:1851,pictureName:"Task Icons/Fremennik Medium.png",
			questRequirements:[{name:"Fremennik Easy Tasks"},{name:"The Fremennik Trials"},{name:"The Fremennik Isles"},///isles partially complete
								{name:"Garden of Tranquillity"},{name:"A Fairy Tale II - Cure a Queen"}],
			skillRequirements:[{name:"Hunter",quantity:55},{name:"Cooking",quantity:48},{name:"Thieving",quantity:42},
								{name:"Crafting",quantity:33},{name:"Defence",quantity:20}],
			questPointReward:0, },

			"Fremennik Hard Tasks":{ x:1238,y:1487,pictureName:"Task Icons/Fremennik Hard.png",
			questRequirements:[{name:"Fremennik Medium Tasks"},{name:"Lunar Diplomacy"},{name:"Royal Trouble"},
								{name:"The Fremennik Trials"}],
			skillRequirements:[{name:"Magic",quantity:65},{name:"Mining",quantity:60},{name:"Fishing",quantity:55},
								{name:"Woodcutting",quantity:54},{name:"Crafting",quantity:52},{name:"Firemaking",quantity:52},
								{name:"Defence",quantity:50},{name:"Ranged",quantity:50},{name:"Magic",quantity:50},/////ranged or magic
								{name:"Strength",quantity:35},{name:"Agility",quantity:35}],
			questPointReward:0,
			notes:"combat level to beat a mitril dragon" },

			"Fremennik Elite Tasks":{ x:1238,y:1517,pictureName:"Task Icons/Fremennik Elite.png",
			questRequirements:[{name:"Fremennik Hard Tasks"},{name:"Barbarian Training"},{name:"Bar Crawl"},
								{name:"Lunar Diplomacy"},{name:"The Fremennik Trials"},{name:"Tai Bwo Wannai Trio"},
								{name:"Blood Runs Deep"}],
			skillRequirements:[{name:"Fishing",quantity:96},{name:"Slayer",quantity:93},{name:"Agility",quantity:90},
								{name:"Smithing",quantity:50},{name:"Crafting",quantity:85},{name:"Firemaking",quantity:85},
								{name:"Runecrafting",quantity:82},{name:"Herblore",quantity:80},{name:"Strength",quantity:76},
								{name:"Attack",quantity:75},{name:"Constitution",quantity:35},{name:"Defence",quantity:35},],
			questPointReward:0, },

			"Karamja Easy Tasks":{ x:1893,y:2829,pictureName:"Task Icons/Karamja Easy.png",
			questRequirements:[],
			skillRequirements:[{name:"Agility",quantity:15},{name:"Mining",quantity:40}],
			questPointReward:0, },

			"Karamja Medium Tasks":{ x:2003,y:3226,pictureName:"Task Icons/Karamja Medium.png",
			questRequirements:[{name:"Karamja Easy Tasks"},{name:"Dragon Slayer"},{name:"Shilo Village"},
								{name:"Jungle Potion"},{name:"Tai Bwo Wannai Trio"},{name:"The Grand Tree"}],
			skillRequirements:[{name:"Agility",quantity:12},{name:"Woodcutting",quantity:50},{name:"Cooking",quantity:16},
								{name:"Fishing",quantity:65},{name:"Farming",quantity:27},{name:"Hunter",quantity:41},
								{name:"Mining",quantity:40}],
			questPointReward:0,
			notes:"40 agility strongly recommended" },

			"Karamja Hard Tasks":{ x:1877,y:3319,pictureName:"Task Icons/Karamja Hard.png",
			questRequirements:[{name:"Karamja Medium Tasks"},{name:"Legends' Quest"},{name:"Rune Mysteries"},
								{name:"Tai Bwo Wannai Trio"},{name:"Shilo Village"}],
			skillRequirements:[{name:"Combat",quantity:100},{name:"Runecrafting",quantity:44},{name:"Strength",quantity:50},
								{name:"Agility",quantity:53},{name:"Cooking",quantity:30},{name:"Woodcutting",quantity:34},
								{name:"Ranged",quantity:42},{name:"Slayer",quantity:50},{name:"Thieving",quantity:50},
								{name:"Mining",quantity:52},{name:"Cooking",quantity:50,iron:true},{name:"Fishing",quantity:65,iron:true},],
			questPointReward:0, },

			"Karamja Elite Tasks":{ x:2151,y:3319,pictureName:"Task Icons/Karamja Elite.png",
			questRequirements:[{name:"Karamja Hard Tasks"},{name:"While Guthix Sleeps"},{name:"Shilo Village"},
								{name:"Smoking Kills"}],
			skillRequirements:[{name:"Runecrafting",quantity:91},{name:"Summoning",quantity:95},{name:"Hunter",quantity:27},
								{name:"Herblore",quantity:63},{name:"Cooking",quantity:80},{name:"Agility",quantity:74},
								{name:"Slayer",quantity:50},{name:"Combat",quantity:100}],
			questPointReward:0, },

			"Lumbridge Beginner Tasks":{ x:2691,y:2700,pictureName:"Task Icons/Lumbridge Beginner.png",
			questRequirements:[],
			skillRequirements:[],
			questPointReward:0, },

			"Lumbridge Easy Tasks":{ x:2741,y:2802,pictureName:"Task Icons/Lumbridge Easy.png",
			questRequirements:[{name:"Lumbridge Beginner Tasks"},{name:"The Restless Ghost"}],
			skillRequirements:[{name:"Mining",quantity:10},{name:"Fishing",quantity:25},{name:"Smithing",quantity:20},
								{name:"Runecrafting",quantity:5},{name:"Crafting",quantity:4}],
			questPointReward:0,
			notes:"29 Combat recommended" },

			"Lumbridge Medium Tasks":{ x:2481,y:2696,pictureName:"Task Icons/Lumbridge Medium.png",
			questRequirements:[{name:"Lumbridge Easy Tasks"},{name:"Cook's Assistant"}],
			skillRequirements:[{name:"Quest Point",quantity:33},{name:"Smithing",quantity:20},{name:"Magic",quantity:31},//quest points are for stating dragon slayer
								{name:"Firemaking",quantity:30},{name:"Cooking",quantity:40},{name:"Woodcutting",quantity:30},
								{name:"Crafting",quantity:16},{name:"Fishing",quantity:30},{name:"Mining",quantity:20}],
			questPointReward:0,
			notes:"ironmen need 40 fishing or a raw lobster drop" },

			"Lumbridge Hard Tasks":{ x:2511,y:2696,pictureName:"Task Icons/Lumbridge Hard.png",
			questRequirements:[{name:"Lumbridge Medium Tasks"},{name:"Cook's Assistant"}],
			skillRequirements:[{name:"Smithing",quantity:40},{name:"Crafting",quantity:50},{name:"Magic",quantity:59},
								{name:"Cooking",quantity:50},{name:"Prayer",quantity:45},{name:"Runecrafting",quantity:57},
								{name:"Firemaking",quantity:60}],
			questPointReward:0,
			notes:"ironmen need 60 Woodcutting or a yew log drop" },

			"Morytania Easy Tasks":{ x:3154,y:2229,pictureName:"Task Icons/Morytania Easy.png",
			questRequirements:[{name:"Priest in Peril"},{name:"Creature of Fenkenstrain"},{name:"Nature Spirit"},
								{name:"In Aid of the Myreque"}],
			skillRequirements:[{name:"Crafting",quantity:15},{name:"Cooking",quantity:12},{name:"Agility",quantity:25},
								{name:"Farming",quantity:26}],
			questPointReward:0, },

			"Morytania Medium Tasks":{ x:3623,y:2241,pictureName:"Task Icons/Morytania Medium.png",
			questRequirements:[{name:"Morytania Easy Tasks"},{name:"Ghosts Ahoy"},{name:"Shades of Mort'ton"},
								{name:"A Fairy Tale II - Cure a Queen"},{name:"In Aid of the Myreque"},{name:"In Search of the Myreque"},
								{name:"The Darkness of Hallowvale"},{name:"Haunted Mine"},{name:"Dwarf Cannon"}],
			skillRequirements:[{name:"Woodcutting",quantity:45},{name:"Herblore",quantity:57},{name:"Cooking",quantity:14},
								{name:"Hunter",quantity:29},{name:"Magic",quantity:33},{name:"Smithing",quantity:35},
								{name:"Slayer",quantity:45},{name:"Farming",quantity:53},{name:"Mining",quantity:30}],
			questPointReward:0, },

			"Morytania Hard Tasks":{ x:3417,y:2624,pictureName:"Task Icons/Morytania Hard.png",
			questRequirements:[{name:"Morytania Medium Tasks"},{name:"Legacy of Seergaze"},{name:"Haunted Mine"},
								{name:"Creature of Fenkenstrain"},{name:"Desert Treasure"},{name:"The Branches of Darkmeyer"},
								{name:"All Fired Up"}],
			skillRequirements:[{name:"Runecrafting",quantity:50},{name:"Agility",quantity:65},{name:"Construction",quantity:50},
								{name:"Magic",quantity:70},{name:"Farming",quantity:63},{name:"Slayer",quantity:67},
								{name:"Crafting",quantity:64},{name:"Defence",quantity:70},{name:"Fletching",quantity:70},
								{name:"Woodcutting",quantity:76},{name:"Firemaking",quantity:62}],
			questPointReward:0, },

			"Morytania Elite Tasks":{ x:3489,y:2790,pictureName:"Task Icons/Morytania Elite.png",
			questRequirements:[{name:"Morytania Hard Tasks"},{name:"The Branches of Darkmeyer"},{name:"Legacy of Seergaze"},
								{name:"In Aid of the Myreque"},{name:"Shades of Mort'ton"},{name:"Ritual of the Mahjarrat"}],
			skillRequirements:[{name:"Slayer",quantity:85},{name:"Runecrafting",quantity:77},{name:"Summoning",quantity:87},
								{name:"Farming",quantity:91},{name:"Herblore",quantity:94},{name:"Fishing",quantity:96},
								{name:"Strength",quantity:76},{name:"Firemaking",quantity:80}],
			questPointReward:0, },

			"Seers' Village Easy Tasks":{ x:1755,y:2237,pictureName:"Task Icons/Seers' Village Easy.png",
			questRequirements:[{name:"Murder Mystery"}],
			skillRequirements:[{name:"Cooking",quantity:21},{name:"Fishing",quantity:16},{name:"Farming",quantity:13}],
			questPointReward:0, },

			"Seers' Village Medium Tasks":{ x:1435,y:2206,pictureName:"Task Icons/Seers' Village Medium.png",
			questRequirements:[{name:"Seers' Village Easy Tasks"},{name:"Scorpion Catcher"},{name:"One Small Favour"},
								{name:"Elemental Workshop I"}],
			skillRequirements:[{name:"Agility",quantity:48},{name:"Fishing",quantity:46},{name:"Summoning",quantity:46},
								{name:"Magic",quantity:45},{name:"Firemaking",quantity:45},{name:"Cooking",quantity:43},
								{name:"Ranged",quantity:40},{name:"Mining",quantity:30},{name:"Herblore",quantity:18},
								{name:"Crafting",quantity:25},{name:"Smithing",quantity:30},{name:"Prayer",quantity:31},{name:"Crafting",quantity:42,iron:true}],
			questPointReward:0, },

			"Seers' Village Hard Tasks":{ x:1848,y:2209,pictureName:"Task Icons/Seers' Village Hard.png",
			questRequirements:[{name:"Seers' Village Medium Tasks"},{name:"King's Ransom"},{name:"A Fairy Tale II - Cure a Queen"},
								{name:"Family Crest"},{name:"Legends' Quest"}],
			skillRequirements:[{name:"Cooking",quantity:80},{name:"Fletching",quantity:80},{name:"Fishing",quantity:76},
								{name:"Firemaking",quantity:75},{name:"Defence",quantity:70},{name:"Prayer",quantity:70},
								{name:"Woodcutting",quantity:60},{name:"Magic",quantity:56},{name:"Ranged",quantity:39},
								{name:"Agility",quantity:36},{name:"Strength",quantity:22},{name:"Magic",quantity:68,iron:true},{name:"Crafting",quantity:74,iron:true}],
			questPointReward:0, },

			"Seers' Village Elite Tasks":{ x:1848,y:2239,pictureName:"Task Icons/Seers' Village Elite.png",
			questRequirements:[{name:"Seers' Village Hard Tasks"},{name:"Lunar Diplomacy"}],
			skillRequirements:[{name:"Herblore",quantity:92},{name:"Fletching",quantity:85},{name:"Magic",quantity:83},
								{name:"Smithing",quantity:40},{name:"Cooking",quantity:70},{name:"Ranged",quantity:40},
								{name:"Fishing",quantity:35},{name:"Hunter",quantity:77,iron:true}],
			questPointReward:0, },

			"Tirannwn Easy Tasks":{ x:789,y:2907,pictureName:"Task Icons/Tirannwn Easy.png",
			questRequirements:[{name:"Desert Treasure"},{name:"A Fairy Tale II - Cure a Queen"},{name:"Mourning's End Part II"},
								{name:"The Path of Glouphrie"},{name:"Regicide"},{name:"Underground Pass"}],
			skillRequirements:[{name:"Defence",quantity:5},{name:"Magic",quantity:52},{name:"Mining",quantity:10},
								{name:"Prayer",quantity:43},{name:"Slayer",quantity:56},{name:"Thieving",quantity:50}],
			questPointReward:0, },

			"Tirannwn Medium Tasks":{ x:985,y:2849,pictureName:"Task Icons/Tirannwn Medium.png",
			questRequirements:[{name:"Tirannwn Easy Tasks"},{name:"Deadliest Catch"},{name:"Mourning's End Part II"},
								{name:"The Prisoner of Glouphrie"},{name:"Regicide"},{name:"Within the Light"}],
			skillRequirements:[{name:"Agility",quantity:56},{name:"Farming",quantity:57},{name:"Fishing",quantity:76},
								{name:"Fletching",quantity:70},{name:"Hunter",quantity:77},{name:"Runecrafting",quantity:65},
								{name:"Strength",quantity:40},{name:"Summoning",quantity:64},{name:"Woodcutting",quantity:60},
								{name:"Herblore",quantity:48}],
			questPointReward:0, },

			"Tirannwn Hard Tasks":{ x:769,y:2477,pictureName:"Task Icons/Tirannwn Hard.png",
			questRequirements:[{name:"Tirannwn Medium Tasks"},{name:"Bringing Home the Bacon"},{name:"Desert Treasure"},
								{name:"Legacy of Seergaze"},{name:"Regicide"},{name:"Plague's End"}],
			skillRequirements:[{name:"Farming",quantity:75},{name:"Agility",quantity:77},{name:"Attack",quantity:70},
								{name:"Divination",quantity:81},{name:"Herblore",quantity:77},{name:"Hunter",quantity:74},
								{name:"Ranged",quantity:70},{name:"Slayer",quantity:85},{name:"Summoning",quantity:88},
								{name:"Woodcutting",quantity:75},{name:"Crafting",quantity:75},{name:"Combat",quantity:120},
								{name:"Cooking",quantity:54,iron:true}],
			questPointReward:0, },

			"Tirannwn Elite Tasks":{ x:785,y:2557,pictureName:"Task Icons/Tirannwn Elite.png",
			questRequirements:[{name:"Tirannwn Hard Tasks"},{name:"Blood Runs Deep"},{name:"The Branches of Darkmeyer"},
								{name:"The Elder Kiln"},{name:"Fate of the Gods"},{name:"Plague's End"},
								{name:"Regicide"},{name:"As a First Resort"},{name:"One of a Kind"},
								{name:"Ritual of the Mahjarrat"},{name:"The World Wakes"},{name:"The Void Stares Back"},
								{name:"The Chosen Commander"},{name:"The Firemaker's Curse"}],
			skillRequirements:[{name:"Dungeoneering",quantity:95},{name:"Slayer",quantity:95},{name:"Thieving",quantity:95}],//////90+ in all non-elete skills, one 99 or quest point cape
			questPointReward:0, },

			"Varrock Easy Tasks":{ x:2852,y:2540,pictureName:"Task Icons/Varrock Easy.png",
			questRequirements:[],
			skillRequirements:[{name:"Agility",quantity:13},{name:"Crafting",quantity:8},{name:"Fishing",quantity:20},
								{name:"Mining",quantity:10}],
			questPointReward:0, },

			"Varrock Medium Tasks":{ x:2726,y:2194,pictureName:"Task Icons/Varrock Medium.png",
			questRequirements:[{name:"Varrock Easy Tasks"},{name:"Creature of Fenkenstrain"},{name:"Diamond in the Rough"},
								{name:"The Dig Site"},{name:"Dragon Slayer"},{name:"Enlightened Journey"},
								{name:"A Fairy Tale II - Cure a Queen"},{name:"Garden of Tranquillity"},{name:"Gertrude's Cat"},///started ftII
								{name:"Icthlarin's Little Helper"},{name:"Priest in Peril"},{name:"Rat Catchers"},///started rat catchers
								{name:"The Restless Ghost"},{name:"Rune Mysteries"},{name:"A Soul's Bane"},
								{name:"Stolen Hearts"},{name:"Tree Gnome Village"},{name:"What Lies Below"},],
			skillRequirements:[{name:"Agility",quantity:21},{name:"Combat",quantity:40},{name:"Firemaking",quantity:40},
								{name:"Farming",quantity:49},{name:"Herblore",quantity:57},{name:"Magic",quantity:25},
								{name:"Mining",quantity:42},{name:"Runecrafting",quantity:35},{name:"Thieving",quantity:40}],
			questPointReward:0, },

			"Varrock Hard Tasks":{ x:2475,y:2270,pictureName:"Task Icons/Varrock Hard.png",
			questRequirements:[{name:"Varrock Medium Tasks"},{name:"Family Crest"},{name:"Desert Treasure"}],
			skillRequirements:[{name:"Agility",quantity:51},{name:"Cooking",quantity:32},{name:"Construction",quantity:67},
								{name:"Crafting",quantity:66},{name:"Farming",quantity:70},{name:"Magic",quantity:66},
								{name:"Smithing",quantity:40},{name:"Woodcutting",quantity:57},{name:"Hunter",quantity:69,iron:true},
								{name:"Cooking",quantity:85,iron:true}],
			questPointReward:0, },

			"Varrock Elite Tasks":{ x:2505,y:2270,pictureName:"Task Icons/Varrock Elite.png",
			questRequirements:[{name:"Varrock Hard Tasks"},{name:"All Fired Up"},{name:"The Temple at Senntisten"},
								{name:"Nomad's Requiem"},{name:"What Lies Below"},{name:"Land of the Goblins"}],
			skillRequirements:[{name:"Cooking",quantity:95},{name:"Firemaking",quantity:92},{name:"Fletching",quantity:69},///83 arc could replace firemaking
								{name:"Farming",quantity:15},{name:"Magic",quantity:80},{name:"Smithing",quantity:65},
								{name:"Mining",quantity:66},{name:"Prayer",quantity:92},{name:"Runecrafting",quantity:78},
								{name:"Woodcutting",quantity:80}],
			questPointReward:0, },

			"Wilderness Easy Tasks":{ x:2456,y:2142,pictureName:"Task Icons/Wilderness Easy.png",
			questRequirements:[],
			skillRequirements:[],
			questPointReward:0, },

			"Wilderness Medium Tasks":{ x:2506,y:2142,pictureName:"Task Icons/Wilderness Medium.png",
			questRequirements:[{name:"Wilderness Easy Tasks"}],
			skillRequirements:[{name:"Agility",quantity:52},{name:"Cooking",quantity:55},{name:"Farming",quantity:57},
								{name:"Fishing",quantity:15},{name:"Herblore",quantity:57},{name:"Hunter",quantity:67},
								{name:"Magic",quantity:60},{name:"Thieving",quantity:32},{name:"Woodcutting",quantity:57}],
			questPointReward:0, },

			"Wilderness Hard Tasks":{ x:2556,y:2142,pictureName:"Task Icons/Wilderness Hard.png",
			questRequirements:[{name:"Wilderness Medium Tasks"},{name:"Summer's End"}],
			skillRequirements:[{name:"Farming",quantity:57},{name:"Herblore",quantity:65},{name:"Magic",quantity:66}],
			questPointReward:0, },

			"Wilderness Elite Tasks":{ x:2460,y:1295,pictureName:"Task Icons/Wilderness Elite.png",
			questRequirements:[{name:"Wilderness Hard Tasks"}],
			skillRequirements:[{name:"Agility",quantity:83},{name:"Farming",quantity:57},{name:"Fletching",quantity:93},
								{name:"Herblore",quantity:82},{name:"Hunter",quantity:88},{name:"Slayer",quantity:94},
								{name:"Woodcutting",quantity:85}],
			questPointReward:0, },




			//newly added
			"Barbarian Training":{ x:1285,y:2232,
			questRequirements:[{name:"Tai Bwo Wannai Trio"}],
			skillRequirements:[{name:"Firemaking",quantity:35},{name:"Crafting",quantity:11},{name:"Fishing",quantity:55},{name:"Agility",quantity:15},{name:"Strength",quantity:35},{name:"Smithing",quantity:5},{name:"Herblore",quantity:4}],
			questPointReward:0, },

			"Raksha, the Shadow Colossus":{ x:4605,y:986,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Desperate Measures",optional:true}],
			skillRequirements:[],
			questPointReward:0, },

			"Violet is Blue Too":{ x:1978,y:2224,
			questRequirements:[{name:"Violet is Blue"}],
			skillRequirements:[],
			questPointReward:1, },

			"Once Upon a Time in Gielinor":{ x:2719,y:2407,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Demon Slayer",optional:true},{name:"Dragon Slayer",optional:true},{name:"Vampyre Slayer",optional:true},
								{name:"Merlin's Crystal",optional:true},{name:"Diamond in the Rough",optional:true},{name:"Animal Magnetism",optional:true},
								{name:"Missing, Presumed Death",optional:true},{name:"Dishonour among Thieves",optional:true},{name:"The Death of Chivalry",optional:true},
								{name:"Carnillean Rising",optional:true},{name:"Impressing the Locals",optional:true}],
			skillRequirements:[],
			questPointReward:0, },

			"Heartstealer":{ x:2821,y:2312,
			questRequirements:[],
			skillRequirements:[],
			questPointReward:1, },

			"Tortle Combat":{ x:2761,y:2290,pictureName:miniAnyAgePicStr,
			questRequirements:[],
			skillRequirements:[{name:"Construction",quantity:40},{name:"Farming",quantity:17}],
			questPointReward:0, },
			
			"The Vault of Shadows":{ x:2990,y:2820,pictureName:miniSixthAgePicStr,
			questRequirements:[],
			skillRequirements:[{name:"Archaeology",quantity:58},{name:"Divination",quantity:60}],
			questPointReward:0, },

			"Azzanadra's Quest":{ x:2068,y:2045,
			questRequirements:[{name:"The Vault of Shadows"},{name:"Desperate Measures",optional:true}],
			skillRequirements:[{name:"Archaeology",quantity:58},{name:"Divination",quantity:70},{name:"Agility",quantity:58},{name:"Prayer",quantity:58}],
			questPointReward:3, },

			// "Flashback":{ x:2739,y:2407,pictureName:miniSixthAgePicStr,
			// questRequirements:[{name:"Foreshadowing"},{name:"Merlin's Crystal",optional:true},{name:"Diamond in the Rough",optional:true},{name:"Animal Magnetism",optional:true}],
			// skillRequirements:[],
			// questPointReward:0, },

			"Battle of the Monolith":{ x:3000,y:2450,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Azzanadra's Quest",optional:true},{name:"The Brink of Extinction",optional:true}],
			skillRequirements:[{name:"Archaeology",quantity:5}],
			questPointReward:0, },

			"City of Senntisten":{ x:2963,y:2264,
			questRequirements:[{name:"Azzanadra's Quest"},{name:"Battle of the Monolith"}],
			skillRequirements:[{name:"Slayer",quantity:75},{name:"Archaeology",quantity:74},{name:"Magic",quantity:74}],
			questPointReward:3, },

			"Eye of Het I":{ x:2944,y:2746,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"City of Senntisten"}],
			skillRequirements:[{name:"Agility",quantity:65}],
			questPointReward:0, },

			"Eye of Het II":{ x:2944,y:2700,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Eye of Het I"}],
			skillRequirements:[],
			questPointReward:0, },

			"Extinction":{ x:3000,y:2351,
			questRequirements:[{name:"Eye of Het II"},{name:"Desperate Measures"},{name:"Sins of the Father",optional:true}],
			skillRequirements:[],
			questPointReward:4, },

			"Twilight of the Gods":{ x:3100,y:2351,
			questRequirements:[{name:"Extinction"},{name:"Broken Home"}],
			skillRequirements:[{name:"Divination",quantity:80},{name:"Thieving",quantity:60}],
			questPointReward:3, },

			"Aftermath":{ x:2553,y:1807,pictureName:miniSixthAgePicStr,
			questRequirements:[{name:"Twilight of the Gods"}],
			skillRequirements:[],
			questPointReward:0, },

			"Daughter of Chaos":{ x:2572,y:2149,
			questRequirements:[{name:"Aftermath",optional:true}],
			skillRequirements:[{name:"Archaeology",quantity:40},{name:"Divination",quantity:40}],
			questPointReward:1, },

			// "_________":{ x:0000,y:0000,
			// questRequirements:[{name:"QuestName"},{name:"QuestName",optional:true}],
			// skillRequirements:[{name:"Skill",quantity:99},{name:"Skill",quantity:99},{name:"Skill",quantity:99}],
			// questPointReward:0, },

		};
	}

	static switchCoords(type){
		if(type==='location'){
			for (const [name, itemInfo] of Object.entries(ItemInfoDatabase._mapObject)) {
				itemInfo.icon.currentXWorld = itemInfo.x;
				itemInfo.icon.currentYWorld = itemInfo.y;
			}
			return;
		}

		if(type==='tree'){
			for (const [name, itemInfo] of Object.entries(ItemInfoDatabase._mapObject)) {
				itemInfo.icon.currentXWorld = itemInfo.xTree;
				itemInfo.icon.currentYWorld = itemInfo.yTree;
			}
			return;
		}
	}

	static printCoords(fileName){
		let fileDataString = '';
		for (const [name, itemInfo] of Object.entries(ItemInfoDatabase._mapObject)) {
			fileDataString += itemInfo.name + '~' + Math.round(itemInfo.icon.currentXWorld) + '~' + Math.round(itemInfo.icon.currentYWorld) + '\n';
		}
		//delete last enter
		fileDataString = fileDataString.slice(0, -1);
		MyFileReader.downloadFile(fileName,fileDataString);
	}

	static _setOtherVars(){

		for (const [name, itemInfo] of Object.entries(ItemInfoDatabase._mapObject)) {
			//set name
			itemInfo['name'] = name;

			//initilize unlocks array for later
			itemInfo['unlocks'] = [];
		}

		//set tree coords (read from file)
		// let self = this;
		MyFileReader.readFile('data/tree coords.txt',function(fileText){
			let lines = fileText.split('\n');
		    lines.forEach(function(line){
		    	let array = line.split('~');//['questName','xTree','yTree']
		    	let itemInfo = ItemInfoDatabase._mapObject[array[0]];
		    	if(itemInfo==null){
		    		itemInfo.xTree=Number(0);
		    		itemInfo.yTree=Number(0);
		    		return;
		    	}
		    	itemInfo.xTree=Number(array[1]);
		    	itemInfo.yTree=Number(array[2]);
		    });

			self.finishedLoading = true;
		});

		//set unlocks
		for (const [name, itemInfo] of Object.entries(ItemInfoDatabase._mapObject)) {
			let reqs = itemInfo.questRequirements;
			reqs.forEach(function(req){
				
				let reqQuestName = req.name;
				let reqItemInfo = ItemInfoDatabase.getItemInfo(reqQuestName);
				if(reqItemInfo==null){
					console.log('i');
				}
				if(req.optional){
					reqItemInfo.unlocks.push({'name':name,optional:true});
				}else{
					// console.log(reqItemInfo);
					// console.log(name);
					reqItemInfo.unlocks.push({'name':name});
				}
					
				
			});
		}
	}


}