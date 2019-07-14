import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1506Component } from './page1506.component';

@NgModule({
  declarations: [Page1506Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1506Component }])],
  exports: [Page1506Component]
})
export class Page1506Module {}
