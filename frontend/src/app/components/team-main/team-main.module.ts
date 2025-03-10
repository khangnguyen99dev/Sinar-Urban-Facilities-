import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMainComponent } from './team-main.component';

@NgModule({
  imports: [
    CommonModule,
    TeamMainComponent
  ],
  exports: [TeamMainComponent]
})
export class TeamMainModule { }
