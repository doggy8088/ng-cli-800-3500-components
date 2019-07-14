import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2814Component } from './page2814.component';

@NgModule({
  declarations: [Page2814Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2814Component }])],
  exports: [Page2814Component]
})
export class Page2814Module {}
