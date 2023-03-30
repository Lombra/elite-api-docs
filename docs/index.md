## Introduction

Elite:Dangerous writes a network log file primarily to help when investigating problems.

Third-party tools developers have been reading some of the entries in the network log file, mainly in order to track the player's location.

There is a clear demand from players for third-party tools, and from tools developers for more information from the game and/or server api.

The new Player Journal provides a stream of information about gameplay events which can be used by tools developers to provide richer, more detailed tools to enhance the player experience. The data records written to this journal are much more high-level then that written to the network log.

A short example of a player journal file (_**out of date, some events may have additional data**_):


```
{"timestamp":"2016-06-10T14:31:00Z", "event":"FileHeader", "part":1, "gameversion":"2.2", "build":"r113684 " },
{"timestamp":"2016-06-10T14:32:03Z", "event":"LoadGame", "Commander":"HRC1", "Ship":"SideWinder", "ShipID":1, "GameMode":"Open", "Credits":600120, "Loan":0  }
{"timestamp":"2016-06-10T14:32:03Z", "event":"Rank", "Combat":0, "Trade":0, "Explore":1, "Empire":0, "Federation":0, "CQC":0 }
{"timestamp":"2016-06-10T14:32:03Z", "event":"Progress", "Combat":0, "Trade":0, "Explore":73, "Empire":0, "Federation":0, "CQC":0 }
{"timestamp":"2016-06-10T14:32:15Z", "event":"Location", "StarSystem":"Asellus 	Primus", "StarPos":[-23.938,40.875,-1.344] }
{"timestamp":"2016-06-10T14:32:16Z", "event":"Docked", "StationName":"Beagle 2 Landing", "StationType":"Coriolis" }
{"timestamp":"2016-06-10T14:32:38Z", "event":"RefuelAll", "Cost":12, "Amount":0.234493 }
{"timestamp":"2016-06-10T14:34:25Z", "event":"Undocked", "StationName":"Beagle 	2 Landing", "StationType":"Coriolis" }
{"timestamp":"2016-06-10T14:35:00Z", "event":"FSDJump", "StarSystem":"HIP 78085", "StarPos":[120.250,40.219,268.594], "JumpDist":36.034 }
{"timestamp":"2016-06-10T14:35:22Z", "event":"Scan", "BodyName":"HIP 78085 A", "StarType":"G" }
{"timestamp":"2016-06-10T14:36:10Z", "event":"FSDJump", "StarSystem":"Praea Euq NW-W b1-3", "StarPos":[120.719,34.188,271.750], "JumpDist":6.823 }
{"timestamp":"2016-06-10T14:36:42Z", "event":"Scan", "BodyName":"Praea 	Euq NW-W b1-3", "StarType":"M" }
{"timestamp":"2016-06-10T14:38:50Z", "event":"Scan", "BodyName":"Praea 	Euq NW-W b1-3 3", "Description":"Icy body with 	neon rich atmosphere and major water geysers volcanism" }
{"timestamp":"2016-06-10T14:39:08Z", "event":"Scan", "BodyName":"Praea 	Euq NW-W b1-3 3 a", "Description":"Tidally locked Icy body" }
{"timestamp":"2016-06-10T14:41:03Z", "event":"FSDJump", "StarSystem":"Asellus Primus", "StarPos":[-23.938,40.875,-1.344], "JumpDist":39.112 }
{"timestamp":"2016-06-10T14:41:26Z", "event":"SupercruiseExit", "StarSystem":"Asellus 	Primus", "Body":"Beagle 2 Landing" }
{"timestamp":"2016-06-10T14:41:29Z", "event":"Docked", "StationName":"Beagle 2 Landing", "StationType":"Coriolis" }
{"timestamp":"2016-06-10T14:41:58Z", "event":"SellExplorationData", "Systems":[ "HIP 78085", "Praea Euq NW-W b1-3" ], "Discovered":[ "HIP 78085 A", "Praea Euq 	NW-W b1-3", "Praea Euq NW-W b1-3 3 a", "Praea Euq NW-W b1-3 3" ], "BaseValue":10822, "Bonus":3959 }
```

### ChangeLog

**Version 36**

**Changes for Odyssey up to update14 (November 2022)**

- Updated the "MissionCompleted" documentation to include the optional params "DestinationSystem", "DestinationStation" and "DestinationSettlement". No functional change, these params where already present. 
- Added a new flag to Status.json to indicate if a charging fsd is charging a hyperspace jump 
- Extended the UpgradeSuit/UpgradeWeapon events to include the resources used for the upgrade 
- Added "DepartureTime" to the "CarrierJumpRequest" event 


**Version 35**

**Changes for Odyssey up to update13 (July 2022)**

- A negotiated mission now writes event "MissionAccepted" only when the mission is accepted, not when the negotiation happens. 
- Handing in a mission to a mission giver while on foot will now write the "MissionCompleted" event   
- Accepting an on foot mission will now report the destination system and destination settlement. "DestinationSettlement" added as a new optional parameter for the "MissionAccepted" event 
- The route in NavRoute.json is now cleared when the route is cleared. New journal event "NavRouteClear" 
- Extended the SAASignalsFound event to include the genuses on the scanned planet 
- Fixed the "PayFines" event being written instead of "PayBounties" when paying off a bounty 


