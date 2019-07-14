import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2188Component } from './page2188.component';

@NgModule({
  declarations: [Page2188Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2188Component }])],
  exports: [Page2188Component]
})
export class Page2188Module {}
