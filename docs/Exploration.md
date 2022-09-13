## Exploration

### CodexEntry

When written: when a new discovery is added to the Codex

Parameters:

- EntryID: an ID number 
- Name: string (+localisation) 
- SubCategory: string (+localisation) 
- Category: string (+localisation) 
- Region: string 
- System: string 
- SystemAddress 
- BodyID 
- NearestDestination: name 
- Latitude 
- Longitude 
- IsNewEntry: bool 
- NewTraitsDiscovered: bool 
- Traits: [ array of strings ] 


The IsNewEntry and NewTraitsDiscovered fields are optional depending on the results of the scan, and the Traits field is only available for entries that have unlocked traits.

The "NearestDestination" is added if within 50km of a location listed in the navigation panel

Example:

```
{
	"timestamp": "2019-05-13T13:28:51Z",
	"event": "CodexEntry",
	"EntryID": 1400159,
	"Name": "$Codex_Ent_IceFumarole_CarbonDioxideGeysers_Name;",
	"Name_Localised": "Carbon Dioxide Ice Fumarole",
	"SubCategory": "$Codex_SubCategory_Geology_and_Anomalies;",
	"SubCategory_Localised": "Geology and anomalies",
	"Category": "$Codex_Category_Biology;",
	"Category_Localised": "Biological and Geological",
	"Region": "$Codex_RegionName_18;",
	"Region_Localised": "Inner Orion Spur",
	"System": "Hermitage",
	"SystemAddress": 5363877956440,
	"NearestDestination": "$SAA_Unknown_Signal:#type=$SAA_SignalType_Geological;:#index=9;",
	"NearestDestination_Localised": "Surface signal: Geological (9)",
	"IsNewEntry": true,
	"VoucherAmount": 50000
}
```

### DiscoveryScan

When written: when using the discovery scanner, and new body discoveries are displayed in the cockpit info window. Note you can get two or three of these in a row, where some bodies are discovered by the automatic passive scan, before the active scan is complete.

Parameters:

- SystemAddress 
- Bodies: number of new bodies discovered 


### Scan

When Written: basic or detailed discovery scan of a star, planet or moon

This is also generated when scanning a navigation beacon in a populated system, to record info about all the bodies in the system

Parameters(star)

- ScanType
- StarSystem: name
- SystemAddress
- Bodyname: name of body
- BodyID
- DistanceFromArrivalLS
- StarType: Stellar classification (for a star) – see §15.2
- Subclass: Star's heat classification 0..9
- StellarMass: mass as multiple of Sol's mass
- Radius
- AbsoluteMagnitude
- RotationPeriod (seconds)
- SurfaceTemperature
- Luminosity – see §15.9
- Age_MY: age in millions of years
- Rings: [ array ] – if present
- WasDiscovered: bool
- WasMapped: bool


Parameters(Planet/Moon)

- ScanType 
- Bodyname: name of body 
- BodyID 
- Parents: Array of BodyType:BodyID pairs 
- DistanceFromArrivalLS 
- TidalLock: 1 if tidally locked
- TerraformState: Terraformable, Terraforming, Terraformed, or null
- PlanetClass – see §15.3
- Atmosphere – see §15.4
- AtmosphereType
- AtmosphereComposition: [ array of info ]
- Volcanism – see §15.5
- SurfaceGravity 
- SurfaceTemperature
- SurfacePressure
- Landable: true (if landable)
- Materials: JSON array with objects with material names and percentage occurrence
- Composition: structure containing info on solid composition
	- Ice 
	- Rock 
	- Metal  
- Rings: [ array of info ] – if rings present
- ReserveLevel: (Pristine/Major/Common/Low/Depleted) – if rings present


If rotating:

- RotationPeriod (seconds) 
- Axial tilt 


Orbital Parameters for any Star/Planet/Moon (except main star of single-star system)

- SemiMajorAxis 
- Eccentricity 
- OrbitalInclination 
- Periapsis 
- OrbitalPeriod 


