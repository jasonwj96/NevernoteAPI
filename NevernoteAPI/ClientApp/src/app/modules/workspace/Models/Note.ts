export class Note {
  ID: int;
  title: string;
  description: string;
  dateCreated: string;
  isFavorite: boolean;
  tags: string[];

  constructor(
    ID: int,
    title: string,
    description: string,
    dateCreated: string
  ) {
    this.ID = ID;
    this.title = title;
    this.description = description;
    this.dateCreated = dateCreated;
    this.isFavorite = false;
    this.tags = null;
  }
}
