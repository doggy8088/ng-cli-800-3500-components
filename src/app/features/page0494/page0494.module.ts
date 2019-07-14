import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0494Component } from './page0494.component';

@NgModule({
  declarations: [Page0494Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0494Component }])],
  exports: [Page0494Component]
})
export class Page0494Module {}
