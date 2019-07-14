import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2972Component } from './page2972.component';

@NgModule({
  declarations: [Page2972Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2972Component }])],
  exports: [Page2972Component]
})
export class Page2972Module {}
