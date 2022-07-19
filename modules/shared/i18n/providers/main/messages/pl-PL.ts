import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';

export default {
  [LOCALES.POLISH]: {
    renewalDrivingLicense: {
      welcome: {
        title: 'Zmiana prawa jazdy na polskie dla obcokrajowców',
        button: {
          title: 'ROZPOCZNIJ',
          onClick: () => {}
        }
      },
      serviceRegistration: {
        leftSide: {
          filingApplication: 'do 3 dni roboczych',
          registration: 'od 30 do 50 dni roboczych od momentu złożenia do momentu otrzymania',
          price: '105 zł dla kategorji C1, C, D1, D, C1+E, C+E, D1+E, D+E',
          reMaking: 'Wyrobienie karty: 50 złotych'
        },
        rightSide: {
          description:
            'Posiadając ważne prawo jazdy swojego kraju masz prawo do przerobienia go na europejskie, co pozwala nie tylko na swobodne poruszanie się po krajach Unii Europejskiej oraz krajów Schengen, ale także na oficjalne zatrudnienie w branży transportowej . Co nie mniej ważne, taki dokument znajduje się w polskiej ujednoliconej bazie danych, więc nie ma potrzeby trzymania go pod ręką podczas wyjazdów, co dla wielu będzie znaczącym plusem!',
          button: {
            title: 'DOWIEDZ SIĘ WIĘCEJ',
            onClick: () => {}
          }
        }
      }
    }
  }
};
