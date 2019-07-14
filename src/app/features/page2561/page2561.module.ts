import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2561Component } from './page2561.component';

@NgModule({
  declarations: [Page2561Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2561Component }])],
  exports: [Page2561Component]
})
export class Page2561Module {}
