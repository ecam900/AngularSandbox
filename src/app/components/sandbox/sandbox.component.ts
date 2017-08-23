import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
         <h1>Checking out keyboard events:</h1>
         <input type="text" (keyup)="fireEvent($event)" placeholder="keyup event">
         <input type="text" (keydown)="fireEvent($event)" placeholder="keydown event">
    `
})

export class SandboxComponent{
    fireEvent(e){
        console.log(e.type);
    }
}