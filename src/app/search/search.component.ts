import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent {

  constructor(private router: Router) { }

  search(searchTerm: string, size: number, gender: string) {

    this.router.navigate(['/shoes'], {
      queryParams: {
        searchTerm: searchTerm,
        size: size,
        gender: gender
      }
    });
  }

}
