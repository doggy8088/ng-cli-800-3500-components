import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0766Component } from './page0766.component';

@NgModule({
  declarations: [Page0766Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0766Component }])],
  exports: [Page0766Component]
})
export class Page0766Module {}
