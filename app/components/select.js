

import Component from "@glimmer/component";

import { tracked } from '@glimmer/tracking';
const countries = [
  { name: 'United States', flagUrl: '/flags/us.svg', population: 321853000 },
  { name: 'Spain', flagUrl: '/flags/es.svg', population: 46439864 },
  { name: 'Portugal', flagUrl: '/flags/pt.svg', population: 10374822 },
  { name: 'Russia', flagUrl: '/flags/ru.svg', population: 146588880 },
  { name: 'Latvia', flagUrl: '/flags/lv.svg', population: 1978300 },
  { name: 'Brazil', flagUrl: '/flags/br.svg', population: 204921000 },
  { name: 'United Kingdom', flagUrl: '/flags/gb.svg', population: 64596752 },
];

export default class extends Component {
empty =[];
    groupedNumbers = [
      { groupName: 'Smalls', options: ['one', 'two', 'three'] },
      { groupName: 'Mediums', options: ['four', 'five', 'six'] },
      {
        groupName: 'Bigs',
        options: [
          { groupName: 'Fairly big', options: ['seven', 'eight', 'nine'] },
          { groupName: 'Really big', options: ['ten', 'eleven', 'twelve'] },
          'thirteen',
        ],
      },
      'one hundred',
      'one thousand',
    ];

  names = ['Stefan', 'Miguel', 'Tomster', 'Pluto'];
  @tracked country;
  numbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  @tracked number;




  countries = countries;
  destination = countries[2];
   }

