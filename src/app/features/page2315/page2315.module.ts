import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2315Component } from './page2315.component';

@NgModule({
  declarations: [Page2315Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2315Component }])],
  exports: [Page2315Component]
})
export class Page2315Module {}
