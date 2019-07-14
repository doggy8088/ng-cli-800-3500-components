import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2120Component } from './page2120.component';

@NgModule({
  declarations: [Page2120Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2120Component }])],
  exports: [Page2120Component]
})
export class Page2120Module {}
