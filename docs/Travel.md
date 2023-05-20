## Travel

### ApproachBody

When written: when in Supercruise, and distance from planet drops to within the 'Orbital Cruise' zone

Parameters:

- StarSystem 
- SystemAddress 
- Body 
- BodyID 


```
{
	"timestamp": "2017-09-27T15:21:05Z",
	"event": "ApproachBody",
	"StarSystem": "Eranin",
	"Body": "Eranin 2"
}
```

### Docked

When written: when landing at landing pad in a space station, outpost, or surface settlement

Parameters:

- StationName: name of station 
- MarketID 
- SystemAddress 
- StationType: type of station 
- StarSystem: name of system 
- CockpitBreach:true (only if landing with breached cockpit) 
- StationFaction: station's controlling faction 
	- Name 
	- FactionState 
- StationAllegiance 
- StationEconomy : (station's primary economy) 
- StationEconomies: (array of name and proportion values) 
- StationGovernment 
- DistFromStarLS 
- StationServices: (Array of strings) 
- Wanted: (only if docking when wanted locally) 
- ActiveFine: true (if any fine is active) 
- LandingPads: 
	- Small 
	- Medium 
	- Large 
- StationState

The 'anonymous docking' protocol comes into effect if you're either Wanted (ie have a local bounty) or have an ActiveFine

Example:

```
{
	"timestamp": "2018-03-07T12:22:25Z",
	"event": "Docked",
	"StationName": "Jenner Orbital",
	"StationType": "Outpost",
	"StarSystem": "Luhman 16",
	"SystemAddress": 22960358574928,
	"MarketID": 3228883456,
	"StationFaction": {
		"Name": "Union of Luhman 16 Values Party",
		"FactionState": "CivilWar"
	},
	"StationGovernment": "$government_Democracy;",
	"StationGovernment_Localised": "Democracy",
	"StationAllegiance": "Federation",
	"StationServices": [
		"Dock",
		"Autodock",
		"BlackMarket",
		"Commodities",
		"Contacts",
		"Exploration",
		"Missions",
		"Outfitting",
		"CrewLounge",
		"Rearm",
		"Refuel",
		"Workshop",
		"MissionsGenerated",
		"FlightController",
		"StationOperations",
		"Powerplay",
		"SearchAndRescue"
	],
	"StationEconomy": "$economy_Refinery;",
	"StationEconomy_Localised": "Refinery",
	"StationEconomies": [
		{
			"Name": "$economy_Refinery;",
			"Name_Localised": "Refinery",
			"Proportion": 0.76
		},
		{
			"Name": "$economy_Extraction;",
			"Name_Localised": "Extraction",
			"Proportion": 0.24
		}
	],
	"DistFromStarLS": 10.061876
}
```

StationServices can include:  Dock, Autodock, BlackMarket, Commodities, Contacts, Exploration, Initiatives, Missions, Outfitting,CrewLounge, Rearm, Refuel, Repair, Shipyard, Tuning, Workshop, MissionsGenerated, Facilitator, Research, FlightController, StationOperations, OnDockMission, Powerplay, SearchAndRescue,

New in v3.7: shop, carriermanagement, carrierfuel, carriervendor, livery, modulepacks, voucherredemption

StationState can be any of the following: UnderRepairs, Damaged, Abandoned, UnderAttack

### DockingCancelled

When written: when the player cancels a docking request

Parameters:

- StationName: name of station 
- StationType 
- MarketID 


### DockingDenied

When written: when the station denies a docking request

Parameters:

- StationName: name of station 
- StationType 
- MarketID 
- Reason: reason for denial 


Reasons include: NoSpace, TooLarge, Hostile, Offences, Distance, ActiveFighter, NoReason

### DockingGranted

When written: when a docking request is granted

Parameters:

- StationName: name of station 
- StationType 
- MarketID 
- LandingPad: pad number 


### DockingRequested

When written: when the player requests docking at a station

Parameters:

- StationName: name of station 
- StationType 
- MarketID 
- LandingPads: 
	- Small 
	- Medium 
	- Large 


### DockingTimeout

When written: when a docking request has timed out

Parameters:

- StationName: name of station 
- StationType 
- MarketID 


### FSDJump

When written: when jumping from one star system to another

Parameters:

- StarSystem: name of destination starsystem 
- SystemAddress 
- StarPos: star position, as a Json array [x, y, z], in light years 
- Body: star's body name 
- JumpDist: distance jumped 
- FuelUsed 
- FuelLevel 
- BoostUsed: whether FSD boost was used 
- SystemFaction: system controlling faction 
	- Name 
	- FactionState 
- SystemAllegiance 
- SystemEconomy 
- SystemSecondEconomy 
- SystemGovernment 
- SystemSecurity 
- Population 
- Wanted 
- Factions: an array of info for the local minor factions 
	- Name 
	- FactionState 
	- Government 
	- Influence 
	- Happiness 
	- MyReputation 
	- PendingStates: array (if any) with State name and Trend value 
	- RecovingStates: array (if any)with State name and Trend value 
	- ActiveStates: array with State names (Note active states do not have a Trend value) 
	- SquadronFaction:true (if player is in squadron aligned to this faction) 
	- HappiestSystem:true (if player squadron faction, and this is happiest system) 
	- HomeSystem:true(if player squadron faction, and this is home system) 
- Conflicts: an array of info about local conflicts (if any) 
	- WarType 
	- Status 
	- Faction1: { Name, Stake, WonDays } 
	- Faction2: { Name, Stake, WonDays } 


If the player is pledged to a Power in Powerplay, and the star system is involved in powerplay,

- Powers: a json array with the names of any powers contesting the system, or the name of the controlling power 
- PowerplayState: the system state – one of ("InPrepareRadius", "Prepared", "Exploited", "Contested", "Controlled", "Turmoil", "HomeSystem") 

If starting in a system affected by the thargoid war:

- ThargoidWar
	- CurrentState
	- NextStateSuccess
	- NextStateFailure
	- SuccessStateReached
	- WarProgress:0-1 values
	- RemainingPorts
	- EstimatedRemainingTime


Example:

Happiness values are: (Elated, Happy, Discontented, Unhappy, Despondent)

Example:

```
{
	"timestamp": "2018-10-29T10:05:21Z",
	"event": "FSDJump",
	"StarSystem": "Eranin",
	"SystemAddress": 2832631632594,
	"StarPos": [
		-22.84375,
		36.53125,
		-1.1875
	],
	"SystemAllegiance": "Independent",
	"SystemEconomy": "$economy_Agri;",
	"SystemEconomy_Localised": "Agriculture",
	"SystemSecondEconomy": "$economy_Refinery;",
	"SystemSecondEconomy_Localised": "Refinery",
	"SystemGovernment": "$government_Anarchy;",
	"SystemGovernment_Localised": "Anarchy",
	"SystemSecurity": "$GAlAXY_MAP_INFO_state_anarchy;",
	"SystemSecurity_Localised": "Anarchy",
	"Population": 450000,
	"JumpDist": 13.334,
	"FuelUsed": 0,
	"FuelLevel": 25.630281,
	"Factions": [
		{
			"Name": "Eranin Expeditionary Institute",
			"FactionState": "None",
			"Government": "Cooperative",
			"Influence": 0.17,
			"Allegiance": "Independent",
			"Happiness": "$Faction_HappinessBand2;",
			"Happiness_Localised": "Happy",
			"MyReputation": 0
		},
		{
			"Name": "Eranin Peoples Party",
			"FactionState": "CivilWar",
			"Government": "Communism",
			"Influence": 0.226,
			"Allegiance": "Independent",
			"Happiness": "$Faction_HappinessBand2;",
			"Happiness_Localised": "Happy",
			"MyReputation": 29.9743,
			"ActiveStates": [
				{
					"State": "CivilWar"
				}
			]
		},
		{
			"Name": "Pilots Federation Local Branch",
			"FactionState": "None",
			"Government": "Democracy",
			"Influence": 0,
			"Allegiance": "PilotsFederation",
			"Happiness": "$Faction_HappinessBand2;",
			"Happiness_Localised": "Happy",
			"MyReputation": 82.918297
		},
		{
			"Name": "Eranin Industry",
			"FactionState": "Outbreak",
			"Government": "Corporate",
			"Influence": 0.209,
			"Allegiance": "Independent",
			"Happiness": "$Faction_HappinessBand3;",
			"Happiness_Localised": "Discontented",
			"MyReputation": 0,
			"ActiveStates": [
				{
					"State": "Famine"
				},
				{
					"State": "Lockdown"
				},
				{
					"State": "Outbreak"
				}
			]
		},
		{
			"Name": "Eranin Federal Bridge",
			"FactionState": "CivilWar",
			"Government": "Dictatorship",
			"Influence": 0.226,
			"Allegiance": "Independent",
			"Happiness": "$Faction_HappinessBand2;",
			"Happiness_Localised": "Happy",
			"MyReputation": 0,
			"ActiveStates": [
				{
					"State": "CivilWar"
				}
			]
		},
		{
			"Name": "Mob of Eranin",
			"FactionState": "CivilLiberty",
			"Government": "Anarchy",
			"Influence": 0.134,
			"Allegiance": "Independent",
			"Happiness": "$Faction_HappinessBand1;",
			"Happiness_Localised": "Elated",
			"MyReputation": 0,
			"ActiveStates": [
				{
					"State": "Boom"
				},
				{
					"State": "CivilLiberty"
				}
			]
		},
		{
			"Name": "Terran Colonial Forces",
			"FactionState": "CivilUnrest",
			"Government": "Confederacy",
			"Influence": 0.035,
			"Allegiance": "Alliance",
			"Happiness": "$Faction_HappinessBand2;",
			"Happiness_Localised": "Happy",
			"MyReputation": 0,
			"ActiveStates": [
				{
					"State": "Boom"
				},
				{
					"State": "CivilUnrest"
				}
			]
		}
	],
	"SystemFaction": {
		"Name": "Mob of Eranin",
		"FactionState": "CivilLiberty"
	}
}
```

Example Conflict data:

```
"Conflicts": [
	{
		"WarType": "war",
		"Status": "active",
		"Faction1": {"Name": "Movement for LHS 3163 League","Stake": "","WonDays": 0},
		"Faction2": {"Name": "Official i Bootis Liberty Party","Stake": "Red Bronco Farms","WonDays": 1}
	}
]
```

### FSDTarget

When written: when selecting a star system to jump to

Note, when following a multi-jump route, this will typically appear for the _next_ star, during a jump, ie after "StartJump" but before the "FSDJump"

Parameters:

- Starsystem 
- Name 
- RemainingJumpsInRoute 
- StarClass 


### LeaveBody

When written: when flying away from a planet, and distance increases above the 'Orbital Cruise' altitude

Parameters:

- StarSystem 
- SystemAddress 
- Body 
- BodyID 


### Liftoff

When written: when taking off from planet surface

Parameters:

- Latitude (only if player flying in ship) 
- Longitude  (only if player flying in ship) 
- StarSystem 
- SystemAddress 
- Body 
- BodyID 
- OnStation: bool 
- OnPlanet: bool 
- NearestDestination 
- PlayerControlled: (bool) false if ship dismissed when player is in SRV, true if player is taking off 


Example:

```
{
	"timestamp": "2016-07-22T10:53:19Z",
	"event": "Liftoff",
	"Latitude": 63.468872,
	"Longitude": 157.59938,
	"PlayerControlled": true
}
```

### Location

When written: at startup, or when being resurrected at a station

Parameters:

- StarSystem: name of destination starsystem 
- SystemAddress 
- StarPos: star position, as a Json array [x, y, z], in light years 
- Body: star or planet's body name 
- BodyID 
- BodyType 
- DistFromStarLS: (unless close to main star) 
- Docked: (bool) 
- Latitude (If landed) 
- Longitude (if landed) 
- StationName: station name, (if docked) 
- StationType: (if docked) 
- MarketID: (if docked) 
- SystemFaction: star system controlling faction 
	- Name 
	- FactionState 
- SystemAllegiance 
- SystemEconomy 
- SystemSecondEconomy 
- SystemGovernment 
- SystemSecurity 
- Wanted 
- Factions: an array with info on local minor factions (similar to FSDJump) 
- Conflicts: an array with info on local conflicts (similar to FSDJump) 


If the player is pledged to a Power in Powerplay, and the star system is involved in powerplay,

- Powers: a json array with the names of any powers contesting the system, or the name of the controlling power 
- PowerplayState: the system state – one of ("InPrepareRadius", "Prepared", "Exploited", "Contested", "Controlled", "Turmoil", "HomeSystem") 


The faction data includes happiness info, and can include multiple active states

If starting docked in a station, also include:

- StationFaction 
	- Name 
	- FactionState 
- StationGovernment 
- StationAllegiance 
- StationServices 
- StationEconomies (Array of (Name,Proportion) pairs ) 

If starting in a system affected by the thargoid war:

- ThargoidWar
	- CurrentState
	- NextStateSuccess
	- NextStateFailure
	- SuccessStateReached
	- WarProgress:0-1 values
	- RemainingPorts
	- EstimatedRemainingTime


New in Odyssey:

- Taxi: bool 
- Multicrew: bool 
- InSRV: bool 
- OnFoot: bool 


### StartJump

When written: at the start of a Hyperspace or Supercruise jump (start of countdown)

Parameters:

- JumpType: "Hyperspace" or "Supercruise" 
- Taxi: True if the player is in a taxi
- StarSystem: name of destination system (for a hyperspace jump) 
- SystemAddress 
- StarClass: star type (only for a hyperspace jump) 


### SupercruiseEntry

When written: entering supercruise from normal space

Parameters:

- Starsystem 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "SupercruiseEntry",
	"StarSystem": "Yuetu"
}
```

### SupercruiseExit

When written: leaving supercruise for normal space

Parameters:

- Starsystem 
- Body 
- BodyID 
- BodyType 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "SupercruiseExit",
	"StarSystem": "Yuetu",
	"Body": "Yuetu B"
}
```

