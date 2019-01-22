import { Injectable} from '@angular/core';
import {Profile} from '../interfaces/profile'
@Injectable()

export class ProfileService{
  constructor(){

  }
  profileData : Profile[]=[];
  setProfileData(data:Profile){
    this.profileData.push(data);
  }
  getProfileData(){
    return this.profileData;
  }

}
