import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2880Component } from './page2880.component';

@NgModule({
  declarations: [Page2880Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2880Component }])],
  exports: [Page2880Component]
})
export class Page2880Module {}
