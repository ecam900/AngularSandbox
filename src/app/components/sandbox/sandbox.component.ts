import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector:'sandbox',
    template:`
    <h1>Hello world</h1>
    <div class="container">
        <form (submit)="onSubmit(isEdit)">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
                <label>Phone</label>
                <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone">
                <label>Email</label>
                <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
            </div>
            <input type="submit" class="btn btn-success" value="Submit">
        </form>
        <hr>
        <div *ngFor="let user of users">
            <div class="well">
                <ul class="list-group">
                    <li class="list-group-item"><strong>Name</strong>: {{user.name }}</li>
                    <li class="list-group-item"><strong>Phone</strong>: {{user.phone }}</li>
                    <li class="list-group-item"><strong>Email</strong>: {{user.email }}</li>
                </ul>
                <br>
                <button class="btn btn-primary btn-sm" (click)="onEditClick(user)">Edit</button>
                <button class="btn btn-danger btn-sm" (click)="onDeleteClick(user.id)">Delete</button>
                <br>
                <br>
            </div>
        </div>
    </div>
    `
})

export class SandboxComponent{
    users:any[];
    user = {
        id:'',
        name:'',
        email:'',
        phone:''
    }
    isEdit:boolean = false;

    constructor(public dataService:DataService)
    {
        this.dataService.getUsers().subscribe(users => {
            //console.log(users);
            this.users = users;
        });
    }

    onSubmit(isEdit){
        if(isEdit){
            this.dataService.updateUser(this.user).subscribe(user => {
                for(let i = 0; i < this.users.length; i++){
                    if(this.users[i].id == this.user.id){
                       this.users.splice(i,1);
                    }
                }
                this.users.unshift(this.user);
            })
        } else {
            this.dataService.addUser(this.user).subscribe(user => {
                console.log(user);
                this.users.unshift(user);
            });
        }
    }
    onDeleteClick(id){
        this.dataService.deleteUser(id).subscribe(res => {
             for(let i = 0; i < this.users.length; i++){
                 if(this.users[i].id == id){
                    this.users.splice(i,1);
                 }
             }
        });
    }

    onEditClick(user){
        this.isEdit = true;
        this.user = user;


    }

}