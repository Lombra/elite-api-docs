## New in "Odyssey"

### Backpack

Lists the contents of the backpack, in a separate _**backpack.json**_ file

Parameters:

- Items: [ ] 
- Components: [ ] 
- Consumables: [ ] 
- Data: [ ] 


Each list has objects containing:

- Name 
- OwnerID 
- MissionID (if relevant) 
- Count 


### BackpackChange

This is written when there is any change to the contents of the suit backpack – note this can be written at the same time as other events like UseConsumable

Parameters:

Either Added: [array of items] or Removed: [array of items]

Where each item contains:

- Name 
- OwnerID 
- MissionID (if relevant) 
- Count 
- Type 


### BookDropship

This event is logged when signing up to fight at a recruitment desk

Essentially the same as Booktaxi

### BookTaxi

This event is logged when booking a taxi transport

Parameters:

- Cost: cost in credits 
- DestinationSystem: starsystem name 
- DestinationLocation: station name 
- Retreat: bool (inticates if requested for exit from combat zone) 


```
{
	"timestamp": "2020-10-05T11:17:50Z",
	"event": "BookTaxi",
	"Cost": 23200,
	"DestinationSystem": "Opala",
	"DestinationLocation": "Onizuka's Hold"
}
```

### BuyMicroResources

This event is logged when buying microresources

Old format (used for example at suppies vendor)

Parameters:

- Name 
- Category 
- Count 
- Price 
- MarketID 


New format (eg at Fleet Carrier bartender)

Parameters:

- TotalCount 
- Price 
- MarketID 
- MicroResources: array of objects 
	- Name 
	- Category 
	- Count 


Category can be one of:

- Encoded
- Raw
- Manufactured
- Item
- Component
- Data
- Consumable

```
{
	"timestamp": "2020-10-07T14:01:08Z",
	"event": "BuyMicroResource",
	"Name": "healthpack",
	"Name_Localised": "Medkit",
	"Count": 4,
	"Price": 2000,
	"MarketID": 3228964864
}
```

### BuySuit

This event is logged when buying a new suit

Parameters:

- Name 
- Price 
- SuitID 
- SuitMods 


```
{
	"timestamp": "2020-10-07T09:10:55Z",
	"event": "BuySuit",
	"Name": "TacticalSuit_Class1",
	"Name_Localised": "Tactician Suit",
	"Price": 1000
}
```

### BuyWeapon

This event is logged when purchasing a new hand weapon

Parameters:

- Name 
- Price 
- SuitModuleID 
- Class 
- WeaponMods 


```
{
	"timestamp": "2020-10-07T09:11:49Z",
	"event": "BuyWeapon",
	"Name": "Wpn_S_Pistol_Kinetic_SAuto",
	"Name_Localised": "KA15",
	"Price": 1000
}
```

### CancelDropship

This event is logged if the player cancels their journey to a combat zone

Otherwise essentially the same as CancelTaxi

### CancelTaxi

This event is logged if the player cancels a booked taxi trip

Parameters:

- Refund: credits 


```
{
	"timestamp": "2020-10-05T11:17:34Z",
	"event": "CancelTaxi",
	"Refund": 27000
}
```

### CollectItems

When picking up items from the ground

Parameters:

- Name 
- Type 
- OwnerID 
- Count 
- Stolen: bool 


### CreateSuitLoadout

This event is logged when the player creates a new suit loadout

Parameters:

- SuitID 
- SuitName 
- SuitMods 
- LoadoutID 
- LoadoutName 
- Modules: [ ] 
	- SlotName 
	- ModuleName 
	- SuitModuleID 
	- Class 
	- WeaponMods 


```
{
	"timestamp": "2020-10-07T09:23:59Z",
	"event": "CreateSuitLoadout",
	"LoadoutID": 4293000001,
	"LoadoutName": "exp001"
}
```

### DeleteSuitLoadout

Parameters:

- SuitID 
- SuitName 
- LoadoutID 
- LoadoutName 


### Disembark

This event is logged when the player steps out of a ship or SRV

Parameters:

- SRV: true if getting out of SRV, false if getting out of a ship 
- Taxi: true when getting out of a taxi transposrt ship 
- Multicrew: true when getting out of another player's vessel 
- ID: player's ship ID (if players own vessel) 
- StarSystem 
- SystemAddress 
- Body 
- BodyID 
- OnStation: bool 
- OnPlanet: bool 
- StationName (if at a station) 
- StationType 
- MarketID 


```
{
	"timestamp": "2020-10-12T09:09:55Z",
	"event": "Disembark",
	"SRV": false,
	"Taxi": false,
	"Multicrew": false,
	"ID": 36
}
```

### DropItems

Parameters:

- Name 
- Type 
- OwnerID 
- MissionID (if relevant) 
- Count 


### DropShipDeploy

When exiting a shuttle dropship at a conflict zone

Parameters:

- StarSystem 
- SystemAddress 
- Body 
- BodyID 
- OnStation: bool 
- OnPlanet: bool 


### Embark

This event is logged when a player (on foot) gets into a ship or SRV

Parameters:

