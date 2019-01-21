import { Component } from "@angular/core";

@Component({
    selector: "show-all",
    templateUrl: "./list.component.html"
})

export class ShowAll {
    constructor() {
        console.log("Show all calling");
    }
}