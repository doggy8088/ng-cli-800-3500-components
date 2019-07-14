import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0610Component } from './page0610.component';

@NgModule({
  declarations: [Page0610Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0610Component }])],
  exports: [Page0610Component]
})
export class Page0610Module {}
