import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0705Component } from './page0705.component';

@NgModule({
  declarations: [Page0705Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0705Component }])],
  exports: [Page0705Component]
})
export class Page0705Module {}
