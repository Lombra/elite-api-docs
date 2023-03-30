## Fleet Carriers

### CarrierJump

This is similar to FSDJump and Location, but it is written if the player is online and docked at a fleet carrier when the carrier jumps. Note it does not include the distance jumped, or fuel used.

Example:

```
{
	"timestamp": "2020-03-25T15:55:56Z",
	"event": "CarrierJump",
	"Docked": true,
	"StationName": "FC L14X1J",
	"StationType": "FleetCarrier",
	"MarketID": 3700005632,
	"StationFaction": {
		"Name": "FleetCarrier"
	},
	"StationGovernment": "$government_Carrier;",
	"StationGovernment_Localised": "Private Ownership ",
	"StationServices": [
		"dock",
		"autodock",
		"blackmarket",
		"commodities",
		"outfitting",
		"crewlounge",
		"rearm",
		"refuel",
		"repair",
		"shipyard",
		"tuning",
		"engineer",
		"flightcontroller",
		"stationoperations",
		"stationMenu",
		"carriermanagement",
		"carrierfuel",
		"voucherredemption"
	],
	"StationEconomy": "$economy_Extraction;",
	"StationEconomy_Localised": "Extraction",
	"StationEconomies": [
		{
			"Name": "$economy_Extraction;",
			"Name_Localised": "Extraction",
			"Proportion": 1
		}
	],
	"StarSystem": "Hermitage",
	"SystemAddress": 5363877956440,
	"StarPos": [
		-28.75,
		25,
		10.4375
	],
	"SystemAllegiance": "",
	"SystemEconomy": "$economy_None;",
	"SystemEconomy_Localised": "None",
	"SystemSecondEconomy": "$economy_None;",
	"SystemSecondEconomy_Localised": "None",
	"SystemGovernment": "$government_None;",
	"SystemGovernment_Localised": "None",
	"SystemSecurity": "$GAlAXY_MAP_INFO_state_anarchy;",
	"SystemSecurity_Localised": "Anarchy",
	"Population": 0,
	"Body": "Hermitage",
	"BodyID": 0,
	"BodyType": "Star",
	"SystemFaction": {
		"Name": "FleetCarrier"
	}
}
```

### CarrierBuy

Player has bought a fleet carrier

- BoughtAtmarket: marketid 
- CarrierID : marketid 
- Location: starsystem name 
- Price: number 
- Variant: string 
- Callsign: string 


```
{
	"timestamp": "2020-03-11T15:31:46Z",
	"event": "CarrierBuy",
	"CarrierID": 3700029440,
	"BoughtAtMarket": 3221301504,
	"Location": "Kakmbutan",
	"SystemAddress": 3549513615723,
	"Price": 4875000000,
	"Variant": "CarrierDockB",
	"Callsign": "P07-V3L"
}
```

### CarrierStats

When owner opens carrier management

- CarrierID: marketid 
- Callsign: string 
- Name: string 
- DockingAccess: all/none/friends/squadron/squadronfriends 
- AllowNotorious: bool 
- FuelLevel: int 
- JumpRangeCurr: float 
- JumpRangeMax: float 
- PendingDecommission: bool 
- SpaceUsage { TotalCapacity, Crew, Cargo, CargoSpaceReserved, ShipPacks, ModulePacks, FreeSpace} 
- Finance { CarrierBalance, ReserveBalance, AvailableBalance, ReservePercent, TaxRate } 
- Crew [{ CrewRole, Activated, Enabled, CrewName },...] 
- ShipPacks [{ PackTheme, packTier },...] 
- ModulePacks [{PackTheme, packTier },...] 


```
{
	"timestamp": "2020-03-27T09:42:04Z",
	"event": "CarrierStats",
	"CarrierID": 3700005632,
	"Callsign": "L14-X1J",
	"Name": "Spirula",
	"DockingAccess": "all",
	"AllowNotorious": false,
	"FuelLevel": 63,
	"JumpRangeCurr": 81.079422,
	"JumpRangeMax": 500,
	"PendingDecommission": false,
	"SpaceUsage": {
		"TotalCapacity": 25000,
		"Crew": 5450,
		"Cargo": 440,
		"CargoSpaceReserved": 44,
		"ShipPacks": 774,
		"ModulePacks": 913,
		"FreeSpace": 17379
	},
	"Finance": {
		"CarrierBalance": 10000000,
		"ReserveBalance": 1800000,
		"AvailableBalance": 8171946,
		"ReservePercent": 18,
		"TaxRate": 3
	},
	"Crew": [
		{
			"CrewRole": "BlackMarket",
			"Activated": true,
			"Enabled": true,
			"CrewName": "Aliza Baldwin"
		},
		{
			"CrewRole": "Captain",
			"Activated": true,
			"Enabled": true,
			"CrewName": "Herbert Benson"
		},
		{
			"CrewRole": "Refuel",
			"Activated": true,
			"Enabled": false,
			"CrewName": "Maricela White"
		},
		{
			"CrewRole": "Repair",
			"Activated": true,
			"Enabled": false,
			"CrewName": "Zayla Clements"
		},
		{
			"CrewRole": "Rearm",
			"Activated": true,
			"Enabled": false,
			"CrewName": "Bill Lambert"
		},
		{
			"CrewRole": "Commodities",
			"Activated": true,
			"Enabled": true,
			"CrewName": "Lizeth Morales"
		},
		{
			"CrewRole": "VoucherRedemption",
			"Activated": true,
			"Enabled": false,
			"CrewName": "Phillip Gjoni"
		},
		{
			"CrewRole": "Shipyard",
			"Activated": true,
			"Enabled": false,
			"CrewName": "Simon Rhodes"
		},
		{
			"CrewRole": "Outfitting",
			"Activated": true,
			"Enabled": false,
			"CrewName": "Eugene Johnson"
		},
		{
			"CrewRole": "CarrierFuel",
			"Activated": true,
			"Enabled": true,
			"CrewName": "Orlando York"
		}
	],
	"ShipPacks": [
		{
			"PackTheme": "Zorgon Peterson - Cargo",
			"PackTier": 1
		}
	],
	"ModulePacks": [
		{
			"PackTheme": "ExplosiveWeaponry",
			"PackTier": 2
		}
	]
}
```

