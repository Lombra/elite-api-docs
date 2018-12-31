## Travel

### ApproachBody

When written: when in Supercruise, and distance from planet drops to within the 'Orbital Cruise' zone

Parameters:

- StarSystem

- SystemAddress

- Body

- BodyID



```
{ "timestamp":"2017-09-27T15:21:05Z", "event":"ApproachBody", "StarSystem":"Eranin", "Body":"Eranin 2" }
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

- StationFaction: station’s controlling faction

- FactionState

- StationAllegiance

- StationEconomy : (station's primary economy)

- StationEconomies: (array of name and proportion values)

- StationGovernment

- DistFromStarLS

- StationServices: (Array of strings)

- Wanted: (only if docking when wanted locally)

- ActiveFine: true (if any fine is active)



The ‘anonymous docking’ protocol comes into effect if you’re either Wanted (ie have a local bounty) or have an ActiveFine



Example:

```
{ "timestamp":"2018-03-07T12:22:25Z", "event":"Docked", "StationName":"Jenner Orbital", "StationType":"Outpost", "StarSystem":"Luhman 16", "SystemAddress":22960358574928, "MarketID":3228883456, "StationFaction":"Union of Luhman 16 Values Party", "FactionState":"CivilWar", "StationGovernment":"$government_Democracy;", "StationGovernment_Localised":"Democracy", "StationAllegiance":"Federation", "StationServices":[ "Dock", "Autodock", "BlackMarket", "Commodities", "Contacts", "Exploration", "Missions", "Outfitting", "CrewLounge", "Rearm", "Refuel", "Workshop", "MissionsGenerated", "FlightController", "StationOperations", "Powerplay", "SearchAndRescue" ], "StationEconomy":"$economy_Refinery;", "StationEconomy_Localised":"Refinery", "StationEconomies":[ { "Name":"$economy_Refinery;", "Name_Localised":"Refinery", "Proportion":0.760000 }, { "Name":"$economy_Extraction;", "Name_Localised":"Extraction", "Proportion":0.240000 } ], "DistFromStarLS":10.061876 }
```

StationServices can include:



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

- 

### DockingRequested

When written: when the player requests docking at a station

Parameters:

- StationName: name of station

- StationType

- MarketID



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

- Body: star’s body name

- JumpDist: distance jumped

- FuelUsed

- FuelLevel

- BoostUsed: whether FSD boost was used

- SystemFaction: system controlling faction

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



If the player is pledged to a Power in Powerplay, and the star system is involved in powerplay,

- Powers: a json array with the names of any powers contesting the system, or the name of the controlling power

- PowerplayState: the system state – one of ("InPrepareRadius", "Prepared", "Exploited", "Contested", "Controlled", "Turmoil", "HomeSystem")

- 

Example:

Happiness values are: (Elated, Happy, Discontented, Unhappy, Despondent)



Example:

```
{ "timestamp":"2018-10-29T10:05:21Z", "event":"FSDJump", "StarSystem":"Eranin", "SystemAddress":2832631632594, "StarPos":[-22.84375,36.53125,-1.18750], "SystemAllegiance":"Independent", "SystemEconomy":"$economy_Agri;", "SystemEconomy_Localised":"Agriculture", "SystemSecondEconomy":"$economy_Refinery;", "SystemSecondEconomy_Localised":"Refinery", "SystemGovernment":"$government_Anarchy;", "SystemGovernment_Localised":"Anarchy", "SystemSecurity":"$GAlAXY_MAP_INFO_state_anarchy;", "SystemSecurity_Localised":"Anarchy", "Population":450000, "JumpDist":13.334, "FuelUsed":0.000000, "FuelLevel":25.630281, "Factions":[ { "Name":"Eranin Expeditionary Institute", "FactionState":"None", "Government":"Cooperative", "Influence":0.170000, "Allegiance":"Independent", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":0.000000 }, { "Name":"Eranin Peoples Party", "FactionState":"CivilWar", "Government":"Communism", "Influence":0.226000, "Allegiance":"Independent", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":29.974300, "ActiveStates":[ { "State":"CivilWar" } ] }, { "Name":"Pilots Federation Local Branch", "FactionState":"None", "Government":"Democracy", "Influence":0.000000, "Allegiance":"PilotsFederation", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":82.918297 }, { "Name":"Eranin Industry", "FactionState":"Outbreak", "Government":"Corporate", "Influence":0.209000, "Allegiance":"Independent", "Happiness":"$Faction_HappinessBand3;", "Happiness_Localised":"Discontented", "MyReputation":0.000000, "ActiveStates":[ { "State":"Famine" }, { "State":"Lockdown" }, { "State":"Outbreak" } ] }, { "Name":"Eranin Federal Bridge", "FactionState":"CivilWar", "Government":"Dictatorship", "Influence":0.226000, "Allegiance":"Independent", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":0.000000, "ActiveStates":[ { "State":"CivilWar" } ] }, { "Name":"Mob of Eranin", "FactionState":"CivilLiberty", "Government":"Anarchy", "Influence":0.134000, "Allegiance":"Independent", "Happiness":"$Faction_HappinessBand1;", "Happiness_Localised":"Elated", "MyReputation":0.000000, "ActiveStates":[ { "State":"Boom" }, { "State":"CivilLiberty" } ] }, { "Name":"Terran Colonial Forces", "FactionState":"CivilUnrest", "Government":"Confederacy", "Influence":0.035000, "Allegiance":"Alliance", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":0.000000, "ActiveStates":[ { "State":"Boom" }, { "State":"CivilUnrest" } ] } ], "SystemFaction":"Mob of Eranin", "FactionState":"CivilLiberty" }
```



### FSDTarget

When written: when selecting a star system to jump to

Note, when following a multi-jump route, this will typically appear for the next star, during a jump, ie after “StartJump” but before the “FSDJump”

Parameters:

- Starsystem

- Name



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

- PlayerControlled: (bool) false if ship dismissed when player is in SRV, true if player is taking off



Example:

```
{ "timestamp":"2016-07-22T10:53:19Z", "event":"Liftoff", "Latitude":63.468872, "Longitude":157.599380, "PlayerControlled":true }
```



### Location

When written: at startup, or when being resurrected at a station

Parameters:

- StarSystem: name of destination starsystem

- SystemAddress

- StarPos: star position, as a Json array [x, y, z], in light years

- Body: star or planet’s body name

- BodyID

- BodyType

- Docked: (bool)

- Latitude (If landed)

- Longitude (if landed)

- StationName: station name, (if docked)

- StationType: (if docked)

- MarketID: (if docked)

- SystemFaction: star system controlling faction

- FactionState

- SystemAllegiance

- SystemEconomy

- SystemSecondEconomy

- SystemGovernment

- SystemSecurity

- Wanted

- Factions: an array with info on local minor factions (similar to FSDJump)

- 

If the player is pledged to a Power in Powerplay, and the star system is involved in powerplay,

- Powers: a json array with the names of any powers contesting the system, or the name of the controlling power

- PowerplayState: the system state – one of ("InPrepareRadius", "Prepared", "Exploited", "Contested", "Controlled", "Turmoil", "HomeSystem")



The faction data includes happiness info, and can include multiple active states



### StartJump

When written: at the start of a Hyperspace or Supercruise jump (start of countdown)

Parameters:

- JumpType: "Hyperspace" or "Supercruise"

- StarSystem: name of destination system (for a hyperspace jump)

- SystemAddress

- StarClass: star type (only for a hyperspace jump)



### SupercruiseEntry

When written: entering supercruise from normal space

Parameters:

- Starsystem



Example:

```
{"timestamp":"2016-06-10T14:32:03Z",  "event":"SupercruiseEntry", "StarSystem":"Yuetu" }
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
{ "timestamp":"2016-06-10T14:32:03Z", "event":"SupercruiseExit", "StarSystem":"Yuetu", "Body":"Yuetu B" }
```



### Touchdown

When written: landing on a planet surface

Parameters:

- Latitude (only if player is landing)

- Longitude (only if player is landing)

- PlayerControlled: (bool) false if ship was recalled from SRV, true if player is landing



Example:

```
{ "timestamp":"2016-07-22T10:38:46Z", "event":"Touchdown", "Latitude":63.468872, "Longitude":157.599380, "PlayerControlled":true }
```



### Undocked

When written: liftoff from a landing pad in a station, outpost or settlement

Parameters:

- StationName: name of station

- MarketID



Example:

```
{ "timestamp":"2016-06-10T14:32:03Z", "event":"Undocked", "StationName":"Long Sight Base" }
```