Rings properties*

- Name 
- RingClass 
- MassMT – ie in megatons 
- InnerRad 
- OuterRad 


Note that a basic scan (ie without having a Detailed Surface Scanner installed) will now save a reduced amount of information.

A basic scan on a planet will **include** body name, planet class, orbital data, rotation period, mass, radius, surface gravity; but will **exclude** tidal lock, terraform state, atmosphere, volcanism, surface pressure and temperature, available materials, and details of rings. The info for a star will be largely the same whether a basic scanner or detailed scanner is used.

The "Parents" property provides the body's hierarchical position within the system: in the example below, "Procyon B 3 a" is a moon of a planet (body 11), which is orbiting a star (body 2), which is has a parent body that's a Barycentre

_Entries in the list above marked with an asterisk are only included for a detailed scan_

**ScanType**: one of Basic, Detailed, NavBeacon, NavBeaconDetail, AutoScan

Example:

```
{
	"timestamp": "2018-02-02T10:43:05Z",
	"event": "Scan",
	"ScanType": "NavBeaconDetail",
	"BodyName": "Procyon B 3 a",
	"BodyID": 12,
	"Parents": [
		{
			"Planet": 11
		},
		{
			"Star": 2
		},
		{
			"Null": 0
		}
	],
	"DistanceFromArrivalLS": 10048.152344,
	"TidalLock": true,
	"TerraformState": "",
	"PlanetClass": "Rocky body",
	"Atmosphere": "",
	"AtmosphereType": "None",
	"Volcanism": "",
	"MassEM": 0.025342,
	"Radius": 2011975.25,
	"SurfaceGravity": 2.495225,
	"SurfaceTemperature": 318.448792,
	"SurfacePressure": 0,
	"Landable": true,
	"Materials": [
		{
			"Name": "iron",
			"Percent": 19.315084
		},
		{
			"Name": "sulphur",
			"Percent": 17.321133
		},
		{
			"Name": "nickel",
			"Percent": 14.60912
		},
		{
			"Name": "carbon",
			"Percent": 14.565277
		},
		{
			"Name": "phosphorus",
			"Percent": 9.324941
		},
		{
			"Name": "chromium",
			"Percent": 8.686635
		},
		{
			"Name": "manganese",
			"Percent": 7.976933
		},
		{
			"Name": "zinc",
			"Percent": 5.249117
		},
		{
			"Name": "tin",
			"Percent": 1.200338
		},
		{
			"Name": "tungsten",
			"Percent": 1.060592
		},
		{
			"Name": "technetium",
			"Percent": 0.690823
		}
	],
	"Composition": {
		"Ice": 0,
		"Rock": 0.861282,
		"Metal": 0.138718
	},
	"SemiMajorAxis": 89655728,
	"Eccentricity": 0,
	"OrbitalInclination": 4.566576,
	"Periapsis": 309.656799,
	"OrbitalPeriod": 344902.9375,
	"RotationPeriod": 352425.46875,
	"AxialTilt": 0.479157
}
```

###  FSSAllBodiesFound

When written: after having identified all bodies in the system

Parameters:

- SystemName 
- SystemAddress 
- Count 


### FSSBodySignals

This event is written when completing a "Full Spectrum Scan" of a starsystem, to list the number of SAA signals found in the system (as shown in-game in the top-right panel)

Parameters:

- BodyName 
- BodyID 
- SystemAddress 
- Signals: Array 
	- Type 
	- Count 


Example:

```
{
	"timestamp": "2022-03-17T18:20:53Z",
	"event": "FSSBodySignals",
	"BodyName": "Phroi Blou EW-W d1-1056 2 a",
	"BodyID": 18,
	"SystemAddress": 36293555558035,
	"Signals": [
		{
			"Type": "$SAA_SignalType_Geological;",
			"Type_Localised": "Geological",
			"Count": 3
		}
	]
}
```

### FSSDiscoveryScan

When written: when performing a full system scan ("Honk")

