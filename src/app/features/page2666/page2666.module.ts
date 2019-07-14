import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2666Component } from './page2666.component';

@NgModule({
  declarations: [Page2666Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2666Component }])],
  exports: [Page2666Component]
})
export class Page2666Module {}
