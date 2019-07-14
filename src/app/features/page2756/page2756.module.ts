import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2756Component } from './page2756.component';

@NgModule({
  declarations: [Page2756Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2756Component }])],
  exports: [Page2756Component]
})
export class Page2756Module {}
