export class Note {
  Id: number;
  title: string;
  description: string;
  dateCreated: string;
  isFavorite: boolean;
  tags: string[];

  constructor(
    Id: number,
    title: string,
    description: string,
    dateCreated: string
  ) {
    this.Id = Id;
    this.title = title;
    this.description = description;
    this.dateCreated = dateCreated;
    this.isFavorite = false;
    this.tags = null;
  }
}
