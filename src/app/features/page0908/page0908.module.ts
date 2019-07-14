import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0908Component } from './page0908.component';

@NgModule({
  declarations: [Page0908Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0908Component }])],
  exports: [Page0908Component]
})
export class Page0908Module {}
