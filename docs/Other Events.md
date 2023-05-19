## Other Events

### AfmuRepairs

When written: when repairing modules using the Auto Field Maintenance Unit (AFMU)

Parameters:

- Module: module name 
- FullyRepaired: (bool) 
- Health; (float 0.0..1.0) 


If the AFMU runs out of ammo, the module may not be fully repaired.

Example:

```
{
	"timestamp": "2017-08-14T15:41:50Z",
	"event": "AfmuRepairs",
	"Module": "$modularcargobaydoor_name;",
	"Module_Localised": "Cargo Hatch",
	"FullyRepaired": true,
	"Health": 1
}
```

### ApproachSettlement

When written: when approaching a planetary settlement

Parameters:

- Name 
- MarketID 
- Latitude 
- Longitude 
- SystemAddress 
- BodyID 
- BodyName 


### ChangeCrewRole

When written: when in a crew on someone else's ship, player switched crew role

Parameters:

- Role: name of selected role (Idle, FireCon, FighterCon) 
- Telepresence: (bool) (only from Odyssey build) 


### CockpitBreached

When written: when cockpit canopy is breached

Parameters: none

Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "CockpitBreached"
}
```

### CommitCrime

When written: when a crime is recorded against the player

Parameters:

- CrimeType – see §15.6 
- Faction 


Optional parameters (depending on crime)

- Victim 
- Fine 
- Bounty 


Examples:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "CommitCrime",
	"CrimeType": "assault",
	"Faction": "The Pilots Federation",
	"Victim": "Potapinski",
	"Bounty": 210
}
```

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "CommitCrime",
	"CrimeType": "fireInNoFireZone",
	"Faction": "Jarildekald Public Industry",
	"Fine": 100
}
```

### Continued

When written: if the journal file grows to 500k lines, we write this event, close the file, and start a new one

Parameters:

- Part: next part number 


### CrewLaunchFighter

When written: when in multicrew, in Helm player's log, when a crew member launches a fighter

Parameters:

- Crew: name of crew member launching in fighter 
- ID 
- Telepresence: (bool) (only from Odyssey build) 


### CrewMemberJoins

When written: When another player joins your ship's crew

Parameters:

- Crew: player's commander name 
- Telepresence: (bool) (only from Odyssey build) 


### CrewMemberQuits

When written: When another player leaves your ship's crew

Parameters:

- Crew: player's commander name 
- Telepresence: (bool) (only from Odyssey build) 


### CrewMemberRoleChange

When written: in Multicrew, Helm's log, when another crew player changes role

Parameters:

- Crew: player name 
- Role: selected role 
- Telepresence: (bool) (only from Odyssey build) 


Example:

```
{
	"timestamp": "2017-02-22T14:56:54Z",
	"event": "CrewMemberRoleChange",
	"Crew": "HRC1",
	"Role": "FireCon"
}
```

### CrimeVictim

When written: when another player commits a crime against the current player

Parameters:

- Offender 
- CrimeType 
- Fine _or _Bounty 


### DatalinkScan

When written: when scanning a data link

Parameters:

- Message: message from data link 


### DatalinkVoucher

When written: when scanning a datalink generates a reward

Parameters:

- Reward: value in credits 
- VictimFaction 
- PayeeFaction 


### DataScanned

When written: when scanning some types of data links

Parameters:

- Type 


Type will typically be one of "DataLink", "DataPoint", "ListeningPost", "AbandonedDataLog", "WreckedShip", etc

### DockFighter

When written: when docking a fighter back with the mothership

Parameters:

- ID 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "DockFighter"
}
```

### DockSRV

When written: when docking an SRV with the ship

Parameters:

- ID 
- SRVType 


### EndCrewSession

When written: when the captain in multicrew disbands the crew

Parameters:

- OnCrime: (bool) true if crew disbanded as a result of a crime in a lawful session 
- Telepresence: (bool) (only from Odyssey build) 


### FighterRebuilt

When written: when a ship's fighter is rebuilt in the hangar

Parameters:

- Loadout 
- ID 


### FuelScoop

When written: when scooping fuel from a star

Parameters:

