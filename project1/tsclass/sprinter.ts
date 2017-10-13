import { User } from "./user"

export class Sprinter extends User {

    constructor(name: string) {
        super(name)
    }

    //overwrite method
    public speed(velocity: number): void {
        console.log(`'I am the fast one...'`)
        super.speed(velocity)
    }
}