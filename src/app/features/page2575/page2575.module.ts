import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2575Component } from './page2575.component';

@NgModule({
  declarations: [Page2575Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2575Component }])],
  exports: [Page2575Component]
})
export class Page2575Module {}
