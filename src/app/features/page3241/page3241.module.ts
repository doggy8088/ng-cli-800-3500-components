import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3241Component } from './page3241.component';

@NgModule({
  declarations: [Page3241Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3241Component }])],
  exports: [Page3241Component]
})
export class Page3241Module {}
