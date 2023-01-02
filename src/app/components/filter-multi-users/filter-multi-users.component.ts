import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, combineLatest, map, startWith } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DepartmentModel } from '../../models/department.model';
import { RoleModel } from '../../models/role.model';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-filter-multi-users',
  styleUrls: ['./filter-multi-users.component.scss'],
  templateUrl: './filter-multi-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterMultiUsersComponent {
  readonly filterForm: FormGroup = new FormGroup({ department: new FormControl(''), role: new FormControl('') });

  readonly departmentList$: Observable<DepartmentModel[]> = this._usersService.getAllDepartments();
  readonly roleList$: Observable<RoleModel[]> = this._usersService.getAllRoles();

  readonly userList$: Observable<UserModel[]> = combineLatest([
    this._usersService.getAllUsers(),
    this.filterForm.valueChanges.pipe(startWith({ department: '', role: '' }))
  ]).pipe(
    map(([users, form]) => {
      return users.filter((user) => user.roleId == form.role && user.departmentId == form.department);
    })
  );
  private _activeDepartmentSubject: Subject<string> = new Subject<string>();
  public activeDepartment$: Observable<string> = this._activeDepartmentSubject.asObservable();

  constructor(private _usersService: UsersService) {}

  onFilterSubmitted(filter: FormGroup): void {}

  selectDepartment(dept: string): void {
    this._activeDepartmentSubject.next(dept);
  }
}
