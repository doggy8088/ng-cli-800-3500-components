import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2336Component } from './page2336.component';

@NgModule({
  declarations: [Page2336Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2336Component }])],
  exports: [Page2336Component]
})
export class Page2336Module {}
