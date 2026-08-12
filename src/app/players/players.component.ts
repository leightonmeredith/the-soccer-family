import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { MatDialog } from '@angular/material/dialog';

export interface RosterPlayer {
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

type RosterGroup = 'U6' | 'U12' | 'U17' | 'Over 18';

interface RosterTab {
  label: RosterGroup;
  count: number;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersComponent {
  private readonly dialog = inject(MatDialog);

  /*
   * Replace this mock data with your API/service later.
   */
  readonly players = signal<RosterPlayer[]>([
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

  readonly selectedPlayer = signal<RosterPlayer | null>(null);

  /*
   * Finds which tabs actually contain players.
   *
   * Empty age groups will never appear.
   */
  readonly availableTabs = computed<RosterTab[]>(() => {
    const players = this.players();

    const tabs: RosterTab[] = [
      {
        label: 'U6',
        count: players.filter(
          (player) => this.getPlayerGroup(player.age) === 'U6',
        ).length,
      },
      {
        label: 'U12',
        count: players.filter(
          (player) => this.getPlayerGroup(player.age) === 'U12',
        ).length,
      },
      {
        label: 'U17',
        count: players.filter(
          (player) => this.getPlayerGroup(player.age) === 'U17',
        ).length,
      },
      {
        label: 'Over 18',
        count: players.filter(
          (player) => this.getPlayerGroup(player.age) === 'Over 18',
        ).length,
      },
    ];

    return tabs.filter((tab) => tab.count > 0);
  });

  /*
   * Defaults to the first age group containing players.
   */
  readonly activeTab = signal<RosterGroup | null>(null);

  readonly activeTabLabel = computed(() => {
    return this.activeTab() ?? this.availableTabs()[0]?.label ?? null;
  });

  readonly filteredPlayers = computed(() => {
    const activeGroup = this.activeTabLabel();

    if (!activeGroup) {
      return [];
    }

    return this.players()
      .filter((player) => this.getPlayerGroup(player.age) === activeGroup)
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
  });

  readonly totalPlayers = computed(() => this.players().length);

  setActiveTab(tab: RosterGroup): void {
    this.activeTab.set(tab);
  }

  openPlayer(player: RosterPlayer): void {
    this.dialog.open(PlayerComponent, {
      data: { player },
      width: '1200px',
      maxWidth: '95vw',
      maxHeight: '94vh',

      autoFocus: false,
      restoreFocus: true,

      panelClass: 'player-profile-dialog',
    });
    // this.selectedPlayer.set(player);

    // this.playerDialog?.nativeElement.showModal();
  }

  // closePlayer(): void {
  //   this.playerDialog?.nativeElement.close();
  //   this.selectedPlayer.set(null);
  // }

  // onDialogClick(event: MouseEvent): void {
  //   const dialog = event.currentTarget as HTMLDialogElement;

  //   /*
  //    * Clicking directly on the dialog element means
  //    * the user clicked the backdrop rather than its content.
  //    */
  //   if (event.target === dialog) {
  //     this.closePlayer();
  //   }
  // }

  // onDialogClose(): void {
  //   this.selectedPlayer.set(null);
  // }

  getFullName(player: RosterPlayer): string {
    return `${player.firstName} ${player.lastName}`;
  }

  private getPlayerGroup(age: number): RosterGroup {
    if (age <= 6) {
      return 'U6';
    }

    if (age <= 12) {
      return 'U12';
    }

    if (age <= 17) {
      return 'U17';
    }

    return 'Over 18';
  }
}
