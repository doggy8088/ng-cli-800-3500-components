import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2029Component } from './page2029.component';

@NgModule({
  declarations: [Page2029Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2029Component }])],
  exports: [Page2029Component]
})
export class Page2029Module {}
