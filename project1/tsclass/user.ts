export class User {

    //properties
    private name: string

    //functions
    constructor(name: string) {
        this.name = name
    }

    //method
    public speed(velocity: number): void {
        console.log(`${this.name} alcançou ${velocity}km/h`)
    }
}