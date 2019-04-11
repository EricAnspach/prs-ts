import { User } from './user.class';

let u1: User = new User (1, "SBlessing", "asdf", "Sean", "Blessing", "513-123-4567", "sean@max.com", true, false);
let u2: User = new User (2, "EAnspach", "asdf", "Eric", "Anspach", "513-123-4567", "eric@max.com", true, true);
let u3: User = new User (3, "DBartick", "asdf", "Denise", "Bartick", "513-123-4567", "denise@max.com", false, false);

let uArray: User[] = [u1, u2, u3];

for(let u of uArray) {
    console.log(u.about());
}