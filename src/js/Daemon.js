/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import Stoned from './Stoned';

export default class Daemon extends Stoned {
  constructor(name) {
    super(name, 'Daemon');
    this.defence = 40;
    this.attack = 10;
  }
}
