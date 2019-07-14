import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2654Component } from './page2654.component';

@NgModule({
  declarations: [Page2654Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2654Component }])],
  exports: [Page2654Component]
})
export class Page2654Module {}
