import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3436Component } from './page3436.component';

@NgModule({
  declarations: [Page3436Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3436Component }])],
  exports: [Page3436Component]
})
export class Page3436Module {}
