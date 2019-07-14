import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1918Component } from './page1918.component';

@NgModule({
  declarations: [Page1918Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1918Component }])],
  exports: [Page1918Component]
})
export class Page1918Module {}
