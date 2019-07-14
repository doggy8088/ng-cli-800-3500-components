import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2543Component } from './page2543.component';

@NgModule({
  declarations: [Page2543Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2543Component }])],
  exports: [Page2543Component]
})
export class Page2543Module {}
