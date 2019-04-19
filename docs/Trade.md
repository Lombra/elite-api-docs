## Trade

### AsteroidCracked

When written: when the player has broken up a 'Motherlode' asteroid for mining

Parameters:

- Body: name of nearest body 


### BuyTradeData

When Written: when buying trade data in the galaxy map

Parameters:

- System: star system requested 
- Cost: cost of data 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "BuyTradeData",
	"System": "i Bootis",
	"Cost": 100
}
```

### CollectCargo

When Written: when scooping cargo from space or planet surface

Parameters:

- Type: cargo type 
- Stolen: whether stolen goods 
- MissionID; (if relevant) 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "CollectCargo",
	"Type": "agriculturalmedicines",
	"Stolen": false
}
```

### EjectCargo

When Written:

Parameters:

- Type: cargo type 
- Count: number of units 
- MissionID: (if relevant) 
- Abandoned: whether 'abandoned' 


If the cargo is related to powerplay delivery _from outlying systems back to the centre_:

- PowerplayOrigin: starsystem name 


Examples:
```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "EjectCargo",
	"Type": "tobacco",
	"Count": 1,
	"Abandoned": true
}
```

```
{
	"timestamp": "2016-09-21T14:18:23Z",
	"event": "EjectCargo",
	"Type": "alliancelegaslativerecords",
	"Count": 2,
	"Abandoned": true,
	"PowerplayOrigin": "Tau Bootis"
}
```

### MarketBuy

When Written: when purchasing goods in the market

Parameters:

- MarketID 
- Type: cargo type 
- Count: number of units 
- BuyPrice: cost per unit 
- TotalCost: total cost 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MarketBuy",
	"Type": "foodcartridges",
	"Count": 10,
	"BuyPrice": 39,
	"TotalCost": 390
}
```

### MarketSell

When Written: when selling goods in the market

Parameters:

- MarketID 
- Type: cargo type 
- Count: number of units 
- SellPrice: price per unit 
- TotalSale: total sale value 
- AvgPricePaid: average price paid 
- IllegalGoods: (not always present) whether goods are illegal here 
- StolenGoods: (not always present) whether goods were stolen 
- BlackMarket: (not always present) whether selling in a black market 


Examples:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MarketSell",
	"Type": "agriculturalmedicines",
	"Count": 3,
	"SellPrice": 1360,
	"TotalSale": 4080,
	"AvgPricePaid": 304
}
```

```
{
	"event": "MarketSell",
	"Type": "mineraloil",
	"Count": 9,
	"SellPrice": 72,
	"TotalSale": 648,
	"AvgPricePaid": 0,
	"StolenGoods": true,
	"BlackMarket": true
}
```

### MiningRefined

When Written: when mining fragments are converted unto a unit of cargo by refinery

Parameters:

- Type: cargo type 


Example:

```
{
	"timestamp": "2016-06-10T14:32:03Z",
	"event": "MiningRefined",
	"Type": "Gold"
}
```