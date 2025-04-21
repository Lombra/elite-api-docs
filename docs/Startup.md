# Startup

## Cargo

When written: at startup, _note this is now written slightly later in startup, after we have initialised missions, so we can detect if any cargo came from an abandoned delivery mission_

The first "Cargo" event in the file will contain the full inventory, others just indicate a separate file has been written

The full data is now written to a separate file Cargo.json

A simple event (with no parameters) is written to the main journal file when the cargo file is updated

Parameters:

- Vessel: "Ship" or "SRV"
- Inventory: array of cargo,
	- Name
	- Count
	- Stolen
	- MissionID (if relevant)

Example:

```json
{
	"timestamp": "2018-06-26T08:21:17Z",
	"event": "Cargo",
	"Vessel": "Ship",
	"Inventory": [
		{
			"Name": "gold",
			"Count": 2,
			"Stolen": 0
		},
		{
			"Name": "gold",
			"MissionID": 65397935,
			"Count": 14,
			"Stolen": 0
		},
		{
			"Name": "iondistributor",
			"Name_Localised": "Ion Distributor",
			"Count": 2,
			"Stolen": 0
		}
	]
}
```

## ClearSavedGame

When written: If you should ever reset your game

Parameters:

- Name: commander name
- FID: player id

Example:

```json
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "ClearSavedGame",
	"Name": "HRC1",
	"FID": "F44396"
}
```

## Commander

When written: at the start of the LoadGame process

This is written before the inventory, loadout, etc

Parameters:

- Name: commander name
- FID: player id

## Loadout

When written: at startup, when loading from main menu, or when switching ships, or after changing the ship in Outfitting, or when docking SRV back in mothership

Parameters:

- Ship: current ship type
- ShipID: ship id number (indicates which of your ships you are in)
- ShipName: user-defined ship name
- ShipIdent: user-defined ship ID string
- HullValue – may not always be present
- ModulesValue – may not always be present
- HullHealth
- UnladenMass – Mass of Hull and Modules, excludes fuel and cargo
- FuelCapacity: { Main: , Reserve: }
- CargoCapacity
- MaxJumpRange: (based on zero cargo, and just enough fuel for 1 jump)
- Rebuy
- Hot: (if wanted at startup – may not always be present)

- Modules: array of installed items, each with:
	- Slot: slot name
	- Item: module name - lowercase
	- On: bool, indicates on or off
	- Priority: power priority
	- Health
	- Value
	- AmmoInClip: (if relevant)
	- AmmoInHopper: (if relevant)
	- Engineering: (if engineered)
		- EngineerID
		- Engineer: name
		- BlueprintID
		- BlueprintName: blueprint name
		- Level
		- Quality
		- ExperimentalEffect: (name, if applied)
		- Modifications: Json array of objects
			- Label – (see §15.11 below)
			- Value – may not always be present
			- OriginalValue
			- LessIsGood: bool

_(For a passenger cabin, AmmoInClip holds the number of places in the cabin)_

## Materials

When written: at startup, when loading from main menu into game

Parameters:

- Raw: array of raw materials (each with name and count)
- Manufactured: array of manufactured items
- Encoded: array of scanned data

Example:

```json
{
	"timestamp": "2017-02-10T14:25:51Z",
	"event": "Materials",
	"Raw": [
		{
			"Name": "chromium",
			"Count": 28
		},
		{
			"Name": "zinc",
			"Count": 18
		},
		{
			"Name": "iron",
			"Count": 23
		},
		{
			"Name": "sulphur",
			"Count": 19
		}
	],
	"Manufactured": [
		{
			"Name": "refinedfocuscrystals",
			"Count": 10
		},
		{
			"Name": "highdensitycomposites",
			"Count": 3
		},
		{
			"Name": "mechanicalcomponents",
			"Count": 3
		}
	],
	"Encoded": [
		{
			"Name": "emissiondata",
			"Count": 32
		},
		{
			"Name": "shielddensityreports",
			"Count": 23
		}
	]
}
```

## Missions

When written: at startup

Parameters:

- Active: (array of objects)
- Failed: (array of objects)
- Complete: (array of objects)

Each object contains:

- MissionID
- Name
- PassengerMission: bool
- Expires: time left in seconds

```json
{
	"timestamp": "2017-10-02T10:37:58Z",
	"event": "Missions",
	"Active": [
		{
			"MissionID": 65380900,
			"Name": "Mission_Courier_name",
			"PassengerMission": false,
			"Expires": 82751
		}
	],
	"Failed": [],
	"Complete": []
}
```

## NewCommander

