import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2224Component } from './page2224.component';

@NgModule({
  declarations: [Page2224Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2224Component }])],
  exports: [Page2224Component]
})
export class Page2224Module {}
