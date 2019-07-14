import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1735Component } from './page1735.component';

@NgModule({
  declarations: [Page1735Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1735Component }])],
  exports: [Page1735Component]
})
export class Page1735Module {}
