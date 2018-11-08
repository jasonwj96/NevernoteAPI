export class Note {
  Id: number;
  title: string;
  description: string;
  lastUpdated: string;
  isFavorite: boolean;
  tags: string[];

  constructor(
    Id: number,
    title: string,
    description: string,
    lastUpdated: string
  ) {
    this.Id = Id;
    this.title = title;
    this.description = description;
    this.lastUpdated = lastUpdated;
    this.isFavorite = false;
    this.tags = null;
  }
}
