import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3476Component } from './page3476.component';

@NgModule({
  declarations: [Page3476Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3476Component }])],
  exports: [Page3476Component]
})
export class Page3476Module {}
