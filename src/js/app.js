import userLife from './distribution_function';

import { matchers } from './sort_function';

userLife(90);

const user1 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

matchers(user1);
