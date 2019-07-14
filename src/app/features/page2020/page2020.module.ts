import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2020Component } from './page2020.component';

@NgModule({
  declarations: [Page2020Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2020Component }])],
  exports: [Page2020Component]
})
export class Page2020Module {}
