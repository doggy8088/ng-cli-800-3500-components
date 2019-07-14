import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2054Component } from './page2054.component';

@NgModule({
  declarations: [Page2054Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2054Component }])],
  exports: [Page2054Component]
})
export class Page2054Module {}
