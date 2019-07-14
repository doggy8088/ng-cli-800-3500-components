import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2255Component } from './page2255.component';

@NgModule({
  declarations: [Page2255Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2255Component }])],
  exports: [Page2255Component]
})
export class Page2255Module {}
