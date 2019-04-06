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
  addedToDolist:any[]=[];
  temptodo:any="";
  todoPage = NewactivityPage;
  constructor(public navCtrl: NavController,public navParam:NavParams, public storage:Storage) {
    this.storage.get('todoDetails').then(
      (val)=>{
        this.addedToDolist=val;
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
  this.addedToDolist=val;
  });
}

goToAddTodo():void{
  this.navCtrl.push(NewactivityPage);
}
removeItem(todo):void{
  let index = this.addedToDolist.indexOf(todo);
  if(index>-1){
    this.addedToDolist.splice(index,1);
    this.storage.set('todoDetails',this.addedToDolist);
  }
}

}
