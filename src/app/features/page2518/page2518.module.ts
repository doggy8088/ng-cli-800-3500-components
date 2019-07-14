import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2518Component } from './page2518.component';

@NgModule({
  declarations: [Page2518Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2518Component }])],
  exports: [Page2518Component]
})
export class Page2518Module {}
