export type CategoryId = string;

export class DomainError extends Error {}

export class CategoryName {
  private constructor(public readonly value: string) {}
  static create(raw: string): CategoryName {
    const v = (raw ?? '').replace(/\s+/g, ' ').trim();
    if (!v) throw new DomainError('Kategori adı boş olamaz.');
    if (v.length > 40) throw new DomainError('Kategori adı 40 karakteri aşamaz.');
    return new CategoryName(v);
  }
}

export class Category {
  private constructor(
    private readonly _id: CategoryId,
    private _name: CategoryName,
    private _color?: string // #RRGGBB
  ) {
    if (this._color && !/^#([0-9a-fA-F]{6})$/.test(this._color))
      throw new DomainError('Renk #RRGGBB formatında olmalı.');
  }

  static create(p: { id: CategoryId; name: string; color?: string }) {
    return new Category(p.id, CategoryName.create(p.name), p.color);
  }

  static restore(p: { id: CategoryId; name: string; color?: string }) {
    return new Category(p.id, CategoryName.create(p.name), p.color);
  }

  get id() { return this._id; }
  get name() { return this._name.value; }
  get color() { return this._color; }

  rename(name: string) { this._name = CategoryName.create(name); }
  recolor(color?: string) {
    if (color && !/^#([0-9a-fA-F]{6})$/.test(color))
      throw new DomainError('Renk #RRGGBB formatında olmalı.');
    this._color = color;
  }

  toPrimitives() { return { id: this._id, name: this._name.value, color: this._color }; }
}