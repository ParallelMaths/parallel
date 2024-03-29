# Crosses and Crosses

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


## 1. Junior Maths Challenge Problem (UKMT)
<!--- 2011 (2 ext) --->
What is the remainder when the following numbers are divided by 9?

::: problem id=1_1 marks=0.5
__1.1__ 152

<input type="text" solution="8"/>

---
You should know that there is an easy test to see if a number is divisible
by 9. If the sum of the digits is divisible by 9, then the actual number is
also divisible by 9. Anything left over is the remainder.

152 is not divisible by 9, because 1 + 5 + 2 = 8, which obviously is not divisible
by 9. But this does tell us the remainder: 8.
:::

::: problem id=1_2 marks=0.5
__1.2__ 9,876,543,210

<input type="text" solution="0"/>

---
9,876,543,210 is divisible by 9, because the digits add up to 45 which is
divisible by 9 (as well as knowing our times tables, we know 45 is divisible by
9 because 4 + 5 = 9).

You might have noticed that the digits in this number can also be paired, so
that each pair adds up to 9 (9 + 0, 8 + 1, 7 + 2, 6 + 3, 5 + 4), so all the digits must
add up to a multiple of 9.
:::

::: problem id=1_3 marks=1
__1.3__ 689,689

<input type="text" solution="1"/>

:::

::: problem id=1_4 marks=1
__1.4__ 555...555, which is 5 written out 2011 times in a row

<input type="text" solution="2"/>

---
It is easy to add up the digits of 5 written out 2,011 times. It is just 5 x
2,011, or 10,055. Is that divisible by 9? Well, 1 + 0 + 0 + 5 + 5 = 11, so it is not
divisible by 9, and because 1 + 1 = 2, the remainder is 2.
:::

## 2. Junior Maths Challenge Problem (UKMT)
<!--- 2011 (3) --->

![](/resources/7-20-crosses-crosses/3-lightsquestion.png){image align="right"}

A train display shows letters by lighting cells in a grid, such as the letter
‘o’ shown. A letter is made bold by also lighting any unlit cell immediately to
the right of one in the normal letter.

::: problem id=2_1 marks=2
__2.1__ How many cells are lit in a bold ‘o’?

* [ ] 22
* [x] 24
* [ ] 26
* [ ] 28
* [ ] 30

---

![](/resources/7-20-crosses-crosses/3-lightssolution.png){image align="right"}

The only thing to do here is to draw (or imagine) the figure corresponding to a
bold ‘o’, and to count the number of cells that are lit.  

We see that the extra cells that need to be lit are the 10 cells shown in
black.  

This makes 24 lit cells altogether.

:::


## 3. Tic-tac-toe or noughts and crosses

Mathematicians love playing games. In fact, there is a whole area of maths
known as Game Theory, which looks at everything from Monopoly to poker, from chess
to football, and even warfare. You can apply maths to work out the best strategy for
winning.

In this Parallelogram, we have a video that looks at one of the simplest games:
noughts and crosses (or tic-tac-toe as it is known in some countries).
If you have half a brain, then you will know how to play noughts and crosses
and never lose (and sometimes win if you are playing against a 5-year-old). So,
this video looks at what happens if you change the rules. Professor Thane Plambeck
shows you how to become world champion at a version that only involves crosses.

Watch it carefully, pause it if necessary and think about it carefully. If you
understand how to win at the crosses only version of noughts and crosses, then
challenge your friends and family and see if you are truly unbeatable. Also,
remember to answer the question below.

@[youtube](ktPvjr1tiKk?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=3_1 marks=2
__3.1__ In the Misere version of crosses and crosses, if you really want to
win, you can start in the centre and then make a move that is more usual in chess.
Which move is it?

* [ ] Pawn move
* [ ] Bishop move
* [ ] Rook move
* [x] Knight move
* [ ] Queen move
:::


## 4. The race

Can you solve the following riddle?
::: problem id=4_1 marks=1
__4.1__ You’re running a race and pass the person in 2nd place. What place are
you in now?

  * [ ] First place
  * [x] Second place
  * [ ] Third place

---

Most people say First, because it feels as if you are now better than the
Second place person. But think about it for a moment and you will realise you are
Second for all sorts of reasons:
* If you overtook Second then you must have been in Third place, and moving up
one place means you are now Second.
* You are now better than the Second place person, that person has slipped back
to Third place, so you are now the Second place person.
* The only way to be First is to overtake the First place person, and you have
not done that yet, so you can’t be in First place.

:::


## 5. Decoding Caesar

Last week, we discovered how you can encode a message by turning it into a
number according to the alphabet-number list below, adding a number and then
turning the new number back into a letter.

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}

So, if we want to encode the word CAT by (+2), then CAT is 2 ¦ 0 ¦ 19, so adding
2 transforms it into  4 ¦ 2 ¦ 21, which means CAT is encoded as ECV.

If we encode by (+10), then because CAT is 2 ¦ 0 ¦ 19, adding 10 transforms it
into 12 ¦ 10 ¦ 29. The number 29 is tricky, because no letter is associated with 29,
so last week we talked about modulo arithmetic. In this case, modulo (26), if we
have a number that is outside our range of 0 to 25, then we add or subtract 26 again
and again until we are within the range of 0 to 25. This means that 12 ¦ 10 ¦ 29
becomes 12 ¦ 10 ¦ 3, which means CAT is encoded as MKD.

If you need to revise this, then go back and look at the
[previous Paralellogram](/7-15-marie-curie){target="_blank"}.

But what about __decoding__? You can decode a word by subtracting, instead of
adding.

