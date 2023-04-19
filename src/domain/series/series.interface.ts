export interface AddSeriesProps {
  authorFirstName: string;
  authorId: string;
  authorLastName: string;
  name: string;
  numberOfBooks: number;
}

export interface UpdateSeriesProps {
  authorId: string;
  id: string;
  name: string;
  numberOfBooks: number;
}
