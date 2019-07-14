import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3255Component } from './page3255.component';

@NgModule({
  declarations: [Page3255Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3255Component }])],
  exports: [Page3255Component]
})
export class Page3255Module {}
