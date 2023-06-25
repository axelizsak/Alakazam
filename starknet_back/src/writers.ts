import type { CheckpointWriter } from '@snapshot-labs/checkpoint';
import { Data } from '../.checkpoint/models';
import axios from 'axios';

let eventCount = 0;

// Récupération last block starknet
async function getStarknetBlockNumber(): Promise<number> {
    const response = await axios.post('https://starknet-mainnet.blastapi.io/8ec19d66-9ad6-4ccb-8a90-8451a52bdc93', {
        jsonrpc: "2.0",
        method: "starknet_blockNumber",
        params: [],
        id: 1
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.data.result as number;
}

async function getGoerliBlockNumber(): Promise<number> {
  const response = await axios.post('https://starknet-testnet.blastapi.io/8ec19d66-9ad6-4ccb-8a90-8451a52bdc93', {
      jsonrpc: "2.0",
      method: "starknet_blockNumber",
      params: [],
      id: 1
  }, {
      headers: {
          "Content-Type": "application/json"
      }
  });

  return response.data.result as number;
}

async function getSharinganAliceBlockNumber(): Promise<number> {
  const response = await axios.post('http://52.7.206.208:9944', {
      jsonrpc: "2.0",
      method: "starknet_blockNumber",
      params: [],
      id: 1
  }, {
      headers: {
          "Content-Type": "application/json"
      }
  });

  return response.data.result as number;
}

async function getSharinganBobBlockNumber(): Promise<number> {
  const response = await axios.post('http://44.195.161.82:9944', {
      jsonrpc: "2.0",
      method: "starknet_blockNumber",
      params: [],
      id: 1
  }, {
      headers: {
          "Content-Type": "application/json"
      }
  });

  return response.data.result as number;
}

async function getSharinganDaveBlockNumber(): Promise<number> {
  const response = await axios.post('http://65.108.65.148:9944', {
      jsonrpc: "2.0",
      method: "starknet_blockNumber",
      params: [],
      id: 1
  }, {
      headers: {
          "Content-Type": "application/json"
      }
  });

  return response.data.result as number;
}

async function getSharinganFerdieBlockNumber(): Promise<number> {
  const response = await axios.post('http://52.50.242.182:9944', {
      jsonrpc: "2.0",
      method: "starknet_blockNumber",
      params: [],
      id: 1
  }, {
      headers: {
          "Content-Type": "application/json"
      }
  });

  return response.data.result as number;
}

export async function handle_global_event({ 
  block
 }: Parameters<CheckpointWriter>[0]) {
  
  eventCount++;
  const nb_block = block!.block_number;
  const starknetblock: number = await getStarknetBlockNumber();
  const goerliblock: number = await getGoerliBlockNumber();
  const alice_block: number = await getSharinganAliceBlockNumber();
  const bob_block: number = await getSharinganBobBlockNumber();
  const dave_block: number = await getSharinganDaveBlockNumber();
  const ferdie_block: number = await getSharinganFerdieBlockNumber();
  console.log(nb_block); 
  
  // Create new Post from generated models
  const ifExist = await Data.loadEntity(`${nb_block}/${eventCount}`)
  if (!ifExist) {
    const data = new Data(`${nb_block}/${eventCount}`);
    data.nb_block = nb_block;
    data.eventCount = eventCount;
    data.starknet_block = starknetblock;
    data.goerli_block = goerliblock;
    data.shrgn_alice_block = alice_block;
    data.shrgn_bob_block = bob_block;
    data.shrgn_dave_block = dave_block;
    data.shrgn_ferdie_block = ferdie_block;
    await data.save();
  }
}
