import { User } from './User';
import { SSanta } from './SSanta';

export class Souhait{
    id : number;
    description :string;
    personne: User;    
    santa: SSanta;
    ordre : number;

    constructor(){}
}