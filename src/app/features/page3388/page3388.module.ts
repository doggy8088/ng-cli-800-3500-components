import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3388Component } from './page3388.component';

@NgModule({
  declarations: [Page3388Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3388Component }])],
  exports: [Page3388Component]
})
export class Page3388Module {}