- Scooped: tons fuel scooped 
- Total: total fuel level after scooping 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "FuelScoop",
	"Scooped": 0.4987,
	"Total": 16
}
```

### Friends

When written: when receiving information about a change in a friend's status

Also written at startup for friends who are already online (new in v2.4)

Parameters:

- Status: one of the following: _Requested, Declined, Added, Lost, Offline, Online_ 
- Name: the friend's commander name 


### JetConeBoost

When written: when enough material has been collected from a solar jet code (at a white dwarf or neutron star) for a jump boost

Parameters:

- BoostValue 


### JetConeDamage

When written: when passing through the jet code from a white dwarf or neutron star has caused damage to a ship module

Parameters:

- Module: the name of the module that has taken some damage 


### JoinACrew

When written: When you join another player ship's crew

Parameters:

- Captain: Helm player's commander name 
- Telepresence: (bool) (only from Odyssey build) 


### KickCrewMember

When written: When you force another player to leave your ship's crew

Parameters:

- Crew: player's commander name 
- OnCrime: (bool) true if player is automatically kicked for committing a crime in a lawful session 
- Telepresence: (bool) (only from Odyssey build) 


### LaunchDrone

When written: when using any type of drone/limpet

Parameters:

- Type: one of:   


"Hatchbreaker", "FuelTransfer", "Collection", "Prospector", "Repair", "Research", "Decontamination"

### LaunchFighter

When written: when launching a fighter

Parameters:

- Loadout 
- ID 
- PlayerControlled: whether player is controlling the fighter from launch 


```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "LaunchFighter",
	"Loadout": "starter",
	"PlayerControlled": true
}
```

### LaunchSRV

When written: deploying the SRV from a ship onto planet surface

Parameters:

- Loadout 
- ID 
- SRVType 


### ModuleInfo

When written: when looking at the cockpit RHS modules info panel, if data has changed

This also writes a ModulesInfo.json file alongside the journal, listing the modules in the same order as displayed

Parameters: None

Example of ModulesInfo file:

```
{ "timestamp":"2018-01-10T14:35:08Z", "event":"ModuleInfo", "Modules":[
{ "Slot":"MainEngines", "Item":"int_engine_size3_class5", "Power":3.720000, "Priority":0 },
{ "Slot":"MediumHardpoint1", "Item":"hpt_beamlaser_turret_medium", "Power":0.930000, "Priority":0 },
{ "Slot":"Slot03_Size2", "Item":"int_shieldgenerator_size2_class1", "Power":0.900000, "Priority":2 },
{ "Slot":"MediumHardpoint2", "Item":"hpt_multicannon_gimbal_medium", "Power":0.640000, "Priority":0 },
{ "Slot":"CargoHatch", "Item":"modularcargobaydoor", "Power":0.600000, "Priority":2 },
{ "Slot":"MediumHardpoint3", "Item":"hpt_pulselaser_gimbal_medium", "Power":0.600000, "Priority":0 },
{ "Slot":"PowerDistributor", "Item":"int_powerdistributor_size3_class5", "Power":0.600000, "Priority":0 },
{ "Slot":"FrameShiftDrive", "Item":"int_hyperdrive_size3_class5", "Power":0.450000, "Priority":0 },
{ "Slot":"Slot04_Size2", "Item":"int_fuelscoop_size2_class5", "Power":0.390000, "Priority":0 },
{ "Slot":"LifeSupport", "Item":"int_lifesupport_size1_class1", "Power":0.320000, "Priority":2 },
{ "Slot":"Slot05_Size2", "Item":"int_buggybay_size2_class1", "Power":0.250000, "Priority":0 },
{ "Slot":"Radar", "Item":"int_sensors_size2_class2", "Power":0.210000, "Priority":0 },
{ "Slot":"ShipCockpit", "Item":"empire_courier_cockpit", "Power":0.000000 },
{ "Slot":"PowerPlant", "Item":"int_powerplant_size4_class2", "Power":0.000000 },
{ "Slot":"Slot01_Size3", "Item":"int_cargorack_size2_class1", "Power":0.000000 },
{ "Slot":"Slot02_Size3", "Item":"int_cargorack_size2_class1", "Power":0.000000 },
{ "Slot":"Slot06_Size1", "Item":"int_stellarbodydiscoveryscanner_standard", "Power":0.000000 },
{ "Slot":"DataLinkScanner", "Item":"hpt_shipdatalinkscanner", "Power":0, "Priority":0 }
 ] }
```

### Music

When written: when the game music 'mood' changes

Parameters:

- MusicTrack: (name) 


Possible track names are: NoTrack, MainMenu, CQCMenu, SystemMap, GalaxyMap, GalacticPowers CQC, DestinationFromHyperspace, DestinationFromSupercruise, Supercruise, Combat_Unknown Unknown_Encounter, CapitalShip, CombatLargeDogFight, Combat_Dogfight, Combat_SRV Unknown_Settlement, DockingComputer, Starport, Unknown_Exploration, Exploration

Note: Other music track names may be used in future

### NpcCrewPaidWage

This is written when crew receive wages

Parameters:

- NpcCrewId 
- NpcCrewName 
- Amount 


### NpcCrewRank

This is written when a crew member's combat rank increases

Parameters:

- NpcCrewId 
- NpcCrewName 
- RankCombat 


### Promotion

When written: when the player's rank increases

Parameters: one of the following

- Combat: new rank 
- Trade: new rank 
- Explore: new rank 
- CQC: new rank 
- Federation: 
- Empire: 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Promotion",
	"Explore": 2
}
```

### ProspectedAsteroid

