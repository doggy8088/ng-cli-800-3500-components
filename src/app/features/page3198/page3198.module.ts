import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3198Component } from './page3198.component';

@NgModule({
  declarations: [Page3198Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3198Component }])],
  exports: [Page3198Component]
})
export class Page3198Module {}
