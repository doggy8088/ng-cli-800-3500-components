import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3152Component } from './page3152.component';

@NgModule({
  declarations: [Page3152Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3152Component }])],
  exports: [Page3152Component]
})
export class Page3152Module {}
