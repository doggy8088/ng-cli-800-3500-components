import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3161Component } from './page3161.component';

@NgModule({
  declarations: [Page3161Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3161Component }])],
  exports: [Page3161Component]
})
export class Page3161Module {}
