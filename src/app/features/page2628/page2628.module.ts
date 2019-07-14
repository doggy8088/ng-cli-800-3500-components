import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2628Component } from './page2628.component';

@NgModule({
  declarations: [Page2628Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2628Component }])],
  exports: [Page2628Component]
})
export class Page2628Module {}
