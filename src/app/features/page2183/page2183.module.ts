import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2183Component } from './page2183.component';

@NgModule({
  declarations: [Page2183Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2183Component }])],
  exports: [Page2183Component]
})
export class Page2183Module {}
