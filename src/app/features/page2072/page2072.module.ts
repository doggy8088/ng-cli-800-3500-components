import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2072Component } from './page2072.component';

@NgModule({
  declarations: [Page2072Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2072Component }])],
  exports: [Page2072Component]
})
export class Page2072Module {}
