import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0324Component } from './page0324.component';

@NgModule({
  declarations: [Page0324Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0324Component }])],
  exports: [Page0324Component]
})
export class Page0324Module {}
