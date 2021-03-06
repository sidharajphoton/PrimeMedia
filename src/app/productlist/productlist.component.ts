import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import { carouselData } from '../mock-appdata';
import { ActivatedRoute, Router } from '@angular/router';
import {carouselDragData} from '../usertype';
import { ServiceCallService } from '../service-call.service';
import {Config} from '../config';
import { SharedserviceService } from '../sharedservice.service';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
  providers: [ NgbTabsetConfig ]

})
export class ProductlistComponent implements OnInit, OnDestroy {
  sharedValues: any;
  carousel: object = carouselDragData;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private serviceCall: ServiceCallService,
              private sharedObj: SharedserviceService,
              config: NgbTabsetConfig, private localstorage: LocalstorageService) {

    this.sharedObj.globalObj.breadcrumbList = [
        {'url': '/home', 'statename': 'Home', 'param': ''},
        {'url': '', 'statename': 'Product list', 'param': ''}
      ];
    this.sharedObj.globalObj.showBreadcrumb = true;

    config.justify = 'start';
    config.type = 'tabs';
  }
  data: Array<any> = [];
  sub: any;
  carouselData: any;
  curId: any;
  isloaded: any = false;
  loopData: any = [];
  ngOnInit() {
    /*this.data = carouselData;*/
    this.sub = this.route
      .queryParams
      .subscribe(params => {
          this.curId = params['id'];
            this.serviceCall.postMethod('medialibv2.productlist', { 'id' : this.curId}).subscribe((data: Config) => {
                  this.carouselData =  data['data'].content.contents[0].data;
                  this.loopData = data['data'].content.contents;
                  this.isloaded = true;
                  this.carousel = {
                    'configuration': {'deleteoption': false, 'editsave': false, 'itemevent': true},
                    'data': this.carouselData,
                    'title': data['data'].content.categoryName.toLocaleLowerCase()
                  };
              /*this.carousel.title = this.carousel.title.toLocaleLowerCase();*/
          });
            this.localstorage.setLocaldata('catId', this.curId);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
