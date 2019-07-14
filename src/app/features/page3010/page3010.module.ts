import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3010Component } from './page3010.component';

@NgModule({
  declarations: [Page3010Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3010Component }])],
  exports: [Page3010Component]
})
export class Page3010Module {}
