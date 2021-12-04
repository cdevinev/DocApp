import { Injectable } from '@angular/core';
import { DocDetail, UserDetail } from './doc-detail.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


export interface User 
{
  User_ID : number;
  User_FirstName : string;
  User_LastName : string;
  User_CellphoneNumber : number;
  User_EmailAddress : number;
  //UserImage : ImageBitmap;
}
@Injectable({
  providedIn: 'root'
})
export class DocDetailService {

  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  readonly server = 'http://localhost:44393/api/'
  formData: DocDetail = new DocDetail();
  list: DocDetail[];

  userFormData: UserDetail = new UserDetail();
  userlist: UserDetail[];

  postDocDetail() {
    return this.http.post(this.server, this.formData);
  }

  putDocDetail() {
    return this.http.put(`${this.server}/${this.formData.docDetailId}`, this.formData);
  }

  deleteDocDetail(id: number) {
    return this.http.delete(`${this.server}/${id}`);
  }

  refreshList() {
    this.http.get(this.server)
      .toPromise()
      .then(res =>this.list = res as DocDetail[]);
  }
  getUsers(): Observable<any>{
    return this.http.get(`${this.server}User/GetUser`)
    // .pipe(map((res:any)=>{
    //   return res;
    // }))

  }  
  postUserDetail() {
    return this.http.post(this.server, this.formData);
  }

  putUserDetail() {
    return this.http.put(`${this.server}/${this.formData.docDetailId}`, this.formData);
  }

  deleteUserDetail(id: number) {
    return this.http.delete(`${this.server}/${id}`);
  }

  refreshUserList() {
    this.http.get(this.server)
      .toPromise()
      .then(res =>this.list = res as DocDetail[]);
  }

}
