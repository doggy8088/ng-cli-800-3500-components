import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2402Component } from './page2402.component';

@NgModule({
  declarations: [Page2402Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2402Component }])],
  exports: [Page2402Component]
})
export class Page2402Module {}
