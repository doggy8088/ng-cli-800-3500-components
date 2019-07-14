import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1432Component } from './page1432.component';

@NgModule({
  declarations: [Page1432Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1432Component }])],
  exports: [Page1432Component]
})
export class Page1432Module {}
