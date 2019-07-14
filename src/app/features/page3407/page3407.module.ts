import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3407Component } from './page3407.component';

@NgModule({
  declarations: [Page3407Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3407Component }])],
  exports: [Page3407Component]
})
export class Page3407Module {}
