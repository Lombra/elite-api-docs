## Combat

### Bounty

When written: player is awarded a bounty for a kill

Parameters:

- Rewards: an array of Faction names and the Reward values, as the target can have multiple bounties payable by different factions 
- Target: type of ship 
- VictimFaction: the victim's faction 
- TotalReward 
- SharedWithOthers: if credit for the kill is shared with other players, this has the number of other players involved 


When the bounty is for a skimmer, it's slightly different:

- Faction: faction paying bounty 
- Target: type of target 
- Reward: amount 
- VictimFaction 


Examples:

```
{
	"timestamp": "2018-04-17T11:11:02Z",
	"event": "Bounty",
	"Rewards": [
		{
			"Faction": "Nehet Patron's Principles",
			"Reward": 5620
		}
	],
	"Target": "empire_eagle",
	"TotalReward": 5620,
	"VictimFaction": "Nehet Progressive Party"
}
```

```
{
	"timestamp": "2018-05-20T21:19:58Z",
	"event": "Bounty",
	"Faction": "HIP 18828 Empire Consulate",
	"Target": "Skimmer",
	"Reward": 1000,
	"VictimFaction": "HIP 18828 Empire Consulate"
}
```

### CapShipBond

When written: The player has been rewarded for a capital ship combat

Parameters:

- Reward: value of award 
- AwardingFaction 
- VictimFaction 


### Died

When written: player was killed

Parameters:

- KillerName 
- KillerShip 
- KillerRank 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Died",
	"KillerName": "$ShipName_Police_Independent;",
	"KillerShip": "viper",
	"KillerRank": "Deadly"
}
```

### Died

When written: player was killed by a wing

Parameters:

- Killers: a JSON array of objects containing player name, ship, and rank 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "Died",
	"Killers": [
		{
			"Name": "Cmdr HRC1",
			"Ship": "Vulture",
			"Rank": "Competent"
		},
		{
			"Name": "Cmdr HRC2",
			"Ship": "Python",
			"Rank": "Master"
		}
	]
}
```

### EscapeInterdiction

When written: Player has escaped interdiction

Parameters:

- Interdictor: interdicting pilot name 
- IsPlayer: whether player or npc 
- IsThargoid: whether thargoid or not


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "EscapeInterdiction",
	"Interdictor": "Hrc1",
	"IsPlayer": true
}
```

### FactionKillBond

When written: Player rewarded for taking part in a combat zone

Parameters:

- Reward 
- AwardingFaction 
- VictimFaction 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "FactionKillBond",
	"Reward": 500,
	"AwardingFaction": "Jarildekald Public Industry",
	"VictimFaction": "Lencali Freedom Party"
}
```

### FighterDestroyed

When written: when a ship-launched fighter is destroyed

Parameters: none

### HeatDamage

When written: when taking damage due to overheating

Parameters:

- ID 


### HeatWarning

When written: when heat exceeds 100%

Parameters: none

### HullDamage

When written: when hull health drops below a threshold (20% steps)

Parameters:

- Health 
- PlayerPilot: bool – true if player is piloting the ship/fighter taking damage 
- Fighter: bool – true for ship-launched fighter 


### Interdicted

When written: player was interdicted by player or npc

Parameters:

- Submitted: true or false 
-  Interdictor: interdicting pilot name 
- IsPlayer: whether player or npc 
- IsThargoid: whether thargoid or not
- CombatRank: if player 
- Faction: if npc 
- Power: if npc working for a power 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "interdicted",
	"Submitted": false,
	"Interdictor": "Dread Pirate Roberts",
	"IsPlayer": false,
	"Faction": "Timocani Purple Posse"
}
```

### Interdiction

When written: player has (attempted to) interdict another player or npc

Parameters:

- Success : true or false 
- Interdicted: victim pilot name 
- IsPlayer: whether player or npc 
- CombatRank: if a player 
- Faction: if an npc 
- Power: if npc working for power 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "interdiction",
	"Success": true,
	"Interdicted": "Fred Flintstone",
	"IsPlayer": true,
	"CombatRank": 5
}
```

### PVPKill

When written: when this player has killed another player

Parameters:

- Victim: name of victim 
- CombatRank: victim's rank in range 0..8 


### ShieldState

When written: when shields are disabled in combat, or recharged

Parameters:

- ShieldsUp 0 when disabled, 1 when restored 


Examples:

```
{
	"timestamp": "2016-07-25T14:45:48Z",
	"event": "ShieldState",
	"ShieldsUp": false
}
```

```
{
	"timestamp": "2016-07-25T14:46:36Z",
	"event": "ShieldState",
	"ShieldsUp": true
}
```

### ShipTargetted

When written: when the current player selects a new target

The amount of data written depends on the extent to which the target ship has been scanned

Parameters:

- TargetLocked: bool (ie false when losing target) 


If target locked:

- Ship: name 
- ScanStage: number 


If Scan stage &gt;= 1

- PilotName: name 
- PilotRank: rank name 


If scan stage &gt;= 2

- ShieldHealth 
- HullHealth 


If scan stage &gt;= 3

- Faction 
- LegalStatus 
- Bounty 
- SubSystem 
- SubSystemHealth 
- Power [*] 


[*] when targetting another ship, if the player is aligned in powerplay, and the target is also aligned to a power, include the info

### SRVDestroyed

When written: when the player's SRV is destroyed

Parameters:

- ID 
- SRVType 


### UnderAttack

When written: when under fire (same time as the Under Attack voice message)

Parameters:

- Target: (Fighter/Mothership/You) 
