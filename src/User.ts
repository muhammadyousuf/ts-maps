import * as faker from "@faker-js/faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    console.log("faker", faker);
  }
}
