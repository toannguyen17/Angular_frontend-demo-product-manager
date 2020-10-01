import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { ListComponent }     from './list/list.component';
import { CreateComponent }   from './create/create.component';
import { EditComponent }     from './edit/edit.component';
import { DeleteComponent }   from './delete/delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
