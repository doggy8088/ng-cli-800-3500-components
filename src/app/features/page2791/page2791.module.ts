import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2791Component } from './page2791.component';

@NgModule({
  declarations: [Page2791Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2791Component }])],
  exports: [Page2791Component]
})
export class Page2791Module {}
