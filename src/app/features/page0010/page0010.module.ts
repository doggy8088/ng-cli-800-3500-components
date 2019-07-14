import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0010Component } from './page0010.component';

@NgModule({
  declarations: [Page0010Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0010Component }])],
  exports: [Page0010Component]
})
export class Page0010Module {}
