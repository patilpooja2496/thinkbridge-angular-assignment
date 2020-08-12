import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor( public http: HttpClient ) { }
  // call for get request
  getItemList(): any {
    return this.http.get('https://5f311956373bc7001635f496.mockapi.io/Item');
  }
  // call for Post request
  postItem(item): any {
    return this.http.post('https://5f311956373bc7001635f496.mockapi.io/Item', item);
  }
  // call for delete request
  deleteItem(id): any {
    return this.http.get('https://5f311956373bc7001635f496.mockapi.io/Item/' + id);
  }

}
