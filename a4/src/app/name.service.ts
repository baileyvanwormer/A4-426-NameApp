import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Age } from './age';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private firstName: string = "Bailey";
  private lastName: string = "Van Wormer"
  private state: string = "initial";
  private age: number = 0;
  private APIKey: string = "7f55ed4b1f25bc51a5b88da689fafa98";
  private origin: string = "";
  private region: string = "";

  constructor(private http: HttpClient) { }

  public getFirstName() {
    return this.firstName;
  }

  public getLastName() {
    return this.lastName;
  }

  public getState() {
    return this.state;
  }

  public getAge() {
    return this.age;
  }

  public getAPIKey() {
    return this.APIKey;
  }

  public getOrigin() {
    return this.origin;
  }

  public getRegion() {
    return this.region;
  }

  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public setState(state: string) {
    this.state = state;
  }

  public setAge(age: number) {
    this.age = age;
  }

  public setOrigin(origin: string) {
    this.origin = origin;
  }

  public setRegion(region: string) {
    this.region = region;
  }

  public callAgeAPI() {
    let url = "https://api.agify.io?name=" + this.getFirstName();
    return this.http.get<Age>(url);
  }

  public callDetailsAPI() {
    let url = "https://v2.namsor.com/NamSorAPIv2/api2/json/origin/" + this.getFirstName() + "/" + this.getLastName();
    let options = {"headers": {"X-API-KEY": this.getAPIKey()}};
    return this.http.get<Details>(url, options);
  }
}
