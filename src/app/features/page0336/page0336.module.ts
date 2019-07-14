import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0336Component } from './page0336.component';

@NgModule({
  declarations: [Page0336Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0336Component }])],
  exports: [Page0336Component]
})
export class Page0336Module {}
