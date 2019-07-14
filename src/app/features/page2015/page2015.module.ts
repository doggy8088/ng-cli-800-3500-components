import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2015Component } from './page2015.component';

@NgModule({
  declarations: [Page2015Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2015Component }])],
  exports: [Page2015Component]
})
export class Page2015Module {}
