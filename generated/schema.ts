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
}
