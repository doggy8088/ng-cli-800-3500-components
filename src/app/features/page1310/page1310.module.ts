import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1310Component } from './page1310.component';

@NgModule({
  declarations: [Page1310Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1310Component }])],
  exports: [Page1310Component]
})
export class Page1310Module {}
