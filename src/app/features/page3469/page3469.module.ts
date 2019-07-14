import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3469Component } from './page3469.component';

@NgModule({
  declarations: [Page3469Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3469Component }])],
  exports: [Page3469Component]
})
export class Page3469Module {}
