import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2019Component } from './page2019.component';

@NgModule({
  declarations: [Page2019Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2019Component }])],
  exports: [Page2019Component]
})
export class Page2019Module {}
