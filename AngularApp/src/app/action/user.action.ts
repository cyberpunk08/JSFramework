import { User } from '../model/user.model';

export class LoadServerData {
    static readonly type = '[User] loadServerData'

    constructor(public serverData : User[]){}
}