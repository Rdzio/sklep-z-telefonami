import React, { Component } from "react";
import "../src/scss/partials/kontakt.scss";

import Header from "./components/Header/Header";

import Footer from "./components/Footer";

class Regulamin extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container">
            <main>
                <h1>Regulamin</h1><br/>
                <p>
                <strong>I. Postanowienia ogólne</strong><br/>
                  1. W regulaminie określiliśmy zasady, na jakich prowadzimy sprzedaż za pośrednictwem sklepu internetowego pod adresem sklep-z-telefonami.web.app.<br/>
                  2. Regulamin jest integralną częścią umowy sprzedaży produktów, które oferujemy.<br/>
                  3. W sklepie internetowym sklep-z-telefonami.web.app nie prowadzimy sprzedaży hurtowej.<br/>
                  4. Zanim zrobisz zakupy w naszym sklepie, masz obowiązek zapoznać się z regulaminem.<br/>
                  <br/><br/>
                  <strong>II. Przedmiot sprzedaży</strong><br/>
                  1. Przedmiotem sprzedaży są produkty, które prezentujemy na stronach WWW sklepu internetowego sklep-z-telefonami.web.app.<br/>
                  2. Wszystkie produkty w sklepie internetowym sklep-z-telefonami.web.app są fabrycznie nowe, pochodzą od sprawdzonych dystrybutorów, którzy wprowadzają produkty legalnie na polski rynek.<br/>
                  3. Jako sprzedawca mamy obowiązek dostarczyć rzeczy wolne od wad.<br/>
                  <br/><br/>
                  <strong>III. Płatności</strong><br/>
                  1. Ceny wszystkich produktów na stronach WWW sklepu internetowego sklep-z-telefonami.web.app są wyrażone w złotych polskich i zawierają podatek VAT. Cena brutto produktu nie obejmuje kosztu jego przesyłki.<br/>
                  2. Faktura jest wystawiana w formie papierowej.<br/>
                  3. Nie odpowiadamy za błędne dane, które wskażesz jako dane do faktury VAT podczas rejestracji lub składania zamówienia.<br/>
                  4. Każdą fakturę dostarczymy wraz z zamówieniem, na adres który podasz w formularzu podczas zamawiania.<br/>
                  <br/><br/>
                  <strong>IV. Dostawa</strong><br/>
                  1. Produkty zamawiane w sklepie Internetowym sklep-z-telefonami.web.app dostarczamy wyłącznie na terytorium Rzeczypospolitej Polskiej.<br/>
                  2. Koszt dostawy wynosi 20 złotych dla każdego zamówienia poniżej 1000 złotych.<br/>
                  3. Umowę sprzedaży realizujemy od 1 do 10 dni roboczych.<br/>
                  <br/><br/>
                  <strong>V. Prawo do odstąpienia od umowy</strong><br/>
                  1. Jako Klient będący konsumentem możesz odstąpić od umowy zawartej na odległość. Masz na to 15 dni od dnia wydania rzeczy. Nie musisz podawać przyczyny. Oświadczenie to możesz wysłać na nasz adres gorkasklep@gmail.com.<br/>
                  2. Termin 15-dniowy liczy się od dnia wydania rzeczy, rozumianego jako objęcie rzeczy w posiadanie przez konsumenta lub wskazaną przez konsumenta osobę, inną niż przewoźnik.<br/>
                  3. Odpowiadasz za zmniejszenie wartości rzeczy, które jest wynikiem korzystania z niej w sposób wykraczający poza konieczny do stwierdzenia jej charakteru, cech i funkcjonowania.<br/>
                  4. Większość produktów dostępnych w naszym sklepie internetowym posiada folie ochronne na elementach najbardziej podatnych na uszkodzenia. Zalecamy nie zdejmować folii ochronnych z tych elementów przez 15 dni od doręczenia produktu.<br/>
                  5. Produkt odsyłasz niezwłocznie, do 14 dni po złożeniu oświadczenia o odstąpieniu od umowy.<br/>
                  6. Jeśli w terminie 15 dni od dnia wydania rzeczy odstępujesz od umowy bez podania przyczyny, ponosisz koszty bezpośredniego odesłania (zwrotu) nam produktu.<br/>
                  <br/><br/>
                  <strong>VI. Reklamacje</strong><br/>
                  1. Jeśli zawrzesz z nami umowę sprzedaży, masz prawo do reklamacji.<br/>
                  2. Oczekujemy, że zgłosisz nam usterki techniczne produktu.<br/>
                  3. Reklamację produktu zakupionego w sklepie internetowym zalecamy zgłosić przez nasz adres gorkasklep@gmail.com.<br/>
                  4. Kiedy przyjmiemy zgłoszenie reklamacyjne, wysyłamy Ci wiadomość e-mail w której podajemy instrukcję postępowania reklamacyjnego.<br/>
                  5. Zaczekaj z wysłaniem produktu, aż dostaniesz od nas wiadomość z instrukcją postępowania reklamacyjnego.<br/>
                  6. Zalecamy czytelnie oznaczyć przesyłkę reklamacyjną.<br/>
                  7. Po rozpatrzeniu reklamacji otrzymujesz dokumentację z wynikiem ekspertyzy serwisowej.<br/>
                </p>
            </main>
            <Footer />
          </div>
      </div>
    );
  }
}

export default Regulamin;
