import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3244Component } from './page3244.component';

@NgModule({
  declarations: [Page3244Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3244Component }])],
  exports: [Page3244Component]
})
export class Page3244Module {}
