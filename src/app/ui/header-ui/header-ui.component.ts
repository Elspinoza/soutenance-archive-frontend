import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.css']
})
export class HeaderUiComponent {

  // searchKeyword: string = '';

  // constructor (private http: HttpClient) {}

  // onSearch() {
  //   this.http.get<any>(`http://127.0.0.1:5000/api/archives?keyword=${this.searchKeyword}`)
  //   .subscribe(data => {
  //     console.log(data);
  //     this
  //   })
  // }

  @Output() searchKeywordChanged = new EventEmitter<string>();

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;

    if(target){
      const searchKeyword = target.value;
      this.searchKeywordChanged.emit(searchKeyword);
    }
  }
}
