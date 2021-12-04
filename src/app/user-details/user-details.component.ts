import { Component, OnInit } from '@angular/core';
import { DocDetailService } from '../shared/doc-detail.service';
import { DocDetail, UserDetail } from '../shared/doc-detail.model';
import { ToastrService } from 'ngx-toastr';
import { UserDetailFormComponent } from './user-detail-form/user-detail-form.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(public service: DocDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshUserList();
  }

  populateForm(selectedRecord: UserDetail) {
    this.service.userFormData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteUserDetail(id)
        .subscribe(
          res => {
            this.service.refreshUserList();
            this.toastr.error("Deleted successfully", 'Documentor');
          },
          err => { console.log(err) }
        )
    }
  }

}
