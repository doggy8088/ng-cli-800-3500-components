import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2143Component } from './page2143.component';

@NgModule({
  declarations: [Page2143Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2143Component }])],
  exports: [Page2143Component]
})
export class Page2143Module {}
