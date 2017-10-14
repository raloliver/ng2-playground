import { DataInterface } from "./data.interface"
import { UserData } from "./user.data"
import { User } from "./../tsclass/user"

//properties
let data: DataInterface = new UserData()
let user: User = new User('João da Silva')

//methods
data.insert(user)