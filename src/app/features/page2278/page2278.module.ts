import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2278Component } from './page2278.component';

@NgModule({
  declarations: [Page2278Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2278Component }])],
  exports: [Page2278Component]
})
export class Page2278Module {}
