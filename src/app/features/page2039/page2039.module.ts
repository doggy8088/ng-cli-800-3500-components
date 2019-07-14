import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2039Component } from './page2039.component';

@NgModule({
  declarations: [Page2039Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2039Component }])],
  exports: [Page2039Component]
})
export class Page2039Module {}
