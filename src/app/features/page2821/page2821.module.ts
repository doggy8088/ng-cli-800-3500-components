import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2821Component } from './page2821.component';

@NgModule({
  declarations: [Page2821Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2821Component }])],
  exports: [Page2821Component]
})
export class Page2821Module {}
