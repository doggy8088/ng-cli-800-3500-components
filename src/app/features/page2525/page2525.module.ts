import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2525Component } from './page2525.component';

@NgModule({
  declarations: [Page2525Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2525Component }])],
  exports: [Page2525Component]
})
export class Page2525Module {}
