import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Player } from '../shared/interfaces/player.model';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = '/api/players';

  private http = inject(HttpClient);

  getPlayers(): Observable<Player[]> {
    // return this.http.get<Player[]>(this.apiUrl);
    return of([
    {
      id: 1,
      firstName: 'Malik',
      lastName: 'Johnson',
      age: 12,
      ageGroup: 'U12',
      team: 'U12 Development',
      jerseyNumber: 11,
      primaryPosition: 'Right Wing',
      secondaryPosition: 'Forward',
      preferredFoot: 'Right',
      yearsAtAcademy: 3,
      season: '2026',
      photo: 'assets/img/coaches/leighton.jpg',
    },
    {
      id: 2,
      firstName: 'Andre',
      lastName: 'Williams',
      age: 10,
      ageGroup: 'U12',
      team: 'U12 Development',
      jerseyNumber: 7,
      primaryPosition: 'Midfielder',
      preferredFoot: 'Right',
      yearsAtAcademy: 2,
      season: '2026',
      photo: 'assets/img/coaches/dwayne.jpg',
    },
    {
      id: 3,
      firstName: 'Jayden',
      lastName: 'Brown',
      age: 6,
      ageGroup: 'U6',
      team: 'U6 Academy',
      jerseyNumber: 8,
      primaryPosition: 'Forward',
      preferredFoot: 'Right',
      yearsAtAcademy: 1,
      season: '2026',
      photo: 'assets/img/coaches/dwayne.jpg',
    },
    {
      id: 4,
      firstName: 'Nathan',
      lastName: 'Campbell',
      age: 5,
      ageGroup: 'U6',
      team: 'U6 Academy',
      jerseyNumber: 4,
      primaryPosition: 'Midfielder',
      preferredFoot: 'Both',
      yearsAtAcademy: 1,
      season: '2026',
      photo: 'assets/img/coaches/malcolm.jpg',
    },
    {
      id: 5,
      firstName: 'Dario',
      lastName: 'Smith',
      age: 16,
      ageGroup: 'U17',
      team: 'U17 Academy',
      jerseyNumber: 10,
      primaryPosition: 'Attacking Midfielder',
      secondaryPosition: 'Forward',
      preferredFoot: 'Left',
      yearsAtAcademy: 4,
      season: '2026',
      photo: 'assets/img/coaches/leighton.jpg',
    },
    {
      id: 6,
      firstName: 'Jordan',
      lastName: 'Thomas',
      age: 15,
      ageGroup: 'U17',
      team: 'U17 Academy',
      jerseyNumber: 5,
      primaryPosition: 'Center Back',
      preferredFoot: 'Right',
      yearsAtAcademy: 3,
      season: '2026',
      photo: 'assets/img/coaches/shana.jpg',
    },
    {
      id: 7,
      firstName: 'Marcus',
      lastName: 'Reid',
      age: 19,
      ageGroup: 'Over 18',
      team: 'Senior Academy',
      jerseyNumber: 9,
      primaryPosition: 'Forward',
      preferredFoot: 'Right',
      yearsAtAcademy: 4,
      season: '2026',
      photo: 'assets/img/coaches/fabian.jpg',
    },
  ]);
  }

  getPlayer(id: string): Observable<Player> {
    // return this.http.get<Player>(`${this.apiUrl}/${id}`);
    return this.getPlayers().pipe(
      map(players => players.find(player => player.id.toString() === id) as Player)
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
}
