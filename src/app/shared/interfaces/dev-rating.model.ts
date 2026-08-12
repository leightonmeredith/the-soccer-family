export interface DevelopmentRating {
  category: DevelopmentCategory;
  value: number;
}

type DevelopmentCategory =
  | 'Technical'
  | 'Physical'
  | 'Tactical'
  | 'Teamwork';
