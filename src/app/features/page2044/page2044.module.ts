import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2044Component } from './page2044.component';

@NgModule({
  declarations: [Page2044Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2044Component }])],
  exports: [Page2044Component]
})
export class Page2044Module {}
