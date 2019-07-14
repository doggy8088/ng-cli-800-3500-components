import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2007Component } from './page2007.component';

@NgModule({
  declarations: [Page2007Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2007Component }])],
  exports: [Page2007Component]
})
export class Page2007Module {}
