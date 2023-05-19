## Station Services

### BuyAmmo

When Written: when purchasing ammunition

Parameters:

- Cost 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "BuyAmmo",
	"Cost": 80
}
```

### BuyDrones

When Written: when purchasing drones

Parameters:

- Type 
- Count 
- BuyPrice 
- TotalCost 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "BuyDrones",
	"Type": "Drones",
	"Count": 2,
	"SellPrice": 101,
	"TotalCost": 202
}
```

### CargoDepot

When written: when collecting or delivering cargo for a wing mission, or if a wing member updates progress

Parameters:

- MissionID:(int) 
- UpdateType:(string) (one of: "Collect", "Deliver", "WingUpdate") 
- CargoType 
- Count 
- StartMarketID(int) 
- EndMarketID(int) 
- ItemsCollected(int) 
- ItemsDelivered(int) 
- TotalItemsToDeliver(int) 
- Progress:(float) 


The CargoType and Count are included when you collect or deliver gods, they are not included for a wing update.

The Progress value actually represents pending progress for goods in transit: (ItemsCollected-ItemsDelievered)/TotalItemsToDeliver

Example:

```
{
	"timestamp": "2018-03-07T15:47:03Z",
	"event": "CargoDepot",
	"MissionID": 65394170,
	"UpdateType": "Deliver",
	"CargoType": "BasicMedicines",
	"Count": 8,
	"StartMarketID": 3228867072,
	"EndMarketID": 3534964736,
	"ItemsCollected": 16,
	"ItemsDelivered": 16,
	"TotalItemsToDeliver": 3020,
	"Progress": 0
}
```

### CommunityGoal

When written: when the game retrieves info on community goals from the server, and the data has changed since last time

This event contains the current status of all community goals the player is currently subscribed to

Parameters:

- CurrentGoals: an array with an entry for each CG, containing: 
	- CGID: a unique ID number for this CG 
	- Title: the description of the CG 
	- SystemName 
	- MarketName 
	- Expiry: time and date 
	- IsComplete: Boolean 
	- CurrentTotal 
	- PlayerContribution 
	- NumContributors 
	- PlayerPercentileBand 
	- TopTier:  
		- Name: string 
		- Bonus: string 


- If the community goal is constructed with a fixed-size top rank (ie max reward for top 10 players)

	- TopRankSize: (integer) 
	- PlayerInTopRank: (Boolean) 


- If the community goal has reached the first success tier:

	- TierReached 
	- Bonus 


Example:

```
{
	"timestamp": "2017-08-14T13:20:28Z",
	"event": "CommunityGoal",
	"CurrentGoals": [
		{
			"CGID": 726,
			"Title": "Alliance Research Initiative – Trade",
			"SystemName": "Kaushpoos",
			"MarketName": "Neville Horizons",
			"Expiry": "2017-08-17T14:58:14Z",
			"IsComplete": false,
			"CurrentTotal": 10062,
			"PlayerContribution": 562,
			"NumContributors": 101,
			"TopRankSize": 10,
			"PlayerInTopRank": false,
			"TierReached": "Tier 1",
			"PlayerPercentileBand": 50,
			"Bonus": 200000
		}
	]
}
```

### CommunityGoalDiscard

When written: when opting out of a community goal

Parameters:

- CGID 
- Name 
- System 


### CommunityGoalJoin

When Written: when signing up to a community goal

Parameters:

- CGID 


- Name 
- System 


### CommunityGoalReward  

When Written: when receiving a reward for a community goal

Parameters:

- CGID 
- Name 
- System 
- Reward 


### CrewAssign

When written: when changing the task assignment of a member of crew

Parameters:

- Name 
- CrewID 
- Role 


Example:

```
{
	"timestamp": "2016-08-09T08:45:31Z",
	"event": "CrewAssign",
	"Name": "Dannie Koller",
	"Role": "Active"
}
```

### CrewFire

When written: when dismissing a member of crew

Parameters:

- Name 
- CrewID 


Example:

```
{
	"timestamp": "2016-08-09T08:46:11Z",
	"event": "CrewFire",
	"Name": "Whitney Pruitt-Munoz"
}
```

### CrewHire

When written: when engaging a new member of crew

Parameters:

- Name 
- CrewID 
- Faction 
- Cost 
- Combat Rank 


Example:

```
{
	"timestamp": "2016-08-09T08:46:29Z",
	"event": "CrewHire",
	"Name": "Margaret Parrish",
	"Faction": "The Dark Wheel",
	"Cost": 15000,
	"CombatRank": 1
}
```

### EngineerApply

This event is obsolete, and is no longer written (as from v3.0)

### EngineerContribution

When written: when offering items cash or bounties to an Engineer to gain access

Parameters:

