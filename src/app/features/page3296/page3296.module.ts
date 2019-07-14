import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3296Component } from './page3296.component';

@NgModule({
  declarations: [Page3296Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3296Component }])],
  exports: [Page3296Component]
})
export class Page3296Module {}
