import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2051Component } from './page2051.component';

@NgModule({
  declarations: [Page2051Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2051Component }])],
  exports: [Page2051Component]
})
export class Page2051Module {}
