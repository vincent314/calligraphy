import { Injectable } from '@angular/core';
import { child, Database, get, ref } from "@angular/fire/database";
import { Calligraphy } from "../domain/model/Calligraphy";

type CalligraphyMap = { [key: number]: Calligraphy };

@Injectable({
  providedIn: 'root'
})
export class RealTimeService {

  constructor(private database: Database) {
  }

  async getCalligraphies(): Promise<Calligraphy[]> {
    const dbRef = ref(this.database, "/");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      console.debug(snapshot.val());
      return Object.entries(snapshot.val() as CalligraphyMap).map(([_, value]) => value);
    } else {
      throw new Error("No data available");
    }
  }

  async getCalligraphy(id: number): Promise<Calligraphy> {
    const dbRef = ref(this.database, "/");
    const snapshot = await get(child(dbRef, `/${id}`))
    if (snapshot.exists()) {
      console.debug(snapshot.val());
      return snapshot.val();
    } else {
      throw new Error("No data available");
    }
  }
}
