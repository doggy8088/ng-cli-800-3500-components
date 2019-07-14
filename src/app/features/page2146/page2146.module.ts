import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2146Component } from './page2146.component';

@NgModule({
  declarations: [Page2146Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2146Component }])],
  exports: [Page2146Component]
})
export class Page2146Module {}
