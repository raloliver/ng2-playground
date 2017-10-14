import { DataInterface } from "./data.interface"
import { User } from "./../tsclass/user"

export class UserData implements DataInterface {
    //properties
    table: string = ''

    //methods
    insert(object: User): boolean {
        console.log('run boy, run...')
        object.speed(15)
        return true
    }

    update(object: User): boolean {
        return true
    }

    delete(id: number): User {
        return null
    }

    find(id: number): User {
        return null
    }

    findAll(): [User] {
        return [new User('João')]
    }

}