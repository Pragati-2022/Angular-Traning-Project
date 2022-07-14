import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { IAction } from 'src/app/modules/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private toastr: ToastrService, private router: Router) {}

  toasterSuccess(msg: string, action?: IAction) {
    this.toastr
      .success(msg)
      .onTap.pipe(take(1))
      .subscribe(() => {
        if (action) {
          this.toasterClickedHandler(action);
        }
      });
  }

  toasterClickedHandler(action?: IAction) {
    if (action?.isNavigation) this.router.navigate([action.path]);
  }

  toasterError(msg: string) {
    this.toastr.error(msg);
  }

  toasterInfo(msg : string) {
    this.toastr.info(msg);
  }

  toasterWarning(msg: string) {
    this.toastr.warning(msg);
  }
}
