# Number Riddles

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


## 1. Number riddles

::: problem id=1_1 marks=2
__1.1__ If numbers are written as English words, which is the only number that contains the same number of letters as the number itself? Please write the answer as a number, not the word.

<input solution="4"/>

---

Four has 4 letters!
:::

::: problem id=1_2 marks=2
__1.2__ If numbers are written as English words, which is the only number that has all its letters in alphabetical order? Please the write the answer as a number, not the word.

<input solution="40"/>

---

F O R T Y (lots of people answer EIGHT, but G comes before I).
:::

::: problem id=1_3 marks=2
__1.3__ If numbers are written as English words, which is the first number that contains the letter A? Exclude numbers that include the word AND, as in ONE HUNDRED AND ONE. Please write the answer as a number, not the word.

Clue: It’s bigger than 100 or even a few hundred.

<input solution="1,000"/>

---

ThousAnd.
:::


## 2. Intermediate Maths Challenge Problem (UKMT)
<!--- 2014 (7) --->

::: problem id=2 marks=3
__2.1__ Just one positive integer has exactly 8 factors including 6 and 15.  

What is the integer?

* [ ] 21
* [x] 30
* [ ] 45
* [ ] 60
* [ ] 90
{.col-5}

---

We can rule out options A and C as neither 21 nor 45 has 6 as a factor. We can now complete the solution by looking at the different factors of the other three options.  

We see that the factors of 30 are: 1, 2, 3, 5, 6, 10, 15, 30. So 30 has exactly 8 factors and it is divisible by 6 and 15.
:::


## 3. More about factors

::: problem id=3_1 marks=2
__3.1__ How many factors does the number 60 have?

<input solution="12"/>
:::

::: problem id=3_2 marks=2
__3.2__ If a number is divisible by 6 and by 15 which prime factors must it have?

* [ ] 1 and 2 and 3
* [ ] 2 and 3
* [x] 2 and 3 and 5
* [ ] 3 and 5
* [ ] 1 and 2 and 3 and 5
:::

::: problem id=3_3 marks=2
__3.3__ Which positive integers have an odd number of factors?

* [ ] Prime numbers
* [ ] Odd numbers
* [ ] Even numbers
* [x] Square numbers
* [ ] Cube numbers
* [ ] All numbers
:::


## 4. The 1089 trick (again)

Last week we looked at the 1089 trick. Here’s a reminder from Krista King.

@[youtube](rNInNmcgAiY?rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

But, how does it work? James Grime, who has some great videos, both on his own website and on Numberphile, explains…. it is not a simple explanation, but see if you can follow it. It is an amazing bit of magic, and the maths behind it is neat.

@[youtube](ee0xnIywEqk?rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_


## 5. Intermediate Maths Challenge Problem (UKMT)
<!--- 2014 (21) --->

::: problem id=5_1 marks=4
__5.1__ In King Arthur’s jousting tournament, each of the several competing knights receives 17 points for every bout he enters. The winner of each bout receives an extra 3 points. At the end of the tournament, the Black Knight has exactly one more point than the Red Knight.  

What is the smallest number of bouts that the Black Knight could have entered?

* [ ] 3
* [ ] 4
* [ ] 5
* [x] 6
* [ ] 7
{.col-5}

---

_In a moment, you will find the formal solution, but here is a quick way to think about and solve the problem. How can one knight earn one point more than the other? If the Black Knight wins 6 tournaments, then he wins 18 bonus points, and 18 is 1 more than 17! So the answer is 6._

_In other words, the Red Knight could enter 6 tournaments and lose them all, and he would be 18 points behind the Black Knight. But if the Red Knight entered one more tournament and lost again then he would be only 1 point behind. The Black Knight has entered 6 tournaments, so the answer is D._

Suppose the Black Knight enters q bouts and wins x of them and the Red Knight enters r bouts and wins y of them. Then the Black Knight receives `17q + 3x` points and the Red Knight receives `17r + 3y` points. As the Black Knight has exactly one more point than the Red Knight  

`(17q + 3x) − (17r + 3y) = 1`, that is,  

`17(q − r) + 3(x − y) = 1` (1)  

The conditions of the problem also imply that  

`q`, `r`, `x` and `y` are integers that satisfy `0 ≤ x ≤ q` and `0 ≤ y ≤ r`. (2)  

We seek the solution of (1) subject to (2) in which q takes the smallest possible value.  

If we put `m = q − r` and `n = x − y`, the equation (1) becomes  

`17m + 3n = 1` (3)  

It is easy to spot that `m = −1`, `n = 6` is one solution of (3). In this case `x − y = 6`, so `x = y + 6`. As `0 ≤ y`, the least possible value of `x` is 6 when `y = 0`. Hence the least possible value of `q` is 6 and as `q − r = −1`, in this case `r = 7`. So there is a solution in which the Red Knight enters 7 bouts losing them all, and the Black Knight enters 6 bouts winning them all.  

It is clear that in any another solution of (3) with `m < 0`, we have `m ≤ −2` and hence `n > 6`. So `x = y + n > 6`, and hence, as `q ≥ x`, we have `q > 6` and so we do not obtain a solution with a smaller value of `q` in this way.  

The solution of (3) in which m takes its smallest possible positive value is given by `m = 2`, `n = −11`. In this case `q − r = 2` and `x − y = −11`. Therefore `y = x + 11` and hence `y ≥ 11` and so `r ≥ 11`. Then `q = r + 2 ≥ 13`. So this does not lead to a solution with `q < 6`.  

It is clear that in any other solution of (3) with `n < −11`, we must have `r > 11` and hence `q ≥ r > 11`.  

We therefore can deduce that the smallest number of bouts that the Black Knight could have entered is 6.
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
