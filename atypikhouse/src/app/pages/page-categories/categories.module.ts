import { NgModule } from '@angular/core';
import { CategoriesPage } from './categories.component';

//import all elems

import { ListCategoryComponent } from 'src/app/elems/elem-list/list-category/list-category.component';
import { ListActivityComponent } from 'src/app/elems/elem-list/list-activity/list-activity.component';
import { ListTagComponent }      from 'src/app/elems/elem-list/list-tag/list-tag.component';


@NgModule({
  declarations: [
    CategoriesPage
  ],
  imports: [
    ListCategoryComponent,
    ListActivityComponent,
    ListTagComponent,
  ],
  providers: [],
  bootstrap: [CategoriesPage] // bootstrapped entry component
})

export class AllModule { }
