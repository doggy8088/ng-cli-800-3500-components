import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1522Component } from './page1522.component';

@NgModule({
  declarations: [Page1522Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1522Component }])],
  exports: [Page1522Component]
})
export class Page1522Module {}
