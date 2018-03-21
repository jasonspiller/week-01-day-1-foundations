/*

SECTION 1

	1. What is the difference between interpolation and concatenation? Give an example of each.

	Iterpolation injects a variable value into a string, while concatenation combines 2 or strings together

	Interpolation: string = `${x} is added to this string`
	Concatenation: string = x + " is added to this string"


	2. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?

	DRY stands for Don't Repeat Yourself. Using things like variables and functions reduces typing thus increase efficency, aids in readability and eliminates redundancy.

*/


/*

SECTION 2

*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 !== '48');	



/*

SECTION 3

	1. Is this an infinite loop? Why or why not?

	while (true) {
		console.log('Do not run this loop');
	};

	It is an infinite loop because the while clause will always evaluate to true.


	2. is this loop an infinite loop? Why or why not?

	const runProgram = true;

	while (runProgram) {
		console.log('Do not run this loop');
		runProgram = false;
	}

	This is not an infinite loop. However, the conditional runProgram is set as a constant so its value cannot be reassigned so it should error out.


	3. Without running this loop, what is the expected output?

*/

	let letters = "A";
	let i = 0;

	while (i < 20) {
		letters += "A";
		i++;
	}
	console.log(letters);

/*

	This should output 20 A's (AAAAAAAAAAAAAAAAAAAAA). It did as I expected.

*/


/*

SECTION 4

	1. A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

	Both loop through statements until a certain condition is met, however a FOR loop has a built incrementor 

*/

for (i = 0; i <= 999; i++) {
	console.log(i);
}

/*

What are the three components of the control panel? Each component is separated by a semicolon ;.

The first part of the control panel is: declares the variable to be iterated
The second part of the control panel is: declares the value that will be compared against the interator
The third part of the control panel is: the amount that shouild be added to the iterator at each iteration

*/

for (i = 999; i >= 0; i--) {
	console.log(i);
}

for (i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for(i=0; i < StarWars.length; i++) {
	console.log(StarWars[i]);
}

for(i=0; i < StarWars.length; i++) {
	console.log(`${StarWars[i]} is at position number ${i} in the array.`);
}

for(i=0; i < StarWars.length; i+=2) {
	console.log(StarWars[i]);
}


/*

SECTION 5

Part I

	2. mkdir galaxy_far_far_away && cd galaxy_far_far_away
	3. mkdir death_star && cd death_star && touch {darth_vader,princess_leia,storm_trooper}.txt
	4. mkdir tatooine && cd tatooine && touch {luke,ben_kenobi}.txt
	5. mkdir millenium_falcon && touch {millenium_falcon/han_solo,millenium_falcon/chewbaca}.txt

Part II

	1. mv ben_kenobi.txt obi_wan.txt

Part III

	2. cp ../death_star/storm_trooper.txt .

PART IV

	3. mv obi_wan.txt luke.txt millenium_falcon
	4. mv millenium_falcon ..
	5. mv ../millenium_falcon ../death_star
	6. cd ../ && mv death_star/princess_leia.txt death_star/millenium_falcon/princess_leia.txt

Part V

	7. rm death_star/millenium_falcon/obi_wan.txt

Part VI

	8. mkdir yavin_4
	9. mv death_star/millenium_falcon yavin_4/millenium_falcon
	10. mkdir yavin_4/x_wing
	11. mv yavin_4/millenium_falcon/princess_leia.txt yavin_4 && yavin_4/millenium_falcon/luke.txt yavin_4/x_wing
	12. mv yavin_4/millenium_falcon yavin_4/x_wing .
	13. mkdir death_star/tie_fighter_{1..3}
	14. mv death_star/darth_vader.txt death_star/tie_fighter_1
	15. cp death_star/storm_trooper.txt death_star/tie_fighter_2 && cp death_star/storm_trooper.txt death_star/tie_fighter_3
	16. mv death_star/tie_fighter_{1..3} .

Part VII

	6. rm -r tie_fighter_{2..3}

Part VIII

	7. touch x_wing/the_force.txt
	8. rm -r death_star
	9. mv millenium_falcon x_wing yavin_4
