# A curious bear and Doctor Who

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteaux word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

*	Tackle each Parallelogram in one go. Don’t get distracted.
*	Finish by midnight on Sunday if your whole class is doing parallelograms.
*	Your score & answer sheet will appear immediately after you hit SUBMIT.
*	Don’t worry if you score less than 50%, because it means you will learn something new when you __check the solutions__.


## 1	What colour is the bear?

Here is a classic riddle. A hunter leaves her camp and walks 1 km south. She sees a bear and is about to shoot it, when her gun jams. She escapes by running 1 km east and then heads 1 km north back to camp. Huh! That doesn’t seem to make sense. Here is the question.

::: problem id=1_1 marks=2
__1.1.__ What colour is the bear's fur?
* [ ] Black
* [x] White
* [ ] Brown
* [ ] Blue
* [ ] Red

---

![](/resources/8-07-curious-bear-doctor-who/1-north-pole.jpg){image align="right"}The answer is white because it is a polar bear, because you are at the North Pole. Why? Normally moving south-east-north does not get you back to where you started, but imagine that you are at the North Pole. On the surface of a sphere (like the Earth), the rules of geometry are different, south-east-north forms a complete triangle!

Also, the triangle has three right angles, so the internal angles of a triangle on a sphere can add up to 270°.

By the way... this riddle has hidden depths, and so far you have only heard half the story. More next week.
:::


## 2. Junior Maths Challenge Problem (UKMT)
<!--- 2011 (22) --->

Evariste and Sophie both bought some stamps for their collections. Each stamp Evariste bought cost him £1.10, whilst Sophie paid 70p for each of her stamps. Between them they spend exactly £10.70.

::: problem id=2_1 marks=3
__2.1__ How many stamps did they buy in total?

* [ ] 9
* [ ] 10
* [ ] 11
* [ ] 12
* [x] 13
{.col-5}

---

Suppose that Evariste buys `x` stamps and Sophie buys `y` stamps. Then 1.10`x` + 0.70`y` = 10.70. Hence, 11`x` + 7`y` = 107. We have one equation with two unknowns, so we need to use the fact that in this problem `x` and `y` are non-negative integers. `x` and `y` are whole numbers and bigger than or equal to zero.

By re-arranging the equation, `y = (107 – 11x)/7`. We need to test different values of `x` and find a whole number value for `x` that gives a whole number value for `y`. In other words, we need to find a value for `x`, such that `107 – 11x` is divisible by 7 without a remainder.

Taking `x = 0, 1, 2,… 9,` we have `y = 107 – 11x = 107, 96, 85, 74, 63, 52, 41, 30, 19, 8`. We see that only for `x = 4` is `107 – 11x` divisible by 7. So `x = 4` and `y = 63/7 = 9`. So Sophie buys 9 stamps and Evariste buys 4 stamps, and they buy 13 stamps in total.

:::


## 3. Doctor Who mathematics

