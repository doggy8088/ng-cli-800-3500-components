import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3428Component } from './page3428.component';

@NgModule({
  declarations: [Page3428Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3428Component }])],
  exports: [Page3428Component]
})
export class Page3428Module {}
