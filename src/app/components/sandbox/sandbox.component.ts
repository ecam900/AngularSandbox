import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        <h1>Hello world!</h1>
        <button id="btn" (mousedown)="fireEvent($event,'Hello')">Click me!</button>
    `
})

export class SandboxComponent{
    fireEvent(e, greeting){
        //console.log('Button Clicked!');
        //console.log(greeting);
        console.log(e.target.id);
    }
}