export default {
  baseURL: '/international-passport',
  tabs: [
    {
      welcome: {
        title: 'Obtaining and extending the validity of the passport of Ukraine without leaving Poland',
        button: {
          title: 'Get Your passport',
          onClick: () => {}
        }
      },

      title: 'Obtaining',
      serviceRegistrationFAQData: [
        {
          title: 'Where can I get a passport and why is it needed ?',
          content:
            'Only consulates have the legal right to issue foreign documents, and to obtain a Ukrainian passport, you should contact the Ukrainian consulate in Warsaw, Krakow, Lublin or Gdansk. Up-to-date information about queues, opening hours and current pick-up times can be found on the official websites of these consulates\n' +
            '\n' +
            'A passport is not only a document, but also an identity confirmation that must be provided at banks, government agencies, the police, when applying for a job and renting a home, so its expiration can lead to difficulties\n'
        },
        {
          title: 'How to get a Ukrainian passport in Poland ?',
          content:
            'In essence, the procedure looks exactly the same as in Ukraine, the minimal bundle of documents for applying for a passport includes:\n' +
            '- Internal passport (ID-card)\n' +
            '* Or birth certificate for persons under the age of 14\n' +
            '- A taxpayer identification number (РНОКПП or ІПН)\n' +
            'If the documents have been lost or are out of reach, it is worth reporting this to the consulate for assistance in recovery. The average waiting time is three months, but this value depends on the actual workload of the consulate\n' +
            '\n' +
            'It is important to remember that the issuance of a passport at the consulate is possible only in the following cases:\n' +
            '- Getting a citizen’s first passport\n' +
            '- Loss or damage to an existing document\n' +
            '- Updating owner information\n' +
            '- Lack of free pages for visas and stamps\n'
        },
        {
          title: 'How much will it cost to get a passport ?',
          content:
            'As mentioned earlier, the cost of the procedure in Poland is much higher than in Ukraine, so you should be prepared to pay the following consular fees:\n' +
            '- PLN 81 for submitting your application for consideration\n' +
            '- PLN 529 for a new passport\n' +
            '* PLN 733 for reissuing a lost or damaged passport. In this case,it requires a copy of the protocol issued by the police on the loss or theft of your document (with a sworn translation into Ukrainian), or the remains of an old passport in case of damage. If the passport issued at the consulate is your first one, then the cost of the procedure will drop to PLN 285\n' +
            '\n' +
            'It is important to remember that you should pay the fees before visiting the consulate (you can do this at any bank), and bring only payment confirmations with you\n'
        }
      ],
      serviceRegistration: {
        leftSide: {
          filingApplication: {
            title: 'Applying:',
            content: '3-7 working days\n' + '\n' + 'From application to receipt 50-70 working days\n'
          },
          price: {
            title: 'Price:',
            content: 'Procedure cost - PLN 81',
            reMaking: 'Consular fee - from PLN 285 to 733'
          }
        },
        rightSide: {
          description: {
            title: 'Service Description:',
            content:
              'Many travelers visit EU countries using a biometric passport, or apply for a tourist visa for a longer stay or frequent trips, but there are situations when a prolonged trip or moving does not allow you to travel back home even to renew an expiring passport or to issue one for a family member. What to do in such a situation?\n' +
              '\n' +
              'As you probably know, even if you have a residence permit, presenting a passport is mandatory for many institutions, so Ukrainian consulates provide a service for issuing biometric passports. The cost of such a procedure will be higher, as well as the waiting time, however, more and more people turn to consulates for this purpose\n'
          },
          button: {
            title: 'Get Your passport',
            onClick: () => {}
          }
        }
      }
    },
    {
      welcome: {
        title: 'Obtaining and extending the validity of the passport of Ukraine without leaving Poland',
        button: {
          title: 'Extend the expiration date',
          onClick: () => {}
        }
      },

      title: 'Extending',

      serviceRegistrationFAQData: [
        {
          title: 'How and why to extend the validity of a passport?',
          content:
            'A passport is not only a document, but also an identity card, which is required in banks, government agencies, the police, when applying for a job or renting a home, so its expiration can lead to severe difficulties\n' +
            '\n' +
            'Fortunately, the service of extending the validity of a passport is provided by the consulates of Ukraine\n' +
            'After receiving and filling out and the form, the date will be assigned when You will need to come to the consulate with a passport and a completed application form (which you can find here)\n' +
            'If everything is filled out correctly, then on the day of applying the passport will be extended for up to 5 years. Decision about the validity extension term belongs to the consulate and can’t be influenced\n'
        },
        {
          title: "Can a child be included in the parent's passport?",
          content:
            'If a your underage child does not have a passport, his data can be added into yours, and the procedure is fairly the same comparing to the validity extension, but requires a few additional documents:\n' +
            '- Original, translation and copy of the child’s birth certificate (if it’s missing, it can be obtained anew after a short application)\n' +
            '- Passport of the parent and its full copy\n' +
            '- Two color photographs of your child sized 35x45\n' +
            'It usually takes no longer than a week, just wait for the date to be assigned for you to come and receive your document\n'
        },
        {
          title: 'Are citizens of Russia and Belarus able to use this service?',
          content:
            'If it’s about a person legally related to a Ukrainian citizen, the answer is more yes than no. The difference is that they should apply at the consulates of their countries, and, accordingly, fees for the service and waiting terms are individual. You can renew your passport without leaving Poland if you:\n' +
            '- Are married or related to a citizen of Ukraine\n' +
            '- Pole card holder with selected pedigree\n' +
            '- Has or requires a residence permit in Ukraine\n' +
            '\n' +
            'You should also be aware of exceptions in some countries, for example:\n' +
            '- Citizens of Belarus can extend the validity of their passport for two years, after which they must obtain a new one\n' +
            '- Citizens of Russia cannot renew their certificates, so they will need to get a completely new passport\n' +
            '\n' +
            'In other nuances procedures are very similar and take approximately 60-90 working days, so contact the nearest consulate of your country to find out the details, the actual terms and the amount of fees\n'
        }
      ],
      serviceRegistration: {
        leftSide: {
          filingApplication: {
            title: 'Approximate terms:',
            content: 'up to 7 business days\n' + 'Document can be received on the day of applying\n'
          },
          price: {
            title: 'Estimated costs:',
            content: 'Depends on each consulate'
          }
        },
        rightSide: {
          description: {
            title: 'Service Description:',
            content:
              'Most foreigners living in Poland are already waiting or have already received a residence permit to worry no more about their legalization in the country. In such an unpleasant situation, the expiration of the passport may come as a surprise, because despite the fact that currently the amendments to the legislation allows use of an expired document, various banks, firms, employers and institutions continue to comply with the current passport for their internal protocols.\n' +
              '\n' +
              'Fortunately for those who faced such a problem, the Ukrainian passport can be reissued without leaving Poland. The process of applying for such a service is not difficult, but keep in mind that the renewal of the passport expires in at least 3 months.\n'
          },
          button: {
            title: 'Extend the expiration date',
            onClick: () => {}
          }
        }
      }
    }
  ]
};
