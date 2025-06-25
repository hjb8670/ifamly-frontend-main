import { NgModule } from '@angular/core';
import { FilterSearchPipe } from './filter-search.pipe';



@NgModule({
  declarations: [
    FilterSearchPipe
  ],
  exports: [
    FilterSearchPipe
  ]
})
export class PipesModule { }
