import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GetInputComponent } from './get-input/get-input.component';
import { HeaderComponent } from './header/header.component';
import { ShowOutputComponent } from './show-output/show-output.component';
import { OutputService } from './show-output/output.service';


@NgModule({
  declarations: [
    AppComponent,
    GetInputComponent,
    HeaderComponent,
    ShowOutputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [OutputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
