## Status File

In addition to the journal file, which is written incrementally, there is now (in v3.0) a new file **Status.json** which is updated every few seconds, with some information about the current state of the game.

This has a similar format to a line in the journal, but the whole file is replaced every time. It has a timestamp like the journal, and "event":"Status"

Parameters:

- Flags: multiple flags encoded as bits in an integer (see below)

- Pips: an array of 3 integers representing energy distribution (in half-pips)

- Firegroup: the currently selected firegroup number

- GuiFocus: the selected GUI screen

- Fuel: mass in tons

- Cargo: mass in tons

- Latitude (if on or near a planet)

- Altitude

- Longitude

- Heading



Flags:

Bit

0

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28



Examples:

```
{ "timestamp":"2017-12-07T10:31:37Z", "event":"Status", "Flags":16842765, "Pips":[2,8,2], "FireGroup":0, "GuiFocus":5 }
```

```
{ "timestamp":"2017-12-07T12:03:14Z", "event":"Status", "Flags":18874376, "Pips":[4,8,0], "FireGroup":0, "GuiFocus":0, "Latitude":-28.584963, "Longitude":6.826313, "Heading":109, "Altitude": 404 }
```



In the first example above 16842765 (0x0101000d) has flags 24, 16, 3, 2, 0: In main ship, Mass locked, Shields up, Landing gear down, Docked



GuiFocus values:

0

1

2

3

4

5

6

7

8

9

10

11



The latitude or longitude need to change by 0.02 degrees to trigger an update when flying, or by 0.0005 degrees when in the SRV

