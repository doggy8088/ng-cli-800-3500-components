import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2682Component } from './page2682.component';

@NgModule({
  declarations: [Page2682Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2682Component }])],
  exports: [Page2682Component]
})
export class Page2682Module {}