A word has been encoded by adding 15 and the result is RDL. To decode it, turn
the encoded word into numbers, which is 17 ¦ 3 ¦ 11, then subtract 15, which turns
it into 2 ¦ -12 ¦ -4. The problem is that neither -12 nor -4 are in our
range of 0-25, so we add 26 so that -12 becomes +14, and -4 becomes +22. So now
we have 2 ¦ 14 ¦ 22, which is the word COW.

Now try these decoding challenges.

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}

::: problem id=5_1 marks=1
__5.1.__ CBU is the result after a word was encoded with +1. First, turn CBU
into numbers.

* [ ] 3 ¦ 2 ¦ 21
* [x] 2 ¦ 1 ¦ 20
* [ ] 1 ¦ 0 ¦ 19

:::

::: problem id=5_2 marks=1
__5.2.__ Next, if you apply the correct decoding mathematical step, the result
is:

* [ ] 2 ¦ 1 ¦ 20
* [x] 1 ¦ 0 ¦ 19
* [ ] 0 ¦ 25 ¦ 18
:::

::: problem id=5_3 marks=1
__5.3.__ Finally, enter the three letters of your decoded word.

<input type="text" solution="BAT"/>

---
Answer: BAT
:::

::: problem id=5_4 marks=1
__5.4.__ NTG was encoded with +8. If we turn NTG into numbers we get 13 ¦ 19 ¦ 6.
Next, if you apply the correct decoding mathematical step, the result is:

* [ ] 18 ¦ 27 ¦ 14
* [ ] 10 ¦ 19 ¦ 6
* [x] 5 ¦ 11 ¦ -2

:::

::: problem id=5_5 marks=1
__5.5.__ Finally, enter the three letters of your decoded word.

<input type="text" solution="FLY"/>

---
Answer: FLY
:::

::: problem id=5_6 marks=2
__5.6.__ BKT was encoded with +2,622. Turn BKT into a number, and apply the
correct decoding mathematical step (subtract 2,622) to get:

* [ ] -5 ¦ 8 ¦ 25
* [x] -2,621 ¦ -2,612 ¦ -2,603
* [ ] 2,623 ¦ 2,632 ¦ 2,641
:::

::: problem id=5_7 marks=2
__5.7.__ In the previous step, your sequence of numbers might be outside of the
range of 0 to 25, so you will need to take any problematic numbers and add or
subtract 26 again and again (is there a quick way to do this?), until they fall
within the right range. What is your result?

* [ ] 21 ¦ 8 ¦ 25
* [ ] 6 ¦ 8 ¦ 26
* [x] 5 ¦ 14 ¦ 23
* [ ] 23 ¦ 6 ¦ 15
* [ ] 6 ¦ 1 ¦ 18
* [ ] 18 ¦ 8 ¦ 13

:::

::: problem id=5_8 marks=2
__5.8.__ Finally, enter the three letters of your decoded word.

<input type="text" solution="FOX"/>

---

The early questions (5.1 to 5.3) are easy, and some of you might have been
able to jump straight to the answer BAT, without going through each
mathematical step. However, it is important to understand the step-by-step
method in order to prepare for the harder questions.

With 5.4 and 5.5, the tricky step is dealing with the correct answer to 5.4,
which is 5 ¦ 11 ¦ -2. The allowable range is 0 to 25, so we have to add 26
to -2 to get 24. So we are now dealing with 5 ¦ 11 ¦ 24, which is FLY.

Step 5.6 requires you to subtract 2,622, which leaves you with three large
negative numbers, namely:

-2,621 ¦ -2,612 ¦ -2,603{.text-center}  

You could try adding 26 again and again, but the short cut is to spot that these numbers are close to -2,600, which is -100 × 26. So we can jump to trying to deal with -21 ¦ -12 ¦ -3. Add 26 to these and we get 5 ¦ 14 ¦ 23, which is FOX.   

:::

## 6. Amazing James Randi and his rope trick
![](/resources/7-20-crosses-crosses/3-james-randi.jpg)
One of my heroes is James Randi, who is often known as the Amazing Randi. In
the last few decades he has become a champion of rationality and a debunker of
nonsense, but he started off in show business as a magician and an escapologist.

Well after becoming a pensioner, Randi was performing escapology. See if you
can work out how he escapes from the ropes in the video below.

__WARNING – do not try escapology or anything else that Randi does. This stuff is
DANGEROUS.__

@[youtube](LYukbJnEcTo?rel=0) _(If you have problems watching the video, right click to open it in a new window)_


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

From now on, Parallelograms will often contain this Additional Stuff section, which carries no mark, but which you might find interesting. Why not take a look? However, it is optional, so you can also just skip to the SUBMIT button and click.

The noughts and crosses video in this week’s Parallelogram reminded me of a
couple of things.

1. Today’s best computer programmes can beat humans at the most complex games,
such as Chess or Go, but this video from 1949 shows that it has been a long and
hard journey to get to where we are now. The black and white video shows an
early computer mastering how to play noughts and crosses.
[https://www.britishpathe.com/video/noughts-and-crosses-machine](https://www.britishpathe.com/video/noughts-and-crosses-machine){target="_blank"}

2. The hot topic today is machine learning and artificial intelligence (AI).
This article – which is fairly complicated – shows how you could build a
computer out of matchboxes, which could teach itself to win at noughts and
crosses.
[http://chalkdustmagazine.com/features/menace-machine-educable-noughts-crosses-engine/](http://chalkdustmagazine.com/features/menace-machine-educable-noughts-crosses-engine/){target="_blank"}
