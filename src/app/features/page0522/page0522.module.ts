import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0522Component } from './page0522.component';

@NgModule({
  declarations: [Page0522Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0522Component }])],
  exports: [Page0522Component]
})
export class Page0522Module {}