When written: Creating a new commander

Parameters:

- Name: (new) commander name
- FID: player id
- Package: selected starter package

Example:

```json
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "NewCommander",
	"Name": "HRC1",
	"FID": "F44396",
	"Package": "ImperialBountyHunter"
}
```

## LoadGame

When written: at startup, when loading from main menu into game

Parameters:

- Commander: commander name
- FID: player id
- Horizons: bool
- Odyssey: bool
- Ship: current ship type
- ShipID: ship id number (indicates which of your ships you are in)
- StartLanded: true (only present if landed)
- StartDead:true (only present if starting dead: see "Resurrect")
- GameMode: Open, Solo or Group
- Group: name of group (if in a group)
- Credits: current credit balance
- Loan: current loan
- ShipName: user-defined ship name
- ShipIdent: user-defined ship ID string
- FuelLevel: current fuel
- FuelCapacity: size of main tank
- language
- gameversion
- build

Example:

```json
{
	"timestamp": "2017-02-10T14:25:51Z",
	"event": "LoadGame",
	"Commander": "HRC-2",
	"FID": "F44396",
	"Horizons": true,
	"Ship": "FerDeLance",
	"ShipID": 19,
	"ShipName": "jewel of parhoon",
	"ShipIdent": "hr-17f",
	"FuelLevel": 3.964024,
	"FuelCapacity": 8,
	"GameMode": "Open",
	"Credits": 2890718739,
	"Loan": 0
}
```

## Passengers

When written: at startup, when loading the saved game file

Parameters:

- Manifest: array of passenger records, each containing:
	- MissionID
	- Type
	- VIP (bool)
	- Wanted (bool)
	- Count

## Powerplay

When written: at startup, if player has pledged to a power

Parameters:

- Power: name
- Rank
- Merits
- Votes
- TimePledged (time in seconds)

Example:

```json
{
	"timestamp": "2018-01-31T10:53:04Z",
	"event": "Powerplay",
	"Power": "Edmund Mahon",
	"Rank": 0,
	"Merits": 10,
	"Votes": 0,
	"TimePledged": 433024
}
```

## Progress

When written: at startup

Parameters:

- Combat: percent progress to next rank
- Trade: "
- Explore: "
- Empire: "
- Federation: "
- CQC: "

Example:

```json
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Progress",
	"Combat": 77,
	"Trade": 9,
	"Explore": 93,
	"Empire": 0,
	"Federation": 0,
	"CQC": 0
}
```

## Rank

When written: at startup

Parameters:

- Combat: rank on scale 0-8
- Trade: rank on scale 0-8
- Explore: rank on scale 0-8
- Empire: military rank
- Federation: military rank
- CQC: rank on scale 0-8

Example:

```json
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Rank",
	"Combat": 2,
	"Trade": 2,
	"Explore": 5,
	"Empire": 1,
	"Federation": 3,
	"CQC": 0
}
```

## Reputation

When written: at startup (after Rank and Progress)

This gives the player's reputation (on a scale of -100..+100) with the superpowers

Parameters:

- Empire
- Federation
- Independent
- Alliance

Note thresholds:

-100.. -90: hostile

-90.. -35: unfriendly

-35..+ 4: neutral

+4..+35: cordial

+35..+90: friendly

+90..+100: allied

## Statistics

When written: at startup

This line contains the information displayed in the statistics panel on the right side of the cockpit

Parameters:

- Bank_Account
	- Current_Wealth Spent_On_Ships
	- Spent_On_Outfitting Spent_On_Repairs
	- Spent_On_Fuel
	- Spent_On_Ammo_Consumables
	- Insurance_Claims
	- Spent_On_Insurance
	- Owned_Ship_Count
	- Spent_On_Suits
	- Spent_On_Weapons
	- Spent_On_Suit_Consumables
	- Suits_Owned
	- Weapons_Owned
	- Spent_On_Premium_Stock
	- Premium_Stock_Bought
