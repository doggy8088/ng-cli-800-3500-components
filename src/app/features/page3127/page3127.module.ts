import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3127Component } from './page3127.component';

@NgModule({
  declarations: [Page3127Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3127Component }])],
  exports: [Page3127Component]
})
export class Page3127Module {}
