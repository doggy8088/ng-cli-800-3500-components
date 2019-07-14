import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1351Component } from './page1351.component';

@NgModule({
  declarations: [Page1351Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1351Component }])],
  exports: [Page1351Component]
})
export class Page1351Module {}
