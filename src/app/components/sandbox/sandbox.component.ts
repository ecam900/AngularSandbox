import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
         <h1>Checking out keyboard events:</h1>
         <input type="text" (keyup)="fireEvent($event)">
    `
})

export class SandboxComponent{
    fireEvent(e){
        console.log(e.type);
    }
}