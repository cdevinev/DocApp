import { Component, OnInit } from '@angular/core';
import { DocDetailService } from '../shared/doc-detail.service';
import { DocDetail } from '../shared/doc-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class DocDetailsComponent implements OnInit {

  constructor(public service: DocDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: DocDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteDocDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Documentor');
          },
          err => { console.log(err) }
        )
    }
  }

}
