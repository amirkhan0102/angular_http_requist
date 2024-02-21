import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'http';
  data: any;
  apiUrl: any;
  http: any;
  constructor(private dataService: DataServiceService) {

  }
  ngOnInit(): void {
    this.getData()
  }


  getData() {
    this.dataService.getData().subscribe(Response => {
      this.data = Response;
      console.log(this.data);

    }
    )
  }
  createPost() {
    const newPost = {
      title: "yangi post",
      body: "Amriddin ",
      userId: 1,
    };



    this.dataService.createPost(newPost).subscribe(Response => {
      console.log("yangi post yaratildi", Response);

    }, error => {
      console.error("Xatolik bo'ldi",error);

    })
  }

  updatePost(postId: number) {
    const updatePost = {
      title: "ma'lumot o'zgartirildi",
      body: "ma'lumot o'zgartirildi",
    };
    this.dataService.updatePost(postId, updatePost).subscribe(Response => {
      console.log(" post o'zgartirildi", Response);

    }, error => {
      console.error("Xatolik bo'ldi", error);

    })

  }

  deletePost(postId: number) {

    this.dataService.deletePost(postId,).subscribe(Response => {
      console.log(" post o'zgartirildi", Response);
    })



  }
}
