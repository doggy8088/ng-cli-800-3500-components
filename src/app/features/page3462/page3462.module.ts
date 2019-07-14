import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3462Component } from './page3462.component';

@NgModule({
  declarations: [Page3462Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3462Component }])],
  exports: [Page3462Component]
})
export class Page3462Module {}
