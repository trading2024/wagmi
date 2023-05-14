import { fetchLogs } from '@viem/anvil'
import { afterAll, afterEach } from 'vitest'

import { forkBlockNumber, forkUrl } from './constants.js'
import { pool, testClient } from './utils.js'

afterAll(async () => {
  // If you are using a fork, you can reset your anvil instance to the initial fork block.
  await testClient.reset({
    jsonRpcUrl: forkUrl,
    blockNumber: forkBlockNumber,
  })
})

afterEach(async (context) => {
  context.onTestFailed(async () => {
    // If a test fails, you can fetch and print the logs of your anvil instance.
    const logs = await fetchLogs('http://localhost:8545', pool)
    // Only print the 20 most recent log messages.
    console.log(...logs.slice(-20))
  })
})
