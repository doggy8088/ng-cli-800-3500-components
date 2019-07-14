import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2073Component } from './page2073.component';

@NgModule({
  declarations: [Page2073Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2073Component }])],
  exports: [Page2073Component]
})
export class Page2073Module {}
