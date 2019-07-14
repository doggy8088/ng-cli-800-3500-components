import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2989Component } from './page2989.component';

@NgModule({
  declarations: [Page2989Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2989Component }])],
  exports: [Page2989Component]
})
export class Page2989Module {}
