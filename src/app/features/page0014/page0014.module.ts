import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0014Component } from './page0014.component';

@NgModule({
  declarations: [Page0014Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0014Component }])],
  exports: [Page0014Component]
})
export class Page0014Module {}
