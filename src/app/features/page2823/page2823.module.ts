import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2823Component } from './page2823.component';

@NgModule({
  declarations: [Page2823Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2823Component }])],
  exports: [Page2823Component]
})
export class Page2823Module {}
