import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3332Component } from './page3332.component';

@NgModule({
  declarations: [Page3332Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3332Component }])],
  exports: [Page3332Component]
})
export class Page3332Module {}
