import {
  Address,
  BigInt,
  ethereum
} from "@graphprotocol/graph-ts";
import {
  BonderAdded,
  BonderRemoved,
  ChallengeResolved,
  MultipleWithdrawalsSettled,
  Stake,
  TransferBondChallenged,
  TransferRootBonded,
  TransferRootConfirmed,
  TransferRootSet,
  TransferSentToL2,
  Unstake,
  WithdrawalBondSettled,
  WithdrawalBonded,
  Withdrew
} from '../generated/HopL1Bridge/L1_Bridge'
import {
  BonderAdded as BonderAddedEntity,
  BonderRemoved as BonderRemovedEntity,
  ChallengeResolved as ChallengeResolvedEntity,
  MultipleWithdrawalsSettled as MultipleWithdrawalsSettledEntity,
  Stake as StakeEntity,
  TransferBondChallenged as TransferBondChallengedEntity,
  TransferRootBonded as TransferRootBondedEntity,
  TransferRootConfirmed as TransferRootConfirmedEntity,
  TransferRootSet as TransferRootSetEntity,
  TransferSentToL2 as TransferSentToL2Entity,
  Unstake as UnstakeEntity,
  WithdrawalBondSettled as WithdrawalBondSettledEntity,
  WithdrawalBonded as WithdrawalBondedEntity,
  Withdrew as WithdrewEntity,
  Volume as VolumeEntity,
  DailyVolume as DailyVolumeEntity,
  Token as TokenEntity,
  Transaction as TransactionEntity,
  Block as BlockEntity,
} from '../generated/schema'
import {
  createBlockEntityIfNotExists,
  createTransactionEntityIfNotExists,
  createTokenEntityIfNotExists
} from './shared'

const TOKEN_ADDRESS = '{{address}}'
const TOKEN_NAME = '{{tokenName}}'
const TOKEN_SYMBOL = '{{token}}'
const TOKEN_DECIMALS = {{tokenDecimals}}

export function handleBonderAdded(event: BonderAdded): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = BonderAddedEntity.load(id)
  if (entity == null) {
    entity = new BonderAddedEntity(id)
  }

  entity.newBonder = event.params.newBonder.toHexString()

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleBonderRemoved(event: BonderRemoved): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = BonderRemovedEntity.load(id)
  if (entity == null) {
    entity = new BonderRemovedEntity(id)
  }

  entity.previousBonder = event.params.previousBonder.toHexString()

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleChallengeResolved(event: ChallengeResolved): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = ChallengeResolvedEntity.load(id)
  if (entity == null) {
    entity = new ChallengeResolvedEntity(id)
  }

  entity.transferRootId = event.params.transferRootId
  entity.rootHash = event.params.rootHash
  entity.originalAmount = event.params.originalAmount

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleMultipleWithdrawalsSettled(event: MultipleWithdrawalsSettled): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = MultipleWithdrawalsSettledEntity.load(id)
  if (entity == null) {
    entity = new MultipleWithdrawalsSettledEntity(id)
  }

  entity.bonder = event.params.bonder.toHexString()
  entity.rootHash = event.params.rootHash
  entity.totalBondsSettled = event.params.totalBondsSettled

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleStake(event: Stake): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = StakeEntity.load(id)
  if (entity == null) {
    entity = new StakeEntity(id)
  }

  entity.account = event.params.account.toHexString()
  entity.amount = event.params.amount

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleTransferBondChallenged(event: TransferBondChallenged): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = TransferBondChallengedEntity.load(id)
  if (entity == null) {
    entity = new TransferBondChallengedEntity(id)
  }

  entity.transferRootId = event.params.transferRootId
  entity.rootHash = event.params.rootHash
  entity.originalAmount = event.params.originalAmount

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleTransferRootBonded(event: TransferRootBonded): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = TransferRootBondedEntity.load(id)
  if (entity == null) {
    entity = new TransferRootBondedEntity(id)
  }

  entity.root = event.params.root
  entity.amount = event.params.amount

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleTransferRootConfirmed(event: TransferRootConfirmed): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = TransferRootConfirmedEntity.load(id)
  if (entity == null) {
    entity = new TransferRootConfirmedEntity(id)
  }

  entity.originChainId = event.params.originChainId
  entity.destinationChainId = event.params.destinationChainId
  entity.rootHash = event.params.rootHash
  entity.totalAmount = event.params.totalAmount

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleTransferRootSet(event: TransferRootSet): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = TransferRootSetEntity.load(id)
  if (entity == null) {
    entity = new TransferRootSetEntity(id)
  }

  entity.rootHash = event.params.rootHash
  entity.totalAmount = event.params.totalAmount

  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleTransferSentToL2(event: TransferSentToL2): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = TransferSentToL2Entity.load(id)
  if (entity == null) {
    entity = new TransferSentToL2Entity(id)
  }

  entity.destinationChainId = event.params.chainId
  entity.recipient = event.params.recipient.toHexString()
  entity.amount = event.params.amount
  entity.amountOutMin = event.params.amountOutMin
  entity.deadline = event.params.deadline
  entity.relayer = event.params.relayer.toHexString()
  entity.relayerFee = event.params.relayerFee

  createBlockEntityIfNotExists(event.params._event)
  createTransactionEntityIfNotExists(event.params._event)
  createTokenEntityIfNotExists(TOKEN_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_DECIMALS)
  entity.block = event.params._event.block.hash.toHexString()
  entity.transaction = event.params._event.transaction.hash.toHexString()
  entity.tokenEntity = TOKEN_ADDRESS
  entity.logIndex = event.params._event.logIndex

  // legacy
  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()

  // Cumulative volume
  const volumeId = "volume:{{token}}"
  let volumeEntity = VolumeEntity.load(volumeId)
  if (volumeEntity == null) {
    volumeEntity = new VolumeEntity(volumeId)
    volumeEntity.amount = BigInt.fromString('0')
  }
  volumeEntity.amount = volumeEntity.amount.plus(event.params.amount)
  volumeEntity.token = TOKEN_SYMBOL
  volumeEntity.tokenEntity = TOKEN_ADDRESS

  volumeEntity.save()

  // Daily volume
  // NOTE: TheGraph doesn't support date parsing because webassembly date support is primitive:
  // https://github.com/graphprotocol/support/issues/26
  // date logic borrowed from uniswap subgraphs:
  // https://github.com/graphprotocol/uniswap-subgraph/blob/ed19523cd80d29a6b403591f4f1b24746ab05023/src/mappings/exchange.ts#L190
  // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
  // Nov 3 2018 would be 1541116800 + 86400 and 17838, and so on.
  let blockTimestamp = event.params._event.block.timestamp.toI32()
  let dayID = blockTimestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dailyVolumeId = "volume:{{token}}:" + dayID.toString()
  let dailyVolumeEntity = DailyVolumeEntity.load(dailyVolumeId)
  if (dailyVolumeEntity == null) {
    dailyVolumeEntity = new DailyVolumeEntity(dailyVolumeId)
    dailyVolumeEntity.amount = BigInt.fromString('0')
  }
  dailyVolumeEntity.amount = dailyVolumeEntity.amount.plus(event.params.amount)
  dailyVolumeEntity.token = TOKEN_SYMBOL
  dailyVolumeEntity.tokenEntity = TOKEN_ADDRESS
  dailyVolumeEntity.date = dayStartTimestamp
  dailyVolumeEntity.save()
}

