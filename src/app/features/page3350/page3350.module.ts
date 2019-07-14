import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3350Component } from './page3350.component';

@NgModule({
  declarations: [Page3350Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3350Component }])],
  exports: [Page3350Component]
})
export class Page3350Module {}
