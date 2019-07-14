import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0580Component } from './page0580.component';

@NgModule({
  declarations: [Page0580Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0580Component }])],
  exports: [Page0580Component]
})
export class Page0580Module {}
