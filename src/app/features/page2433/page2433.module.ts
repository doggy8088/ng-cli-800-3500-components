import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2433Component } from './page2433.component';

@NgModule({
  declarations: [Page2433Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2433Component }])],
  exports: [Page2433Component]
})
export class Page2433Module {}
