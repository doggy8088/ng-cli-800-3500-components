import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1912Component } from './page1912.component';

@NgModule({
  declarations: [Page1912Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1912Component }])],
  exports: [Page1912Component]
})
export class Page1912Module {}
