export class UpdateSessionDto {
  public boxId?: string;
  public trainerId?: string | undefined;
  public acceptWorkout?: boolean;
  public friend?: boolean;
  public date?: string;
  public hour?: string;
}
