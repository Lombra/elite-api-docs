## Introduction

Elite:Dangerous writes a network log file primarily to help when investigating problems.

Third-party tools developers have been reading some of the entries in the network log file, mainly in order to track the player’s location.

There is a clear demand from players for third-party tools, and from tools developers for more information from the game and/or server api.

The new Player Journal provides a stream of information about gameplay events which can be used by tools developers to provide richer, more detailed tools to enhance the player experience. The data records written to this journal are much more high-level then that written to the network log.

A short example of a player journal file (_**out of date, some events may have additional data**_):

```
{ "timestamp":"2016-06-10T14:31:00Z", "event":"FileHeader", "part":1, "gameversion":"2.2", "build":"r113684 " },
{ "timestamp":"2016-06-10T14:32:03Z", "event":"LoadGame", "Commander":"HRC1", "Ship":"SideWinder", “ShipID”:1,
"GameMode":"Open", "Credits":600120, "Loan":0 }
{ "timestamp":"2016-06-10T14:32:03Z", "event":"Rank", "Combat":0, "Trade":0, "Explore":1, "Empire":0, "Federation":0, "CQC":0 }
{ "timestamp":"2016-06-10T14:32:03Z", "event":"Progress", "Combat":0, "Trade":0, "Explore":73, "Empire":0, "Federation":0, "CQC":0
}
{ "timestamp":"2016-06-10T14:32:15Z", "event":"Location", "StarSystem":"Asellus Primus", "StarPos":[-23.938,40.875,-1.344] }
{ "timestamp":"2016-06-10T14:32:16Z", "event":"Docked", "StationName":"Beagle 2 Landing", "StationType":"Coriolis" }
{ "timestamp":"2016-06-10T14:32:38Z", "event":"RefuelAll", "Cost":12, "Amount":0.234493 }
{ "timestamp":"2016-06-10T14:34:25Z", "event":"Undocked", "StationName":"Beagle 2 Landing", "StationType":"Coriolis" }
{ "timestamp":"2016-06-10T14:35:00Z", "event":"FSDJump", "StarSystem":"HIP 78085", "StarPos":[120.250,40.219,268.594],
"JumpDist":36.034 }
{ ""timestamp":"2016-06-10T14:35:22Z", event":"Scan", "BodyName":"HIP 78085 A", "StarType":"G" }
{ "timestamp":"2016-06-10T14:36:10Z", "event":"FSDJump", "StarSystem":"Praea Euq NW-W b1-3",
"StarPos":[120.719,34.188,271.750], "JumpDist":6.823 }
{ "timestamp":"2016-06-10T14:36:42Z", "event":"Scan", "BodyName":"Praea Euq NW-W b1-3", "StarType":"M" }
{ "timestamp":"2016-06-10T14:38:50Z", "event":"Scan", "BodyName":"Praea Euq NW-W b1-3 3", "Description":"Icy body with neon
rich atmosphere and major water geysers volcanism" }
{ "timestamp":"2016-06-10T14:39:08Z", "event":"Scan", "BodyName":"Praea Euq NW-W b1-3 3 a", "Description":"Tidally locked Icy
body" }
{ "timestamp":"2016-06-10T14:41:03Z", "event":"FSDJump", "StarSystem":"Asellus Primus", "StarPos":[-23.938,40.875,-1.344],
"JumpDist":39.112 }
{ "timestamp":"2016-06-10T14:41:26Z", "event":"SupercruiseExit", "StarSystem":"Asellus Primus", "Body":"Beagle 2 Landing" }
{ "timestamp":"2016-06-10T14:41:29Z", "event":"Docked", "StationName":"Beagle 2 Landing", "StationType":"Coriolis" }
{ "timestamp":"2016-06-10T14:41:58Z", "event":"SellExplorationData", "Systems":[ "HIP 78085", "Praea Euq NW-W b1-3" ],
"Discovered":[ "HIP 78085 A", "Praea Euq NW-W b1-3", "Praea Euq NW-W b1-3 3 a", "Praea Euq NW-W b1-3 3" ], "BaseValue":10822,
"Bonus":3959 }
```

### ChangeLog

**Version 22 – in v3.3 (beta 4)**

- Fixed duplicate scan events

- Fix some wing mission cargo reported as stolen

- FSSSignalDiscovered: add USSType info (§6.6)

- Add new FSSAllBodiesFound event (§6.4)

- Scan events generated automatically when entering system now logged as "ScanType":"AutoScan" (§6.3)

- Add new event MultiSellExplorationData (§6.10)

