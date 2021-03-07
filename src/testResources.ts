import { ResponseType } from "./app/ResponseTypes";
import { BetType } from "./redux/BetSlipSlice";

export const exampleResponse: ResponseType = [
  {
    "id": "EVT_1",
    "name": "Real Madrid vs Barcelona",
    "markets": [
      {
        "id": "MKT_1",
        "name": "Team to Win",
        "selections": [
          {
            "id": "SEL_1",
            "name": "Real Madrid",
            "price": 1.23
          },
          {
            "id": "SEL_2",
            "name": "Barcelona",
            "price": 2.05
          }
        ]
      }
    ]
  },
];

export const exampleBet: BetType = {
  eventName: exampleResponse[0].name,
  eventId: exampleResponse[0].id,
  marketName: exampleResponse[0].markets[0].name,
  marketId: exampleResponse[0].markets[0].id,
  selectionName: exampleResponse[0].markets[0].selections[0].name,
  selectionId: exampleResponse[0].markets[0].selections[0].id,
  selectionPrice: exampleResponse[0].markets[0].selections[0].price,
};
