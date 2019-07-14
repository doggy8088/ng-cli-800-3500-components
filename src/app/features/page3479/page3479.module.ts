import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3479Component } from './page3479.component';

@NgModule({
  declarations: [Page3479Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3479Component }])],
  exports: [Page3479Component]
})
export class Page3479Module {}
