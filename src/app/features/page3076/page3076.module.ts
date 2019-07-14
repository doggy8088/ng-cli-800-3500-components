import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3076Component } from './page3076.component';

@NgModule({
  declarations: [Page3076Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3076Component }])],
  exports: [Page3076Component]
})
export class Page3076Module {}
