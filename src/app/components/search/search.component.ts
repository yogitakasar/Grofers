import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, takeWhile, filter } from 'rxjs/operators';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  alive = true;
  @Output() searched = new EventEmitter<string>();
  faSearch = faSearch;
  faTimes = faTimes;
  form: FormGroup;
  previousSearchTerm = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({ search: '' });
    this.onFormChanges();
  }

  private onFormChanges() {
    this.form.controls['search'].valueChanges
      .pipe(
        filter((searchTerm) => {
          const userTriggered = this.form.dirty;
          return searchTerm !== this.previousSearchTerm && userTriggered;
        }),
        debounceTime(500),
        takeWhile(() => this.alive)
      )
      .subscribe((searchTerm) => {
        this.previousSearchTerm = searchTerm;
        this.search();
      });
  }

  search() {
    const searchTerm = this.form.controls.search.value;
    this.form.markAsPristine();
    // emit as undefined if empty string so sdk ignores parameter completely
    this.searched.emit(searchTerm || undefined);
  }

  clearWithoutEmit(): void {
    this.form.setValue({ search: '' });
  }



}
