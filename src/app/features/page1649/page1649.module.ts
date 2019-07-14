import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1649Component } from './page1649.component';

@NgModule({
  declarations: [Page1649Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1649Component }])],
  exports: [Page1649Component]
})
export class Page1649Module {}
