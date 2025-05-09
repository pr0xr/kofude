import { Injectable } from '@angular/core';
import { Page } from '../models/page.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PageService {
  private pages: Page[] = [
    { id: '1', title: 'Home', content: 'Welcome to the wiki.', lastModified: new Date(), author: 'admin' },
  ];

  getPageById(id: string): Observable<Page | undefined> {
    return of(this.pages.find(p => p.id === id));
  }

  updatePage(page: Page): void {
    const index = this.pages.findIndex(p => p.id === page.id);
    if (index !== -1) this.pages[index] = page;
  }
}
