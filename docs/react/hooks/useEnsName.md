<script setup>
const packageName = 'wagmi'
const TData = 'string | null'
const TError = 'GetEnsNameError'
</script>

# useEnsName

Hook for fetching primary ENS name for address.

## Import

```ts
import { useEnsName } from 'wagmi'
```

## Usage

::: code-group
```tsx [index.tsx]
import { useEnsName } from 'wagmi'

function App() {
  const result = useEnsName({
    address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

## Parameters

```ts
import { type UseEnsNameParameters } from 'wagmi'
```

### address

`Address | undefined`

Name to get the resolver for. [`enabled`](#enabled) set to `false` if `address` is `undefined`.

::: code-group
```ts [index.ts]
import { useEnsName } from 'wagmi'

function App() {
  const result = useEnsName({
    address: '0xd2135CfB216b74109775236E36d4b433F1DF507B', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

---

### blockNumber

`bigint | undefined`

Block number to get ENS name at.

::: code-group
```ts [index.ts]
import { useEnsName } from 'wagmi'

function App() {
  const result = useEnsName({
    address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
    blockNumber: 17829139n, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### blockTag

`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`

Block tag to get ENS name at.

::: code-group
```ts [index.ts]
import { useEnsName } from 'wagmi'

function App() {
  const result = useEnsName({
    address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
    blockTag: 'latest', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

---

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```tsx [index.tsx]
import { useEnsName } from 'wagmi'
import { mainnet } from 'wagmi/chains' // [!code focus]

function App() {
  const result = useEnsName({
    address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
    chainId: mainnet.id, // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

### universalResolverAddress

`Name | undefined`

- Name of ENS Universal Resolver Contract.
- Defaults to current chain's Universal Name Contract address.

::: code-group
```ts [index.ts]
import { useEnsName } from 'wagmi'

function App() {
  const result = useEnsName({
    address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
    universalResolverAddress: '0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376', // [!code focus]
  })
}
```
<<< @/snippets/react/config.ts[config.ts]
:::

<!--@include: @shared/query-options.md-->

## Return Type

```ts
import { type UseEnsNameReturnType } from 'wagmi'
```

<!--@include: @shared/query-result.md-->

<!--@include: @shared/query/getEnsName.md-->

## Action

[getEnsName](/core/actions/getEnsName)