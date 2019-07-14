import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2509Component } from './page2509.component';

@NgModule({
  declarations: [Page2509Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2509Component }])],
  exports: [Page2509Component]
})
export class Page2509Module {}