### Touchdown

When written: landing on a planet surface

Parameters:

- Latitude (only if player is landing) 
- Longitude (only if player is landing) 
- StarSystem 
- SystemAddress 
- Body 
- BodyID 
- OnStation: bool 
- OnPlanet: bool 
- NearestDestination 
- PlayerControlled: (bool) false if ship was recalled from SRV, true if player is landing 


The NearestDestination is included if within 50km of a location listed in the nav panel

Example:

```
{
	"timestamp": "2019-05-13T13:20:18Z",
	"event": "Touchdown",
	"PlayerControlled": true,
	"Latitude": 10.503607,
	"Longitude": 102.78981,
	"NearestDestination": "$SAA_Unknown_Signal:#type=$SAA_SignalType_Geological;:#index=9;",
	"NearestDestination_Localised": "Surface signal: Geological (9)"
}
```

### Undocked

When written: liftoff from a landing pad in a station, outpost or settlement

Parameters:

- StationName: name of station 
- MarketID 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Undocked",
	"StationName": "Long Sight Base"
}
```

### NavRoute

When plotting a multi-star route, the file "NavRoute.json" is written in the same directory as the journal, with a list of stars along that route

Parameters:

- Route 
	- StarSystem: (name) 
	- SystemAddress: (number) 
	- Starpos: [ x, y, z ] 
	- StarClass 


Example:

```
{
	"timestamp": "2020-04-27T08:02:52Z",
	"event": "Route",
	"Route": [
		{ "StarSystem": "i Bootis", "SystemAddress": 1281787693419, "StarPos": [-22.37500,34.84375,4.00000], "StarClass": "G" },
		{ "StarSystem": "Acihaut", "SystemAddress": 11665802405289, "StarPos": [-18.50000,25.28125,-4.00000], "StarClass": "M" },
		{ "StarSystem": "LHS 455", "SystemAddress": 3686969379179, "StarPos": [-16.90625,10.21875,-3.43750], "StarClass": "DQ" },
		{ "StarSystem": "SPF-LF 1", "SystemAddress": 22661187052961, "StarPos": [2.90625,6.31250,-9.56250], "StarClass": "M" },
		{ "StarSystem": "Luyten's Star", "SystemAddress":7 268024264097, "StarPos": [6.56250,2.34375,-10.25000], "StarClass": "M" }] }
	]
}
```

### NavRouteClear

When written: When the current plotted nav route is cleared

No parameters

Example:

```
{
	"timestamp": "2022-06-17T16:04:02Z",
	"event": "NavRouteClear"
}
```