import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3349Component } from './page3349.component';

@NgModule({
  declarations: [Page3349Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3349Component }])],
  exports: [Page3349Component]
})
export class Page3349Module {}
