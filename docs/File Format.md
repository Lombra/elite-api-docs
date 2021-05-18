## File Format

The Player Journal is written in line-delimited JSON format (see json.org and jsonlines.org), to provide a standard format for ease of machine parsing, while still being intelligible to the human reader.

Each Journal file is a series of lines each containing one Json object.

### File Location

The journal files are written into the user's Saved Games folder, eg, for Windows:

C:\Users\User Name\Saved Games\Frontier Developments\Elite Dangerous\

The filename is of the form _**Journal**_.&lt;datestamp&gt;.&lt;part&gt;_**.log**_, similar to network log files

In addition to the incremental player journal file, the following files are written into the same folder:

**Market.json** – contains list of commodities available at a station, with price info (written when opening commodity interaction screen). See section §8.17

**Outfitting.json** – contains list of modules and prices at station (written when opening outfitting interaction). See section §8.31

**Shipyard.json** – contains list of ships available in shipyard, with prices (written when opening shipyard screen). See section §8.46

**Status.json** – contains frequently-changing info as displayed in the cockpit gui. This is updated when the data changes. See section §14

### Heading entry

The Heading record has a Json object with the following values:

- timestamp: the time in GMT, ISO 8601 
- part: the file part number 
- odyssey: bool 
- language: the language code 
- gameversion: which version of the game produced the log (will indicate if beta) 
- build: game build number   


Example:

```
{
	"timestamp": "2016-07-22T10:20:01Z",
	"event": "fileheader",
	"part": 1,
	"language": "French/FR",
	"gameversion": "4.0.0.100",
	"build": "r114123 "
}
```

(If the play session goes on a long time, and the journal gets very large, the file will be closed and a new file started with an increased part number: the heading entry is added at the beginning of every file. See also the "Continued" event)

### Event Records

Each event record is a json object.

The object has a "timestamp" value with the time in ISO 8601 format, an "event":"_eventname_" key-value pair identifying the type of event, followed by other key-value pairs providing additional information.

The rest of this document describes each type of event that might be written into the journal, and the data values for each event.

### Localisation

Some values written into the log use internal symbol IDs, as used by the game to lookup localised text strings. These have the form "$symbolname;"

When such values are written into the log, the iocalised version of the string will also be written _(UTF8 encoded),_ as a separate key-value pair, with "_Localised" appended to the key name.

_**Examples throughout this document have not been updated with this extra localised format **_

"Government":"$government_PrisonColony;", "Government_Localised":"Colonie pénitentiaire"

In addition, for v3.0, all commodity names and material names will also be localised, eg if we had "Material ":"hyperspacetrajectories", we will get the result "Material_Localised":"Eccentric Hyperspace Trajectories"

However the localised value will be omitted if it is exactly the same as the original, ie avoid:  { "Name":"iron", "Name_Localised":"Iron", "Count":2 }