If you are fan of Doctor Who, then you might already know that the show regularly features mathematics, and many of the characters are mathematicians (e.g., Romulus and Remus Sylvest (The Twin Dilemma), Danny Pink (Into the Dalek),  Jackson Lake (The Next Doctor), Alistair Gordon Lethbridge-Stewart (Mawdryn Undead), Adric (Full Circle) and Zoe Heriot (The Wheel in Space).

This is my favourite maths clip from Doctor Who.

@[youtube](ee2If8jSxUo?rel=0)

So the Doctor spots that the pattern involves __happy prime numbers__. You will already know about prime numbers, but here “Alexis Inspired” explains what makes a prime number happy.

@[youtube](8ftbFl8tHmY?rel=0)

You can think about a happy number in the following way. Take a positive integer, then replace the number by the sum of the squares of its digits. Take the new number, and repeat the process again and again. If the process eventually takes you to 1, then the original starting number is a happy number. If the process avoids 1 and goes into a cycle of numbers, then it is an unhappy number.

For example, 97 is happy, because it leads to the following sequence.

9<sup>2</sup> + 7<sup>2</sup> = 130  
1<sup>2</sup> + 3<sup>2</sup> + 0<sup>2</sup> = 10  
1<sup>2</sup> + 0<sup>2</sup> = 1 = happiness
{.text-center}  

Because 97 is prime, then it is not just a happy number, but also a happy prime.

I am going to define a quantity called “the sum of all happiness” for a number, which is the total of all the numbers on the happiness path added together.

So, the sum of all happiness for 97 is (97 + 130 + 10 + 1), which equals 238.

::: problem id=3_1 marks=2
__3.1.__ 32 is a happy number. What is the sum of all happiness for 32?

<input solution="56"/>  
:::

::: problem id=3_2 marks=2
__3.2.__ 19 is a happy number. What is the sum of all happiness for 19? Is there a shortcut you can use?

<input solution="270"/>  

---

Because 19 has the same digits as 91, it will follow the same happiness path. Because 91 was the example given above, you can cheat and start with the answer given above, which is 342. However, your path started with 19, not 91, so you need to subtract 91 and add 19, which gives you a total of 270.
:::

::: problem id=3_3 marks=3
__3.3.__ 4 is an unhappy number. If you follow the usual process (ie, 4<sup>2</sup> = 16, and then square the digits of 16 to get a new number, and so on) you end up creating a loop, as opposed to heading towards 1. Including the number 4 once, how many numbers are in the loop.

<input solution="8"/>  

---

You should have found the following loop: 4, 16, 37, 58, 89, 145, 42, 20, 4, ... It consists of eight numbers if you only include 4 once.
:::

::: problem id=3_4 marks=3
__3.4.__ In 2010, mathematicians discovered the largest known happy prime, which is 2<sup>42,643,801</sup> – 1. Write down the complete path and prove that this number is indeed happy. Only kidding! That would take you several lifetimes.

Instead, if you expressed 2<sup>42,643,801</sup> in the normal way (ie, not as a power of 2), how many digits would it contain?

* [ ] 2 digits
* [ ] 42,643,801 digits
* [ ] roughly 7 million digits
* [x] more than 10 million digits
* [ ] less than 5 million digits

---

My calculator screamed ERROR when I tried to be lazy. Instead, I started by noticing 2<sup>10</sup> ≈ 1,000.

You might not have covered how to manipulate exponentials in detail, so don’t worry if you cannot follow this completely, but you can then say:  
  2<sup>42,643,801</sup> ≈ (2<sup>10</sup>)<sup>4,264,380</sup>, because   2<sup>ab</sup> = (2<sup>a</sup>)<sup>b</sup>  
    ≈ (1,000)<sup>4,264,380</sup>  
    ≈ (10<sup>3</sup>)<sup>4,264,380</sup>, because 1,000 = 10<sup>3</sup>  
    ≈ 10<sup>3 × 4,264,380</sup>  
    ≈ 10<sup>12,793,140</sup>, so the number has about 12,293,140 digits.

:::

## 4. Junior Maths Challenge Problem (UKMT)
<!--- 2011 (23) --->

This is one of the toughest Junior Maths Challenge questions that you will come across, so I have given a hint. Try and solve the problem on your own – and be tenacious – but the hint is there if you need it.

::: problem id=4 marks=5

![](/resources/8-07-curious-bear-doctor-who/4-triangles-question.jpg){image align="right"}
__4.1.__ The points _S_, _T_, _U_ lie on the sides of the triangle _PQR_, as shown, so that _QS_ = _QU_ and _RS_ = _RT_.

_∠TSU_ = 40°. What is the size of _∠TPU_?  

* [ ] 60°
* [ ] 70°
* [ ] 80°
* [ ] 90°
* [x] 100°

^^^ hint id=1
Let _∠RST_ = `x`° and _∠QSU_ = `y`°. As _RS_ = _RT_, the triangle _RST_ is isosceles and hence _∠RTS_ = _∠RST_ = `x`°. Hence, as the angles in triangle _RST_ add up to 180°, we have that _∠SRT_ = (180 - 2`x`)°.
^^^

^^^ hint id=2
_∠SQU_ = (180 - 2`y`)°. Hence from triangle _PQR_, we have that _∠TPU_ = (180 - (180 - 2`x`) - (180 - 2`y`))° = (2 (`x` + `y`) - 180)°.
^^^

---

![](/resources/8-07-curious-bear-doctor-who/4-triangle-answer.jpg){image align="right"}
The question was hard, and the answer is pretty hard, too. Go through it slowly, step by step, and you really will understand it. If you are flummoxed by one particular step, then ask your teacher to explain it.

Let _∠RTS_ = `x`°. Then _∠RST_ = `x` as _RS_ = _RT_.

Let _∠QSU_ = `y`°. Then _∠QUS_ = `y`° as _QS_ = _QU_.

As _RSQ_ is a straight line, `x` + `y` + 40 = 180; so `x` + `y` = 140.

Now _∠TPU_ = 180° - _∠TRS_ - _∠SQU_  
 = 180° - (180 - 2`x`)° - (180 - 2`y`)°  
 = 180° - 180° + 2`x`° - 180° + 2`y`°  
 = 2(`x` + `y`)° - 180°  
 = 2 × 140° - 180°  
 = 100°

:::

## 5. An odd square.

Here is something curious.

You could pick any number, but let’s try it with the number 6.

First, write down a 6 by 6 grid of the first 6 × 6 odd numbers.

| 1 | 3 | 5 | 7 | 9 | 11 |
| 13 | 15 | 17 | 19 | 21 | 23 |
| 25 | 27 | 29 | 31| 33 | 35 |
| 37 | 39 | 41 | 43 | 45 | 47 |
| 49 | 51 | 53 | 55 | 57 | 59 |
| 61 | 63 | 65 | 67 | 69 | 71 |
{.grid}

If you add up the numbers to the top row, then you get:

1 + 3 + 5 + 7 + 9 + 11 = 36 = 6<sup>2</sup>
{.text-center}  

If you add up the numbers in either diagonal, then you get:

1 + 15 + 29 + 43 + 57 + 71 = 216 = 6<sup>3</sup>
{.text-center}  

11 + 21 + 31 + 41 + 51 + 61 = 216 = 6<sup>3</sup>
{.text-center}  

Finally, if you add up all the numbers in grid, then you get 6<sup>4</sup>.

The crazy thing is that you can do this this with any number all the way up to infinity. But, for simplicity, let’s try it with the number 3 and create a 3 by 3 grid of the first nine odd numbers.

| 1 | 3 | 5 |
| 7 | 9 | 11 |
| 13 | 15 | 17 |
{.grid}

__Top row:__ 1 + 3 + 5 = 9 = 3<sup>2</sup>

__Diagonals:__	1 + 9 + 17 = 5 + 9 + 13 = 27 = 3<sup>3</sup>

__All:__ 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 = 81 = 3<sup>4</sup>

Why does this happen? Let’s look at why the top row adds up to the square of the number.

![](/resources/8-07-curious-bear-doctor-who/5-3-number-square.jpg){image align="center"}

A 3 x 3 grid of 9 blocks consists of __1__ block in the top left, __3__ blocks wrapped around it, and __5__ blocks wrapped around those. So a 3<sup>2</sup> grid consists of __(1 + 3 + 5)__ blocks, and __1__, __3__, __5__ are the first three odd numbers and fill up the top row of the grid. That’s why 1 + 3 + 5 = 9 = 3<sup>2</sup>.

And why do the diagonals of an n × n grid add up to n<sup>3</sup>? And why do all the numbers in an n × n grid add up to n<sup>4</sup>? That’s something for you to think about.


## 6. Monty Python

And now for something completely different. Monty Python’s Flying Circus was one of the BBC’s most anarchic and revolutionary comedy shows. The sketches were based on a whole series of absurd premises, such as the Ministry of Silly Walks and a customer complaining about a dead parrot.

As far as I know, they only once touched on mathematics. Maths and philosophy overlap when it comes to the subject of logic, so take a look at this sketch titled “The Philosophers’ Football Match” and try to answer these two questions. You might need to do some googling. (By the way, as you watch this video, does it remind you of something that might appear on "Horrible Histories"? I suspect that some of the "Horrible Histories" silliness was inspired by Monty Python.

@[youtube](ur5fGSBsfq8?rel=0)

::: problem id=6_1 marks=2
__6.1.__ Which of the Greek footballing philosophers was killed by a Roman soldier, because he was so busy doing mathematics that he refused to obey the soldier’s orders?

* [ ] "Chopper" Sophocles
* [x] Archimedes
* [ ] Plotinus
:::

::: problem id=6_2 marks=2
__6.2.__ Which of the German footballing philosophers invented calculus (separately from Isaac Newton), one of the most important topics in mathematics? He also invented the first mass-produced mechanical calculator.

* [x] Gottfried Leibniz
* [ ] Immanuel Kant
* [ ] Georg “Nobby” Hegel
:::



Before you hit the SUBMIT button, here are some quick reminders:

*	You will receive your score immediately, and collect your reward points.
*	You might earn a new badge... if not, then maybe next week.
*	Make sure you go through the solution sheet – it is massively important.
*	A score of less than 50% is ok – it means you can learn lots from your mistakes.
*	The next Parallelogram is next week, at 3pm on Thursday.
*	Finally, if you missed any earlier Parallelograms, make sure you go back and complete them. You can still earn reward points and badges by completing missed Parallelograms.

Cheerio,
Simon.



::: submit


## Additional Stuff

* If you are interested in studying physics (or maths or engineering) at university, then you might want to watch this video by Physics Girl, in conversation with Jabril Ashe. She talks about her path into physics. Jabril, by the way, is a computer programmer, as well as a YouTuber:
@[youtube](n2RhC4JNS7M?rel=0)

* For more Doctor Who stuff, [here is the BBC Doctor Who fun and games website](http://www.bbc.co.uk/programmes/articles/4nH4gHgpmRXh8w8vqLsq1jS/fun-and-games){target="_blank"}.