Parameters:

- Progress: (a value in range 0-1 showing how completely the system has been scanned) 
- BodyCount: number of stellar bodies in system 
- NonBodyCount: Number of non-body signals found 


### FSSSignalDiscovered

When written: when zooming in on a signal using the FSS scanner

Parameters:

- SignalName 
- SpawningState: the BGS state that triggered this event, if relevant 
- SpawningFaction: the minor faction, if relevant 
- TimeRemaining: remaining lifetime in seconds, if relevant 
- SystemAddress 
- ThreatLevel (if a USS) 
- USSType: (if a USS) – same types as in USSDrop event 
- IsStation: true (if it is a station) 


### MaterialCollected

When Written: whenever materials are collected

Parameters:

- Category: type of material (Raw/Encoded/Manufactured) 
- Name: name of material 
- Count: number of units collected 


Examples:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MaterialCollected",
	"Category": "Raw",
	"Name": "sulphur",
	"Count": 2
}
```

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MaterialCollected",
	"Category": "Encoded",
	"Name": "disruptedwakeechoes",
	"Count": 1
}
```

### MaterialDiscarded

When Written: if materials are discarded

Parameters:

- Category 
- Name 
- Count 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MaterialDiscarded",
	"Category": "Raw",
	"Name": "sulphur",
	"Count": 5
}
```

### MaterialDiscovered

When Written: when a new material is discovered

Parameters:

- Category 
- Name 
- DiscoveryNumber 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MaterialDiscovered",
	"Category": "Manufactured",
	"Name": "focuscrystals",
	"DiscoveryNumber": 3
}
```

### MultiSellExplorationData

When written: when selling exploration data in Cartographics, a page at a time

Parameters:

- Discovered: (array of records, as follows) 
	- SystemName 
	- NumBodies 
- BaseValue 
- Bonus 
- TotalEarnings 


Example

```
{
	"timestamp": "2018-11-14T10:35:35Z",
	"event": "MultiSellExplorationData",
	"Discovered": [
		{
			"SystemName": "HIP 84742",
			"NumBodies": 23
		},
		{
			"SystemName": "Col 359 Sector NY-S b20-1",
			"NumBodies": 9
		}
	],
	"BaseValue": 2938186,
	"Bonus": 291000,
	"TotalEarnings": 3229186
}
```

### NavBeaconScan

When written: when scanning  a navigation beacon, before the scan data for all the bodies in the system is written into the journal

Parameters:

- NumBodies 
- SystemAddress 


### BuyExplorationData  

When Written: when buying system data via the galaxy map

Parameters:

