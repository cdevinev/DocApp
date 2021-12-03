import { Component, OnInit } from '@angular/core';
import { DocDetailService } from 'src/app/shared/doc-detail.service';
import { NgForm } from '@angular/forms';
import { DocDetail } from 'src/app/shared/doc-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doc-detail-form',
  templateUrl: './doc-detail-form.component.html',
  styles: [
  ]
})
export class DocDetailFormComponent implements OnInit {

  constructor(public service: DocDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.docDetailId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postDocDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Documentor')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putDocDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Documentor')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new DocDetail();
  }

}
