import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1106Component } from './page1106.component';

@NgModule({
  declarations: [Page1106Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1106Component }])],
  exports: [Page1106Component]
})
export class Page1106Module {}
