import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2614Component } from './page2614.component';

@NgModule({
  declarations: [Page2614Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2614Component }])],
  exports: [Page2614Component]
})
export class Page2614Module {}