**Version 34**

**Changes for Odyssey up to update12 (May 2022)**

- BookTaxi: add "retreat" flag 
- CodexEntry: add BodyID 
- BuyMicroResources: multi-buy format added 
- FCMaterials – fleet carrier materials pricelist 
- FSSBodySignals: extra info during a scan (actually from Update 6 last year) 
- Bugfix: Resurrect event was sometimes written with blank strings 


**Version 33**

**Changes for Odyssey up to update 11 (March 2022)**

- new flags in Status flags to distinguish between telepresence and physical crew 
- the following events have a new bool value Telepresence: ChangeCrewRole EndCrewSession CrewMemberJoins CrewMemberQuits CrewLaunchFighter CrewMemberRoleChange JoinACrew QuitACrew KickCrewMember 
- LaunchSRV, DockSRV and SRVDestroyed events now add a new value "SRVType" (from Oct 2021 update) 
- when scanning one body of a binary pair, you will now get an event detailing the orbital parameters of their BaryCentre (from Sep 2021 update) 


**Version 32**

**Changes up to Odyssey Update 5 (July 2021)**

- The "LoadGame" event now includes the language, gameversion, and Build number 
- Include module class and modifications in suit loadout 
- Changes to the way the ShipLocker contents are listed 
- Updated description of CommunityGoal event 
- Include info on landing pads in DockingRequested and Docked 
- Added balance and travel destination in Status.json 
- Fixed bug creating invalid ShipLocker.json 
- Fixed bug re ADS mode in Status flags 
- Added names for military and exobiolost ranks in appendix 
- Corrected details of the contents of the NavRoute file 


**Version 31**

**Changes for Odyssey release (May 2021)**

- Omit "MissionID":18446744073709551615 in inventory data when it is not mission-related 
- Ensure the Touchdown/Liftoff events are logged when recalling/dismissing your empty ship 
- Improve data written to journal on Touchdown/Takeoff, (with Lat/Lon) when recalling/dismissing unoccupied ship 
- Add flags in status.json for 'glide mode', and for hangar, social space, etc 
- Properly register strings to avoid blank event name for "RedeemVoucher" 
- Get station name and station type for planetary surface stations 
- Provide a new common method for determining Latitude &amp; Longitude, used for CodexEntry, ApproachSettlement, Touchdown, Liftoff – fixes data that was sometimes missing 
- Improved tracking of backpack contents – new Backpack and BackpackChange events 
- SuitLoadout on starting on-foot, or when disembarking: 
- Fix station type when docking at FleetCarrier 
- Fix bug with incorrect LoadoutID in CreateSuitLoadout event 


**Version 30**

**Changes for Odyssey Alpha 4**

- See sections 12, 14 


**Version 29**

**Changes for "Odyssey"**

- See section 12 


**Version 28**

**Changes for v3.7 beta 2 (May 2020)**

new events added:

- CarrierJumpCancelled 
- CarrierNameChanged (with callsign, name, carrierid) 
- new NavRoute.json file 


events with new data:

- CarrierJumpRequest - added Body (name) and BodyID 
- Bounty - include localised Target   
- FSDTarget - include StarClass 


bugs fixed:

- CarrierStats  - don't write a ReservePercent value when in debt 
- Status.json - flags fixed in SRV, and Lat/Lon in station 
- Loadout - fix cases where loadout data was mix of SLF and mothership 
- EngineerProgress - now written when state updates 
- RefuelAll, RepairAll - fix null strings 
- Docked - fix bug where docking at a FC doesn't sometimes pick up nearby station name 


**Version 27**

**Changes for v3.7 beta 1 (April 2020)**

- Added events relating to Fleet Carriers (§11) 
- New CargoTransfer event (§13.52) 
- Change to Repair event (§8.38) 
- Added some station services (see 'Docked' §4.2) 


**Version 26 - Changes for v3.5 (September 2019)**

**Version 25 - Changes for v3.4 (April 2019)**

**Version 24**

**Version 22 – in v3.3 (beta 4)**

**Version 21 – for v3.3 (beta 2)**

**Version 20 – for v3.3 (beta 1) **_(released 30th Oct 2018)_

**Version 19 – for v3.3 **_(preview released 20th Sept 2018)_

**Version 18 – for v3.0.4** (27th March 2018)

**Version 17 – for v3.0.3 **(19th March 2018)

**Version 16 – for v3.0.2 **(5th March 2018)

**Version 15 – for v3.0 – beta3 **(6th Feb 2018)

**Version 14 – for v3.0 – beta1** (25/Jan/2018)

**Version 13 - In 2.4 Open beta **_(24th Aug 2017)_

**Version 12 - In 2.4 beta1 **_(17th Aug 2017)_

**Version 11**_published 26/Jun/2017_

**Version 10**_published 29/Mar/2017 (for v2.3 beta 5)_

**Version 9**_published 20/Feb/2017 (for v2.3 beta)_

**Version 8**_published 10/Jan/2017 (for v2.2.03)_

**Version 7**_published 15/Nov/2016 (for release 2.2.02)_

**Version 6**_published 26/Oct/2016 (for 2.2 public release)_

**Version 1** was published 20/July/2016