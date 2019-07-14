import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2272Component } from './page2272.component';

@NgModule({
  declarations: [Page2272Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2272Component }])],
  exports: [Page2272Component]
})
export class Page2272Module {}
