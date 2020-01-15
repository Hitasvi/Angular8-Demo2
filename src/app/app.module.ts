import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { ApplyColorDirective } from './apply-color.directive';
import { CustomAttributeDemoComponent } from './custom-attribute-demo/custom-attribute-demo.component';
import {DataService} from './data.service';
import { UseDataServiceComponent } from './use-data-service/use-data-service.component';
import { Trim2lengthPipe } from './trim2length.pipe';
import { RouterModule } from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component'
import {HttpClientModule} from '@angular/common/http';
import { APICallDemoComponent } from './apicall-demo/apicall-demo.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DataBindingComponent,
    StructuralDirectiveDemoComponent,
    ApplyColorDirective,
    CustomAttributeDemoComponent,
    UseDataServiceComponent,
    Trim2lengthPipe,
    ProductDetailComponent,
    ObservableDemoComponent,
    APICallDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
