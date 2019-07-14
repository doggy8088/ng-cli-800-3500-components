import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2376Component } from './page2376.component';

@NgModule({
  declarations: [Page2376Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2376Component }])],
  exports: [Page2376Component]
})
export class Page2376Module {}
