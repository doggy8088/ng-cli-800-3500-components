import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0518Component } from './page0518.component';

@NgModule({
  declarations: [Page0518Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0518Component }])],
  exports: [Page0518Component]
})
export class Page0518Module {}
