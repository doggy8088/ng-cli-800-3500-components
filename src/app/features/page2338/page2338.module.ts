import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2338Component } from './page2338.component';

@NgModule({
  declarations: [Page2338Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2338Component }])],
  exports: [Page2338Component]
})
export class Page2338Module {}
