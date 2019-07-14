import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2948Component } from './page2948.component';

@NgModule({
  declarations: [Page2948Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2948Component }])],
  exports: [Page2948Component]
})
export class Page2948Module {}
