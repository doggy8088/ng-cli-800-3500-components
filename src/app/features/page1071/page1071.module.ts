import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1071Component } from './page1071.component';

@NgModule({
  declarations: [Page1071Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1071Component }])],
  exports: [Page1071Component]
})
export class Page1071Module {}
