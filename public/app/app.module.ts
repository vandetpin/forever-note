import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';


import { AppComponent }  from './app.component';


import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductSearchComponent } from './product-search.component';
import { DashboardComponent } from './dashboard.component';
import { ProductService } from './product.service';

import { NoteItemComponent } from './note-item.component';
import { NoteService } from './note.service';
import { AppRoutingModule }   from './app-routing.module';
import {NoteDetailsComponent} from "./note-details.component";
import { TodoListComponent} from './todolist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductsComponent,
    NoteItemComponent,
    DashboardComponent,
    NoteDetailsComponent,
    TodoListComponent,

  ],
  providers: [NoteService, ProductService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
