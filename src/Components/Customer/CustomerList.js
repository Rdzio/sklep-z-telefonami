import React from "react";

import Customer from "./Customer";

class CustomerList extends React.Component {
  render() {
    return (
      <div className="customer-space">
        <h2 className="customer-header">Co mówią o nas klienci?</h2>
        <div className="customer-container">
          <Customer
            name="Ania z Gdańska"
            rating="★★★★☆"
            comment="„Świetny sklep”"
          />
          <Customer
            name="Jakub z Kwiatonowic"
            rating="★★★★★"
            comment="„Jeden z lepszych sklepów. Pomaga mi w pracy oraz karmieniu żółwia. Ułatwia kontakt z żoną, a także ucieczki przed psem sąsiada. Mój fiat 126p dzięki temu skepowi zyskał dodatkowe 10 koni mechanicznych co pozwala na bezproblemowe wycieczki międzygalaktycznem komputer uruchamia minecrafta w 2000000 klatek na sekundę, a ojciec wraca trzeźwy i w godzinach wczesnych wieczornych!
            Ciężko w to uwierzyć, ale ten sklep pomaga w leczeniu raka i czkawki! Niesamowite! Polecam serdecznie!”"
          />
        </div>
      </div>
    );
  }
}

export default CustomerList;
