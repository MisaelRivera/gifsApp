import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styles: [
  ]
})
export class GifsSearchComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  
  constructor (private gifsService: GifsService) {}

  search () {
      const value = this.searchInput.nativeElement.value;
      this.gifsService.searchGifs(value);
      this.searchInput.nativeElement.value = '';
  }
}
