import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0850Component } from './page0850.component';

@NgModule({
  declarations: [Page0850Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0850Component }])],
  exports: [Page0850Component]
})
export class Page0850Module {}
