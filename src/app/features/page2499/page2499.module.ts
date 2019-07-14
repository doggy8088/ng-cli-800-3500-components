import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2499Component } from './page2499.component';

@NgModule({
  declarations: [Page2499Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2499Component }])],
  exports: [Page2499Component]
})
export class Page2499Module {}
