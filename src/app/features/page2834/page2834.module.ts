import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2834Component } from './page2834.component';

@NgModule({
  declarations: [Page2834Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2834Component }])],
  exports: [Page2834Component]
})
export class Page2834Module {}
