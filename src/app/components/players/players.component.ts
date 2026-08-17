import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { MatDialog } from '@angular/material/dialog';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../shared/interfaces/player.model';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

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
  private readonly playerService = inject(PlayerService);

  readonly players$: Observable<Player[]> = this.playerService.getPlayers();

  readonly players = toSignal(this.players$, {
    initialValue: [] as Player[],
  });

  readonly selectedPlayer = signal<Player | null>(null);

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

  openPlayer(player: Player): void {
    this.dialog.open(PlayerComponent, {
      data: { id: player.id },
      width: '1200px',
      maxWidth: '95vw',
      maxHeight: '94vh',

      autoFocus: false,
      restoreFocus: true,

      panelClass: 'player-profile-dialog',
    });
  }

  getFullName(player: Player): string {
  const isSeniorPlayer = computed(() => player.age >= 18);
  return `${player.firstName} ${isSeniorPlayer() ? player.lastName : player.lastName.substring(0, 1) + '.'}`;
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
