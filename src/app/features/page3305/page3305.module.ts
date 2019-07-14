import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3305Component } from './page3305.component';

@NgModule({
  declarations: [Page3305Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3305Component }])],
  exports: [Page3305Component]
})
export class Page3305Module {}
