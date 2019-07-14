import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3346Component } from './page3346.component';

@NgModule({
  declarations: [Page3346Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3346Component }])],
  exports: [Page3346Component]
})
export class Page3346Module {}
