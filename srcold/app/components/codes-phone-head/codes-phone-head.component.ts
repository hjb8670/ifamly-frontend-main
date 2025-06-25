import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CodePhone } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-codes-phone-head',
  templateUrl: './codes-phone-head.component.html',
  styleUrls: ['./codes-phone-head.component.scss']
})
export class CodesPhoneHeadComponent {
  @Input() items: CodePhone[] = [];
  @Input() selectedItems: string = '';
  @Input() title = 'Select Items';
  @Input() phSearch = 'Search';
  @Input() btnCancel = 'Cancel';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string>();

  filteredItems: CodePhone[] = [];
  workingSelectedValue: string = '';

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValue = this.selectedItems;
  }

  trackItems(index: number, item: CodePhone) {
    return item.code;
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValue);
  }

  searchbarInput(ev) {
    this.filterList(ev.target.value);
  }

  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.country.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  isChecked(value: string) {
   //return this.workingSelectedValues.find((item) => item === value);
   
   return this.workingSelectedValue === value;
  }

  checkboxChange(ev) {
    const { checked, value } = ev.detail;

    if (checked) {
      this.workingSelectedValue = value;
    } /* else {
      this.workingSelectedValue = this.workingSelectedValues.filter((item) => item !== value);
    } */

    this.confirmChanges();
  }

}
