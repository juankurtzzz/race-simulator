import { racingCar } from ".";

export class Porsche911GT3R extends racingCar {
  constructor() {
    super("Porsche 911 GT3 R",
        1,
        4,
        5,
        6);
  }
}

export class MercedesAMGGT3 extends racingCar {
  constructor() {
    super("Mercedes-AMG GT3",
        2,
        5,
        1, 
        3);
  }
}

export class AudiR8LMSGT3 extends racingCar {
  constructor() {
    super("Audi R8 LMS GT3",
        3,
        6,
        4,
        5);
  }
}

export class Ferrari296GT3 extends racingCar {
  constructor() {
    super("Ferrari 296 GT3",
        4,
        5,
        3,
        4);
  }
}

export class LamborghiniHuracanGT3 extends racingCar {
  constructor() {
    super("Lamborghini Huracán GT3 EVO2",
        2,
        7,
        2,
        5);
  }
}

export class BMWM4GT3 extends racingCar {
  constructor() {
    super("BMW M4 GT3",
        3,
        4,
        5,
        4);
  }
}
