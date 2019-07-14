import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2708Component } from './page2708.component';

@NgModule({
  declarations: [Page2708Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2708Component }])],
  exports: [Page2708Component]
})
export class Page2708Module {}
