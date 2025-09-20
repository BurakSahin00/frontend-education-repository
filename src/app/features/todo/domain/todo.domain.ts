export type TaskId = string;
export type UserId = string;
export type CategoryId = string;
export type TaskStatus = 'in_progress' | 'completed';
export type Priority = 'low' | 'medium' | 'high';

export class DomainError extends Error { }

export class Title {
    constructor(public readonly value: string) { }
    static create(raw: string): Title {
        const v = (raw ?? '').replace(/\s+/g, ' ').trim();
        if (!v) throw new DomainError('Title Cannot be empty.');
        //Backend e göre düzenlenebilir
        if (v.length > 120) throw new DomainError('Title cannot exceed 120 characters.');
        return new Title(v);
    }
}

export class DueDate {
    constructor(public readonly value: Date) { }
    static create(date: Date): DueDate {
        const d = new Date(date);
        if (Number.isNaN(d.getTime())) throw new DomainError('Invalid date.');
        if (d.getTime() < Date.now()) throw new DomainError('Due date cannot be in the past.');
        return new DueDate(d);
    }
}

export class Task {

    private _updatedAt: Date;
    private _completedAt?: Date;

    private constructor(
        private readonly _id: TaskId,
        private _title: Title,
        private _status: TaskStatus,
        private _priority: Priority,
        private _createdAt: Date,
        private _categoryId?: CategoryId,
        private _userId?: UserId,
        private _description?: string,
        private _dueDate?: DueDate,
        completedAt?: Date,
        updatedAt?: Date
    ) {
        this._completedAt = completedAt;
        this._updatedAt = updatedAt ?? this._createdAt;
        this.ensureInvariants();
    }

    //Create: Yeni görevlerin oluşturulması için kullanılır.
    static create(p: {
        id: TaskId; title: string; priority: Priority; categoryId?: CategoryId; assigneeId?: UserId;
        description?: string; dueDate?: Date;
    }): Task {
        const createdAt = new Date();
        const title = Title.create(p.title);
        const due = p.dueDate ? DueDate.create(p.dueDate) : undefined;
        return new Task(p.id, title, 'in_progress', p.priority, createdAt, p.categoryId, p.assigneeId, p.description?.trim() || undefined, due);
    }

    //Restore: Görevlerin veritabanından veya başka bir kalıcı depolama alanından geri yüklenmesi için kullanılır.
    static restore(p: {
        id: TaskId; title: string; status: TaskStatus; priority: Priority; createdAt: string | Date; updatedAt: string | Date;
        completedAt?: string | Date; categoryId?: CategoryId; assigneeId?: UserId; description?: string; dueDate?: string | Date;
    }): Task {
        const title = Title.create(p.title);
        const due = p.dueDate ? new DueDate(new Date(p.dueDate)) : undefined;
        return new Task(
            p.id, title, p.status, p.priority, new Date(p.createdAt), p.categoryId, p.assigneeId,
            p.description, due, p.completedAt ? new Date(p.completedAt) : undefined, new Date(p.updatedAt)
        );
    }

    //Getters: Görev bilgilerini almak için kullanılır.
    get id() { return this._id; }
    get title() { return this._title.value; }
    get status() { return this._status; }
    get priority() { return this._priority; }
    get createdAt() { return new Date(this._createdAt); }
    get updatedAt() { return new Date(this._updatedAt); }
    get completedAt() { return this._completedAt ? new Date(this._completedAt) : undefined; }
    get categoryId() { return this._categoryId; }
    get userId() { return this._userId; }
    get description() { return this._description; }
    get dueDate() { return this._dueDate?.value; }

    //Methods: Görev üzerinde değişiklik yapmak için kullanılır.
    rename(newTitle: string) { const t = Title.create(newTitle); if (t === this._title) { this._title = t; this.touch(); } }
    complete() { if (this._status !== 'completed') { this._status = 'completed'; this._completedAt = new Date(); this.touch(); } }
    reopen() { if (this._status !== 'in_progress') { this._status = 'in_progress'; this._completedAt = undefined; this.touch(); } }
    reschedule(date: Date) { this._dueDate = DueDate.create(date); this.touch(); }
    reassign(userId?: UserId) { this._userId = userId; this.touch(); }
    recategorize(categoryId?: CategoryId) { this._categoryId = categoryId; this.touch(); }
    updateDescription(text?: string) { const v = text?.trim() || undefined; if (v !== this._description) { this._description = v; this.touch(); } }

    //toPrimitives: Görev nesnesini basit bir JavaScript nesnesine dönüştürmek için kullanılır.
    toPrimitives() {
        return {
            id: this._id, title: this._title.value, status: this._status,
            createdAt: this._createdAt.toISOString(), updatedAt: this._updatedAt.toISOString(),
            completedAt: this._completedAt?.toISOString(), categoryId: this._categoryId,
            assigneeId: this._userId, description: this._description, dueDate: this._dueDate?.value.toISOString(),
            priority: this._priority
        };
    }

    //touch: Görev güncellendiğinde çağrılır.
    private touch() { this._updatedAt = new Date(); this.ensureInvariants(); }

    //ensureInvariants: Görev nesnesinin tutarlılığını sağlar.
    private ensureInvariants() {
        if (this._status === 'completed' && !this._completedAt) throw new DomainError('If status is completed, completedAt must be set.');
        if (this._status !== 'completed' && this._completedAt) throw new DomainError('If status is not completed, completedAt must not be set.');
    }
}