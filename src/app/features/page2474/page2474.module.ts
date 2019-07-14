import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2474Component } from './page2474.component';

@NgModule({
  declarations: [Page2474Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2474Component }])],
  exports: [Page2474Component]
})
export class Page2474Module {}
