import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2759Component } from './page2759.component';

@NgModule({
  declarations: [Page2759Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2759Component }])],
  exports: [Page2759Component]
})
export class Page2759Module {}
