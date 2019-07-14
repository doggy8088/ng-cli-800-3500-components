import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3275Component } from './page3275.component';

@NgModule({
  declarations: [Page3275Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3275Component }])],
  exports: [Page3275Component]
})
export class Page3275Module {}
