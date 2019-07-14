import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2030Component } from './page2030.component';

@NgModule({
  declarations: [Page2030Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2030Component }])],
  exports: [Page2030Component]
})
export class Page2030Module {}
