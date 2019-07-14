import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1162Component } from './page1162.component';

@NgModule({
  declarations: [Page1162Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1162Component }])],
  exports: [Page1162Component]
})
export class Page1162Module {}
