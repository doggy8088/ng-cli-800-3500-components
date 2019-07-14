import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2381Component } from './page2381.component';

@NgModule({
  declarations: [Page2381Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2381Component }])],
  exports: [Page2381Component]
})
export class Page2381Module {}
