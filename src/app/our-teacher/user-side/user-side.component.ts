import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../../services/get-user.service';
@Component({
  selector: 'app-user-side',
  templateUrl: './user-side.component.html',
  styleUrls: ['./user-side.component.scss']
})
export class UserSideComponent implements OnInit {
  teacher = [];
  constructor(private service: GetUserService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getTeacher().subscribe((res: any) => {
      console.log(res);
      this.teacher = res;
    });
  }
}
