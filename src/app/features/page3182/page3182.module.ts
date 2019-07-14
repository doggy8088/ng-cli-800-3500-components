import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3182Component } from './page3182.component';

@NgModule({
  declarations: [Page3182Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3182Component }])],
  exports: [Page3182Component]
})
export class Page3182Module {}