- System 
- Cost 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "BuyExplorationData",
	"System": "Styx",
	"Cost": 352
}
```

### SAAScanComplete

When written: after using the "Surface Area Analysis" scanner

Parameters:

- SystemAddress 
- BodyName 
- BodyID 
- ~~Discoverers: (array of names)~~ 
- ~~Mappers: (array of names)~~ 
- ProbesUsed: (int) 
- EfficiencyTarget: (int) 


Example:

```
{
	"timestamp": "2018-10-05T15:06:12Z",
	"event": "SAAScanComplete",
	"BodyName": "Eranin 5",
	"BodyID": 5,
	"ProbesUsed": 6,
	"EfficiencyTarget": 9
}
```

### SAASignalsFound

When written: when using SAA scanner on a planet or rings

Parameters:

- SystemAddress 
- BodyName 
- BodyID 
- Signals: (array) 
	- Type 
	- Count 
- Genuses: (array) 
	- Genus 


Examples:

```
{
	"timestamp": "2019-04-17T13:38:18Z",
	"event": "SAASignalsFound",
	"BodyName": "Hermitage 4 A Ring",
	"SystemAddress": 5363877956440,
	"BodyID": 11,
	"Signals": [
		{
			"Type": "LowTemperatureDiamond",
			"Type_Localised": "Low Temperature Diamonds",
			"Count": 1
		},
		{
			"Type": "Alexandrite",
			"Count": 1
		}
	]
}
```

```
{
	"timestamp": "2019-04-17T13:40:39Z",
	"event": "SAASignalsFound",
	"BodyName": "Hermitage 4 b",
	"SystemAddress": 5363877956440,
	"BodyID": 13,
	"Signals": [
		{
			"Type": "$SAA_SignalType_Geological;",
			"Type_Localised": "Geological",
			"Count": 14
		}
	]
}
```

```
{
	"timestamp": "2022-07-01T09:14:32Z",
	"event": "SAASignalsFound",
	"BodyName": "Asellus 3a",
	"SystemAddress": 1144348739947,
	"BodyID": 10,
	"Signals": [
		{
			"Type": "$SAA_SignalType_Biological;",
			"Type_Localised": "Biological",
			"Count": 2
		},
		{
			"Type": "$SAA_SignalType_Geological;",
			"Type_Localised": "Geological",
			"Count": 3
		},
		{
			"Type": "$SAA_SignalType_Human;",
			"Type_Localised": "Human",
			"Count": 8
		}
	],
	"Genuses": [
		{
			"Genus": "$Codex_Ent_Bacterial_Genus_Name;",
			"Genus_Localised": "Bacterium"
		},
		{
			"Genus": "$Codex_Ent_Stratum_Genus_Name;",
			"Genus_Localised": "Stratum"
		}
	]
}
```

### ScanBaryCentre

When scanning one body of a binary pair, you will now get an event detailing the orbital parameters of their BaryCentre

Parameters:

- StarSystem 
- SystemAddress 
- BodyID 
- SemiMajorAxis 
- Eccentricity 
- OrbitalInclination 
- Periapsis 
- OrbitalPeriod 
- AscendingNode 
- MeanAnomaly 


Example

```
{
	"timestamp": "2021-07-27T13:52:20Z",
	"event": "ScanBaryCentre",
	"StarSystem": "Col 285 Sector YX-N b21-1",
	"SystemAddress": 2867561768401,
	"BodyID": 10,
	"SemiMajorAxis": 2107998251914.978,
	"Eccentricity": 0.033074,
	"OrbitalInclination": 0.019013,
	"Periapsis": 342.187341,
	"OrbitalPeriod": 3739380657.672882,
	"AscendingNode": -31.477241,
	"MeanAnomaly": 64.03028
}
```

### SellExplorationData

When Written: when selling exploration data in Cartographics

Parameters:

- Systems: JSON array of system names 
- Discovered: JSON array of discovered bodies 
- BaseValue: value of systems 
- Bonus: bonus for first discoveries 
- TotalEarnings: total credits received (including for example the 200% bonus if rank 5 with Li Yong Rui) 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "SellExplorationData",
	"Systems": [
		"HIP 78085",
		"Praea Euq NW-W b1-3"
	],
	"Discovered": [
		"HIP 78085 A",
		"Praea Euq NW-W b1-3",
		"Praea Euq NW-W b1-3 3 a",
		"Praea Euq NW-W b1-3 3"
	],
	"BaseValue": 10822,
	"Bonus": 3959,
	"TotalEarnings": 44343
}
```

### Screenshot

When Written: when a screen snapshot is saved

Parameters:

- Filename: filename of screenshot 
- Width: size in pixels 
- Height: size in pixels 
- System: current star system 
- Body: name of nearest body 
- Latitude 
- Longitude 
- Altitude 
- Heading 


The latitude, longitude, altitude and heading will be included if on a planet or in low-altitude flight

Example:

```
{
	"timestamp": "2018-01-17T09:48:26Z",
	"event": "Screenshot",
	"Filename": "_Screenshots/Screenshot_0024.bmp",
	"Width": 1440,
	"Height": 900,
	"System": "Nuenets",
	"Body": "Nuenets C 2",
	"Latitude": -60.7999,
	"Longitude": -74.059799,
	"Heading": 39,
	"Altitude": 27502.876953
}
```