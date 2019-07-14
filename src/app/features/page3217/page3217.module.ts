import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3217Component } from './page3217.component';

@NgModule({
  declarations: [Page3217Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3217Component }])],
  exports: [Page3217Component]
})
export class Page3217Module {}
