import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0778Component } from './page0778.component';

@NgModule({
  declarations: [Page0778Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0778Component }])],
  exports: [Page0778Component]
})
export class Page0778Module {}
