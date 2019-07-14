import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1153Component } from './page1153.component';

@NgModule({
  declarations: [Page1153Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1153Component }])],
  exports: [Page1153Component]
})
export class Page1153Module {}