- Engineer: name of engineer 
- EngineerID 
- Type: type of contribution (Commodity, materials, Credits, Bond, Bounty) 
- Commodity 
- Material 
- Faction (for bond or bounty) 
- Quantity: amount offered this time 
- TotalQuantity: total amount now donated 


Example:

```
{
	"timestamp": "2017-05-24T10:41:51Z",
	"event": "EngineerContribution",
	"Engineer": "Elvira Martuuk",
	"EngineerID": 300160,
	"Type": "Commodity",
	"Commodity": "soontillrelics",
	"Quantity": 2,
	"TotalQuantity": 3
}
```

### EngineerCraft

When Written: when requesting an engineer upgrade

Parameters:

- Engineer: name of engineer 
- EngineerID 
- BlueprintName: name of blueprint 
- BlueprintID 
- Level: crafting level 
- Quality: float 
- ApplyExperimentalEffect: (when applying a new effect) 
- Ingredients: JSON array of objects with names and quantities of materials required 
- Modifiers: JSON array of modification data 
	- Label: string – (see §15.11 below) 
	- Value: float 
	- OriginalValue: float 
	- LessIsGood: bool 
- Some modifications have string values: 
	- Label: string 
	- ValueStr: string 


The new "quality" value represents the quality or progress of the blueprint. The quality should increase from 0 to 1 as the blueprint is refined through further crafting, and once it reaches a certain value, the player will have the option to upgrade the blueprint to the next level of recipe.

When applying an experimental effect, the _ApplyExperimentalEffect_ property will show the name of the effect applied, and the ingredient list will hold the ingredients for that effect.

Example:

```
{
	"timestamp": "2018-03-04T07:08:27Z",
	"event": "EngineerCraft",
	"Slot": "Slot03_Size3",
	"Module": "int_dronecontrol_collection_size3_class5",
	"Ingredients": [
		{
			"Name": "phosphorus",
			"Count": 1
		}
	],
	"Engineer": "Ram Tah",
	"EngineerID": 300110,
	"BlueprintID": 128731526,
	"BlueprintName": "Misc_LightWeight",
	"Level": 1,
	"Quality": 0.955,
	"Modifiers": [
		{
			"Label": "Mass",
			"Value": 4.436,
			"OriginalValue": 8,
			"LessIsGood": 1
		},
		{
			"Label": "Integrity",
			"Value": 81,
			"OriginalValue": 90,
			"LessIsGood": 0
		}
	]
}
```

These modification types have string values: WeaponMode, DamageType, CabinClass

