import { Component } from '@angular/core';

@Component({
    "selector": "create-student",
    "templateUrl": "./create.component.html"
})

export class CreateStudent {
    constructor() {
        console.log("create constructor calling");
    }
    sName: string = "";

}