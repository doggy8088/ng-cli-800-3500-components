import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2993Component } from './page2993.component';

@NgModule({
  declarations: [Page2993Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2993Component }])],
  exports: [Page2993Component]
})
export class Page2993Module {}
