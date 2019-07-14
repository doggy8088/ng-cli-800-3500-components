import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0789Component } from './page0789.component';

@NgModule({
  declarations: [Page0789Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0789Component }])],
  exports: [Page0789Component]
})
export class Page0789Module {}
