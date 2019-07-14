import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1540Component } from './page1540.component';

@NgModule({
  declarations: [Page1540Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1540Component }])],
  exports: [Page1540Component]
})
export class Page1540Module {}
