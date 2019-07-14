import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2844Component } from './page2844.component';

@NgModule({
  declarations: [Page2844Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2844Component }])],
  exports: [Page2844Component]
})
export class Page2844Module {}
