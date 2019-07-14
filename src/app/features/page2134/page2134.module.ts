import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2134Component } from './page2134.component';

@NgModule({
  declarations: [Page2134Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2134Component }])],
  exports: [Page2134Component]
})
export class Page2134Module {}
