import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

type DevelopmentCategory =
  | 'Technical'
  | 'Physical'
  | 'Tactical'
  | 'Teamwork';

interface PlayerStat {
  label: string;
  value: string | number;
}

interface DevelopmentRating {
  category: DevelopmentCategory;
  value: number;
}

interface PlayerBadge {
  id: number;
  name: string;
  icon: string;
  description: string;
  earnedDate: string;
}

interface PersonalBest {
  id: number;
  label: string;
  value: string;
  previousValue?: string;
}

interface DevelopmentGoal {
  id: number;
  title: string;
  completed: boolean;
}

interface JourneyEvent {
  id: number;
  year: number;
  title: string;
  description?: string;
}

interface Highlight {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl?: string;
}

interface Player {
  id: number;
  firstName: string;
  lastInitial: string;
  age: number;
  ageGroup: string;
  team: string;
  jerseyNumber: number;
  primaryPosition: string;
  secondaryPosition?: string;
  preferredFoot: 'Left' | 'Right' | 'Both';
  yearsAtAcademy: number;
  season: string;
  photo: string;

  stats: PlayerStat[];
  development: DevelopmentRating[];
  badges: PlayerBadge[];
  personalBests: PersonalBest[];
  goals: DevelopmentGoal[];
  journey: JourneyEvent[];
  highlights: Highlight[];

  coachAssessment?: {
    title: string;
    strengths: string;
    currentFocus: string;
    nextGoal: string;
  };
}

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {


  readonly playerDetails = signal<Player>({
    id: 11,
    firstName: 'Malik',
    lastInitial: 'J.',
    age: 5,
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
  });

  readonly player = inject<Player>(
    MAT_DIALOG_DATA,
  );

  private readonly dialogRef =
    inject(MatDialogRef<PlayerComponent>);

  readonly displayName =
    `${this.player.firstName} ${this.player.lastInitial}`;

  close(): void {
    this.dialogRef.close();
  }

  /**
   * 4–7:
   * Fun, skills, participation and achievements.
   */
  readonly isFoundationPlayer = computed(
    () => this.playerDetails().age >= 4 && this.playerDetails().age <= 7
  );

  /**
   * 8–12:
   * Development plus basic competitive information.
   */
  readonly isDevelopmentPlayer = computed(
    () => this.playerDetails().age >= 8 && this.playerDetails().age <= 12
  );

  /**
   * 13–17:
   * Full performance and recruitment profile.
   */
  readonly isPerformancePlayer = computed(
    () => this.playerDetails().age >= 13 && this.playerDetails().age <= 17
  );

  // readonly displayName = computed(
  //   () => `${this.playerDetails().firstName} ${this.playerDetails().lastInitial}`
  // );

  readonly completedGoals = computed(
    () => this.playerDetails().goals.filter((goal) => goal.completed).length
  );

  readonly totalGoals = computed(() => this.playerDetails().goals.length);

  readonly badgeCount = computed(() => this.playerDetails().badges.length);

  readonly averageDevelopment = computed(() => {
    const development = this.playerDetails().development;

    if (!development.length) {
      return 0;
    }

    return Math.round(
      development.reduce((total, item) => total + item.value, 0) /
        development.length
    );
  });

  getDevelopmentLabel(value: number): string {
    if (value >= 90) return 'Excellent';
    if (value >= 80) return 'Very Good';
    if (value >= 70) return 'Good';
    if (value >= 60) return 'Developing';

    return 'Building';
  }

  playHighlight(highlight: Highlight): void {
    if (!highlight.videoUrl) {
      return;
    }

    window.open(highlight.videoUrl, '_blank', 'noopener,noreferrer');
  }
}
