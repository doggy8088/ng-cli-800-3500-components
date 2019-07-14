import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2271Component } from './page2271.component';

@NgModule({
  declarations: [Page2271Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2271Component }])],
  exports: [Page2271Component]
})
export class Page2271Module {}
