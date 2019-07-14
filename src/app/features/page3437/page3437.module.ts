import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3437Component } from './page3437.component';

@NgModule({
  declarations: [Page3437Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3437Component }])],
  exports: [Page3437Component]
})
export class Page3437Module {}
