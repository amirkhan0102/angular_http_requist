import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any;
  url: any;
  http: any;
  errorMessage !: string;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (result) => {
        this.data=result;
      },
      (error) => {
    this.errorMessage=error;
      }
    )
  }

  getData() {
    this.dataService.getData().subscribe(Response => {
      this.data = Response;
      console.log(this.data);
    });

  }
  createPost() {
    const newPost = {
      title: "yangi post",
      body: "Amriddin ",
      userId: 1,
    };
    this.dataService.createPost(newPost).subscribe((Response) => {
      console.log("yangi post yaratildi", Response);

    }, error => {
      console.error("Xatolik bo'ldi", error);

    });
  }

  updatePost(postId: number) {
    const updatedPost = {
      title: "ma'lumot o'zgartirildi",
      body: "ma'lumot o'zgartirildi",
    };
    this.dataService.updatePost(postId, updatedPost).subscribe(Response => {
      console.log(" post o'zgartirildi", Response);

    }, error => {
      console.error("Xatolik bo'ldi", error);
    }
    )
  }

  deletePost(postId: number) {

    this.dataService.deletePost(postId).subscribe((Response) => {
      console.log(" post o'chirildi", Response);
    },
      error => {
        console.error("Xatolik bo'ldi", error);
      }
    )

  }
}
