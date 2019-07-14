import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3308Component } from './page3308.component';

@NgModule({
  declarations: [Page3308Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3308Component }])],
  exports: [Page3308Component]
})
export class Page3308Module {}
