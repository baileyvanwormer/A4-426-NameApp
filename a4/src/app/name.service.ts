import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Age } from './age';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private name: string = "Bailey";
  private state: string = "initial";
  private age: number = 0;

  constructor(private http: HttpClient) { }

  public getName() {
    return this.name;
  }

  public getState() {
    return this.state;
  }

  public getAge() {
    return this.age;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setState(state: string) {
    this.state = state;
  }

  public setAge(age: number) {
    this.age = age;
  }

  public callAPI() {
    let url = "https://api.agify.io?name=" + this.getName();
    return this.http.get<Age>(url);
  }
}
