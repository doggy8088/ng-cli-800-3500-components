import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2079Component } from './page2079.component';

@NgModule({
  declarations: [Page2079Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2079Component }])],
  exports: [Page2079Component]
})
export class Page2079Module {}
