export default {
  welcome: {
    title: 'Driver license reissuing according to European standards',
    button: {
      title: 'License re-issuing',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'How to apply for your driver’s license reissuing ?',
      content:
        "- Complete the application form for reissuing the driver's license. It can be acquired directly from the municipal institution your district is attached to, or be downloaded from its official website.\n" +
        '- Direct the package of documents along with the form and all fees confirmations to your district inspector. Instead of an old license you will receive a temporary one that is valid until your one is reissued.\n' +
        '* Appointment with your inspector can take place both by registration and on live queue basis\n' +
        '- Soon your certificate will be sent to the country of issue in order to verify its authenticity\n' +
        "* It is important to remember that an expired driver's license is not subject to reissuing!\n"
    },
    {
      title: 'Documents you need for your driver’s license reissuing:',
      content:
        '- Your valid passport or ID and its full copy\n' +
        "- Current driver's license and its certified translation\n" +
        '- Two full-face color photographs 35 x 45 mm in size on a white background\n' +
        '- A document confirming the legality of your stay in Poland (Polish card, residence permit, visa, etc.)\n' +
        '- Original mental health certificate received after passing driving commission in Poland\n' +
        '- Confirmation of your Polish residence or an agreement on temporary housing rental\n'
    },
    {
      title: 'Service fees and completion terms:',
      content:
        "- The state fee for reissuing a driver's license varies from 90 to 120 PLN, depending on the region of residence\n" +
        '- Obtaining a certificate of passing a psychological test will cost around 100-150 pln depending on the institution and license category\n' +
        '- Production of a plastic card will cost 50 PLN, this amount is fixed for all Poland (Sometimes verification agencies charge additional fees, depending on the country / region of driver’s license issue)\n' +
        '* Delays most often occur at this stage, as institutions may be overwhelmed with applications or executives does not perform their duties correctly\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Approximate terms:',
        content:
          'Application within 3 workdays\n' + 'From 30 to 50 working days from application stage till completion\n'
      },
      price: {
        title: 'Estimated price:',
        content: 'Price is 105 pln for categories C1, C, D1,D, C1+E, C+E, D1+E, D+E',
        reMaking: 'Card re-making cost is PLN 50'
      }
    },
    rightSide: {
      description: {
        title: 'Service Description:',
        content:
          "Having your country's valid driver's license, you have the right to reissue it to a European one, which allows you not only to freely move around the EU and Schengen countries, but also to officially apply for a job as a driver in a variety of transporting structures. No less important, such a document will be added to a Polish unified database, which means that there is no need to care it on you during trips, which will be a significant benefit!"
      },
      button: {
        title: 'License re-issuing',
        onClick: () => {}
      }
    }
  }
};