export function handleUnstake(event: Unstake): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = UnstakeEntity.load(id)
  if (entity == null) {
    entity = new UnstakeEntity(id)
  }

  entity.account = event.params.account.toHexString()
  entity.amount = event.params.amount

  createBlockEntityIfNotExists(event.params._event)
  createTransactionEntityIfNotExists(event.params._event)
  createTokenEntityIfNotExists(TOKEN_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_DECIMALS)
  entity.block = event.params._event.block.hash.toHexString()
  entity.transaction = event.params._event.transaction.hash.toHexString()
  entity.tokenEntity = TOKEN_ADDRESS

  // legacy
  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleWithdrawalBondSettled(event: WithdrawalBondSettled): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = WithdrawalBondSettledEntity.load(id)
  if (entity == null) {
    entity = new WithdrawalBondSettledEntity(id)
  }

  entity.bonder = event.params.bonder.toHexString()
  entity.transferId = event.params.transferId
  entity.rootHash = event.params.rootHash

  createBlockEntityIfNotExists(event.params._event)
  createTransactionEntityIfNotExists(event.params._event)
  createTokenEntityIfNotExists(TOKEN_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_DECIMALS)
  entity.block = event.params._event.block.hash.toHexString()
  entity.transaction = event.params._event.transaction.hash.toHexString()
  entity.tokenEntity = TOKEN_ADDRESS

  // legacy
  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleWithdrawalBonded(event: WithdrawalBonded): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = WithdrawalBondedEntity.load(id)
  if (entity == null) {
    entity = new WithdrawalBondedEntity(id)
  }

  entity.transferId = event.params.transferId
  entity.amount = event.params.amount

  createBlockEntityIfNotExists(event.params._event)
  createTransactionEntityIfNotExists(event.params._event)
  createTokenEntityIfNotExists(TOKEN_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_DECIMALS)
  entity.block = event.params._event.block.hash.toHexString()
  entity.transaction = event.params._event.transaction.hash.toHexString()
  entity.tokenEntity = TOKEN_ADDRESS

  // legacy
  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

export function handleWithdrew(event: Withdrew): void {
  let id = event.transaction.hash.toHexString().concat(event.transactionLogIndex.toString())
  let entity = WithdrewEntity.load(id)
  if (entity == null) {
    entity = new WithdrewEntity(id)
  }

  entity.transferId = event.params.transferId
  entity.recipient = event.params.recipient.toHexString()
  entity.amount = event.params.amount
  entity.transferNonce = event.params.transferNonce

  createBlockEntityIfNotExists(event.params._event)
  createTransactionEntityIfNotExists(event.params._event)
  createTokenEntityIfNotExists(TOKEN_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_DECIMALS)
  entity.block = event.params._event.block.hash.toHexString()
  entity.transaction = event.params._event.transaction.hash.toHexString()
  entity.tokenEntity = TOKEN_ADDRESS

  // legacy
  entity.transactionHash = event.params._event.transaction.hash.toHexString()
  entity.transactionIndex = event.params._event.transaction.index
  entity.timestamp = event.params._event.block.timestamp
  entity.blockNumber = event.params._event.block.number
  entity.contractAddress = event.params._event.address.toHexString()
  entity.from = event.params._event.transaction.from.toHexString()
  entity.token = TOKEN_SYMBOL

  entity.save()
}

