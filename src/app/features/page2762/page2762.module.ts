import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2762Component } from './page2762.component';

@NgModule({
  declarations: [Page2762Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2762Component }])],
  exports: [Page2762Component]
})
export class Page2762Module {}
