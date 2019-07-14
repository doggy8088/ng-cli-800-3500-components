import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1690Component } from './page1690.component';

@NgModule({
  declarations: [Page1690Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1690Component }])],
  exports: [Page1690Component]
})
export class Page1690Module {}
