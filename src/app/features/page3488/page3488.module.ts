import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3488Component } from './page3488.component';

@NgModule({
  declarations: [Page3488Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3488Component }])],
  exports: [Page3488Component]
})
export class Page3488Module {}
