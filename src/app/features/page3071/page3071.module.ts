import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3071Component } from './page3071.component';

@NgModule({
  declarations: [Page3071Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3071Component }])],
  exports: [Page3071Component]
})
export class Page3071Module {}
