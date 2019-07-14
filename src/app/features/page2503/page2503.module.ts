import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2503Component } from './page2503.component';

@NgModule({
  declarations: [Page2503Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2503Component }])],
  exports: [Page2503Component]
})
export class Page2503Module {}
