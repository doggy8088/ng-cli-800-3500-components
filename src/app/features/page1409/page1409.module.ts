import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1409Component } from './page1409.component';

@NgModule({
  declarations: [Page1409Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1409Component }])],
  exports: [Page1409Component]
})
export class Page1409Module {}
