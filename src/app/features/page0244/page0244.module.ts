import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0244Component } from './page0244.component';

@NgModule({
  declarations: [Page0244Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0244Component }])],
  exports: [Page0244Component]
})
export class Page0244Module {}
