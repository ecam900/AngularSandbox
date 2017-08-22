import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        <p> My birthday is {{ birthday | date }}</p>
        <p> My birthday is {{ birthday | date:"MM-dd-yyyy" }}</p>
        <hr/>
        <p> My birthday year is is {{ birthday | date:"yyyy" }}</p>
        <hr/>
        <p>Your total is {{ total | currency:"USD":"1" }}</p>
    `

    /* Pipes are like filters. They make things look way better. They can also take parameters; example above */
})

export class SandboxComponent{
    birthday = new Date(1990, 10, 4);
    total = 500;
}