(although I'm not sure if there are any blueprints that actually modify a cabin class!)

### EngineerLegacyConvert

When written: when converting a pre-2.4 engineered module

This is generated when converting, or previewing a conversion of a legacy module to the new system. Due to the nature of the changes made for3.0, modules generated in the old system are not compatible with the new crafting system, so players will be unable to craft with them. However, players will be given the opportunity to convert their legacy modules to the new format with the caveat that converted modules will be a recipe level below what they were before the conversion. The EngineerLegacyConvert journal entry is generated when converting a recipe, or just previewing a conversion, so some of our creative third party developers out there may be able to make tools to show how a ship loadout compares before and after converting their modules. The entry itself is the same as the EngineerCraft entry, minus the ingredients data (since no materials are required to convert), but plus an "IsPreview" bool to indicate whether this entry has been generated from a conversion, or just a preview.

### EngineerProgress

When Written: when a player increases their access to an engineer

Also a summary of progress for all engineers at startup

Parameters (summary at startup)

- Engineers: array 
	- Engineer: name 
	- EngineerID 
	- Rank: rank reached (when unlocked) 
	- Progress: progress stage (Invited/Acquainted/Unlocked/Barred) 
	- RankProgress: percentage towards next rank 


Parameters (update for one engineer)

- Engineer: name 
- EngineerID 
- Rank: rank reached (when unlocked) 
- Progress: progress stage (Invited/Acquainted/Unlocked/Barred) 
- RankProgress: percentage towards next rank 


Example (update)

```
{
	"timestamp": "2018-01-16T09:34:36Z",
	"event": "EngineerProgress",
	"Engineer": "Zacariah Nemo",
	"EngineerID": 300050,
	"Rank": 4,
	"RankProgress": 0
}
```

Example (startup):

```
{
	"timestamp": "2018-05-04T13:58:22Z",
	"event": "EngineerProgress",
	"Engineers": [
		{
			"Engineer": "Zacariah Nemo",
			"EngineerID": 300050,
			"Progress": "Unlocked",
			"RankProgress": 0,
			"Rank": 5
		},
		{
			"Engineer": "Marco Qwent",
			"EngineerID": 300200,
			"Progress": "Unlocked",
			"RankProgress": 37,
			"Rank": 4
		},
		{
			"Engineer": "Hera Tani",
			"EngineerID": 300090,
			"Progress": "Unlocked",
			"RankProgress": 0,
			"Rank": 3
		},
		{
			"Engineer": "Tod 'The Blaster' McQuinn",
			"EngineerID": 300260,
			"Progress": "Unlocked",
			"RankProgress": 97,
			"Rank": 3
		},
		{
			"Engineer": "Selene Jean",
			"EngineerID": 300210,
			"Progress": "Known"
		},
		{
			"Engineer": "Lei Cheung",
			"EngineerID": 300120,
			"Progress": "Known"
		},
		{
			"Engineer": "Juri Ishmaak",
			"EngineerID": 300250,
			"Progress": "Known"
		},
		{
			"Engineer": "Felicity Farseer",
			"EngineerID": 300100,
			"Progress": "Unlocked",
			"RankProgress": 0,
			"Rank": 5
		},
		{
			"Engineer": "Professor Palin",
			"EngineerID": 300220,
			"Progress": "Invited"
		},
		{
			"Engineer": "Elvira Martuuk",
			"EngineerID": 300160,
			"Progress": "Unlocked",
			"RankProgress": 0,
			"Rank": 5
		},
		{
			"Engineer": "Lori Jameson",
			"EngineerID": 300230,
			"Progress": "Known"
		},
		{
			"Engineer": "The Dweller",
			"EngineerID": 300180,
			"Progress": "Unlocked",
			"RankProgress": 0,
			"Rank": 5
		},
		{
			"Engineer": "Liz Ryder",
			"EngineerID": 300080,
			"Progress": "Unlocked",
			"RankProgress": 93,
			"Rank": 3
		},
		{
			"Engineer": "Ram Tah",
			"EngineerID": 300110,
			"Progress": "Unlocked",
			"RankProgress": 31,
			"Rank": 3
		}
	]
}
```

### FetchRemoteModule

When written: when requesting a module is transferred from storage at another station

Parameters:

- StorageSlot 
- StoredItem 
- ServerId 
- TransferCost 
- Ship 
- ShipId 
- TransferTime: (in seconds) 


### Market

When written: when accessing the commodity market in a station

A separate file _**market.json**_ is written to the same folder as the journal, containing full market price info

Parameters:

- MarketID 
- StationName 
- StarSystem 


The separate file also contains:

- Items: array of objects 
	- id 
	- Name 
	- Category 
	- BuyPrice 
	- SellPrice 
	- MeanPrice 
	- StockBracket 
	- DemandBracket 
	- Stock 
	- Demand 
	- Consumer: bool 
	- Producer: bool 
	- Rare: bool 


Example: in the journal:

```
{
	"timestamp": "2017-10-05T10:11:38Z",
	"event": "Outfitting",
	"MarketID": 128678535,
	"StationName": "Black Hide",
	"StarSystem": "Wyrd"
}
```

Separate file:

```
{ "timestamp":"2017-10-05T10:10:34Z", "event":"Market", "MarketID":128678535, "StationName":"Black Hide", "StarSystem":"Wyrd", "Items":[
	{ "id":128049152, "Name":"$platinum_name;", "Name_Localised":"Platinum", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":42220, "MeanPrice":19756, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":9182, "Consumer":true, "Producer":false, "Rare":false },
	{ "id":128049153, "Name":"$palladium_name;", "Name_Localised":"Palladium", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":13999, "MeanPrice":13244, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":123183, "Consumer":true, "Producer":false, "Rare":false },
	{ "id":128049154, "Name":"$gold_name;", "Name_Localised":"Gold", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":10831, "MeanPrice":9373, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":151492, "Consumer":true, "Producer":false, "Rare":false },
	{ "id":128049155, "Name":"$silver_name;", "Name_Localised":"Silver", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":5512, "MeanPrice":4759, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":266258, "Consumer":true, "Producer":false, "Rare":false },   :
] }
```

### MassModuleStore

When written: when putting multiple modules into storage

Parameters:

- MarketID 
- Ship 
- ShipId 
- Items: Array of records 
	- Slot 
	- Name 
	- Hot 
	- EngineerModifications (only present if modified) 
	- Level 
	- Quality 


### MaterialTrade

When written: when exchanging materials at the Material trader contact

Parameters:

- MarketID 
- TraderType 
- Paid 
	- Material 
	- Category 
	- Quantity 
- Received 
	- Material 
	- Category 
	- Quantity 


Example: (note categories simplified)

```
{
	"timestamp": "2018-02-21T15:23:49Z",
	"event": "MaterialTrade",
	"MarketID": 3221397760,
	"TraderType": "encoded",
	"Paid": {
		"Material": "scandatabanks",
		"Material_Localised": "Classified Scan Databanks",
		"Category": "Encoded",
		"Quantity": 6
	},
	"Received": {
		"Material": "encodedscandata",
		"Material_Localised": "Divergent Scan Data",
		"Quantity": 1
	}
}
```

### MissionAbandoned

When Written: when a mission has been abandoned

Parameters:

- Name: name of mission 
- MissionID 
- Fine: (if relevant) 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MissionAbandoned",
	"Name": "Mission_Collect_name",
	"MissionID": 65343025
}
```

### MissionAccepted

When Written: when starting a mission

Parameters:

- Name: name of mission 
- LocalisedName: the mission name as displayed to the user 
- Faction: faction offering mission 
- MissionID 
- Influence: effect on influence (None/Low/Med/High) 
- Reputation: effect on reputation (None/Low/Med/High) 
- Reward: expected cash reward 
- Wing: bool 


Optional Parameters (depending on mission type)

- Commodity: commodity type 
- Count: number required / to deliver 
- Donation: contracted donation (as string) (for altruism missions) 
- Donated: actual donation (as int) 
- Target: name of target 
- TargetType: type of target 
- TargetFaction: target's faction 
- KillCount: number of targets 
- Expiry: mission expiry time, in ISO 8601 
- DestinationSystem 
- DestinationStation 
- DestinationSettlement 
- NewDestinationSystem (if it has been redirected) 
- NewDestinationStation (if redirected) 
- PassengerCount 
- PassengerVIPs: bool 
- PassengerWanted: bool 
- PassengerType: eg Tourist, Soldier, Explorer,... 


Examples:

```
{
	"timestamp": "2018-02-28T12:06:37Z",
	"event": "MissionAccepted",
	"Faction": "Official i Bootis Liberty Party",
	"Name": "Mission_DeliveryWing_Agriculture",
	"LocalisedName": "Agricultural supply run: 2280 units of Tea",
	"Commodity": "$Tea_Name;",
	"Commodity_Localised": "Tea",
	"Count": 2280,
	"TargetFaction": "Ovid Vision &amp; Co",
	"DestinationSystem": "Ovid",
	"DestinationStation": "Shriver Platform",
	"Expiry": "2018-03-01T12:05:53Z",
	"Wing": true,
	"Influence": "Med",
	"Reputation": "Med",
	"Reward": 2686155,
	"MissionID": 65393626
}
```

### MissionCompleted

When Written: when a mission is completed

Parameters:

- Name: mission type 
- Faction: faction name 
- MissionID 


Optional parameters (depending on mission type)

- Commodity 
- Count 
- Target 
- TargetType 
- TargetFaction  
- DestinationSystem 
- DestinationStation 
- DestinationSettlement 
- Reward: value of reward 
- Donation: contracted donation (as string) (for altruism missions) 
- Donated: actual donation (as int) 
- PermitsAwarded:[] (names of any permits awarded, as a JSON array) 
- CommodityReward:[] (names and counts of any commodity rewards) 
- MaterialsReward:[] ( name, category and count) 
- FactionEffects: array of records 
	- Faction 
	- Effects: array of Effect, Effect_Localised and Trend value pairs 
	- Influence: array of SystemAddress, Trend and Influence values 
	- Reputation 
	- ReputationTrend 


_TrendValue_ can be UpGood, UpBad, DownGood, or DownBad

_Reputation_ and _Influence _are a set of + indicators (eg "+++")

Example:

```
{
    "timestamp": "2018-12-19T21:41:09Z",
    "event": "MissionCompleted",
    "Faction": "Inara Nexus",
    "Name": "Mission_Courier_Elections_name",
    "MissionID": 442511682,
    "TargetFaction": "Tougeir Blue Clan",
    "DestinationSystem": "Tougeir",
    "DestinationStation": "Janes Dock",
    "Reward": 10000,
    "FactionEffects": [{
            "Faction": "Tougeir Blue Clan",
            "Effects": [{
                "Effect": "$MISSIONUTIL_Interaction_Summary_EP_up;",
                "Effect_Localised": "The economic status of $#MinorFaction; has improved in the $#System; system.",
                "Trend": "UpGood"
            }],
            "Influence": [{
                "SystemAddress": 5067927397769,
                "Trend": "UpGood",
                "Influence": "++++"
            }],
            "ReputationTrend": "UpGood",
            "Reputation": ""
        },
        {
            "Faction": "Inara Nexus",
            "Effects": [{
                    "Effect": "$MISSIONUTIL_Interaction_Summary_EP_up;",
                    "Effect_Localised": "The economic status of $#MinorFaction; has improved in the $#System; system.",
                    "Trend": "UpGood"
                }
            ],
            "Influence": [],
            "ReputationTrend": "UpGood",
            "Reputation": "+"
        }
    ]
}
```

Example of MaterialsReward:

... "MaterialsReward":[ { "Name":"DisruptedWakeEchoes", "Name_Localised":"Atypical Disrupted Wake Echoes", "Category":"$MICRORESOURCE_CATEGORY_Encoded;", "Category_Localised":"Encoded", "Count":4 } ] ...

### MissionFailed

When Written: when a mission has failed

Parameters:

- Name: name of mission 
- MissionID 
- Fine: (if relevant) 


### MissionRedirected

When written: when a mission is updated with a new destination

Parameters

- MissionID 
- Name 
- NewDestinationStation 
- OldDestinationStation 
- NewDestinationSystem 
- OldDestinationSystem 


Example:

```
{
	"timestamp": "2017-08-01T09:04:07Z",
	"event": "MissionRedirected",
	"MissionID": 65367315,
	"NewDestinationStation": "Metcalf Orbital",
	"OldDestinationStation": "Cuffey Orbital",
	"NewDestinationSystem": "Cemiess",
	"OldDestinationSystem": "Vequess"
}
```

### ModuleBuy

When Written: when buying a module in outfitting

Parameters:

- MarketID 
- Slot: the outfitting slot 
- BuyItem: the module being purchased 
- BuyPrice: price paid 
- Ship: the players ship 
- ShipID 


If existing module is stored:

- StoredItem: item being stored 


If replacing an existing module:

- SellItem: item being sold 
- SellPrice: sale price 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "ModuleBuy",
	"Slot": "MediumHardpoint2",
	"SellItem": "hpt_pulselaser_fixed_medium",
	"SellPrice": 0,
	"BuyItem": "hpt_multicannon_gimbal_medium",
	"BuyPrice": 50018,
	"Ship": "cobramkiii",
	"ShipID": 1
}
```

