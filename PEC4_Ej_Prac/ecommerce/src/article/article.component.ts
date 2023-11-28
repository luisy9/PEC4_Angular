import { Component, ElementRef, Renderer2 } from '@angular/core';
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

  stock: number = 10;
  noStock: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.stock;
  }

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
