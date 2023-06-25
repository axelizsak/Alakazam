# Alakazam

Alakazam has two aims: to list and index. Alakazam is an interface that lets you view all the layers of the Starknet ecosystem, along with certain data. What's more, the interface is modular thanks to checkpoint, and you can index any global event and layers can be compared with each other without having to parameterize a single line of code. Specific graphics will then be automatically generated. For example, you want to launch an app on an L3 but don't know which one to choose? Thanks to Alakazam, you can track the performance of the chains you're interested in and make your choice.

# Warning

The project is only at the proof-of-concept stage, everything remains to be done and very few functions are available. Currently you can index any global event on starknet's main network from a given block. Tip: if you choose "transaction_executed" start from block 1350 or if you choose "Transfer" start from block 1630. Starting from a block far away from the event you're tracking, the interface may take some time to load.

# Installation

If you don't have checkpoint install the :


```
npm install @snapshot-labs/checkpoint
```


Check that you have: 

-Node.js (>=14.x.x) 

-Yarn

-MySQL (or Docker to quickly run an image)

-Typescript

-axios

-prompt-sync

-React


When you have all this, type :

```
git clone https://github.com/izCRV/Alakazam
```



