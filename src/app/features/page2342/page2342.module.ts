import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2342Component } from './page2342.component';

@NgModule({
  declarations: [Page2342Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2342Component }])],
  exports: [Page2342Component]
})
export class Page2342Module {}
