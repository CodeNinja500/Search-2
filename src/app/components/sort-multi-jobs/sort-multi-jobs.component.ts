import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable, of, startWith, map } from 'rxjs';
import { JobPostModel } from '../../models/job-post.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-sort-multi-jobs',
  styleUrls: ['./sort-multi-jobs.component.scss'],
  templateUrl: './sort-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortMultiJobsComponent {
  readonly searchForm: FormGroup = new FormGroup({
    property: new FormControl(''),
    direction: new FormControl('')
  });

  readonly properties: Observable<string[]> = of(['title', 'description']);
  readonly directions: Observable<string[]> = of(['asc', 'desc']);

  readonly jobPostList$: Observable<JobPostModel[]> = combineLatest([
    this._jobsService.getAll(),
    this.searchForm.valueChanges.pipe(startWith({ property: '', direction: '' }))
  ]).pipe(
    map(([jobs, form]) => {
      return jobs.sort((a, b) => {
        if (form.property == 'title') {
          if (a.title > b.title) return form.direction == 'asc' ? 1 : -1;
          if (a.title < b.title) return form.direction == 'asc' ? -1 : 1;
          else return 0;
        }
        if (form.property == 'description') {
          if (a.description > b.description) return form.direction == 'asc' ? 1 : -1;
          if (a.description < b.description) return form.direction == 'asc' ? -1 : 1;
          else return 0;
        } else return 0;
      });
    })
  );

  constructor(private _jobsService: JobsService) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {}
}
