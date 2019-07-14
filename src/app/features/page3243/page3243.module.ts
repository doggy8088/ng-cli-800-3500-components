import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3243Component } from './page3243.component';

@NgModule({
  declarations: [Page3243Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3243Component }])],
  exports: [Page3243Component]
})
export class Page3243Module {}
