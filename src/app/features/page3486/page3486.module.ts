import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3486Component } from './page3486.component';

@NgModule({
  declarations: [Page3486Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3486Component }])],
  exports: [Page3486Component]
})
export class Page3486Module {}
