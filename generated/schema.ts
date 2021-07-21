// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BonderAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BonderAdded entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BonderAdded entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BonderAdded", id.toString(), this);
  }

  static load(id: string): BonderAdded | null {
    return store.get("BonderAdded", id) as BonderAdded | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newBonder(): string {
    let value = this.get("newBonder");
    return value.toString();
  }

  set newBonder(value: string) {
    this.set("newBonder", Value.fromString(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class BonderRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BonderRemoved entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BonderRemoved entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BonderRemoved", id.toString(), this);
  }

  static load(id: string): BonderRemoved | null {
    return store.get("BonderRemoved", id) as BonderRemoved | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousBonder(): string {
    let value = this.get("previousBonder");
    return value.toString();
  }

  set previousBonder(value: string) {
    this.set("previousBonder", Value.fromString(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class ChallengeResolved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ChallengeResolved entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ChallengeResolved entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ChallengeResolved", id.toString(), this);
  }

  static load(id: string): ChallengeResolved | null {
    return store.get("ChallengeResolved", id) as ChallengeResolved | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferRootId(): Bytes {
    let value = this.get("transferRootId");
    return value.toBytes();
  }

  set transferRootId(value: Bytes) {
    this.set("transferRootId", Value.fromBytes(value));
  }

  get rootHash(): Bytes {
    let value = this.get("rootHash");
    return value.toBytes();
  }

  set rootHash(value: Bytes) {
    this.set("rootHash", Value.fromBytes(value));
  }

  get originalAmount(): BigInt {
    let value = this.get("originalAmount");
    return value.toBigInt();
  }

  set originalAmount(value: BigInt) {
    this.set("originalAmount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class MultipleWithdrawalsSettled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save MultipleWithdrawalsSettled entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MultipleWithdrawalsSettled entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MultipleWithdrawalsSettled", id.toString(), this);
  }

  static load(id: string): MultipleWithdrawalsSettled | null {
    return store.get(
      "MultipleWithdrawalsSettled",
      id
    ) as MultipleWithdrawalsSettled | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bonder(): string {
    let value = this.get("bonder");
    return value.toString();
  }

  set bonder(value: string) {
    this.set("bonder", Value.fromString(value));
  }

  get rootHash(): Bytes {
    let value = this.get("rootHash");
    return value.toBytes();
  }

  set rootHash(value: Bytes) {
    this.set("rootHash", Value.fromBytes(value));
  }

  get totalBondsSettled(): BigInt {
    let value = this.get("totalBondsSettled");
    return value.toBigInt();
  }

  set totalBondsSettled(value: BigInt) {
    this.set("totalBondsSettled", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class Stake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stake", id.toString(), this);
  }

  static load(id: string): Stake | null {
    return store.get("Stake", id) as Stake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class TransferBondChallenged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save TransferBondChallenged entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferBondChallenged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferBondChallenged", id.toString(), this);
  }

  static load(id: string): TransferBondChallenged | null {
    return store.get(
      "TransferBondChallenged",
      id
    ) as TransferBondChallenged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferRootId(): Bytes {
    let value = this.get("transferRootId");
    return value.toBytes();
  }

  set transferRootId(value: Bytes) {
    this.set("transferRootId", Value.fromBytes(value));
  }

  get rootHash(): Bytes {
    let value = this.get("rootHash");
    return value.toBytes();
  }

  set rootHash(value: Bytes) {
    this.set("rootHash", Value.fromBytes(value));
  }

  get originalAmount(): BigInt {
    let value = this.get("originalAmount");
    return value.toBigInt();
  }

  set originalAmount(value: BigInt) {
    this.set("originalAmount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class TransferRootBonded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferRootBonded entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferRootBonded entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferRootBonded", id.toString(), this);
  }

  static load(id: string): TransferRootBonded | null {
    return store.get("TransferRootBonded", id) as TransferRootBonded | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get root(): Bytes {
    let value = this.get("root");
    return value.toBytes();
  }

  set root(value: Bytes) {
    this.set("root", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class TransferRootConfirmed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save TransferRootConfirmed entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferRootConfirmed entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferRootConfirmed", id.toString(), this);
  }

  static load(id: string): TransferRootConfirmed | null {
    return store.get(
      "TransferRootConfirmed",
      id
    ) as TransferRootConfirmed | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get originChainId(): BigInt {
    let value = this.get("originChainId");
    return value.toBigInt();
  }

  set originChainId(value: BigInt) {
    this.set("originChainId", Value.fromBigInt(value));
  }

  get destinationChainId(): BigInt {
    let value = this.get("destinationChainId");
    return value.toBigInt();
  }

  set destinationChainId(value: BigInt) {
    this.set("destinationChainId", Value.fromBigInt(value));
  }

  get rootHash(): Bytes {
    let value = this.get("rootHash");
    return value.toBytes();
  }

  set rootHash(value: Bytes) {
    this.set("rootHash", Value.fromBytes(value));
  }

  get totalAmount(): BigInt {
    let value = this.get("totalAmount");
    return value.toBigInt();
  }

  set totalAmount(value: BigInt) {
    this.set("totalAmount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class TransferRootSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferRootSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferRootSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferRootSet", id.toString(), this);
  }

  static load(id: string): TransferRootSet | null {
    return store.get("TransferRootSet", id) as TransferRootSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rootHash(): Bytes {
    let value = this.get("rootHash");
    return value.toBytes();
  }

  set rootHash(value: Bytes) {
    this.set("rootHash", Value.fromBytes(value));
  }

  get totalAmount(): BigInt {
    let value = this.get("totalAmount");
    return value.toBigInt();
  }

  set totalAmount(value: BigInt) {
    this.set("totalAmount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class TransferSentToL2 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferSentToL2 entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferSentToL2 entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferSentToL2", id.toString(), this);
  }

  static load(id: string): TransferSentToL2 | null {
    return store.get("TransferSentToL2", id) as TransferSentToL2 | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get destinationChainId(): BigInt {
    let value = this.get("destinationChainId");
    return value.toBigInt();
  }

  set destinationChainId(value: BigInt) {
    this.set("destinationChainId", Value.fromBigInt(value));
  }

  get recipient(): string {
    let value = this.get("recipient");
    return value.toString();
  }

  set recipient(value: string) {
    this.set("recipient", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get amountOutMin(): BigInt {
    let value = this.get("amountOutMin");
    return value.toBigInt();
  }

  set amountOutMin(value: BigInt) {
    this.set("amountOutMin", Value.fromBigInt(value));
  }

  get deadline(): BigInt {
    let value = this.get("deadline");
    return value.toBigInt();
  }

  set deadline(value: BigInt) {
    this.set("deadline", Value.fromBigInt(value));
  }

  get relayer(): string {
    let value = this.get("relayer");
    return value.toString();
  }

  set relayer(value: string) {
    this.set("relayer", Value.fromString(value));
  }

  get relayerFee(): BigInt {
    let value = this.get("relayerFee");
    return value.toBigInt();
  }

  set relayerFee(value: BigInt) {
    this.set("relayerFee", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class Unstake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Unstake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Unstake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Unstake", id.toString(), this);
  }

  static load(id: string): Unstake | null {
    return store.get("Unstake", id) as Unstake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class WithdrawalBondSettled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save WithdrawalBondSettled entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawalBondSettled entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawalBondSettled", id.toString(), this);
  }

  static load(id: string): WithdrawalBondSettled | null {
    return store.get(
      "WithdrawalBondSettled",
      id
    ) as WithdrawalBondSettled | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bonder(): string {
    let value = this.get("bonder");
    return value.toString();
  }

  set bonder(value: string) {
    this.set("bonder", Value.fromString(value));
  }

  get transferId(): Bytes {
    let value = this.get("transferId");
    return value.toBytes();
  }

  set transferId(value: Bytes) {
    this.set("transferId", Value.fromBytes(value));
  }

  get rootHash(): Bytes {
    let value = this.get("rootHash");
    return value.toBytes();
  }

  set rootHash(value: Bytes) {
    this.set("rootHash", Value.fromBytes(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class WithdrawalBonded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawalBonded entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawalBonded entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawalBonded", id.toString(), this);
  }

  static load(id: string): WithdrawalBonded | null {
    return store.get("WithdrawalBonded", id) as WithdrawalBonded | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferId(): Bytes {
    let value = this.get("transferId");
    return value.toBytes();
  }

  set transferId(value: Bytes) {
    this.set("transferId", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class Withdrew extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdrew entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdrew entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdrew", id.toString(), this);
  }

  static load(id: string): Withdrew | null {
    return store.get("Withdrew", id) as Withdrew | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferId(): Bytes {
    let value = this.get("transferId");
    return value.toBytes();
  }

  set transferId(value: Bytes) {
    this.set("transferId", Value.fromBytes(value));
  }

  get recipient(): string {
    let value = this.get("recipient");
    return value.toString();
  }

  set recipient(value: string) {
    this.set("recipient", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transferNonce(): Bytes {
    let value = this.get("transferNonce");
    return value.toBytes();
  }

  set transferNonce(value: Bytes) {
    this.set("transferNonce", Value.fromBytes(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get transactionIndex(): BigInt {
    let value = this.get("transactionIndex");
    return value.toBigInt();
  }

  set transactionIndex(value: BigInt) {
    this.set("transactionIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}
