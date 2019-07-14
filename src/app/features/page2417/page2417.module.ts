import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2417Component } from './page2417.component';

@NgModule({
  declarations: [Page2417Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2417Component }])],
  exports: [Page2417Component]
})
export class Page2417Module {}
