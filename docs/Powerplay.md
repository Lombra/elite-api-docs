## Powerplay

### PowerplayCollect

When written: when collecting powerplay commodities for delivery

Parameters:

- Power: name of power 
- Type: type of commodity 
- Count: number of units 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "PowerplayCollect",
	"Power": "Li Yong-Rui",
	"Type": "siriusfranchisepackage",
	"Count": 10
}
```

### PowerplayDefect

When written: when a player defects from one power to another

Parameters:

- FromPower 
- ToPower 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "PowerplayDefect",
	"FromPower": "Zachary Hudson",
	"ToPower": "Li Yong-Rui"
}
```

### PowerplayDeliver

When written: when delivering powerplay commodities

Parameters:

- Power 
- Type 
- Count 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "PowerplayDeliver",
	"Power": "Li Yong-Rui",
	"Type": "siriusfranchisepackage",
	"Count": 10
}
```

### PowerplayFastTrack

When written: when paying to fast-track allocation of commodities

Parameters:

- Power 
- Cost 


### PowerplayJoin

When written: when joining up with a power

Parameters:

- Power 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "PowerplayJoin",
	"Power": "Zachary Hudson"
}
```

### PowerplayLeave

When written: when leaving a power

Parameters:

- Power 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "PowerplayLeave",
	"Power": "Li Yong-Rui"
}
```

### PowerplaySalary

When written: when receiving salary payment from a power

Parameters:

- Power 
- Amount 


### PowerplayVote

When written: when voting for a system expansion

Parameters:

- Power 
- Votes 
- System 


### PowerplayVoucher

When written: when receiving payment for powerplay combat

Parameters:

- Power 
- Systems:[name,name] 
