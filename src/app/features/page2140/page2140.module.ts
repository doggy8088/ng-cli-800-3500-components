import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2140Component } from './page2140.component';

@NgModule({
  declarations: [Page2140Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2140Component }])],
  exports: [Page2140Component]
})
export class Page2140Module {}
