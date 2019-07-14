import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2371Component } from './page2371.component';

@NgModule({
  declarations: [Page2371Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2371Component }])],
  exports: [Page2371Component]
})
export class Page2371Module {}
