import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2486Component } from './page2486.component';

@NgModule({
  declarations: [Page2486Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2486Component }])],
  exports: [Page2486Component]
})
export class Page2486Module {}
