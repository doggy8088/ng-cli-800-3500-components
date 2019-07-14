import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3059Component } from './page3059.component';

@NgModule({
  declarations: [Page3059Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3059Component }])],
  exports: [Page3059Component]
})
export class Page3059Module {}
