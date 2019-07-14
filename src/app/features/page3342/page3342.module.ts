import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3342Component } from './page3342.component';

@NgModule({
  declarations: [Page3342Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3342Component }])],
  exports: [Page3342Component]
})
export class Page3342Module {}
