import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        <h1>Hello 
        <!--
            <span *ngIf="showName">{{name}}</span>
            <span *ngIf="!showName">World</span>
            -->
            <span *ngIf="showName; else noName">{{name}}</span>
            <ng-template #noName>World</ng-template>

            <p>Hello {{ showName ? name : 'World' }}</p>
            
        </h1>
        
        `
})

export class SandboxComponent{
    name:string = 'Eric';
    showName:boolean = false;
}