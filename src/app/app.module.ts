import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { ApplyColorDirective } from './apply-color.directive';
import { CustomAttributeDemoComponent } from './custom-attribute-demo/custom-attribute-demo.component';
import {DataService} from './data.service';
import { UseDataServiceComponent } from './use-data-service/use-data-service.component';
import { Trim2lengthPipe } from './trim2length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DataBindingComponent,
    StructuralDirectiveDemoComponent,
    ApplyColorDirective,
    CustomAttributeDemoComponent,
    UseDataServiceComponent,
    Trim2lengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
