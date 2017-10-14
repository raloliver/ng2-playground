export interface DataInterface<Type> {
    //properties
    table: string

    //methods
    insert(object: Type): boolean //o que o método recebe e o ele retorna?
    update(object: Type): boolean
    delete(id: number): Type
    find(id: number): Type
    findAll(): [Type] //ou Array<Type>

}