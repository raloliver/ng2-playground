export class Asteroid {
    userId: number = 0;
    id: number = 0;
    title: string = '';
    completed: boolean = false;    

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
