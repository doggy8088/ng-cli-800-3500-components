import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3231Component } from './page3231.component';

@NgModule({
  declarations: [Page3231Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3231Component }])],
  exports: [Page3231Component]
})
export class Page3231Module {}
