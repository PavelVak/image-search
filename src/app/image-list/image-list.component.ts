import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  searchQuery: string = '';
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  loading: boolean = false;

  total: any;
  pages: number;
  currentPage: number;
  respFlag: boolean = true;

  showHide: boolean = false; // флаг для показа advanced-search

  /*Форму вынести в отдельный компонет*/
  searchForm: FormGroup;
  /*Форму вынести в отдельный компонент*/

  /*autocomplete option*/
  autocompleteCategory: string[] = [
    'fashion',
    'nature',
    'backgrounds',
    'science',
    'education',
    'people',
    'feelings',
    'religion',
    'health',
    'places',
    'animals',
    'industry',
    'food',
    'computer',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music'
  ];
  /*autocomplete option*/
  /*Filtered Options*/
  filteredOptions: Observable<string[]>;
  filteredLang: Observable<string[]>;
  /*Filtered Options*/

  /*orientation*/
  orientations = [
    {value: 'all', viewValue: 'All'},
    {value: 'horizontal', viewValue: 'Horizontal'},
    {value: 'vertical', viewValue: 'Vertical'}
  ];

  orders = [
    {value: 'popular', viewValue: 'Popular'},
    {value: 'latest', viewValue: 'Latest'}
  ];

  types = [
    {value: 'all', viewValue: 'All'},
    {value: 'photo', viewValue: 'Photo'},
    {value: 'illustration', viewValue: 'Illustration'},
    {value: 'vector', viewValue: 'Vector'},
  ];

  langs = [
    {value: 'en', viewValue: 'English'},
    {value: 'it', viewValue: 'Italian'},
    {value: 'de', viewValue: 'German'},
    {value: 'ru', viewValue: 'Russian'},
  ];
  /*orientation*/
  constructor(private imageService: ImageService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: [''],
      imageNumber: ['5', [Validators.min(5), Validators.required]],
      imageType: [this.types[0].value],
      imageCategory: [''],
      imageOrientation: [this.orientations[0].value],
      imageOrder: [this.orders[0].value],
      searchLang: [this.langs[0].value]
    });

    this.filteredOptions = this.filterParams(this.searchForm,'imageCategory', this.autocompleteCategory);
  }


  filterParams(formGrp: FormGroup, controlName: string, paramArr: string[]) {
    return formGrp.get(controlName).valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val, paramArr) : paramArr.slice());
  }

  filter(val: string, paramArr: string[]): string[] {
    return paramArr.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  searchImages(query: string) {
    this.searching = true;
    return this.imageService.getImage(query, this.searchForm.get('imageNumber').value, this.searchForm.get('imageType').value).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => {console.log('Request complete'); this.searching = false;}
    )
  }

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    this.total = data.totalHits;
    this.pages = Math.ceil(this.total/this.searchForm.get('imageNumber').value);
    this.currentPage = 1;
    if(this.pages !== this.currentPage) {
      this.respFlag = true;
    }
    this.searchQuery = this.searchForm.get('search').value;
  }

  handleError(error) {
    console.log(error);
  }

  addPhotos() {
    if(this.respFlag && !this.loading) {
      this.currentPage += 1;
      this.loading = true;
      this.imageService.getImage(this.searchQuery, this.searchForm.get('imageNumber').value, this.searchForm.get('imageType').value, this.currentPage).subscribe(
        data => {
          this.images = this.images.concat(data.hits);
          setTimeout(() => {
            this.loading = false;
          }, 300);
          if (this.pages <= this.currentPage) {
            this.respFlag = false;
          }
        });
    }
  }
}
