export class racingCar {
  constructor(nome, velocidade, downforce, tracao, estabilidade) {
    this.nome = nome;
    this.velocidade = velocidade;
    this.downforce = downforce;
    this.tracao = tracao;
    this.estabilidade = estabilidade;
  }
}

import { Porsche911GT3R,
         MercedesAMGGT3,
         AudiR8LMSGT3,
         Ferrari296GT3,
         LamborghiniHuracanGT3,
         BMWM4GT3
 } from "./cars.js";


 const cars = [Porsche911GT3R,
  MercedesAMGGT3,
  AudiR8LMSGT3,
  Ferrari296GT3,
  LamborghiniHuracanGT3,
  BMWM4GT3
 ]


export class tracks{
  constructor(reta, curvas){
    this.reta = reta;
    this.curvas = curvas;
  }
}

import {
  NurburgringNordschleife,
  SpaFrancorchamps,
  SuzukaCircuit,
  CircuitDeLaSarthe,
  MonzaCircuit,
  MountPanorama,
  Interlagos,
  SilverstoneCircuit,
  LagunaSeca,
  RedBullRing
} from "./tracks.js";

const tracks = [ NurburgringNordschleife,
  SpaFrancorchamps,
  SuzukaCircuit,
  CircuitDeLaSarthe,
  MonzaCircuit,
  MountPanorama,
  Interlagos,
  SilverstoneCircuit,
  LagunaSeca,
  RedBullRing
]

function randoTrackSelect() {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  const randomTrack = tracks[randomIndex];
  return randomTrack;
}

async function playRaceEngine() {
  let scores = new Map();
  cars.forEach(car => scores.set(car.nome, 0));

  for(let lap = 1; lap <= 5; lap ++){
    console.log(` Lap ${lap}`);

    for (let partOfTheTrack = 1; partOfTheTrack <= 6; partOfTheTrack++){
      let block = await randomBlock();
      console.log(`${partOfTheTrack} This part of the track is a ${block}`);

      let winnerCarName;

      if(block === "Reta") {
        let maxSpeed = -Infinity;
        cars.forEach(car => {
          if(car.velocidade > maxSpeed) {
            maxSpeed = car.velocidade;
            winnerCarName = car.nome;
          }
        });
      }
      else if(block === "Curva") {
        let maxCurveScore = -Infinity;
        cars.forEach(car => {
          let curveScore = car.downforce + car.tracao + car.estabilidade;
          if(curveScore > maxCurveScore) {
            maxCurveScore = curveScore;
            winnerCarName = car.nome;
          }
        });
      }

      scores.set(winnerCarName, scores.get(winnerCarName) + 1);
    }
  }

  console.log("\nFinal scores:");
  scores.forEach((points, carName) => {
    console.log(`${carName}: ${points} points`);
  });

  let maxPoints = -Infinity;
  let winner;
  scores.forEach((points, carName) => {
    if(points > maxPoints) {
      maxPoints = points;
      winner = carName;
    }
  });

  console.log(`\nThe winner is: ${winner} with ${maxPoints} points!`);
}

async function randomBlock() {
  let random = Math.random()
  let result

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;
    case random < 0.66:
      result = "Curva";
      break;
  }
  return result
}

let block = await randomBlock()

;(async function main () {
  console.log(`The cars from the grid are: ${cars.map(car => car.nome).join(", ")}`);

  const selectedTrack = randoTrackSelect();
  console.log(`The track for today is ${selectedTrack.name}`);

  await playRaceEngine()
})();
