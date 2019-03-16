import { Component, OnInit, Inject} from '@angular/core';
import {Problem} from '../../models/problem.model';

@Component({
  selector: 'app-promblem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class PromblemListComponent implements OnInit {
  problems: Problem[];
  constructor(@Inject('data') private data) { }

  ngOnInit() {
    this.getProblems();
  }
  getProblems(): void {
    this.problems = this.data.getProblems();
  }
}
