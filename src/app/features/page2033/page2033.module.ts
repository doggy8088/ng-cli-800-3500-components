import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2033Component } from './page2033.component';

@NgModule({
  declarations: [Page2033Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2033Component }])],
  exports: [Page2033Component]
})
export class Page2033Module {}
