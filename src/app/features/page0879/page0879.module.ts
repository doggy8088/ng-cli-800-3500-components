import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0879Component } from './page0879.component';

@NgModule({
  declarations: [Page0879Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0879Component }])],
  exports: [Page0879Component]
})
export class Page0879Module {}