### ModuleRetrieve

When written: when fetching a previously stored module

Parameters:

- MarketID 
- Slot 
- Ship 
- ShipID 
- RetrievedItem 
- Hot 
- EngineerModifications: name of modification blueprint, if any 
- Level 
- Quality 
- SwapOutItem (if slot was not empty) 
- Cost 


### ModuleSell

When Written: when selling a module in outfitting

Parameters:

- MarketID 
- Slot 
- SellItem 
- SellPrice 
- Ship 
- ShipID 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "ModuleSell",
	"Slot": "Slot06_Size2",
	"SellItem": "int_cargorack_size1_class1",
	"SellPrice": 877,
	"Ship": "asp",
	"ShipID": 1
}
```

### ModuleSellRemote

When written: when selling a module in storage at another station

Parameters:

- StorageSlot 
- SellItem 
- ServerId 
- SellPrice 
- Ship 
- ShipId 


### ModuleStore

When written: when storing a module in Outfitting

Parameters:

- MarketID 
- Slot 
- Ship 
- ShipID 
- StoredItem 
- Hot 
- EngineerModifications: name of modification blueprint, if any 
- Level 
- Quality 
- ReplacementItem (if a core module) 
- Cost (if any) 


Example:

```
{
	"timestamp": "2018-01-31T10:55:15Z",
	"event": "ModuleStore",
	"MarketID": 128676487,
	"Slot": "TinyHardpoint1",
	"StoredItem": "$hpt_shieldbooster_size0_class3_name;",
	"StoredItem_Localised": "Shield Booster",
	"Ship": "empire_courier",
	"ShipID": 11,
	"Hot": false,
	"EngineerModifications": "ShieldBooster_Explosive",
	"Level": 1,
	"Quality": 0.5271
}
```

### ModuleSwap

When Written: when moving a module to a different slot on the ship

Parameters:

- MarketID 
- FromSlot 
- ToSlot 
- FromItem 
- ToItem 
- Ship 
- ShipID 


Examples:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "ModuleSwap",
	"FromSlot": "MediumHardpoint1",
	"ToSlot": "MediumHardpoint2",
	"FromItem": "hpt_pulselaser_fixed_medium",
	"ToItem": "hpt_multicannon_gimbal_medium",
	"Ship": "cobramkiii",
	"ShipID": 1
}
```

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "ModuleSwap",
	"FromSlot": "SmallHardpoint2",
	"ToSlot": "SmallHardpoint1",
	"FromItem": "hpt_pulselaserburst_fixed_small_scatter",
	"ToItem": "Null",
	"Ship": "cobramkiii",
	"ShipID": 1
}
```

### Outfitting

Written when accessing the outfitting menu

The full parts pricelist is written to a separate file _**Outfitting.json**_

Parameters:

- MarketID 
- StationName 
- StarSystem 


The separate file also contains

- Horizons: bool 
- Items: array of objects 
	- id 
	- Name 
	- BuyPrice 


Example: (in journal)

```
{
	"timestamp": "2017-10-05T10:11:38Z",
	"event": "Outfitting",
	"MarketID": 128678535,
	"StationName": "Black Hide",
	"StarSystem": "Wyrd"
}
```

(In separate file)

```
{ "timestamp":"2017-10-05T10:11:38Z", "event":"Outfitting", "MarketID":128678535, "StationName":"Black Hide", "StarSystem":"Wyrd", "Horizons":true, "Items":[
	{ "id":128049382, "Name":"hpt_pulselaser_fixed_medium", "BuyPrice":16731 },
	{ "id":128049383, "Name":"hpt_pulselaser_fixed_large", "BuyPrice":66924 },
	{ "id":128049385, "Name":"hpt_pulselaser_gimbal_small", "BuyPrice":6275 },
	{ "id":128049386, "Name":"hpt_pulselaser_gimbal_medium", "BuyPrice":33653 },
	{ "id":128049388, "Name":"hpt_pulselaser_turret_small", "BuyPrice":24717 },
	{ "id":128681995, "Name":"hpt_pulselaser_gimbal_huge", "BuyPrice":834269 },
] }
```

### PayBounties

When written: when paying off bounties

Parameters:

- Amount: (total amount paid , including any broker fee) 
- BrokerPercentage (present if paid via a Broker) 
- AllFines: bool 
- Faction 
- ShipID 


Example:

```
{
	"timestamp": "2018-03-19T10:25:10Z",
	"event": "PayBounties",
	"Amount": 400,
	"Faction": "$faction_Federation;",
	"Faction_Localised": "Federation",
	"ShipID": 9,
	"BrokerPercentage": 25
}
```

### PayFines

When Written: when paying fines

Parameters:

- Amount: (total amount paid , including any broker fee) 
- BrokerPercentage (present if paid via a Broker) 
- AllFines: bool 
- Faction: (if paying off an individual faction's fines) 
- ShipID 


Example:

```
{
	"timestamp": "2018-03-19T10:24:21Z",
	"event": "PayFines",
	"Amount": 250,
	"AllFines": false,
	"Faction": "Batz Transport Commodities",
	"ShipID": 9
}
```

### PayLegacyFines

When Written: when paying legacy fines

(This is now obsolete, as of v3.0)

Parameters:

- Amount (total amount paid, including any broker fee) 
- BrokerPercentage (present if paid through a broker) 


### RedeemVoucher

When Written: when claiming payment for combat bounties and bonds

Parameters:

- Type: (CombatBond/Bounty/Trade/Settlement/Scannable) 
- Amount: (Net amount received, after any broker fee) 
- Faction: name of faction _(for types other than Bounty)_ 
- BrokerPercentage (if redeemed through a broker) 
- Factions: array of faction/amount pairs _(for Type=Bounty)_ 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "RedeemVoucher",
	"Type": "bounty",
	"Factions": [
		{
			"Faction": "Ed's 38",
			"Amount": 1000
		},
		{
			"Faction": "Zac's Lads",
			"Amount": 2000
		}
	]
}
```

