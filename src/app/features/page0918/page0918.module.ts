import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0918Component } from './page0918.component';

@NgModule({
  declarations: [Page0918Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0918Component }])],
  exports: [Page0918Component]
})
export class Page0918Module {}
