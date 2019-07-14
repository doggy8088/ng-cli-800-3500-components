import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2318Component } from './page2318.component';

@NgModule({
  declarations: [Page2318Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2318Component }])],
  exports: [Page2318Component]
})
export class Page2318Module {}