### RefuelAll

When Written: when refuelling (full tank)

Parameters:

- Cost: cost of fuel 
- Amount: tons of fuel purchased 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "RefuelAll",
	"Cost": 317,
	"Amount": 6.322901
}
```

### RefuelPartial

When Written: when refuelling (10%)

Parameters:

- Cost: cost of fuel 
- Amount: tons of fuel purchased 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "RefuelPartial",
	"Cost": 83,
	"Amount": 1.649
}
```

### Repair

When Written: when repairing the ship

Parameters:

- Item: all, wear, hull, paint, or name of module 
- Cost: cost of repair 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Repair",
	"Item": "int_powerplant_size3_class5",
	"Cost": 1100
}
```

Note when repairing on a FleetCarrier, you can now get a list of the modules repaired:

```
{
	"timestamp": "2020-03-31T13:39:42Z",
	"event": "Repair",
	"Items": [
		"$hpt_dumbfiremissilerack_fixed_large_name;",
		"$hpt_beamlaser_gimbal_medium_name;",
		"$hpt_railgun_fixed_medium_name;",
		"$hpt_beamlaser_gimbal_medium_name;",
		"$hpt_dumbfiremissilerack_fixed_large_name;"
	],
	"Cost": 34590
}
```

### RepairAll

When written: when repairing everything

Parameters:

- Cost 


### RestockVehicle

When Written: when purchasing an SRV or Fighter

Parameters:

- Type: type of vehicle being purchased (SRV or fighter model) 
- Loadout: variant 
- Cost: purchase cost 
- Count: number of vehicles purchased 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "RestockVehicle",
	"Type": "SRV",
	"Loadout": "starter",
	"Cost": 1030,
	"Count": 1
}
```

