import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Player } from '../shared/interfaces/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = '/assets/data/players.json';

  private http = inject(HttpClient);

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl).pipe(
      catchError(() => of([])),
      map((players) =>
        players.map((player) => {
          this.setPlayerAge(player);
          return player;
        }),
      ),
    );
  }

  getPlayer(id: number): Observable<Player> {
    // return this.http.get<Player>(`${this.apiUrl}/${id}`);
    return this.getPlayers().pipe(
      map((players) => players.find((player) => player.id === id) as Player),
    );
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  updatePlayer(id: string, player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiUrl}/${id}`, player);
  }

  deletePlayer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private setPlayerAge(player: Player): void {
    if (player.dateOfBirth) {
      const dob = new Date(player.dateOfBirth);
      const ageDifMs = Date.now() - dob.getTime();
      const ageDate = new Date(ageDifMs);
      player.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
}
