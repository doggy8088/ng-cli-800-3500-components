import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2065Component } from './page2065.component';

@NgModule({
  declarations: [Page2065Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2065Component }])],
  exports: [Page2065Component]
})
export class Page2065Module {}
