import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3096Component } from './page3096.component';

@NgModule({
  declarations: [Page3096Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3096Component }])],
  exports: [Page3096Component]
})
export class Page3096Module {}
