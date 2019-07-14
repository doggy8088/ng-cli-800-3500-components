import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3016Component } from './page3016.component';

@NgModule({
  declarations: [Page3016Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3016Component }])],
  exports: [Page3016Component]
})
export class Page3016Module {}
