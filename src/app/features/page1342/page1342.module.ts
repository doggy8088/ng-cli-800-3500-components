import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1342Component } from './page1342.component';

@NgModule({
  declarations: [Page1342Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1342Component }])],
  exports: [Page1342Component]
})
export class Page1342Module {}
