import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2679Component } from './page2679.component';

@NgModule({
  declarations: [Page2679Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2679Component }])],
  exports: [Page2679Component]
})
export class Page2679Module {}
