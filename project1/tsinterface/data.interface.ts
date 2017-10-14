export interface DataInterface {
    //properties
    table: string

    //methods
    insert(object: any): boolean //o que o método recebe e o ele retorna?
    update(object: any): boolean
    delete(id: number): any
    find(id: number): any
    findAll(): [any]

}