- Combat
	- Bounties_Claimed
	- Bounty_Hunting_Profit
	- Combat_Bonds
	- Combat_Bond_Profits
	- Assassinations
	- Assassination_Profits
	- Highest_Single_Reward
	- Skimmers_Killed
	- OnFoot_Combat_Bonds
	- OnFoot_Combat_Bonds_Profits
	- OnFoot_Vehicles_Destroyed
	- OnFoot_Ships_Destroyed
	- Dropships_Taken
	- Dropships_Booked
	- Dropships_Cancelled
	- ConflictZone_High
	- ConflictZone_Medium
	- ConflictZone_Low
	- ConflictZone_Total
	- ConflictZone_High_Wins
	- ConflictZone_Medium_Wins
	- ConflictZone_Low_Wins
	- ConflictZone_Total_Wins
	- Settlement_Defended
	- Settlement_Conquered
	- OnFoot_Skimmers_Killed
	- OnFoot_Scavs_Killed
	- ConflictZone_Low
	- ConflictZone_Total
	- ConflictZone_High_Wins
	- ConflictZone_Medium_Wins
	- ConflictZone_Low_Wins
	- ConflictZone_Total_Wins
	- Settlement_Defended
	- Settlement_Conquered
	- OnFoot_Skimmers_Killed
	- OnFoot_Scavs_Killed
- Crime
	- Notoriety
	- Fines
	- Total_Fines
	- Bounties_Received
	- Total_Bounties
	- Highest_Bounty
	- Malware_Uploaded
	- Settlements_State_Shutdown
	- Production_Sabotage
	- Production_Theft
	- Total_Murders
	- Citizens_Murdered
	- Omnipol_Murdered
	- Guards_Murdered
	- Data_Stolen
	- Goods_Stolen
	- Sample_Stolen
	- Total_Stolen
	- Turrets_Destroyed
	- Turrets_Overloaded
	- Turrets_Total
	- Value_Stolen_StateChange
	- Profiles_ClonedMalware_Uploaded
	- Settlements_State_Shutdown
	- Production_Sabotage
	- Production_Theft
	- Total_Murders
	- Citizens_Murdered
	- Omnipol_Murdered
	- Guards_Murdered
	- Data_Stolen
	- Goods_Stolen
	- Sample_Stolen
	- Total_Stolen
	- Turrets_Destroyed
	- Turrets_Overloaded
	- Turrets_Total
	- Value_Stolen_StateChange
	- Profiles_Cloned
- Smuggling
	- Black_Markets_Traded_With
	- Black_Markets_Profits
	- Resources_Smuggled
	- Average_Profit
	- Highest_Single_Transaction
- Trading
	- Markets_Traded_With
	- Market_Profits
	- Resources_Traded
	- Average_Profit
	- Highest_Single_Transaction
	- Data_Sold
	- Goods_Sold
	- Assets_Sold
- Mining
	- Mining_Profits
	- Quantity_Mined
	- Materials_Collected
- Exploration
	- Systems_Visited
	- Exploration_Profits
	- Planets_Scanned_To_Level_2
	- Planets_Scanned_To_Level_3
	- Efficient_Scans
	- Highest_Payout
	- Total_Hyperspace_Distance
	- Total_Hyperspace_Jumps
	- Greatest_Distance_From_Start
	- Time_Played
	- OnFoot_Distance_Travelled
	- Shuttle_Journeys
	- Shuttle_Distance_Travelled
	- Spent_On_Shuttles
	- First_Footfalls
	- Planet_Footfalls
	- Settlements_Visited
- Passengers
	- Passengers_Missions_Accepted
	- Passengers_Missions_Bulk
	- Passengers_Missions_VIP
	- Passengers_Missions_Delivered
	- Passengers_Missions_Ejected
- Search_And_Rescue
	- SearchRescue_Traded
	- SearchRescue_Profit
	- SearchRescue_Count
	- Salvage_Legal_POI
	- Salvage_Legal_Settlements
	- Salvage_Illegal_POI
	- Salvage_Illegal_Settlements
	- Maglocks_Opened
	- Panels_Opened
	- Settlements_State_FireOut
	- Settlements_State_Reboot
- TG_ENCOUNTERS
	- TG_ENCOUNTER_KILLED
	- TG_ENCOUNTER_TOTAL
	- TG_ENCOUNTER_TOTAL_LAST_SYSTEM
	- TG_ENCOUNTER_TOTAL_LAST_TIMESTAMP
	- TG_ENCOUNTER_TOTAL_LAST_SHIP
- Crafting
	- Count_Of_Used_Engineers
	- Recipes_Generated
	- Recipes_Generated_Rank_1
	- Recipes_Generated_Rank_2
	- Recipes_Generated_Rank_3
	- Recipes_Generated_Rank_4
	- Recipes_Generated_Rank_5
	- Suit_Mods_Applied
	- Weapon_Mods_Applied
	- Suits_Upgraded
	- Weapons_Upgraded
	- Suits_Upgraded_Full
	- Weapons_Upgraded_Full
	- Suit_Mods_Applied_Full
	- Weapon_Mods_Applied_Full
- Crew
	- NpcCrew_TotalWages
	- NpcCrew_Hired
	- NpcCrew_Fired
	- NpcCrew_Died
