import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { products } from '../products';

@Component({
  selector: "app-resume-education",
  templateUrl: "./resume-education.component.html",
  styleUrls: ["./resume-education.component.css"]
})
export class ResumeEducationComponent implements OnInit {
  @Input() profile;

  constructor() {}

  ngOnInit() {}
}
