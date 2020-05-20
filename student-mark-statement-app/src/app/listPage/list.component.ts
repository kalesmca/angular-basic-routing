import { Component, OnInit } from "@angular/core";
import { ProfileService } from '../common/services/profile.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: "show-all",
    templateUrl: "./list.component.html",
})

export class ShowAll {
    profileList: any[] = [];
    constructor(private profileService: ProfileService, public route: ActivatedRoute, public router: Router) {
        console.log("Show all calling");
        console.log('State ::', localStorage.getItem('state'));
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('param');
        this.profileList = this.profileService.profileData;
        console.log("list ::", this.profileList);
        this.route.queryParams.subscribe(params => {
            console.log('param ::', params);
          });
          
          this.route.params.subscribe((param)=>{
              console.log('param change ::',param);
              console.log('State subs ::', localStorage.getItem('state'));

          });
        }

    


}