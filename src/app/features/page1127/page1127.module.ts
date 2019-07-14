import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1127Component } from './page1127.component';

@NgModule({
  declarations: [Page1127Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1127Component }])],
  exports: [Page1127Component]
})
export class Page1127Module {}
