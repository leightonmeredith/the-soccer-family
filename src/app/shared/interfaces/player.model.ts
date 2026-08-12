import { DevelopmentGoal } from "./dev-goal";
import { DevelopmentRating } from "./dev-rating.model";
import { JourneyEvent } from "./journey-event.model";
import { PersonalBest } from "./personal-best.model";
import { PlayerBadge } from "./player-badge.model";
import { Highlight } from "./player-highlight.model";
import { PlayerStat } from "./player-stat.model";

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
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
}

export interface PlayerDetails extends Player {
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
