import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1721Component } from './page1721.component';

@NgModule({
  declarations: [Page1721Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1721Component }])],
  exports: [Page1721Component]
})
export class Page1721Module {}
