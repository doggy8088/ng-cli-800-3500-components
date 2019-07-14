import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3402Component } from './page3402.component';

@NgModule({
  declarations: [Page3402Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3402Component }])],
  exports: [Page3402Component]
})
export class Page3402Module {}
