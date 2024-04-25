import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
  inject,
  output
} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  BehaviorSubject,
} from 'rxjs';
import { ApplicationListService } from '../../../services/application-list.service';
import { Application, Status, sortAndFilterRequest } from '../../../types';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatFormField,
    MatInput,
    AsyncPipe,
    MatSelectModule,
    ScrollingModule,
  ],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.scss',
})
export class ApplicationListComponent implements OnInit {

  private service = inject(ApplicationListService);
  listResponse$: BehaviorSubject<Application[]> = new BehaviorSubject<
    Application[]
  >([]);
  numAppsLoaded = 15;
  canLoadMoreApps = true;

  OnSelectedId = output<string>();

  sortAndFilterSubject = new BehaviorSubject<sortAndFilterRequest>({
    page: '1',
    STATUS: null,
    searchQuery: null,
  });

  sortForm = new FormGroup({
    searchQuery: new FormControl<string | null>(null),
    selectedStatus: new FormControl<Status[] | null>(null),
  });

  ngOnInit(): void {
    this.getApplications(this.sortAndFilterSubject.value);
  }

  getApplications(request: sortAndFilterRequest) {

    this.service.getApplicationsByStatusAndQuery(request)
      .subscribe((applications) => {
        const currentApps = this.listResponse$.getValue();
        this.listResponse$.next([...currentApps, ...applications]);
        this.numAppsLoaded = this.listResponse$.getValue().length;
        console.log(`num apps loaded: ${this.numAppsLoaded}`);

        // If less than 15 applications are returned, stop fetching new applications
        if (applications.length < 15) {
          this.canLoadMoreApps = false;
          console.log('final batch, no more apps to load');
        }
      });
  }

  openSelected(id: number) {
    if (id) {
      this.OnSelectedId.emit(id.toString());
    }
  }

submitSortAndSearch(): void {
  // Reset the listResponse$ and numAppsLoaded when filtering is enabled
  this.listResponse$.next([]);
  this.numAppsLoaded = 0;
  this.canLoadMoreApps = true;

  let newRequest: sortAndFilterRequest = {
    page: '1',
    STATUS: this.sortForm.getRawValue().selectedStatus,
    searchQuery: this.sortForm.getRawValue().searchQuery,
  };

  // If no filter is selected, reset sortAndFilterSubject
  if (!this.sortForm.getRawValue().searchQuery && this.sortForm.getRawValue().selectedStatus?.length === 0) {
    this.sortAndFilterSubject.next({
      page: '1',
      STATUS: null,
      searchQuery: null,
    });
  } else {
    // If one or more filters are selected, update sortAndFilterSubject
    this.sortAndFilterSubject.next(newRequest);
  }

  this.getApplications(this.sortAndFilterSubject.value);
}

  checkIfNearEndOfList(indexOfVisibleApp: number) {
    const endThreshold = this.numAppsLoaded - 2; //can adjust, smaller number = apps are loaded later down the list;
    console.log(`scrolledIndexChange app index: ${indexOfVisibleApp}`);

    if (indexOfVisibleApp >= endThreshold && this.canLoadMoreApps) {
      let currentPage = parseInt(this.sortAndFilterSubject.value.page);
      const newPage = currentPage + 1;
      console.log(`reaching end of current list, incrementing page nr. to p.${newPage} and loading more applications`);

      const newRequest = {
        ...this.sortAndFilterSubject.value,
        page: newPage.toString(),
      };

      this.sortAndFilterSubject.next(newRequest);
      this.getApplications(newRequest);

    }
  }
}
