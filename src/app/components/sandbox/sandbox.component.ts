import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        <h1>Changing properties with Events</h1>
        <button (click)="changeValue()">Change Value!</button>
        <div *ngIf="value">
            <h1>{{ text }}</h1>
        </div>
    `
})

export class SandboxComponent{
    
    text:string = 'Hello!';
    value:boolean = true;
    
    changeValue(){
        //this.value = false;
        this.value = !this.value;
        //The above just toggles it :)
    }
}