import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3257Component } from './page3257.component';

@NgModule({
  declarations: [Page3257Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3257Component }])],
  exports: [Page3257Component]
})
export class Page3257Module {}
