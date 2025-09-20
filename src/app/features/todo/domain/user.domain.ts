export type UserId = string;

export class DisplayName {
  private constructor(public readonly value: string) {}
  static create(raw: string): DisplayName {
    const v = (raw ?? '').replace(/\s+/g, ' ').trim();
    if (!v) throw new Error('Display name boş olamaz.');
    if (v.length > 80) throw new Error('Display name 80 karakteri aşamaz.');
    return new DisplayName(v);
  }
}

export class User {
  private constructor(
    private readonly _id: UserId,
    private _displayName: DisplayName
  ) {}

  static create(p: { id: UserId; displayName: string }) {
    return new User(p.id, DisplayName.create(p.displayName));
  }

  static restore(p: { id: UserId; displayName: string }) {
    return new User(p.id, DisplayName.create(p.displayName));
  }

  get id() { return this._id; }
  get displayName() { return this._displayName.value; }

  rename(name: string) { this._displayName = DisplayName.create(name); }

  toPrimitives() { return { id: this._id, displayName: this._displayName.value }; }
}