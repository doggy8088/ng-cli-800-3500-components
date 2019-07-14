import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2437Component } from './page2437.component';

@NgModule({
  declarations: [Page2437Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2437Component }])],
  exports: [Page2437Component]
})
export class Page2437Module {}