### CarrierJumpRequest

At the time the player requests the jump, not the jump itself

- CarrierID: marketid 
- SystemName: starsystem name 
- SystemID: systemaddress 
- Body: (name) 
- BodyID 
- DepartureTime 


```
{
	"timestamp": "2020-04-20T09:30:58Z",
	"event": "CarrierJumpRequest",
	"CarrierID": 3700005632,
	"SystemName": "Paesui Xena",
	"Body": "Paesui Xena A",
	"SystemAddress": 7269634680241,
	"BodyID": 1,
	"DepartureTime":"2020-04-20T09:45:00Z"
}
```

### CarrierDecommission

At the time the player requests decommission

- CarrierID: marketid 
- ScrapRefund: number 
- Scraptime: timestamp 


```
{
	"timestamp": "2020-03-11T15:12:26Z",
	"event": "CarrierDecommission",
	"CarrierID": 3700005632,
	"ScrapRefund": 1746872629,
	"ScrapTime": 1584601200
}
```

### CarrierCancelDecommission

- CarrierID: marketid 


```
{
	"timestamp": "2020-03-11T15:12:38Z",
	"event": "CarrierCancelDecommission",
	"CarrierID": 3700005632
}
```

### CarrierBankTransfer

Player transfers credits to/from carrier

- CarrierID: marketid 
- Deposit, or Withdraw 
- PlayerBalance: (after transfer) 
- CarrierBalance: (after transfer) 


```
{
	"timestamp": "2020-03-24T15:34:46Z",
	"event": "CarrierBankTransfer",
	"CarrierID": 3700005632,
	"Deposit": 80000,
	"PlayerBalance": 717339604128,
	"CarrierBalance": 3020010
}
```

### CarrierDepositFuel

Any player giving fuel to the carrier

- CarrierID: marketid 
- Amount: tons 
- Total: total amount of fuel after donation 


```
{
	"timestamp": "2020-03-19T09:17:29Z",
	"event": "CarrierDepositFuel",
	"CarrierID": 3700005632,
	"Amount": 45,
	"Total": 112
}
```

### CarrierCrewServices

Changes to crew

- CarrierID: marketid 
- Operation: (activate/deactivate/pause/resume/replace) 
- CrewRole: string 
- CrewName: string 


```
{
	"timestamp": "2020-03-17T12:38:54Z",
	"event": "CarrierCrewServices",
	"CarrierID": 3700005632,
	"CrewRole": "Outfitting",
	"Operation": "Activate",
	"CrewName": "Eugene Johnson"
}
```

### CarrierFinance

Change to tax rate or reserve

- CarrierID: marketid 
- TaxRate: number 
- CarrierBalance: number 
- ReserveBalance: number 
- AvailableBalance: number 
- ReservePercent: number 


```
{
	"timestamp": "2020-03-26T10:36:32Z",
	"event": "CarrierFinance",
	"CarrierID": 3700005632,
	"TaxRate": 5,
	"CarrierBalance": 3278186,
	"ReserveBalance": 0,
	"AvailableBalance": 475108,
	"ReservePercent": 0
}
```

### CarrierShipPack

CarrierShipPack/CarrierModulePack

- CarrierID: marketid 
- Operation: buypack/sellpack/restockpack 
- PackTheme: name 
- PackTier: name 
- Cost/Refund: int 


```
{
	"timestamp": "2020-03-16T09:25:39Z",
	"event": "CarrierShipPack",
	"CarrierID": 3700005632,
	"Operation": "BuyPack",
	"PackTheme": "Zorgon Peterson - Cargo",
	"PackTier": 1,
	"Cost": 1668880
}
```

### CarrierModulePack

Same format as CarrierShipPack

### CarrierTradeOrder

The carrier owner has requested the carrier buys or sells goods (or cancels such an order)

- CarrierID: marketid 
- BlackMarket: bool 
- Commodity: name 
- PurchaseOrder: quantity 
- or SaleOrder: quantity (current stock) 
- or CancelTrade: true 
- Price: int 


```
{
	"timestamp": "2020-03-16T14:52:36Z",
	"event": "CarrierTradeOrder",
	"CarrierID": 3700005632,
	"BlackMarket": false,
	"Commodity": "mineraloil",
	"Commodity_Localised": "Mineral Oil",
	"PurchaseOrder": 70,
	"Price": 228
}
```

### CarrierDockingPermission

The carrier owner has changed the docking permission criteria

- CarrierID: marketid 
- DockingAccess: all/none/friends/squadron/squadronfriends 
- AllowNotorious: bool 


```
{
	"timestamp": "2020-03-11T15:07:25Z",
	"event": "CarrierDockingPermission",
	"CarrierID": 3700005632,
	"DockingAccess": "squadron",
	"AllowNotorious": true
}
```

### CarrierNameChanged

This is logged when a carrier's name is changed

- CarrierID 
- Callsign 
- Name 


### CarrierJumpCancelled

This is logged when a jump is cancelled

- CarrierID 
