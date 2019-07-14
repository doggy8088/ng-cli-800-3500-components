import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0016Component } from './page0016.component';

@NgModule({
  declarations: [Page0016Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0016Component }])],
  exports: [Page0016Component]
})
export class Page0016Module {}
