import { Model } from '@snapshot-labs/checkpoint';

export class Data extends Model {
  static tableName = 'data';

  constructor(id: string) {
    super(Data.tableName);

    this.initialSet('id', id);
    this.initialSet('nb_block', 0);
    this.initialSet('starknet_block', 0);
    this.initialSet('eventCount', 0);
    this.initialSet('goerli_block', 0);
    this.initialSet('shrgn_alice_block', 0);
    this.initialSet('shrgn_bob_block', 0);
    this.initialSet('shrgn_dave_block', 0);
    this.initialSet('shrgn_ferdie_block', 0);
  }

  static async loadEntity(id: string): Promise<Data | null> {
    const entity = await super.loadEntity(Data.tableName, id);
    if (!entity) return null;

    const model = new Data(id);
    model.setExists();

    for (const key in entity) {
      model.set(key, entity[key]);
    }

    return model;
  }

  get id(): string {
    return this.get('id');
  }

  set id(value: string) {
    this.set('id', value);
  }

  get nb_block(): number {
    return this.get('nb_block');
  }

  set nb_block(value: number) {
    this.set('nb_block', value);
  }

  get starknet_block(): number {
    return this.get('starknet_block');
  }

  set starknet_block(value: number) {
    this.set('starknet_block', value);
  }

  get eventCount(): number {
    return this.get('eventCount');
  }

  set eventCount(value: number) {
    this.set('eventCount', value);
  }

  get goerli_block(): number {
    return this.get('goerli_block');
  }

  set goerli_block(value: number) {
    this.set('goerli_block', value);
  }

  get shrgn_alice_block(): number {
    return this.get('shrgn_alice_block');
  }

  set shrgn_alice_block(value: number) {
    this.set('shrgn_alice_block', value);
  }

  get shrgn_bob_block(): number {
    return this.get('shrgn_bob_block');
  }

  set shrgn_bob_block(value: number) {
    this.set('shrgn_bob_block', value);
  }

  get shrgn_dave_block(): number {
    return this.get('shrgn_dave_block');
  }

  set shrgn_dave_block(value: number) {
    this.set('shrgn_dave_block', value);
  }

  get shrgn_ferdie_block(): number {
    return this.get('shrgn_ferdie_block');
  }

  set shrgn_ferdie_block(value: number) {
    this.set('shrgn_ferdie_block', value);
  }
}
