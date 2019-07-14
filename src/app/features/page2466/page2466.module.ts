import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2466Component } from './page2466.component';

@NgModule({
  declarations: [Page2466Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2466Component }])],
  exports: [Page2466Component]
})
export class Page2466Module {}
