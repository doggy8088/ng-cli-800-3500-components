import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1242Component } from './page1242.component';

@NgModule({
  declarations: [Page1242Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1242Component }])],
  exports: [Page1242Component]
})
export class Page1242Module {}
