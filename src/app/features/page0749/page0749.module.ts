import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0749Component } from './page0749.component';

@NgModule({
  declarations: [Page0749Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0749Component }])],
  exports: [Page0749Component]
})
export class Page0749Module {}
