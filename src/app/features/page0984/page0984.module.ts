import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0984Component } from './page0984.component';

@NgModule({
  declarations: [Page0984Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0984Component }])],
  exports: [Page0984Component]
})
export class Page0984Module {}
