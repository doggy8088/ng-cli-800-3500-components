import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1935Component } from './page1935.component';

@NgModule({
  declarations: [Page1935Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1935Component }])],
  exports: [Page1935Component]
})
export class Page1935Module {}
