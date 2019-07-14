import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2049Component } from './page2049.component';

@NgModule({
  declarations: [Page2049Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2049Component }])],
  exports: [Page2049Component]
})
export class Page2049Module {}
