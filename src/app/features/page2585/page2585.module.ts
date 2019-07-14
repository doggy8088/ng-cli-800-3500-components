import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2585Component } from './page2585.component';

@NgModule({
  declarations: [Page2585Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2585Component }])],
  exports: [Page2585Component]
})
export class Page2585Module {}
