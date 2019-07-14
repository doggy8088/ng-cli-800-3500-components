import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1837Component } from './page1837.component';

@NgModule({
  declarations: [Page1837Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1837Component }])],
  exports: [Page1837Component]
})
export class Page1837Module {}
