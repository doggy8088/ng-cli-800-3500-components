import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2826Component } from './page2826.component';

@NgModule({
  declarations: [Page2826Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2826Component }])],
  exports: [Page2826Component]
})
export class Page2826Module {}
