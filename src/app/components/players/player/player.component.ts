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

  readonly displayName = computed(() => {
    const isSeniorPlayer = this.playerDetails().age >= 18;
    return `${this.playerDetails().firstName} ${isSeniorPlayer ? this.playerDetails().lastName : this.playerDetails().lastName.substring(0, 1) + '.'}`;
  });

  readonly badgeCount = computed(
    () => this.playerDetails().badges?.length || 0,
  );

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
