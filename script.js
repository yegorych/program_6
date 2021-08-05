"use strict";

function DNAStrand(dna){
    let result = "";
    for (let i = 0; i < dna.length; i++){
      if (dna[i] == 'A'){
          result = result + 'T';
      } else if (dna[i] == 'T'){
          result = result + 'A';
      } else if (dna[i] == 'G'){
          result = result + 'C';
      } else if (dna[i] == 'C'){
          result = result + 'G';
      }
    }
    return result;
  }