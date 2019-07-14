import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3409Component } from './page3409.component';

@NgModule({
  declarations: [Page3409Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3409Component }])],
  exports: [Page3409Component]
})
export class Page3409Module {}
