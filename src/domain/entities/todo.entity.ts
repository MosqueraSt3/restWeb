export class TodoEntity {
    constructor(
        public id: number,
        public text: number,
        public completedAt?: Date|null
    ) {}

    get isCompleted() {
        return !!this.completedAt;
    }

}