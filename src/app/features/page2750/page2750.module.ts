import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2750Component } from './page2750.component';

@NgModule({
  declarations: [Page2750Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2750Component }])],
  exports: [Page2750Component]
})
export class Page2750Module {}
