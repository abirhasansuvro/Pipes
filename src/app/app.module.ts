import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ModifyPipe } from "./modify.pipe";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, ModifyPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
