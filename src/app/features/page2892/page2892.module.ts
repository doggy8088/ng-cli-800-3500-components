import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2892Component } from './page2892.component';

@NgModule({
  declarations: [Page2892Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2892Component }])],
  exports: [Page2892Component]
})
export class Page2892Module {}
