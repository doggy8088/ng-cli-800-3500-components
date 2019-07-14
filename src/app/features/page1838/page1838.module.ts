import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1838Component } from './page1838.component';

@NgModule({
  declarations: [Page1838Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1838Component }])],
  exports: [Page1838Component]
})
export class Page1838Module {}
