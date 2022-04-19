// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  // Deze functie moet een object retourneren dat de inhoud bevat van specimenNum en dna dat correspondeert met de parameters. 
 return {
   specimenNum,
   dna,
   // mutates a random base of DNA to a different base
    mutate() {
      let newBase = returnRandBase(); //Kiest random een dna basis zoals A, T, C of G. 
      let randomDNAStrand = Math.floor(Math.random() * 15); //Maak een willekeurige DNA strook aan.
      while (newBase === this.dna[randomDNAStrand]) {
        newBase = returnRandBase();
      } // Zolang newBase dezelfde DNA strand heeft zoals de Base (dus bijv. beide A,), dan zal er opnieuw een andere random DNA strand uitgekozen worden. 
      this.dna[randomDNAStrand] = newBase;
      return this.dna
    },
  
    compareDNA(pAequor) {
      //Vergelijk de huidige pAequor's DNA met het toegevoegde dna in pAequor. 
      //Bereken hoeveel baseses identiek zijn. 
      let same = 0;
      for(let i = 0; i < pAequor.length; i++){
        //Vergelijk ook hoeveel er op dezelfde locatie staan. 
        if(this.dna[i] === pAequor[i]){
          same++;
        }
      }
        same/=15;
        same*=100; 
      //Het returnt niets, maar print een bericht uit met het percentage van DNA dat de 2 objecten overeen hebben met elkaar. 
      console.log(`The two strands are ${Number.parseFloat(isSame).toFixed(2)}% the same.`)
    },

    willLikelySurvice() {
      let count = 0;
      let somedna = this.dna;
      for (let i = 0; i < somedna.length; i++){
        if (somedna[i] === 'C' || somedna[i] === 'G'){
          count += 1;
        }
      }
      count /= 15;
      count *= 100;

      return count >= 60 ? true : false;
    }
 }
}
