/** Selection Entity */
export type SelectionType = {
  id: string;
  name: string;
  price: number;
}

/** Market Entity */
export type MarketType = {
  id: string;
  name: string;
  selections: SelectionType[];
}

/** Event Entity */
export type EventType = {
  id: string;
  name: string;
  markets: MarketType[];
};

/** The response type of the API call */
export type ResponseType = EventType[];