### ScientificResearch

When written: when contributing materials to a "research" community goal

Parameters:

- MarketID 
- Name: material name 
- Category 
- Count 
-  


### SearchAndRescue

When written: when delivering items to a Search and Rescue contact

Parameters:

- MarketID 
- Name 
- Count 
- Reward 


### SellDrones

When Written: when selling unwanted drones back to the market

Parameters:

- Type 
- Count 
- SellPrice 
- TotalSale 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "SellDrones",
	"Type": "Drones",
	"Count": 1,
	"SellPrice": 91,
	"TotalSale": 91
}
```

### SellShipOnRebuy

When written: When selling a stored ship to raise funds when on insurance/rebuy screen

Parameters:

- ShipType 
- System 
- SellShipId 
- ShipPrice 


Example:

```
{
	"timestamp": "2017-07-20T08:56:39Z",
	"event": "SellShipOnRebuy",
	"ShipType": "Dolphin",
	"System": "Shinrarta Dezhra",
	"SellShipId": 4,
	"ShipPrice": 4110183
}
```

### SetUserShipName

When written: when assigning a name to the ship in Starport Services

Parameters:

- Ship: Ship model (eg CobraMkIII) 
- ShipID: player's ship ID number 
- UserShipName: selected name 
- UserShipId: selected ship id 


Example:

```
{
	"timestamp": "2017-01-24T10:42:38Z",
	"event": "SetUserShipName",
	"Ship": "cobramkiii",
	"ShipID": 2,
	"UserShipName": "Enterprise",
	"UserShipId": "NCC 1701"
}
```

###  Shipyard

When written: when accessing shipyard in a station

Parameters:

- MarketID 
- StationName 
- StarSystem 


The full price list is written to a separate file, in the same folder as the journal, _**Shipyard.json**_

- Horizons: bool 
- AllowCobraMkIV: bool 
- Pricelist: array of objects 
	- ShipType 
	- ShipPrice 


Example: in the Journal:

```
{
	"timestamp": "2017-10-04T10:01:38Z",
	"event": "Shipyard",
	"MarketID": 128122104,
	"StationName": "Seven Holm",
	"StarSystem": "Tamor"
}
```

In the separate shipyard.json file:
```
{ "timestamp":"2017-10-04T10:01:38Z", "event":"Shipyard", "MarketID": 128122104, "StationName":"Seven Holm", "StarSystem":"Tamor", "Horizons":true, "AllowCobraMkIV":true, "PriceList":[
	{ "id":128049249, "ShipType":"sidewinder", "ShipPrice":24336 },
	{ "id":128049255, "ShipType":"eagle", "ShipPrice":34071 },
	{ "id":128049261, "ShipType":"hauler", "ShipPrice":40094 },
	{ "id":128049267, "ShipType":"adder", "ShipPrice":66779 },
	{ "id":128672138, "ShipType":"empire_eagle", "ShipType_Localised":"Imperial Eagle", "ShipPrice":84283 },
] }
```

### ShipyardBuy

When Written: when buying a new ship in the shipyard

Parameters:

- MarketID 
- ShipType: ship being purchased 
- ShipPrice: purchase cost   
- StoreOldShip: (if storing old ship) ship type being stored 
- StoreShipID 
- SellOldShip: (if selling current ship) ship type being sold 
- SellShipID 
- SellPrice: (if selling current ship) ship sale price 


Note: the new ship's ShipID will be logged in a separate event after the purchase

Example:

```
{
	"timestamp": "2016-07-21T14:36:38Z",
	"event": "ShipyardBuy",
	"ShipType": "hauler",
	"ShipPrice": 46262,
	"StoreOldShip": "SideWinder",
	"StoreShipID": 2
}
```

### ShipyardNew

When written: after a new ship has been purchased

Parameters:

- ShipType 
- NewShipID 


Example:

```
{
	"timestamp": "2016-07-21T14:36:38Z",
	"event": "ShipyardNew",
	"ShipType": "hauler",
	"NewShipID": 4
}
```

### ShipyardSell

When Written: when selling a ship stored in the shipyard

Parameters:

- MarketID 
- ShipType: type of ship being sold 
- SellShipID 
- ShipPrice: sale price 
- System: (if ship is in another system) name of system 


Example:

```
{
	"timestamp": "2016-07-21T15:12:19Z",
	"event": "ShipyardSell",
	"ShipType": "Adder",
	"SellShipID": 6,
	"ShipPrice": 79027,
	"System": "Eranin"
}
```

### ShipyardTransfer

When Written: when requesting a ship at another station be transported to this station

Parameters:

- MarketID 
- ShipType: type of ship 
- ShipID 
- System: where it is 
- ShipMarketID 
- Distance: how far away 
- TransferPrice: cost of transfer 
- TransferTime: time taken in seconds 


Example:

```
{
	"timestamp": "2016-07-21T15:19:49Z",
	"event": "ShipyardTransfer",
	"ShipType": "SideWinder",
	"ShipID": 7,
	"System": "Eranin",
	"Distance": 85.639145,
	"TransferPrice": 580
}
```

### ShipyardSwap

When Written: when switching to another ship already stored at this station

Parameters:

- MarketID 
- ShipType: type of ship being switched to 
- ShipID 
- StoreOldShip: (if storing old ship) type of ship being stored 
- StoreShipID 
- SellOldShip: (if selling old ship) type of ship being sold 
- SellShipID 


Example

```
{
	"timestamp": "2016-07-21T14:36:06Z",
	"event": "ShipyardSwap",
	"ShipType": "sidewinder",
	"ShipID": 10,
	"StoreOldShip": "Asp",
	"StoreShipID": 2
}
```

### StoredModules

When written: when first visiting Outfitting, and when the set of stored modules has changed

Parameters:

- MarketID: current market 
- Items: (array of objects) 
	- Name 
	- StarSystem 
	- MarketID: where the module is stored 
	- StorageSlot 
	- TransferCost 
	- TransferTime 
	- Hot 
	- EngineerModifications: (recipe name) 
	- Level 
	- Quality 
	- InTransit:bool 


"EngineerModifications", "Level" and "Quality" only appear for an engineered module

The InTransit value only appears (with value true) if the module is being transferred. In this case, the system, market, transfer cost and transfer time are not written.

```
{ "timestamp":"2018-01-31T10:55:16Z", "event":"StoredModules", "MarketID":128676487, "StationName":"Farseer Inc", "StarSystem":"Deciat", "Items":[
{ "Name":"$int_engine_size3_class5_name;", "Name_Localised":"Thrusters", "StorageSlot":57, "StarSystem":"Deciat", "MarketID":128676487, "TransferCost":0, "TransferTime":0, "BuyPrice":495215, "Hot":false, "EngineerModifications":"Engine_Dirty", "Level":1, "Quality":0.000000 },
{ "Name":"$int_hyperdrive_size6_class5_name;", "Name_Localised":"FSD", "StorageSlot":59, "StarSystem":"Shinrarta Dezhra", "MarketID":128666762, "TransferCost":79680, "TransferTime":1317, "BuyPrice":12620035, "Hot":false, "EngineerModifications":"FSD_LongRange", "Level":5, "Quality":0.000000 } ] }
```

### StoredShips

When written: when visiting shipyard

Parameters:

- MarketID 
- StationName 
- StarSystem 
- ShipsHere: (array of objects) 
	- ShipID 
	- ShipType 
	- Name (if named) 
	- Value 
	- Hot 
- ShipsRemote: (array of objects) 
	- ShipID 
	- ShipType 
	- Name (if named) 
	- Value 
	- Hot 


- If the ship is in transit:

- InTransit: true 


- If the ship is not in transit:

	- StarSystem 
	- ShipMarketID 
	- TransferPrice 
	- TransferType 


Example:

```
{
	"timestamp": "2017-10-04T10:07:21Z",
	"event": "StoredShips",
	"StationName": "Jameson Memorial",
	"StarSystem": "Shinrarta Dezhra",
	"ShipsHere": [
		{
			"ShipID": 64,
			"ShipType": "sidewinder",
			"Value": 567962
		},
		{
			"ShipID": 20,
			"ShipType": "empire_eagle",
			"Value": 6373956
		}
	],
	"ShipsRemote": [
		{
			"ShipID": 0,
			"ShipType": "CobraMkIII",
			"StarSystem": "Beta-1 Tucanae",
			"TransferPrice": 3777,
			"TransferTime": 1590,
			"Value": 9464239
		}
	]
}
```

### TechnologyBroker

When written: when using the Technology Broker to unlock new purchasable technology

Parameters:

- BrokerType 
- MarketID 
- ItemsUnlocked: the name(s) of the new item unlocked (available in Outfitting) 
- Commodities: 
	- Name: name of item 
	- Count: number of items used 
- Materials: 
	- Name 
	- Count 
	- Category 


Example:

```
{
	"timestamp": "2018-03-02T11:28:44Z",
	"event": "TechnologyBroker",
	"BrokerType": "Human",
	"MarketID": 128151032,
	"ItemsUnlocked": [
		{
			"Name": "Hpt_PlasmaShockCannon_Fixed_Medium",
			"Name_Localised": "Shock Cannon"
		}
	],
	"Commodities": [
		{
			"Name": "iondistributor",
			"Name_Localised": "Ion Distributor",
			"Count": 6
		}
	],
	"Materials": [
		{
			"Name": "vanadium",
			"Count": 30,
			"Category": "Raw"
		},
		{
			"Name": "tungsten",
			"Count": 30,
			"Category": "Raw"
		},
		{
			"Name": "rhenium",
			"Count": 36,
			"Category": "Raw"
		},
		{
			"Name": "technetium",
			"Count": 30,
			"Category": "Raw"
		}
	]
}
```

### ClearImpound

When written: When clearing the impound off of one of your ships.

Parameters:

- ShipType
- ShipID
- ShipMarketID: The market the ship is stored at
- MarketID: Your current market


Example:

```
{
	"timestamp":"2022-11-18T16:19:48Z",
	"event":"ClearImpound", 
	"ShipType":"asp",
	"ShipType_Localised":"Asp Explorer",
	"ShipID":10,
	"ShipMarketID":128833431,
	"MarketID":128833431 
}
```