- Faction info in Location/FSDJump: if it's the player's squadron faction, add SquadronFaction:true, and flags HappiestSystem:true or HomeSystem:true if relevant (§4.8)





**in v3.3 (beta3)**

- FSSSignalDiscovered – if signal is a USS, add a ThreatLevel value; if signal is a station, add IsStation:true; add SystemAddress(§6.6)

- Cargo – fix spurious extra events; add a flag to indicate vessel=Ship or Vessel=SRV (§3.1)

- CodexEntry: add SystemAddress .(§6.1)

- Status.json, Flags: add NightVision flag (bit28/0x10000000) (§12)

- SendText: include a journal entry for text to squadron or system chat (§11.39)

- ReceiveText: include a ‘Channel’ parameter to show if message was from squadron or system chat (§11.34)

- SAAScanComplete: remove lists of names of discoverers and mappers (§6.13)



**Version 21 – for v3.3 (beta 2)**

- Include info on Faction Happiness– in Location and FSDJump events (§4.8,§4.12)

- Status flags indicate if in Analysis mode, and GUI focus shows if in Orrery, FSS, SAA or Codex view (§12)

- Fixed bug in MissionAccepted and MissionCompleted for donation missions, where the "Donated" key was written twice, one with a string, once with an int (§8.21,§8.22)

Errata

- Note Faction Active states do not have a Trend value

- Note FID value in Commander(§3.3), LoadGame(§3.8), ClearSavedGame(§3.2), NewCommander(§3.7) events with unique player id number

- Note Status.json (§12) includes fuel and cargo info

- Fix capitalisation for BodyName in SAAScanComplete (§6.13)



**Version 20 – for v3.3 (beta 1) **_(released 30th Oct 2018)_

- Multiple faction activestates – in Location and FSDJump events (§4.8,§4.12)

- The first "Cargo" event written to the journal contains full inventory (§3.1)

- Added "AsteroidCracked" event (§7.1)

- Added "SAAScanComplete" (Surface Area Analysis) event (§6.13)

- Added "CodexDiscovery" event (§6.1)

- Added "FSSDiscoveryScan" and "FSSSignalScan" events (§6.4,§6.6)

- Added several events for Squadrons(§10)


**Version 19 – for v3.3 **_(preview released 20th Sept 2018)_

- Simplify the "Category" in MaterialTrade

- Clarify meaning of bit 14 in status file: was called "under ship" but actually indicates when turret is retracted

- ApproachSettlement now includes Latitude and Longitude

- Note Bounty event is different for Skimmer bounty

- Update description of StoredShips event with InTransit flag

- Add ActiveFine info to Docked event

- EngineerProgress event at startup with summary for all engineers currently known

- Note a new ShipTargetted event is generated after using KillWarrantScanner, with updated bounty for target

- Note the MissionRedirected mission name now has any trailing "_name" removed

- Added MyReputation in faction list in FsdJump and Location events

- Added "FSDTarget" event when selecting a starsystem to jump to

- Added MissionID to cargo to indicate if it is mission-related: in Cargo, CollectCargo, EjectCargo events

- In ship loadout, indicate if it is ‘hot’

- Cargo summary is now written to a separate file, and updated when data changes

- Add "HullHealth" stat in the "Loadout" event

- MissionCompleted now indicates correct destination after redirection

**Version 18 – for v3.0.4 (27th March 2018)**

- Fix localisation where one text symbol redirects through another

- Fix PayBounties event, also add ShipID and Faction information in PayFines and PayBounties

- Ensure commodity names are localised in CargoDepot interactions, and when scooping and dumping from SRV



**Version 17 – for v3.0.3 (19th March 2018)**

- TechnologyBroker: distinguish between Commodities and Materials

- TechnologyBroker: add BrokerType value

- Event timestamps are now taken from server-synchronised time, not local clock

- Status: Vehicle lights flag fixed

- Added SystemSecondEconomy to FSDJump and Location

- Added info on multiple economies at a station in Docked event

- Add CargoType and count to CargoDepot event

- Status: FuelScooping flag fix, LowFuel flag fixed (in SRV)

- SellExplorationData: TotalEarnings fixed



**Version 16 – for v3.0.2 (5th March 2018)**

- MissionCompleted: if rewards include materials, add category

- MaterialTrade: include category

- Status.json: when driving SRV, lat and long changes of 0.0005deg trigger update (in ship remains at 0.02deg)

- EngineerCraft: some modifications have string values, not float

- MissionAccepted: add a flag indicating if it is a wing mission

