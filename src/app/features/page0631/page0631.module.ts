import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0631Component } from './page0631.component';

@NgModule({
  declarations: [Page0631Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0631Component }])],
  exports: [Page0631Component]
})
export class Page0631Module {}
