import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1493Component } from './page1493.component';

@NgModule({
  declarations: [Page1493Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1493Component }])],
  exports: [Page1493Component]
})
export class Page1493Module {}