When using a prospecting drone

Parameters:

- Materials: (array of Name and Proportion) 
- Content: (a string representing High/Medium/Low) 
- MotherlodeMaterial: name (if it's a motherlode) 
- Remaining: percentage 


### QuitACrew

When written: When you leave another player ship's crew

Parameters:

- Captain: Helm player's commander name 
- Telepresence: (bool) (only from Odyssey build) 


### RebootRepair

When written: when the 'reboot repair' function is used

Parameters:

- Modules: JSON array of names of modules repaired 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "RebootRepair",
	"Modules": [
		"MainEngines",
		"TinyHardpoint1"
	]
}
```

### ReceiveText

When written: when a text message is received from another player or npc

Parameters:

- From 
- Message 
- Channel: (wing/local/voicechat/friend/player/npc/squadron/starsystem) 


### RepairDrone

When written: when the player's ship has been repaired by a repair drone

Parameters:

- HullRepaired 
- CockpitRepaired 
- CorrosionRepaired 


Each of these is a number indicating the amount of damage that has been repaired

### ReservoirReplenished

When fuel is moved from one fuel tank to another

Parameters:

- FuelMain 
- FuelReservoir 


### Resurrect

When written: when the player restarts after death

Parameters:

- Option: the option selected on the insurance rebuy screen 
- Cost: the price paid 
- Bankrupt: whether the commander declared bankruptcy 


### Scanned

When written: when the player's ship has been scanned

(note the "Scan Detected" indication is at the start of the scan, this is written at the end of a successful scan)

Parameters:

- ScanType: Cargo, Crime, Cabin, Data or Unknown 


Example:

```
{
	"timestamp": "2017-02-13T12:30:09Z",
	"event": "Scanned",
	"ScanType": "Cargo"
}
```

### SelfDestruct

When written: when the 'self destruct' function is used

Parameters: none

### SendText

When written: when a text message is sent to another player

Parameters:

- To: may be player name, or channel name 
- Message 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "SendText",
	"To": "HRC-2",
	"Message": "zoom"
}
```

### Shutdown

When written: on a clean shutdown of the game

Parameters: none

### Synthesis

When written: when synthesis is used to repair or rearm

Parameters:

- Name: synthesis blueprint 
- Materials: JSON array with objects listing materials used and quantities 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Synthesis",
	"Name": "Repair Basic",
	"Materials": [
		{
			"Name": "iron",
			"Count": 2
		},
		{
			"Name": "nickel",
			"Count": 1
		}
	]
}
```

### SystemsShutdown

When written: when the player's ship systems shut down (eg in a Thargoid encounter)

Parameters: none

### USSDrop

When written: when dropping from Supercruise at a USS

Parameters:

- USSType: description of USS 
- USSThreat: threat level 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "USSDrop",
	"USSType": "Disrupted wake echoes",
	"USSThreat": 0
}
```

### VehicleSwitch

When written: when switching control between the main ship and a fighter

Parameters:

- To: ( Mothership/Fighter) 


Examples:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "VehicleSwitch",
	"To": "Fighter"
}
```

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "VehicleSwitch",
	"To": "Mothership"
}
```

### WingAdd

When written: another player has joined the wing

Parameters:

- Name 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "WingAdd",
	"Name": "HRC-2"
}
```

### WingInvite

When written: when the player is invited to a wing

Parameters:

- Name: the commander name of the player inviting to the wing 


### WingJoin

When written: this player has joined a wing

Parameters:

- Others: JSON array of other player names already in wing 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "WingJoin",
	"Others": [
		"HRC1"
	]
}
```

### WingLeave

When written: this player has left a wing

Parameters: none

Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "WingLeave"
}
```

### CargoTransfer

When transferring cargo between ship and fleet carrier, or between ship and SRV

- Transfers: [ {Type, Count, Direction}, ... ] 


```
{
	"timestamp": "2020-03-12T12:49:54Z",
	"event": "CargoTransfer",
	"Transfers": [
		{
			"Type": "tea",
			"Count": 1,
			"Direction": "tocarrier"
		},
		{
			"Type": "gold",
			"Count": 1,
			"Direction": "toship"
		}
	]
}
```

```
{
	"timestamp": "2020-03-12T13:34:22Z",
	"event": "CargoTransfer",
	"Transfers": [
		{
			"Type": "grain",
			"Count": 2,
			"Direction": "tosrv"
		}
	]
}
```

### SupercruiseDestinationDrop

When dropping out of supercruise at a targeted destination. 

- Type: The type fo destination being dropped into
- Threat: threat level
- MarketID: (Optional)The market id of the destination if dropping at a market


```
{
	"timestamp":"2020-03-12T12:49:54Z",
	"event":"SupercruiseDestinationDrop",
	"Type":”Azeban City”,
	“Threat”:0,
	“MarketID”:128001536 
}
```