# Puzzle Compendium

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

*	Tackle each Parallelogram in one go. Don’t get distracted.
*	Finish by midnight on Sunday if your whole class is doing parallelograms.
*	Your score & answer sheet will appear immediately after you hit SUBMIT.
*	Don’t worry if you score less than 50%, because it means you will learn something new when you __check the solutions__.

This week’s Parallellogram is a collection of puzzles to confuse your brain. Good luck!

## 1. Dice puzzle

::: problem id=1_1 marks=3
__1.1.__ Roll the dice in the way shown by the arrows – in other words, the dice moves from one square to the next by rotating by 90 degrees around one edge. When it lands on the final square, what number will be on top?

![](/resources/9-16-puzzle-compendium/1-dice.png)

^^^ hint id=1
This requires you to imagine the rolling process in your mind. First, 2 will be facing down, 4 will still face us, 1 will be facing to the right, and 5 will be on top. Remember, the opposite sides of a dice add up to 7, so if 2 is on the bottom, then 5 is on the top.
^^^

* [ ] 1
* [ ] 2
* [x] 3
* [ ] 4
* [ ] 5
* [ ] 6
{.col-3}

---

This requires you to imagine the rolling process in your mind. First, 2 will be facing down, 1 will still face us, 4 will be facing to the right, and 5 will be on top. Remember, the opposite sides of a dice add up to 7, so if 2 is on the bottom, then 5 is on the top.  

On the next roll, it will be 1 on top, 4 facing right, and 2 facing us.  

On the final roll, it will be 2 facing us, 1 to the right, and 3 on top. The answer is 3.  

I struggle with these, so I had to get a dice and roll it in order to check I was right. In an exam, I guess you could make a dice out of paper and check.
:::


## 2. Extending figures

::: problem id=2_1 marks=1
__2.1.__ How many squares are there in diagram 9?

![](/resources/9-16-puzzle-compendium/2-extending.png)

<input type="number" solution="39"/>

---

Each diagram has 4 arms, each having the same number of squares as the number of the diagram. And then we have 3 additional squares connecting the four arms.  

The number of squares in any diagram `D` is (4 x `D` + 3). In this case (4 x 9 + 3) = 39.
:::

::: problem id=2_2 marks=2
__2.2.__ How many squares are there in diagram 25?

<input type="number" solution="103"/>
:::


## 3. Roman matchsticks

::: problem id=3_1 marks=3
__3.1.__  The matches are arranged to form Roman numerals, but obviously six minus four is not nine. Which matchstick (labelled 1 to 9) would you need to move in order to make the equation correct?

![](/resources/9-16-puzzle-compendium/3-matchsticks.png)

^^^ hint id=2
Move one of the first three matchsticks.
^^^

^^^ hint id=3
Whichever matchstick you move, combine it in some way with matchstick 4.
^^^

<input type="number" solution="3"/>

---

Move matchstick 3 so that it crosses matchstick 4 to make a plus sign. Then we have 5 + 4 = 9.
:::


## 4.	Four card problem (or the “Wason selection task”)

Take a look at this video by Steve Mould, a physics graduate who now writes books about science and who presents nerdy comedy shows. Pause the video when Steve suggests, then think about the right answer.

@[youtube](Hpwd_ns2Wjs?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=4 marks=3
__4.1__ A set of cards has a shape on one side and a colour on the other side.  

__Rule: If a card has a circle on one side, then it must have blue on the other side.__

If you want to check that the rule is being followed, what must you do?

![](/resources/9-16-puzzle-compendium/4-cards.png){image align="center"}

* [ ] Turn over any single card
* [ ] Turn over card A and one other card
* [ ] Turn over cards B & C
* [x] Turn over cards B & D
* [ ] Turn over cards B, C & D

---

The rule says nothing about squares, so ignore card A.  

The rule is clear that circles must be backed by blue, so we must check card B.  

Card C is not important. Although it is blue, it could have any shape on the other side. The rule is "circle means blue", not "blue means circle".  

Card D is important, because if it has a circle on the other side, then it breaks the rule. Another way to state the rule is: “If the card is not blue, then it must not have a circle on the other side.”
:::


## 5. Intermediate Maths Challenge Problem (UKMT)
<!--- 2011 (21) --->

_These two last questions are from the difficult section on the Intermediate Maths Challenge, so you will need to think really hard to solve them. Good luck._

::: problem id=5 marks=3
![](/resources/9-16-puzzle-compendium/5-square.png){image align="right"}
__5.1__ A regular octagon is placed inside a square, as shown. The shaded square connects the midpoints of the four sides of the octagon.

What fraction of the outer square is shaded?

^^^ hint id=4
Suppose that the side length of the regular octagon is `s` units. The right angled isosceles triangles in the diagram have hypotenuses of length `s`. Suppose that the length of each of the other sides of these triangles is `t`.  

By Pythagoras’ Theorem, `t^2 + t^2 = s^2`, and hence `t = 1/sqrt(2) s`.

![](/resources/9-16-puzzle-compendium/5-square-hint.png){image align="center"}
^^^

* [ ] `sqrt(2) - 1`
* [x] `1/2`
* [ ] `(sqrt(2) + 1)/4`
* [ ] `(sqrt(2) + 2)/5`
* [ ] `3/4`
{.col-5}

---

Suppose that the side length of the regular octagon is `s` units. The right angled isosceles triangles in the diagram have hypotenuses of length `s`. Suppose that the length of each of the other sides of these triangles is `t`.  

By Pythagoras’ Theorem, `t^2 + t^2 = s^2`, and hence `t = 1/sqrt(2) s`.

![](/resources/9-16-puzzle-compendium/5-square-hint.png){image align="center"}

Hence the side length of the larger square is `s + 2t = s + (sqrt(2))s = (1 + sqrt(2))s`.

The side length of the smaller square is `s + 1/2 t + 1/2 t`  
`= s + t`
`= s + 1/sqrt(2) s`  
`= 1/sqrt(2) (sqrt(2) + 1)s`  
`= 1/sqrt(2) (1 + sqrt(2))s`.

Hence the fraction of the outer square that is shaded is

`((1/sqrt(2)(1 + sqrt(2))s)^2)/((1 + sqrt(2)s)^2) = (1/sqrt(2))^2 = 1/2`.
:::


## 6. Intermediate Maths Challenge Problem (UKMT)
<!--- 2011 (22) --->

_WARNING: this question looks much scarier than it is. Just apply the rules you have learned about dealing with exponents_

::: problem id=6 marks=3
__6.1__ You are given that `5^p = 9`, `9^q = 12`, `12^r = 16`, `16^s = 20`, and `20^t = 25`.

What is the value of `pqrst`?

^^^ hint id=5
We know `5^p = 9` and `9^q = 12`.  

Therefore, `(5^p)^q = 12`.  

Therefore `5^(pq) = 12`.  

Just extend this approach, because you know `12^r = 16`.
^^^

* [ ] 1
* [x] 2
* [ ] 3
* [ ] 4
* [ ] 5
{.col-5}

---

The key to the solution is to first calculate the value of `5^(pqrst)`. We have that

`5^(pqrst) = (5^p)^(qrst) = 9^(qrst) = (9^q)^(rst) = 12^(rst) = (12^r)^(st) = 16^(st) = (16^s)^t = 20^t = 25 = 5^2`.

Hence `pqrst = 2`.
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


## Additional Stuff

Check out Steve Mould’s [website and videos](https://stevemould.com/){target="_blank"}.
