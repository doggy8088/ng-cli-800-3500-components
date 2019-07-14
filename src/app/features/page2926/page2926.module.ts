import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2926Component } from './page2926.component';

@NgModule({
  declarations: [Page2926Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2926Component }])],
  exports: [Page2926Component]
})
export class Page2926Module {}