- SRV: true if getting into SRV, false if getting into a ship 
- Taxi: true when boarding a taxi transposrt ship 
- Multicrew: true when boarding another player's vessel 
- ID: player's ship ID (if players own vessel) 
- StarSystem 
- SystemAddress 
- Body 
- BodyID 
- OnStation: bool 
- OnPlanet: bool 
- StationName (if at a station) 
- StationType 
- MarketID 


```
{
	"timestamp": "2020-10-12T09:06:17Z",
	"event": "Embark",
	"SRV": false,
	"Taxi": false,
	"Multicrew": false,
	"ID": 36
}
```

### FCMaterials

When trading with a Fleet Carrier Bartender for materials, a file is written with the pricelist

Similar to the Shipyard and Cargo events, a brief entry is written in the journal:

Parameters:

- MarketID 
- CarrierName 
- CarrierID 


The full list is included in the file **FCMaterials.json**

- Items: array of objects 
	- Id 
	- Name 
	- Price 
	- Stock 
	- Demand 


Example of FCMaterials.json:

```
{ "timestamp":"2022-03-24T11:37:28Z", "event":"FCMaterials", "MarketID":3700020480, "CarrierName":"ralph's carrier", "CarrierID":"VHT-51W", "Items":[
{ "id":128961556, "Name":"$californium_name;", "Name_Localised":"Californium", "Price":74000, "Stock":0, "Demand":1 },
{ "id":128961524, "Name":"$aerogel_name;", "Name_Localised":"Aerogel", "Price":500, "Stock":26, "Demand":0 },
{ "id":128972334, "Name":"$meetingminutes_name;", "Name_Localised":"Meeting Minutes", "Price":1000, "Stock":0, "Demand":1 },
{ "id":128962572, "Name":"$rdx_name;", "Name_Localised":"RDX", "Price":387, "Stock":0, "Demand":9 },
{ "id":128972304, "Name":"$culinaryrecipes_name;", "Name_Localised":"Culinary Recipes", "Price":1000, "Stock":20, "Demand":0 },
{ "id": 128961527, "Name": "$chemicalcatalyst_name;", "Name_Localised": "Chemical Catalyst", "Price": 400, "Stock": 18,	"Demand": 0 }
] }
```

### LoadoutEquipModule

This event is logged when a player adds a weapon to a suit loadout

Parameters:

- SuitID 
- SuitName 
- SlotName 


- LoadoutID 
- LoadoutName 
- ModuleName: new weapon or other itsm added to loadout 
- SuitModuleID 
- Class 
- WeaponMods 


### LoadoutRemoveModule

This event is logged when a player removes a weapon from a suit loadout

Parameters:

- SuitID 
- SuitName 
- SlotName 
- LoadoutID 
- LoadoutName 
- ModuleName: weapon or other item removed from loadout 
- SuitModuleID 
- Class 
- WeaponMods 


### RenameSuitLoadout

Parameters:

- SuitID 
- SuitName 
- LoadoutID 
- Loadoutname 


### ScanOrganic

This event is logged when the player uses the Organic Sampling Tool to scan, log or analyse organic discoveries. The first scan is 'Log', subsequent scans are 'sample' until fully scanned, final scan is 'analyse'

Parameters:

- ScanType: Log, Sample, or Analyse 
- Genus 
- Species 
- Variant
- SystemAddress 
- Body 


Example:

```
{
	"timestamp":"2022-12-07T14:27:55Z",
	"event":"ScanOrganic", 
	"ScanType":"Analyse",
	"Genus":"$Codex_Ent_Tubus_Genus_Name;", 
	"Genus_Localised":"Tubus",
	"Species":"$Codex_Ent_Tubus_01_Name;",
	"Species_Localised":"Tubus Conifer",
	"Variant":"$Codex_Ent_Tubus_01_A_Name;",
	"Variant_Localised":"Tubus Conifer - Indigo",
	"SystemAddress":316174882163, 
	"Body":44
}
```

### SellMicroResources

This event is logged when a player sells Microresources for cash

Parameters:

- MicroResources: array of objects 
	- Name 
	- Category 
	- Count 
- Price 
- MarketID 


```
{
	"timestamp": "2020-10-07T14:08:28Z",
	"event": "SellMicroResources",
	"MicroResources": [
		{
			"Name": "healthmonitor",
			"Name_Localised": "Health Monitor",
			"Count": 3
		}
	],
	"Price": 1500,
	"MarketID": 3228964864
}
```

### SellOrganicData

This event records that a player has sold organic data (see ScanOrganic)

Parameters:

- MarketID 
- BioData: Array 
	- Genus 
	- Species 
	- Variant
	- Value 
	- Bonus 


```
{
    "timestamp": "2022-12-07T14:44:28Z",
    "event": "SellOrganicData",
    "MarketID": 128001536,
    "BioData": [
        {
            "Genus": "$Codex_Ent_Tubus_Genus_Name;",
            "Genus_Localised": "Tubus",
            "Species": "$Codex_Ent_Tubus_01_Name;",
            "Species_Localised": "Tubus Conifer",
            "Variant": "$Codex_Ent_Tubus_01_A_Name;",
            "Variant_Localised": "Tubus Conifer - Indigo",
            "Value": 2415500,
            "Bonus": 9662000
        }
    ]
}
```

