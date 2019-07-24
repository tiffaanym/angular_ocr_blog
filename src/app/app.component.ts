import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyBlog';

  postDate = Date();

  posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet accumsan nibh, et maximus leo. Ut nec vulputate nulla, quis',
            love: 0,
            created_at: this.postDate
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet accumsan nibh, et maximus leo. Ut nec vulputate nulla, quis',
            love: 0,
            created_at: this.postDate
        },
        {
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet accumsan nibh, et maximus leo. Ut nec vulputate nulla, quis',
            love: 0,
            created_at: this.postDate
        }
    ];
}
