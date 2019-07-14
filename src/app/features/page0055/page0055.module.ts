import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0055Component } from './page0055.component';

@NgModule({
  declarations: [Page0055Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0055Component }])],
  exports: [Page0055Component]
})
export class Page0055Module {}
