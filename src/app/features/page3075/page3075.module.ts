import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3075Component } from './page3075.component';

@NgModule({
  declarations: [Page3075Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3075Component }])],
  exports: [Page3075Component]
})
export class Page3075Module {}
