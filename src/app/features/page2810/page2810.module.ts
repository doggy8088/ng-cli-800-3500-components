import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2810Component } from './page2810.component';

@NgModule({
  declarations: [Page2810Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2810Component }])],
  exports: [Page2810Component]
})
export class Page2810Module {}
