import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  price: number = 10;
  maxStock: number = 10;
  stock: number = 0;
  noStock: boolean = false;

  constructor() {
    this.stock;
  }

  // ngAfterViewInit(): void {
  //   if (this.stock === 0) {
  //     this.noStock = true;
  //   }
  // }

  sumItem() {
    if (this.stock >= 0) {
      this.stock++;
      this.noStock = false;
    }
  }

  delItem() {
    if (this.stock > 0) {
      this.stock--;
    }

    if (this.stock === 0) {
      this.noStock = true;
    }
  }
}
