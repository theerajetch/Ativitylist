import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GitPage } from './git';

@NgModule({
  declarations: [
    GitPage,
  ],
  imports: [
    IonicPageModule.forChild(GitPage),
  ],
})
export class GitPageModule {}
