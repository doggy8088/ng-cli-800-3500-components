import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2804Component } from './page2804.component';

@NgModule({
  declarations: [Page2804Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2804Component }])],
  exports: [Page2804Component]
})
export class Page2804Module {}
