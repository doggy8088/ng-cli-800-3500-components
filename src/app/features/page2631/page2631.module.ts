import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2631Component } from './page2631.component';

@NgModule({
  declarations: [Page2631Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2631Component }])],
  exports: [Page2631Component]
})
export class Page2631Module {}
