import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3187Component } from './page3187.component';

@NgModule({
  declarations: [Page3187Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3187Component }])],
  exports: [Page3187Component]
})
export class Page3187Module {}