- New "CargoDepot" event for progress in a wing delivery mission

- Also fixed:

	- Fix localisation of strings where we don't have any substitution parameters to insert into them

	- Materials inventory at startup: omit items with a count of zero

	- SellDrones: fix sell price (was previously using buy price)



**Version 15 – for v3.0 – beta3 (6th Feb 2018)**

- Add a property in the "Location" or "FSDJump" event indicating if the player is wanted locally

- Ensure all ShipType strings written to journal get localisation (so we get "ShipType_Localised":"Alliance Chieftain" as well as just "ShipType":"TypeX")

- Add a "Powerplay" event in the journal at startup to log a player's powerplay allegiance, rank, merits etc

- Adding crew name in events that only had ID, adding ID in events that only had Name

- In Loadout, When writing engineered module info to Journal, include the name of the "Experimental Effect" if any

- Note ship loadout, when written at any time after startup, may not include HullValue, ModulesValue

- indicate in LoadGame whether the player has Horizons access, also in Shipyard and Outfitting files

- Include more information about the results of a mission in the MissionCompleted event

- Improve the data written to the journal info when applying an experimental effect to a module in engineering

- When writing commodity price lists to Market.json, include unlocalised and localised item name, also include category name

- ModuleStore, ModuleRetrieve, MassModuleStore, StoredModules: add Level and Quality to EngineerModifications; add "Hot" flag; add "BuyPrice" in list of stored items

- In list of stored ships, indicate whether any are 'Hot'

- Include some extra information in the Journal's Scan event, to show each body's parent body info



**Version 14 – for v3.0 – beta1 (25/Jan/2018)**

- Commodity names and Material names are now localised

- Added NpcCrewRank and NpcCrewPaidWages events

- Added ShipTargetted event

- Added Commander at startup before other loadgame events

- Added Shutdown event

- Fixed station name in "Docking Denied" event

- Added solid composition data when scanning a planet

- Include community goal ID in events: CommunityGoalJoin, CommunityGoalReward, CommunityGoalDiscard

- Added some info about the name of a community goal's top tier, and the global bonus info (if available)

- Added Reputation event, to provide info on player's rep with superpowers

- Include fines in MissionFailed and MissionAbandoned events, where appropriate

- Add Statistics event at startup

- Include StationType info in DockingRequested, DockingGranted, DockingDenied, DockingCancelled, DockingTimeout

- Include UnderAttack event

- Include SystemAddress 64bit id value in FSDJump, Location, Docked, StartJump, NavBeaconScan

- Add StoredModules, and StoredShips

- Added Missions list at startup

- Added info to Cargo/Inventory to show whether cargo is stolen

- Report results of DiscoveryScan to the journal

- Include ScanType in Scan event

- Add FighterDestroyed and FighterRebuilt events

- Add LaunchDrone event

- Add Shipyard Pricelist, and Outfitting pricelist, Market pricelist, written to separate files

- Include BodyID in Location, SupercruiseExit, Scan, ApproachBody, LeaveBody

- Include MarketID in many events where relevant

- Include ship's HullValue, ModulesValue, and Rebuy price in Loadout event

- Fix an error in the ShipyardNew event description

- Note EngineerApply event is no longer generated

- Added "Quality" and "BlueprintID" properties and "Modifiers" array to EngineerCraft

- Added "EngineerLegacyConvert" event

- Added "EngineerID" property to EngineerContribution, EngineerCraft, EngineerProgress events

- Include Engineering data for modified modules in the Loadout event

- Include list of possible modifiable module attributes in appendix

- Added MaterialTrade and TechnologyBroker events

- Added info on the real-time Status.Json file

- Include TotalEarnings in SellExplorationData

- Added ModuleInfo event

- Note Loadout event after using outfitting

- Note Altitude and Heading in Screenshot event

- Added SystemsShutdown event

- Added SRVDestroyed event

- Added Wanted flag in Docked event



**Version 13 - In 2.4 Open beta **_(24th Aug 2017)_

**Version 12 - In 2.4 beta1 **_(17th Aug 2017)_

**Version 11**	_published 26/Jun/2017_

**Version 10**	_published 29/Mar/2017 (for v2.3 beta 5)_

**Version 9**_published 20/Feb/2017 (for v2.3 beta)_

**Version 8**	_published 10/Jan/2017 (for v2.2.03)_

**Version 7**	_published 15/Nov/2016 (for release 2.2.02)_

**Version 6**	_published 26/Oct/2016 (for 2.2 public release)_

**Version 1** was published 20/July/2016

