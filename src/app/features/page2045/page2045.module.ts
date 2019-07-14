import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2045Component } from './page2045.component';

@NgModule({
  declarations: [Page2045Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2045Component }])],
  exports: [Page2045Component]
})
export class Page2045Module {}
