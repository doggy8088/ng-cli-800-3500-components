import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2222Component } from './page2222.component';

@NgModule({
  declarations: [Page2222Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2222Component }])],
  exports: [Page2222Component]
})
export class Page2222Module {}
