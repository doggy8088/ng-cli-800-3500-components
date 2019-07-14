import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3045Component } from './page3045.component';

@NgModule({
  declarations: [Page3045Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3045Component }])],
  exports: [Page3045Component]
})
export class Page3045Module {}
