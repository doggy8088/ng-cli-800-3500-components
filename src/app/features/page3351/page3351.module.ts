import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3351Component } from './page3351.component';

@NgModule({
  declarations: [Page3351Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3351Component }])],
  exports: [Page3351Component]
})
export class Page3351Module {}
