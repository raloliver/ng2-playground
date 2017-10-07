export class Asteroid {
    id: number = 0;
    date: string = '';
    name: string = '';
    velocity: number = 0;
    hazardous: boolean = false;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}
