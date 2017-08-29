import {Injectable } from '@angular/core';

@Injectable()
export class DataService{
    users:string[];

    constructor(){
        this.users = ['Eric', 'Ana', 'Mark', 'Beth'];
    }

    getUsers(){
        return this.users;
    }
}