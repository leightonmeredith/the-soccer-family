import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Highlight } from '../../../shared/interfaces/player-highlight.model';
import { PlayerService } from '../../../services/player.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Player } from '../../../shared/interfaces/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  private readonly playerService = inject(PlayerService);
  readonly player = inject<Player>(MAT_DIALOG_DATA);

  readonly playerDetails$ = this.playerService.getPlayer(this.player.id);

  readonly playerDetails = toSignal(this.playerDetails$, {
    initialValue: {} as Player,
  });

  private readonly dialogRef = inject(MatDialogRef<PlayerComponent>);

  close(): void {
    this.dialogRef.close();
  }

  /**
   * 4–7:
   * Fun, skills, participation and achievements.
   */
  readonly isFoundationPlayer = computed(
    () => this.playerDetails().age >= 4 && this.playerDetails().age <= 7,
  );

  /**
   * 8–12:
   * Development plus basic competitive information.
   */
  readonly isDevelopmentPlayer = computed(
    () => this.playerDetails().age >= 8 && this.playerDetails().age <= 12,
  );

  /**
   * 13–17:
   * Full performance and recruitment profile.
   */
  readonly isPerformancePlayer = computed(
    () => this.playerDetails().age >= 13 && this.playerDetails().age <= 17,
  );

  /**
   * 18+:
   * Similar to 13-17 but can display last name.
   */
  readonly isSeniorPlayer = computed(() => this.playerDetails().age >= 18);

  readonly displayName = computed(
    () =>
      `${this.playerDetails().firstName} ${this.isSeniorPlayer() ? this.playerDetails().lastName : this.playerDetails().lastName.substring(0, 1) + '.'}`,
  );

  readonly completedGoals = computed(
    () =>
      this.playerDetails().goals?.filter((goal) => goal.completed).length || 0,
  );

  readonly totalGoals = computed(() => this.playerDetails().goals?.length || 0);

  readonly badgeCount = computed(
    () => this.playerDetails().badges?.length || 0,
  );

  readonly averageDevelopment = computed(() => {
    const development = this.playerDetails().development;

    if (!development?.length) {
      return 0;
    }

    return Math.round(
      development.reduce((total, item) => total + item.value, 0) /
        development.length,
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
