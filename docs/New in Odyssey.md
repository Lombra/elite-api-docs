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

Parameters:

- Name 
- Category 
- Count 
- Price 
- MarketID 


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
- LoadoutID 
- LoadoutName 
- Modules: [ ] 
	- SlotName 
	- ModuleName 
	- SuitModuleID 


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
- SystemAddress 
- Body 


Example:

```
{
	"timestamp": "2020-12-01T15:52:45Z",
	"event": "ScanOrganic",
	"ScanType": "Sample",
	"Genus": "Bacterial Colonies",
	"Species": "1",
	"SystemAddress": 44820334955,
	"Body": 66
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
	- Value 
	- Bonus 


```
{
	"timestamp": "2020-12-01T16:06:57Z",
	"event": "SellOrganicData",
	"MarketID": 128666762,
	"BioData": [
		{
			"Genus": "Bacterial Colonies",
			"Species": "1",
			"Value": 100,
			"Bonus": 1000
		},
		{
			"Genus": "Bacterial Colonies",
			"Species": "2",
			"Value": 100,
			"Bonus": 1000
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


### ShipLockerMaterials

Lists the contents of the ship locker, eg at startup

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
- LoadoutID 
- LoadoutName 
- Modules: array of objects 
	- SlotName 
	- SuitModuleID 
	- ModuleName 


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


```
{
	"timestamp": "2020-10-06T09:37:49Z",
	"event": "UpgradeSuit",
	"Name": "utilitysuit_class1",
	"Name_Localised": "Utility Suit",
	"Class": 2,
	"Cost": 100000
}
```

### UpgradeWeapon

This event is logged when the player upgrades a hand weapon

Parameters:

- Name 
- SuitModuleID 
- Class 
- Cost 


```
{
	"timestamp": "2020-10-06T09:38:23Z",
	"event": "UpgradeWeapon",
	"Name": "wpn_s_pistol_plasma_charged",
	"Name_Localised": "Manticore Tormentor",
	"Class": 2,
	"Cost": 0
}
```

### UseConsumable

When using an item from the player's inventory (backpack)

Parameters:

- Name 
- Type 
