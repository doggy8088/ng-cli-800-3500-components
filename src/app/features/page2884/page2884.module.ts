import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2884Component } from './page2884.component';

@NgModule({
  declarations: [Page2884Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2884Component }])],
  exports: [Page2884Component]
})
export class Page2884Module {}
