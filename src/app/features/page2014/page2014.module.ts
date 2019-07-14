import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2014Component } from './page2014.component';

@NgModule({
  declarations: [Page2014Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2014Component }])],
  exports: [Page2014Component]
})
export class Page2014Module {}
