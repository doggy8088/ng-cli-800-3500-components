import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2163Component } from './page2163.component';

@NgModule({
  declarations: [Page2163Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2163Component }])],
  exports: [Page2163Component]
})
export class Page2163Module {}
