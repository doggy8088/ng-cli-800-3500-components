import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2698Component } from './page2698.component';

@NgModule({
  declarations: [Page2698Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2698Component }])],
  exports: [Page2698Component]
})
export class Page2698Module {}