### SellSuit

This event is logged when a player sells a flight suit

Parameters:

- Name 
- Price 
- SuitID 
- SuitMods 


```
{
	"timestamp": "2020-10-05T14:34:04Z",
	"event": "SellSuit",
	"Name": "tacticalsuit_class1",
	"Name_Localised": "Tactician Suit",
	"Price": 70000
}
```

### SellWeapon

This event is logged when a player sells a hand weapon

Parameters:

- Name 
- Price 
- SuitModuleID 
- Class 
- WeaponMods 


### ShipLocker

Lists the contents of the ship locker, eg at startup

The full contents are written to a separate file, ShipLocker.json

The full list is also written into the journal at startup (if in a ship) and when boarding a ship

The shiplocker.json file is updated when the locker contents are changed

Parameters:

- Items: [ ] 
- Components: [ ] 
- Consumables: [ ] 
- Data: [ ] 


Each list has objects containing:

- Name 
- OwnerID 
- MissionID (if relevant) 
- Count 


### SwitchSuitLoadout

This event is logged when a player selects a different flight suit from the ship's locker

Parameters:

- SuitID 
- SuitName 
- SuitMods 
- LoadoutID 
- LoadoutName 
- Modules: array of objects 
	- SlotName 
	- SuitModuleID 
	- ModuleName 
	- Class 
	- WeaponMods 


### TransferMicroResources

Written when transferreing items between backpack and ship locker

Parameters:

- Transfers: array of objects 
	- Name 
	- Category 
	- Count 
	- Direction 


```
{
	"timestamp": "2021-04-14T15:07:54Z",
	"event": "TransferMicroResources",
	"Transfers": [
		{
			"Name": "healthpack",
			"Name_Localised": "Medkit",
			"Category": "Consumable",
			"Count": 1,
			"Direction": "ToBackpack"
		},
		{
			"Name": "energycell",
			"Name_Localised": "Energy Cell",
			"Category": "Consumable",
			"Count": 1,
			"Direction": "ToBackpack"
		}
	]
}
```

### TradeMicroResources

This event is logged when the player exchanges owned microresources to receive some other type of microresource

Parameters:

- Offered: array of objects 
	- Name 
	- Category 
	- Count 
- Received: name of resource received 
- Category 
- Count: number received 
- MarketID 


```
{
	"timestamp": "2020-10-07T14:55:09Z",
	"event": "TradeMicroResources",
	"Offered": [
		{
			"Name": "mutageniccatalyst",
			"Name_Localised": "Mutagenic Catalyst",
			"Count": 5
		}
	],
	"Received": "californium",
	"Count": 3,
	"MarketID": 3228964864
}
```

### UpgradeSuit

This event is logged when the player upgrades their flight suit

Parameters:

- Name 
- SuitID 
- Class 
- Cost 
- Resources 


```
{
	"timestamp": "2022-08-19T16:41:33Z",
	"event": "UpgradeSuit",
	"Name": "utilitysuit_class1",
	"Name_Localised": "Maverick Suit",
	"SuitID": 1702914472756487,
	"Class": 2,
	"Cost": 600000,
	"Resources": [
		{
			"Name": "suitschematic",
			"Name_Localised": "Suit Schematic",
			"Count": 1
		},
		{
			"Name": "healthmonitor",
			"Name_Localised": "Health Monitor",
			"Count": 1
		},
		{
			"Name": "largecapacitypowerregulator",
			"Name_Localised": "Power Regulator",
			"Count": 1
		},
		{
			"Name": "manufacturinginstructions",
			"Name_Localised": "Manufacturing Instructions",
			"Count": 1
		},
		{
			"Name": "carbonfibreplating",
			"Name_Localised": "Carbon Fibre Plating",
			"Count": 5
		},
		{
			"Name": "graphene",
			"Count": 5
		}
	]
}
```

### UpgradeWeapon

This event is logged when the player upgrades a hand weapon

Parameters:

- Name 
- SuitModuleID 
- Class 
- Cost 
- Resources 


```
{
	"timestamp": "2022-08-19T16:58:18Z",
	"event": "UpgradeWeapon",
	"Name": "wpn_m_assaultrifle_laser_fauto",
	"Name_Localised": "TK Aphelion",
	"Class": 2,
	"SuitModuleID": 1681611765701131,
	"Cost": 0,
	"Resources": [
		{
			"Name": "weaponschematic",
			"Name_Localised": "Weapon Schematic",
			"Count": 1
		},
		{
			"Name": "ionisedgas",
			"Name_Localised": "Ionised Gas",
			"Count": 1
		},
		{
			"Name": "manufacturinginstructions",
			"Name_Localised": "Manufacturing Instructions",
			"Count": 1
		},
		{
			"Name": "microelectrode",
			"Count": 5
		},
		{
			"Name": "opticalfibre",
			"Name_Localised": "Optical Fibre",
			"Count": 5
		}
	]
}
```

### UseConsumable

When using an item from the player's inventory (backpack)

Parameters:

- Name 
- Type 
