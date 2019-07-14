import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2915Component } from './page2915.component';

@NgModule({
  declarations: [Page2915Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2915Component }])],
  exports: [Page2915Component]
})
export class Page2915Module {}
