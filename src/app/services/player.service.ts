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
        stats: [
          { label: 'Matches', value: 24 },
          { label: 'Goals', value: 8 },
          { label: 'Assists', value: 6 },
        ],

        development: [
          { category: 'Technical', value: 82 },
          { category: 'Physical', value: 74 },
          { category: 'Tactical', value: 71 },
          { category: 'Teamwork', value: 91 },
        ],

        badges: [
          {
            id: 1,
            name: 'First Goal',
            icon: '⚽',
            description: 'Scored first academy goal',
            earnedDate: 'Mar 2024',
          },
          {
            id: 2,
            name: 'Passing Master',
            icon: '🎯',
            description: 'Completed the passing challenge',
            earnedDate: 'Jun 2025',
          },
          {
            id: 3,
            name: 'Training Streak',
            icon: '🔥',
            description: 'Attended 10 training sessions in a row',
            earnedDate: 'Jan 2026',
          },
          {
            id: 4,
            name: 'Player of the Week',
            icon: '⭐',
            description: 'Outstanding training performance',
            earnedDate: 'Apr 2026',
          },
          {
            id: 5,
            name: 'Great Teammate',
            icon: '🤝',
            description: 'Demonstrated outstanding teamwork',
            earnedDate: 'May 2026',
          },
          {
            id: 6,
            name: 'Weak Foot Challenge',
            icon: '🦶',
            description: 'Completed the weak-foot challenge',
            earnedDate: 'Jul 2026',
          },
        ],

        personalBests: [
          {
            id: 1,
            label: 'Juggling',
            value: '47 touches',
            previousValue: '31',
          },
          {
            id: 2,
            label: 'Passing Challenge',
            value: '18 / 20',
            previousValue: '15 / 20',
          },
          {
            id: 3,
            label: '20m Sprint',
            value: '3.8 sec',
            previousValue: '4.1 sec',
          },
          {
            id: 4,
            label: 'Dribbling Course',
            value: '31 sec',
            previousValue: '35 sec',
          },
        ],

        goals: [
          {
            id: 1,
            title: 'Complete 30 consecutive juggles',
            completed: true,
          },
          {
            id: 2,
            title: 'Improve weak-foot passing',
            completed: false,
          },
          {
            id: 3,
            title: 'Improve defensive positioning',
            completed: false,
          },
        ],

        journey: [
          {
            id: 1,
            year: 2023,
            title: 'Joined Island Stars',
          },
          {
            id: 2,
            year: 2024,
            title: 'First Academy Goal',
          },
          {
            id: 3,
            year: 2025,
            title: 'First Tournament',
          },
          {
            id: 4,
            year: 2026,
            title: 'Promoted to U12',
          },
        ],

        highlights: [
          {
            id: 1,
            title: 'Tournament Goal',
            thumbnail: 'assets/images/highlights/highlight-1.jpg',
          },
          {
            id: 2,
            title: '1v1 Skill',
            thumbnail: 'assets/images/highlights/highlight-2.jpg',
          },
          {
            id: 3,
            title: 'Match Assist',
            thumbnail: 'assets/images/highlights/highlight-3.jpg',
          },
        ],

        coachAssessment: {
          title: 'Summer 2026 Assessment',
          strengths:
            'Excellent first touch and willingness to attack defenders in 1v1 situations.',
          currentFocus:
            'Improve decision-making after beating the first defender.',
          nextGoal:
            'Complete 8 out of 10 weak-foot passes during the next technical assessment.',
        },
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
        stats: [
          { label: 'Matches', value: 24 },
          { label: 'Goals', value: 8 },
          { label: 'Assists', value: 6 },
        ],

        development: [
          { category: 'Technical', value: 82 },
          { category: 'Physical', value: 74 },
          { category: 'Tactical', value: 71 },
          { category: 'Teamwork', value: 91 },
        ],

        badges: [
          {
            id: 1,
            name: 'First Goal',
            icon: '⚽',
            description: 'Scored first academy goal',
            earnedDate: 'Mar 2024',
          },
          {
            id: 2,
            name: 'Passing Master',
            icon: '🎯',
            description: 'Completed the passing challenge',
            earnedDate: 'Jun 2025',
          },
          {
            id: 3,
            name: 'Training Streak',
            icon: '🔥',
            description: 'Attended 10 training sessions in a row',
            earnedDate: 'Jan 2026',
          },
          {
            id: 4,
            name: 'Player of the Week',
            icon: '⭐',
            description: 'Outstanding training performance',
            earnedDate: 'Apr 2026',
          },
          {
            id: 5,
            name: 'Great Teammate',
            icon: '🤝',
            description: 'Demonstrated outstanding teamwork',
            earnedDate: 'May 2026',
          },
          {
            id: 6,
            name: 'Weak Foot Challenge',
            icon: '🦶',
            description: 'Completed the weak-foot challenge',
            earnedDate: 'Jul 2026',
          },
        ],

        personalBests: [
          {
            id: 1,
            label: 'Juggling',
            value: '47 touches',
            previousValue: '31',
          },
          {
            id: 2,
            label: 'Passing Challenge',
            value: '18 / 20',
            previousValue: '15 / 20',
          },
          {
            id: 3,
            label: '20m Sprint',
            value: '3.8 sec',
            previousValue: '4.1 sec',
          },
          {
            id: 4,
            label: 'Dribbling Course',
            value: '31 sec',
            previousValue: '35 sec',
          },
        ],

        goals: [
          {
            id: 1,
            title: 'Complete 30 consecutive juggles',
            completed: true,
          },
          {
            id: 2,
            title: 'Improve weak-foot passing',
            completed: false,
          },
          {
            id: 3,
            title: 'Improve defensive positioning',
            completed: false,
          },
        ],

        journey: [
          {
            id: 1,
            year: 2023,
            title: 'Joined Island Stars',
          },
          {
            id: 2,
            year: 2024,
            title: 'First Academy Goal',
          },
          {
            id: 3,
            year: 2025,
            title: 'First Tournament',
          },
          {
            id: 4,
            year: 2026,
            title: 'Promoted to U12',
          },
        ],

        highlights: [
          {
            id: 1,
            title: 'Tournament Goal',
            thumbnail: 'assets/images/highlights/highlight-1.jpg',
          },
          {
            id: 2,
            title: '1v1 Skill',
            thumbnail: 'assets/images/highlights/highlight-2.jpg',
          },
          {
            id: 3,
            title: 'Match Assist',
            thumbnail: 'assets/images/highlights/highlight-3.jpg',
          },
        ],

        coachAssessment: {
          title: 'Summer 2026 Assessment',
          strengths:
            'Excellent first touch and willingness to attack defenders in 1v1 situations.',
          currentFocus:
            'Improve decision-making after beating the first defender.',
          nextGoal:
            'Complete 8 out of 10 weak-foot passes during the next technical assessment.',
        },
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
        stats: [
          { label: 'Matches', value: 24 },
          { label: 'Goals', value: 8 },
          { label: 'Assists', value: 6 },
        ],

        development: [
          { category: 'Technical', value: 82 },
          { category: 'Physical', value: 74 },
          { category: 'Tactical', value: 71 },
          { category: 'Teamwork', value: 91 },
        ],

        badges: [
          {
            id: 1,
            name: 'First Goal',
            icon: '⚽',
            description: 'Scored first academy goal',
            earnedDate: 'Mar 2024',
          },
          {
            id: 2,
            name: 'Passing Master',
            icon: '🎯',
            description: 'Completed the passing challenge',
            earnedDate: 'Jun 2025',
          },
          {
            id: 3,
            name: 'Training Streak',
            icon: '🔥',
            description: 'Attended 10 training sessions in a row',
            earnedDate: 'Jan 2026',
          },
          {
            id: 4,
            name: 'Player of the Week',
            icon: '⭐',
            description: 'Outstanding training performance',
            earnedDate: 'Apr 2026',
          },
          {
            id: 5,
            name: 'Great Teammate',
            icon: '🤝',
            description: 'Demonstrated outstanding teamwork',
            earnedDate: 'May 2026',
          },
          {
            id: 6,
            name: 'Weak Foot Challenge',
            icon: '🦶',
            description: 'Completed the weak-foot challenge',
            earnedDate: 'Jul 2026',
          },
        ],

        personalBests: [
          {
            id: 1,
            label: 'Juggling',
            value: '47 touches',
            previousValue: '31',
          },
          {
            id: 2,
            label: 'Passing Challenge',
            value: '18 / 20',
            previousValue: '15 / 20',
          },
          {
            id: 3,
            label: '20m Sprint',
            value: '3.8 sec',
            previousValue: '4.1 sec',
          },
          {
            id: 4,
            label: 'Dribbling Course',
            value: '31 sec',
            previousValue: '35 sec',
          },
        ],

        goals: [
          {
            id: 1,
            title: 'Complete 30 consecutive juggles',
            completed: true,
          },
          {
            id: 2,
            title: 'Improve weak-foot passing',
            completed: false,
          },
          {
            id: 3,
            title: 'Improve defensive positioning',
            completed: false,
          },
        ],

        journey: [
          {
            id: 1,
            year: 2023,
            title: 'Joined Island Stars',
          },
          {
            id: 2,
            year: 2024,
            title: 'First Academy Goal',
          },
          {
            id: 3,
            year: 2025,
            title: 'First Tournament',
          },
          {
            id: 4,
            year: 2026,
            title: 'Promoted to U12',
          },
        ],

        highlights: [
          {
            id: 1,
            title: 'Tournament Goal',
            thumbnail: 'assets/images/highlights/highlight-1.jpg',
          },
          {
            id: 2,
            title: '1v1 Skill',
            thumbnail: 'assets/images/highlights/highlight-2.jpg',
          },
          {
            id: 3,
            title: 'Match Assist',
            thumbnail: 'assets/images/highlights/highlight-3.jpg',
          },
        ],

        coachAssessment: {
          title: 'Summer 2026 Assessment',
          strengths:
            'Excellent first touch and willingness to attack defenders in 1v1 situations.',
          currentFocus:
            'Improve decision-making after beating the first defender.',
          nextGoal:
            'Complete 8 out of 10 weak-foot passes during the next technical assessment.',
        },
      },
      {
        id: 8,
        firstName: 'Harry',
        lastName: 'Maguire',
        age: 10,
        ageGroup: 'U12',
        team: 'U12 Development',
        jerseyNumber: 17,
        primaryPosition: 'Defender',
        preferredFoot: 'Right',
        yearsAtAcademy: 2,
        season: '2026',
        photo: 'assets/img/coaches/fabian.jpg',
      },
      {
        id: 9,
        firstName: 'Bruno',
        lastName: 'Fernandes',
        age: 10,
        ageGroup: 'U12',
        team: 'U12 Development',
        jerseyNumber: 7,
        primaryPosition: 'Midfielder',
        preferredFoot: 'Right',
        yearsAtAcademy: 2,
        season: '2026',
        photo: 'assets/img/coaches/shana.jpg',
      },
      {
        id: 10,
        firstName: 'Mason',
        lastName: 'Mount',
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
        id: 11,
        firstName: 'Marcus',
        lastName: 'Rashford',
        age: 10,
        ageGroup: 'U12',
        team: 'U12 Development',
        jerseyNumber: 7,
        primaryPosition: 'Midfielder',
        preferredFoot: 'Right',
        yearsAtAcademy: 2,
        season: '2026',
        photo: 'assets/img/coaches/malcolm.jpg',
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
