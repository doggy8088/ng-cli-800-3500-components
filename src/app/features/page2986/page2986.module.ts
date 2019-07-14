import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2986Component } from './page2986.component';

@NgModule({
  declarations: [Page2986Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2986Component }])],
  exports: [Page2986Component]
})
export class Page2986Module {}
