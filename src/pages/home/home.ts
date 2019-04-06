import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { NewactivityPage } from '../newactivity/newactivity';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addedtodolist:any[]=[];
  temptodo:any="";
  todoPage = NewactivityPage;
  constructor(public navCtrl: NavController,public navParam:NavParams, public storage:Storage) {
    this.storage.get('todoDetails').then(
      (val)=>{
        this.addedtodolist=val;
    });

  }
  testObj = {
    "title":"",
    "description":""

  };
ngOnInit():void{
  this.storage.get('todoDetails').then
  ((val)=>{

  });
}

ionViewDidEnter(){
  this.storage.get('todoDetails').then
  ((val)=>{
  this.addedtodolist=val;
  });
}

goToAddTodo():void{
  this.navCtrl.push(NewactivityPage);
}
removeItem(todo):void{
  let index = this.addedtodolist.indexOf(todo);
  if(index>-1){
    this.addedtodolist.splice(index,1);
    this.storage.set('todoDetails',this.addedtodolist);
  }
}

}
