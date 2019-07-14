import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2024Component } from './page2024.component';

@NgModule({
  declarations: [Page2024Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2024Component }])],
  exports: [Page2024Component]
})
export class Page2024Module {}
