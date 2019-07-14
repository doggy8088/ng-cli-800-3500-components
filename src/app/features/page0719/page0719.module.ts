import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0719Component } from './page0719.component';

@NgModule({
  declarations: [Page0719Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0719Component }])],
  exports: [Page0719Component]
})
export class Page0719Module {}
