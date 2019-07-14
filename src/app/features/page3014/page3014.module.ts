import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3014Component } from './page3014.component';

@NgModule({
  declarations: [Page3014Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3014Component }])],
  exports: [Page3014Component]
})
export class Page3014Module {}
