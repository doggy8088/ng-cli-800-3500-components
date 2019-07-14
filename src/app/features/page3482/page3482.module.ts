import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3482Component } from './page3482.component';

@NgModule({
  declarations: [Page3482Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3482Component }])],
  exports: [Page3482Component]
})
export class Page3482Module {}
