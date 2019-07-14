import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3135Component } from './page3135.component';

@NgModule({
  declarations: [Page3135Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3135Component }])],
  exports: [Page3135Component]
})
export class Page3135Module {}
