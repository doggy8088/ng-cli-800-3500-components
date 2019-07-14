import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2105Component } from './page2105.component';

@NgModule({
  declarations: [Page2105Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2105Component }])],
  exports: [Page2105Component]
})
export class Page2105Module {}
