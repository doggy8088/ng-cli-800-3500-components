import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2194Component } from './page2194.component';

@NgModule({
  declarations: [Page2194Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2194Component }])],
  exports: [Page2194Component]
})
export class Page2194Module {}
