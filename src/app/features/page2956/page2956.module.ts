import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2956Component } from './page2956.component';

@NgModule({
  declarations: [Page2956Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2956Component }])],
  exports: [Page2956Component]
})
export class Page2956Module {}
