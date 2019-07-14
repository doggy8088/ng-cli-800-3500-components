import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2360Component } from './page2360.component';

@NgModule({
  declarations: [Page2360Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2360Component }])],
  exports: [Page2360Component]
})
export class Page2360Module {}