- Multicrew
	- Multicrew_Time_Total
	- Multicrew_Gunner_Time_Total
	- Multicrew_Fighter_Time_Total
	- Multicrew_Credits_Total
	- Multicrew_Fines_Total
- Material_Trader_Stats
	- Trades_Completed
	- Materials_Traded
	- Encoded_Materials_Traded
	- Raw_Materials_Traded
	- Grade_1_Materials_Traded
	- Grade_2_Materials_Traded
	- Grade_3_Materials_Traded
	- Grade_4_Materials_Traded
	- Grade_5_Materials_Traded
	- Assets_Traded_In
	- Assets_Traded_Out
- Exobiology
	- Organic_Genus_Encountered
	- Organic_Species_Encountered
	- Organic_Variant_Encountered
	- Organic_Data_Profits
	- Organic_Data
	- First_Logged_Profits
	- First_Logged
	- Organic_Systems
	- Organic_Planets
	- Organic_Genus
	- Organic_Species


Note times are in seconds

Example:

```json
{
	"timestamp": "2017-09-25T15:18:31Z",
	"event": "Statistics",
	"Bank_Account": {
		"Current_Wealth": 148827050,
		"Spent_On_Ships": 14499177,
		"Spent_On_Outfitting": 30785093,
		"Spent_On_Repairs": 17716,
		"Spent_On_Fuel": 1647,
		"Spent_On_Ammo_Consumables": 0,
		"Insurance_Claims": 4,
		"Spent_On_Insurance": 1397620,
		"Owned_Ship_Count": 8,
		"Spent_On_Suits": 79200000,
		"Spent_On_Weapons": 82525000,
		"Spent_On_Suit_Consumables": 3782000,
		"Suits_Owned": 11,
		"Weapons_Owned": 20,
		"Spent_On_Premium_Stock": 95000000,
		"Premium_Stock_Bought": 36
	},
	"Combat": {
		"Bounties_Claimed": 0,
		"Bounty_Hunting_Profit": 0,
		"Combat_Bonds": 0,
		"Combat_Bond_Profits": 0,
		"Assassinations": 0,
		"Assassination_Profits": 0,
		"Highest_Single_Reward": 0,
		"Skimmers_Killed": 0,
		"OnFoot_Combat_Bonds": 2686,
		"OnFoot_Combat_Bonds_Profits": 285103267,
		"OnFoot_Vehicles_Destroyed": 0,
		"OnFoot_Ships_Destroyed": 0,
		"Dropships_Taken": 45,
		"Dropships_Booked": 92,
		"Dropships_Cancelled": 0,
		"ConflictZone_High": 76,
		"ConflictZone_Medium": 28,
		"ConflictZone_Low": 12,
		"ConflictZone_Total": 116,
		"ConflictZone_High_Wins": 74,
		"ConflictZone_Medium_Wins": 26,
		"ConflictZone_Low_Wins": 12,
		"ConflictZone_Total_Wins": 112,
		"Settlement_Defended": 6,
		"Settlement_Conquered": 5,
		"OnFoot_Skimmers_Killed": 7,
		"OnFoot_Scavs_Killed": 243
	},
	"Crime": {
		"Notoriety":0,
		"Fines": 0,
		"Total_Fines": 0,
		"Bounties_Received": 0,
		"Total_Bounties": 0,
		"Highest_Bounty": 0,
		"Malware_Uploaded": 0,
		"Settlements_State_Shutdown": 1,
		"Production_Sabotage": 0,
		"Production_Theft": 62,
		"Total_Murders": 25,
		"Citizens_Murdered": 17,
		"Omnipol_Murdered": 1,
		"Guards_Murdered": 7,
		"Data_Stolen": 60,
		"Goods_Stolen": 520,
		"Sample_Stolen": 4,
		"Total_Stolen": 584,
		"Turrets_Destroyed": 0,
		"Turrets_Overloaded": 0,
		"Turrets_Total": 0,
		"Value_Stolen_StateChange": 0,
		"Profiles_Cloned": 24
	},
	"Smuggling": {
		"Black_Markets_Traded_With": 0,
		"Black_Markets_Profits": 0,
		"Resources_Smuggled": 0,
		"Average_Profit": 0,
		"Highest_Single_Transaction": 0
	},
	"Trading": {
		"Markets_Traded_With": 3,
		"Market_Profits": 40700,
		"Resources_Traded": 23,
		"Average_Profit": 4070,
		"Highest_Single_Transaction": 17961,
		"Data_Sold": 366,
		"Goods_Sold": 526,
		"Assets_Sold": 426
	},
	"Mining": {
		"Mining_Profits": 0,
		"Quantity_Mined": 0,
		"Materials_Collected": 100
	},
	"Exploration": {
		"Systems_Visited": 228,
		"Exploration_Profits": 304469,
		"Planets_Scanned_To_Level_2": 39,
		"Planets_Scanned_To_Level_3": 15,
		"Highest_Payout": 52503,
		"Total_Hyperspace_Distance": 844927,
		"Total_Hyperspace_Jumps": 295,
		"Greatest_Distance_From_Start": 65222.47204614,
		"Time_Played": 651060,
		"OnFoot_Distance_Travelled": 965216,
		"Shuttle_Journeys": 3,
		"Shuttle_Distance_Travelled": 136.20724062429,
		"Spent_On_Shuttles": 64150,
		"First_Footfalls": 720,
		"Planet_Footfalls": 1138,
		"Settlements_Visited": 28
	},
	"Passengers": {
		"Passengers_Missions_Bulk": 0,
		"Passengers_Missions_VIP": 0,
		"Passengers_Missions_Delivered": 0,
		"Passengers_Missions_Ejected": 0
	},
	"Search_And_Rescue": {
		"SearchRescue_Traded": 12,
		"SearchRescue_Profit": 19467,
		"SearchRescue_Count": 8,
		"Salvage_Legal_POI": 3764100,
		"Salvage_Legal_Settlements": 9068600,
		"Salvage_Illegal_POI": 1450000,
		"Salvage_Illegal_Settlements": 0,
		"Maglocks_Opened": 756,
		"Panels_Opened": 194,
		"Settlements_State_FireOut": 302,
		"Settlements_State_Reboot": 36
	},
	"TG_ENCOUNTERS": {
		"TG_ENCOUNTER_KILLED": 213,
		"TG_ENCOUNTER_TOTAL": 18,
		"TG_ENCOUNTER_TOTAL_LAST_SYSTEM": "Cephei Sector XO-A b3",
		"TG_ENCOUNTER_TOTAL_LAST_TIMESTAMP": "3310-04-19 15:00",
		"TG_ENCOUNTER_TOTAL_LAST_SHIP": "Krait Mk II"
	},
	"Crafting": {
		"Count_Of_Used_Engineers": 2,
		"Recipes_Generated": 28,
		"Recipes_Generated_Rank_1": 9,
		"Recipes_Generated_Rank_2": 6,
		"Recipes_Generated_Rank_3": 9,
		"Recipes_Generated_Rank_4": 4,
		"Recipes_Generated_Rank_5": 0,
		"Suit_Mods_Applied": 10,
		"Weapon_Mods_Applied": 1,
		"Suits_Upgraded": 6,
		"Weapons_Upgraded": 8,
		"Suits_Upgraded_Full": 0,
		"Weapons_Upgraded_Full": 0,
		"Suit_Mods_Applied_Full": 6,
		"Weapon_Mods_Applied_Full": 0
	},
	"Crew": {
		"NpcCrew_TotalWages": 0,
		"NpcCrew_Hired": 0,
		"NpcCrew_Fired": 0,
		"NpcCrew_Died": 0
	},
	"Multicrew": {
		"Multicrew_Time_Total": 23327,
		"Multicrew_Gunner_Time_Total": 14241,
		"Multicrew_Fighter_Time_Total": 6070,
		"Multicrew_Credits_Total": 0,
		"Multicrew_Fines_Total": 0
	},
	"Material_Trader_Stats": {
		"Trades_Completed": 540,
		"Materials_Traded": 11617,
		"Encoded_Materials_Traded": 4168,
		"Raw_Materials_Traded": 538,
		"Grade_1_Materials_Traded": 2037,
		"Grade_2_Materials_Traded": 2060,
		"Grade_3_Materials_Traded": 3236,
		"Grade_4_Materials_Traded": 2814,
		"Grade_5_Materials_Traded": 1470,
		"Assets_Traded_In": 218,
		"Assets_Traded_Out": 673
	},
	"Exobiology": {
		"Organic_Genus_Encountered": 21,
		"Organic_Species_Encountered": 98,
		"Organic_Variant_Encountered": 56,
		"Organic_Data_Profits": 17497803745,
		"Organic_Data": 1880,
		"First_Logged_Profits": 11593725615,
		"First_Logged": 1054,
		"Organic_Systems": 407,
		"Organic_Planets": 818,
		"Organic_Genus": 13,
		"Organic_Species": 34
	}
}
```
