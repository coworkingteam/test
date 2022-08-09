export default {
  welcome: {
    title: 'Car registration in Poland',
    button: {
      title: 'Получить карту',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'What documents are required to apply for registration ?',
      content:
        'First of all, you need to make sure that you have all the documents confirming the legality of your car purchase, as well as documents that the previous owner is obliged to transfer to the new one, namely:\n' +
        '- Sale agreement document, containing the data of the seller, the buyer, information about the transport and the cost of the transaction itself\n' +
        '- Vehicle certificate, that is, a document containing data on its make, model, engine power, gas tank capacity, etc.\n' +
        '- Registration certificate, the confirmation of the car’s registration and belonging (When buying a car from hand, it will contain the data of the previous owner, when buying in brand new, you need to provide confirmation of the purchase of the car instead (a check, invoice or sale contract will do)\n' +
        '- Insurance policy (if applied), if it is still valid. Otherwise, it will need to be issued (instruction how to do this can be found here)\n' +
        '\n' +
        ' To register a car, you need to submit an application form and a bundle of relevant documents to the public transport department of the local municipal government (Wydział Komunikacji i Transportu Starostwa Powiatowego). In addition to the documents listed above, you will need:\n' +
        '- Statement of the owner of the car on its registration, the form itself can be found here\n' +
        '- Plates with car numbers if it had a previous owner\n' +
        '- Your passport or other identity card (if you have any) along with a visa or other document confirming the legality of your stay in the country. The validity of the registration will depend on expiration date of this document, so ideally you should not buy a car a few months before the expiration of your visa or residence permit\n' +
        '- If the owner of the car is a company and not an individual, you need to provide an extract from KRS (Krajowy Rejestr Sądowy) on company’s registration\n' +
        '- In the case of registering a car in the name of a third party, you need to prepare a notarized attorney and its certified translation, if it was issued in another country\n'
    },
    {
      title: 'What is the cost of the procedure and what does it depend on ?',
      content:
        'If we are talking about a vehicle purchased or previously registered in Poland, you will first need to contact the tax office at your place of residence. There you will need to fill out the RCC-3 form (the form itself can be obtained directly in the office or downloaded from the official website) and pay the tax fee for the vehicle purchase, which is 2% of its gross value. You have 14 days from the date of purchase to pay this tax.\n' +
        '\n' +
        'Car registration also implies additional fees and charges, the amount of which depends mainly on which number plates the vehicle is being registered. The owner has three options here:\n' +
        '\n' +
        '- Registration on the old number that the previous owner received during registration. In this case, re-registration of a car for you will cost only PLN 81.00\n' +
        '- Registration on new numbers will also oblige you to pay a fee for their production and addition to the database, which will raise the cost to PLN 180.50\n' +
        '- Registration on special ordered numbers. The price of plates with the text of your choice will cost PLN 1000, but the rest of the fees remain unchanged, namely:\n' +
        '\n' +
        '- PLN 54.00 for a new registration document, this price includes almost all the fees of the municipal institution itself\n' +
        '- PLN 13.50 is the cost of a temporary document that allows you to use the car while the registration is in progress\n' +
        '- PLN 18.50 have to be paid for a holographic windscreen sticker confirming that the car has been registered\n' +
        '- PLN 12.50 for a holographic sticker on the numbers, confirming the legality of their origin\n' +
        '- PLN 2.00 fee for taking your application for consideration\n' +
        '\n' +
        'In case of transport registration for a third party, you will need to pay a fee of PLN 17 for the preparation of an official attorney document for a car\n'
    },
    {
      title: 'What should be kept in mind when registering a car?',
      content:
        'In order not to get into an awkward situation when applying, you need to make sure that all documents are in order and the car being registered matches all the requirements. First of all, you should make sure that:\n' +
        '\n' +
        '- The vehicle has been serviced and expires in 3 months at the earliest, otherwise registration may be denied\n' +
        '- The car is insured with a mandatory insurance policy, and it is registered (or re-registered) on your name as the new owner. If the former owner is unavailable, you can terminate his contract with the insurance company by yourself as the new owner of the vehicle\n' +
        '\n' +
        'If the car was purchased for further resale, then a certificate of its sale must be delivered to the municipal institution that registered the vehicle before the purchase, or a similar certificate must be given to your local tax office by filling out the appropriate form (it can be obtained there or downloaded on the official site)\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Approximate terms:',
        content: 'Up to 30 days from application submission to receipt'
      },
      registration: {
        title: 'Регистрация:',
        content: 'От заявки до перевыпуска 30 до 50 рабочих дней'
      },
      price: {
        title: 'Service cost:',
        content:
          'Up to PLN 100 for registration with old number plates\n' +
          'Up to PLN 200 for registration with new number plates\n' +
          'Up to PLN 1200 for registration with special number plates\n',
        reMaking: '+ Tax equal 2% of the car price'
      }
    },
    rightSide: {
      description: {
        title: 'Service Description:',
        content:
          'For a grown man, whether he lives in Oslo, London or Warsaw, a car will always be a symbol of luxury and well-being. Many come to Poland for better paid jobs, so buying a car here becomes a matter of time. Having your own vehicle gives not only freedom of movement around the city and country, but also opens up prospects for employment!\n' +
          '\n' +
          'The second tempting factor for buying a car in Europe is its price, since the principle of transport taxation here is very financially pleasing. The last obstacle before becoming a happy owner of the shiny Mercedes is its registration, so our team will be happy to take over this process so that you can take the wheel as soon as possible\n'
      },
      button: {
        title: 'Заменить права',
        onClick: () => {}
      }
    }
  }
};
