import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1897Component } from './page1897.component';

@NgModule({
  declarations: [Page1897Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1897Component }])],
  exports: [Page1897Component]
})
export class Page1897Module {}
