export class Note {
  id: string;
  title: string;
  description: string;
  dateCreated: string;
  isFavorite: boolean;
  tags: string[];

  constructor(
    id: string,
    title: string,
    description: string,
    dateCreated: string
  ) {
    this.id = id.trim();
    this.title = title.trim();
    this.description = description.trim();
    this.dateCreated = dateCreated.trim();
    this.isFavorite = false;
    this.tags = null;
  }
}
