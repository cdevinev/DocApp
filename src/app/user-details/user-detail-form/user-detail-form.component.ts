import { Component, OnInit } from '@angular/core';
import { DocDetailService } from 'src/app/shared/doc-detail.service';
import { NgForm } from '@angular/forms';
import { DocDetail, UserDetail } from 'src/app/shared/doc-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styles: [
  ]
})
export class UserDetailFormComponent implements OnInit {

  constructor(public service: DocDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(userform: NgForm) {
    if (this.service.userFormData.userDetailId == 0)
      this.insertRecord(userform);
    else
      this.updateRecord(userform);
  }

  insertRecord(form: NgForm) {
    this.service.postUserDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshUserList();
        this.toastr.success('Submitted successfully', 'Documentor')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putUserDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshUserList();
        this.toastr.info('Updated successfully', 'Documentor')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.userFormData = new UserDetail();
  }

}
