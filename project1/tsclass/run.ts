import { User } from './user'
import { Sprinter } from './sprinter'

//properties
let user = new User('Israel')
let sprinter = new Sprinter('Bolt')

//call method
user.speed(13)

//call method overwrite
sprinter.speed(27)