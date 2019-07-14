import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2331Component } from './page2331.component';

@NgModule({
  declarations: [Page2331Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2331Component }])],
  exports: [Page2331Component]
})
export class Page2331Module {}
