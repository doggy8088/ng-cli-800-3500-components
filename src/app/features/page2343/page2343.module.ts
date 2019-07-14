import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2343Component } from './page2343.component';

@NgModule({
  declarations: [Page2343Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2343Component }])],
  exports: [Page2343Component]
})
export class Page2343Module {}
