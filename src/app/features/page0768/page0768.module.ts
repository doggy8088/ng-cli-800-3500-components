import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0768Component } from './page0768.component';

@NgModule({
  declarations: [Page0768Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0768Component }])],
  exports: [Page0768Component]
})
export class Page0768Module {}
