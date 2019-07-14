import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2553Component } from './page2553.component';

@NgModule({
  declarations: [Page2553Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2553Component }])],
  exports: [Page2553Component]
})
export class Page2553Module {}
