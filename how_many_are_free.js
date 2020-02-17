/*
In men's public toilets with urinals, their is this unwritten rule that you leave at least one urinal free 
between you and the next person peeing. For example if their are 3 urinals and one person is already peeing in the left one, 
you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the 
same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).

Imgur Urinals

Your task:
You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.

Input
A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
A one stands for a taken urinal and a zero for a free one.

Examples
10001 returns 1 (10101)
1001 returns 0 (1001)
00000 returns 3 (10101)
0000 returns 2 (1001)
01000 returns 1 (01010 or 01001)

Note
When their is already a mistake in the input string (for example 011), then return -1

Have fun and don't pee into the wrong urinal ;)
*/

const getFreeUrinals = (urinals) => {
  let anyOnes = false;
  let maxOnes = 0;
  let looped = false;
  
  // determines if there's already a mistake in the input string
  for(let i = 0; i < urinals.length; i++) {
    if(i === 0) {
      if(urinals[i] === '1' && urinals[i+1] === '1') {
        return -1;
      }
    }
    if(urinals[i] === '1' && urinals[i+1] === '1') {
      return -1;
    }

  }
  
  // if length is odd
  if(urinals.length % 2 !== 0) {
    for(let j = 0; j < urinals.length; j++) {
      if(urinals[j] === '1' && anyOnes === true) {
        maxOnes = maxOnes - 1;
      }
      if(urinals[j] === '1' && anyOnes === false) {
        anyOnes = true;
        if(j % 2 !== 0) {
          maxOnes = Math.floor(urinals.length / 2);
        } else {
          maxOnes = Math.floor(urinals.length / 2) - 1;
        }
      }
    }
    looped = true;
    if(maxOnes < 0) {
      return 0;
    }
  }


  // if length is even
  if(urinals.length % 2 === 0) {
    for(let h = 0; h < urinals.length; h++) {
      if(urinals[h] === '1' && anyOnes === false) {
        anyOnes = true;
        maxOnes = (urinals.length / 2) - 1;
      }
      if(urinals[h] === '1') {
        maxOnes = maxOnes - 1;
      }
    }
    looped = true;
    if(maxOnes < 0) {
      return 0;
    }
  }

  // if there is no mistake, but there is no one in a urinal
  if(looped === false || anyOnes === false) {
    console.log('you aren not getting through the other loops');
    if(urinals.length % 2 !== 0) {
      maxOnes = Math.floor(urinals.length / 2) + 1;
    } else {

      maxOnes = urinals.length / 2;
    }
  }

  return maxOnes;
}