import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UsercollectionsComponent } from './usercollections/usercollections.component';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { MycollectionsComponent } from './mycollections/mycollections.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { DraggingslideComponent } from './draggingslide/draggingslide.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ServiceCallService } from './service-call.service';
import { LocalstorageService} from './localstorage.service';
import { PrimeModalComponent } from './prime-modal/prime-modal.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { VideoAudioModalComponent } from './video-audio-modal/video-audio-modal.component';
import { AudioComponent } from './audio/audio.component';
import { FilterPipe } from './pipe-filter';
import { CeiboShare } from 'ng2-social-share';
import { LoginModalComponent } from './login-modal/login-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    UsercollectionsComponent,
    HttprequestComponent,
    MycollectionsComponent,
    ProdDetailsComponent,
    PaginationComponent,
    CarouselComponent,
    UsercollectionsComponent,
    CarouselComponent,
    ProductdetailsComponent,
    DraggingslideComponent,
    BreadcrumbComponent,
    ProductlistComponent,
    PrimeModalComponent,
    SearchresultsComponent,
    GridViewComponent,
    SearchresultsComponent,
     VideoAudioModalComponent,
    AudioComponent,
    FilterPipe,
    CeiboShare,
    LoginModalComponent
  ],
  entryComponents: [ PrimeModalComponent, LoginModalComponent ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    NgxCarouselModule,
    FormsModule
  ],
  providers: [ServiceCallService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
