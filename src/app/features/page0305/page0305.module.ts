import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0305Component } from './page0305.component';

@NgModule({
  declarations: [Page0305Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0305Component }])],
  exports: [Page0305Component]
})
export class Page0305Module {}
