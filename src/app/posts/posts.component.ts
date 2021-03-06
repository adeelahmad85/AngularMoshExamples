import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getAll().subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };

    input.value = "";

    this.service.create(post).subscribe(newPost => {
      post['id'] = newPost.id;

      this.posts.splice(0, 0, post);
    },
      (error: AppError) => {

        if (error instanceof BadRequestError) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }

      });

  }

  updatePost(post) {
    this.service.update(post).subscribe(updatedPost => {
      console.log(updatedPost);
    });
  }

  deletePost(post) {

    this.service.delete(333).subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
      (error: AppError) => {

        if (error instanceof NotFoundError) {
          alert("This post has already been deleted.");
        } else {
          throw error;
        }

      });
  }
}
