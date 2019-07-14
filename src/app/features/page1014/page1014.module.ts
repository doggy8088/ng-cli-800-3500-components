import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1014Component } from './page1014.component';

@NgModule({
  declarations: [Page1014Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1014Component }])],
  exports: [Page1014Component]
})
export class Page1014Module {}
