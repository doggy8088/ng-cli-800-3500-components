import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2032Component } from './page2032.component';

@NgModule({
  declarations: [Page2032Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2032Component }])],
  exports: [Page2032Component]
})
export class Page2032Module {}
