import { Injectable } from '@angular/core';
import { DocDetail } from './doc-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:61236/api/DocDetail'
  formData: DocDetail = new DocDetail();
  list: DocDetail[];

  postDocDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putDocDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.docDetailId}`, this.formData);
  }

  deleteDocDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as DocDetail[]);
  }


}
