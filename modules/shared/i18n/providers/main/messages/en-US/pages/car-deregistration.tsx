export default {
  welcome: {
    title: 'Car deregistration in Poland',
    button: {
      title: 'Deregister a car',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'How and where should I deregister a car ?',
      content:
        "First of all, you need to contact the city municipal institution (Urząd Miejski) at the place of the car’s registration, preferably already having all the necessary documents with you. Forms such as de-registration application and personal data usage agreement can be obtained locally or pre-downloaded and printed. Depending on the city, registration can be done online or on a first-come, first-served basis to the inspector's window\n" +
        '\n' +
        'The inspector himself will directly check your documents for compliance with the requirements, and if no errors are found, you will be given a temporary registration certificate on the spot along with a certificate of deregistration of the car and transit numbers instead of the usual ones, which will also have to be handed over when applying\n' +
        '\n' +
        'Replacing a registration certificate rarely lasts longer than 30 days, so it’s worth checking your email inbox so you don’t miss the date you receive it\n'
    },
    {
      title: 'What documents are required ?',
      content:
        'It is advisable to come to the inspector being ready, which means having all necessary documents in order. These include:\n' +
        '\n' +
        '- Completed application forms for car deregistration and consent to the processing of your personal data. They can be obtained on site or pre-printed after downloading them here\n' +
        '- Passport or an identity card, if you have a Pole’s card or a residence permit, you should also bring it\n' +
        '- Technical passport and registration document for the car, if available\n' +
        '- The document confirming a goal of car’s deregistration (this can be either a sales contract, a transit document or a confirmation of disposal)\n' +
        '- Number plates, since in any of the above scenarios they are subject to destruction and removal of information from the database\n' +
        '- An insurance policy valid for at least 2 more months, registered in your name\n' +
        '- A copy of the sale contract or invoice for vehicle purchase\n' +
        '\n' +
        'If a third party is involved in the deregistration process, you will also need to provide an appropriate power of attorney and proof of payment for its production\n'
    },
    {
      title: 'What else do you need to remember when deregistering a vehicle ?',
      content:
        'First of all, you need to determine whether there is a reason to refuse to deregister your car. There are not many possible reasons, however, the inspector will refuse your application if the list of documents does not include:\n' +
        '- Technical passport. Without it, it is impossible to legally carry out any procedure related to the vehicle\n' +
        '- Confirmation of passing technical inspection. The trick is that without it, the car can be deregistered, but you will not receive transit numbers for it, which means that further operations will be impossible\n' +
        '- A document confirming your ownership. Sale agreement, invoice, deed of gift or certificate from the retailer - to remove a car’s registration, you must have at least one of them\n' +
        '- Inconsistencies in the history of car owners. When buying a car second hand, the previous owner is obliged to provide at least copies of all the car resale agreements to each owner before the moment of your purchase\n' +
        '\n' +
        'It is important to check the availability of all contracts, the correspondence of dates, names, the presence of signatures, as well as the compliance of the data in the contracts with the data from the car’s tech sheet. Any discrepancy can not only prevent the car from being deregistered or sold, but can also lead to an investigation, which will also take a lot of time and effort\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Approximate times:',
        content: '1 working day for cases where investigation is not required'
      },
      price: {
        title: 'Service cost:',
        content: 'PLN 10 - municipal institution fee'
      }
    },
    rightSide: {
      description: {
        title: 'Service Description:',
        content:
          'Almost every visitor who bought a car in Europe was convinced that the prices for transport here are very democratic, and even a person of average income can afford a quite good car. After getting used to a particular car, it is difficult to part with it when returning home, so most consider the possibility of taking it with them\n' +
          '\n' +
          'To implement this simple plan, you need to go through an important stage - removing the car from the register, that means deleting its data from local registers in order to further re-register it in the country of residence for the purpose of further use or sale\n'
      },
      button: {
        title: 'Deregister a car',
        onClick: () => {}
      }
    }
  }
};
