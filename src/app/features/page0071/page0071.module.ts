import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0071Component } from './page0071.component';

@NgModule({
  declarations: [Page0071Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0071Component }])],
  exports: [Page0071Component]
})
export class Page0071Module {}
