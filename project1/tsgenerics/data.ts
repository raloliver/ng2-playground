import { DataInterface } from "./data.interface"

export class Data<Type> implements DataInterface<Type> {
    //properties
    table: string = ''

    //methods
    insert(object: Type): boolean {
        console.log('run boy, run...')     
        return true
    }

    update(object: Type): boolean {
        return true
    }

    delete(id: number): Type {
        return null
    }

    find(id: number): Type {
        return null
    }

    findAll(): [Type] { //aqui também pode usar Array<Type>
        return [null]
    }

}