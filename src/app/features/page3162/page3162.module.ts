import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3162Component } from './page3162.component';

@NgModule({
  declarations: [Page3162Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3162Component }])],
  exports: [Page3162Component]
})
export class Page3162Module {}
