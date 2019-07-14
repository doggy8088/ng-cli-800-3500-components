import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0845Component } from './page0845.component';

@NgModule({
  declarations: [Page0845Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0845Component }])],
  exports: [Page0845Component]
})
export class Page0845Module {}
