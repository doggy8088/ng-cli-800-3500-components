import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2022Component } from './page2022.component';

@NgModule({
  declarations: [Page2022Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2022Component }])],
  exports: [Page2022Component]
})
export class Page2022Module {}
