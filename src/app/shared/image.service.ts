import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY;
  private perPage: string = '&per_page=10';
  private lang: string = '&lang=ru';
  private category: string = '&category=sports';
  private page: string = '&page=1';

  constructor(private http: Http) { }

  getImage(query: string, perPage: any = '5', imageType: string = 'all', page?: any) {
    let searchParams = new URLSearchParams();
    searchParams.set('q', query);
    searchParams.set('per_page', perPage);
    searchParams.set('image_type', imageType);
    if(!page) {
      searchParams.set('page', '1');
    } else {
      searchParams.set('page', page);
    }
    let options = new RequestOptions({params: searchParams});
    return this.http.get(this.URL, options)
      .map(res => res.json());
  }
}
