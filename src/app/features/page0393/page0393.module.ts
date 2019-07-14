import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0393Component } from './page0393.component';

@NgModule({
  declarations: [Page0393Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0393Component }])],
  exports: [Page0393Component]
})
export class Page0393Module {}
