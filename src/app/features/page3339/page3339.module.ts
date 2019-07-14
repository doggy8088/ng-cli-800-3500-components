import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3339Component } from './page3339.component';

@NgModule({
  declarations: [Page3339Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3339Component }])],
  exports: [Page3339Component]
})
export class Page3339Module {}
