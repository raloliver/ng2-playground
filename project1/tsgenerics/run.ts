import { Data } from "./data"
import { User } from "./../tsclass/user"
import { Sprinter } from "./../tsclass/sprinter"

//properties
let data: Data<User> = new Data<User>()
let user: User = new User('Antonio')
let sprinter: Sprinter = new Sprinter('Usain Bolt')

//methods
data.insert(user)
data.insert(sprinter) //aqui funciona pq "sprinter" extends "user"
