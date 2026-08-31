import { PlayerBadge } from './player-badge.model';

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth?: string;
  ageGroup: string;
  team: string;
  jerseyNumber: number;
  primaryPosition: string;
  secondaryPosition?: string;
  preferredFoot: 'Left' | 'Right' | 'Both';
  yearsAtAcademy: number;
  season: string;
  photo: string;
  badges?: PlayerBadge[];
}
