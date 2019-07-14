import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2636Component } from './page2636.component';

@NgModule({
  declarations: [Page2636Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2636Component }])],
  exports: [Page2636Component]
})
export class Page2636Module {}
