import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2512Component } from './page2512.component';

@NgModule({
  declarations: [Page2512Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2512Component }])],
  exports: [Page2512Component]
})
export class Page2512Module {}
