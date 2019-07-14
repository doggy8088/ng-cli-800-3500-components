import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3474Component } from './page3474.component';

@NgModule({
  declarations: [Page3474Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3474Component }])],
  exports: [Page3474Component]
})
export class Page3474Module {}
