import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1024Component } from './page1024.component';

@NgModule({
  declarations: [Page1024Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1024Component }])],
  exports: [Page1024Component]
})
export class Page1024Module {}
