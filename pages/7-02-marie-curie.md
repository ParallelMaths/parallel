# _Year 7 • Parallelogram 2_ Madam Curie’s square riddle

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

__Origin__: late 16th century: from French parallélogramme, via late Latin from Greek parallēlogrammon, from parallēlos ‘alongside another’ + grammē ‘line’.  

1. a four-sided plane rectilinear figure with opposite sides parallel.
2. a portmanteau word combining parallel and telegram. A message containing
   mischievous maths problems sent each week by the Parallel Project to bright
   young mathematicians.

</div>

Welcome to the second of our Parallelograms designed for Year 7 students, a collection of mathematical challenges designed to stretch your brain and make your neurons more squiggly.

You can start and stop whenever you like, but you should complete all the
challenges by 7pm on Sunday, particularly if your teacher has asked to complete
this Parallelogram.

You can return to the site any time after 7pm on Sunday and you will find your
score and a sheet with answers and explanations – as long as you have completed
the challenge and hit the SUBMIT button.

This week’s Parallelogram challenge is in six parts.

__IMPORTANT__ – you will get points for every correct answer (or nearly correct answer).

__IMPORTANT__ – it does not really matter what score you get, the main thing is that you think hard about the problems... and then learn where you went wrong when the answer sheet appears.


## 1. Junior Maths Challenge 2011 (1)

The Junior Maths Challenge is a national maths competition run the UK Maths Trust, and many of you might be entering this year. Ask your teacher, and her or she will know whether you or your class will be entering.

The Junior Maths Challenge is aimed at confident young mathematicians who want to stretch their brains with questions that are bit spicier than those you might encounter in the classroom. Each week, the Parallelograms will contain one or two Challenge questions from the tests given in previous years.

These will be good practice if you are entering this year, and if you are not entering then they will still be good ways to stretch your mathematical mind. To get you warmed up, here is  relatively easy question … followed by another one that most of you should be able to attack.

::: problem id=1_1 marks=1
__1.1.__ What is the value of 2 x 0 x 1 + 1?

* [ ] 0
* [x] 1
* [ ] 2
* [ ] 3
* [ ] 4

---

This is simply a matter of doing the sum … and remembering the order of operations. So, multiplications take priority of addition, so
2 x 0 x 1 + 1 = (2 x 0 x 1) + 1 = (0) + 1 = 1
:::


## 2. Junior Maths Challenge 2011 (2)

::: problem id=2_1 marks=1
__2.1.__ How many of the integers 123, 234, 345, 456, 567 are multiples of 3?

* [ ] 1
* [ ] 2
* [ ] 3
* [ ] 4
* [x] 5

---
We could simply divide each of the given numbers by 3, and check that there is no remainder in each case. However, t is quicker to use the fact that an integer is divisible by 3 if and only if the sum of its digits is a multiple of 3.

123:	1 + 2 + 3 = 6
234:	2 + 3 + 4 = 9
345:	3 + 4 + 5 = 12
456:	4 + 5 + 6 = 15
567:	5 + 6 + 7 = 18

These are all multiples of 3, so all five numbers are multiples of 3, so the answer is E.
:::


## 3. The tale of Marie Curie

Marie Curie is best known as a physicist and a chemist. Indeed, she two Nobel prizes, one in physics and one in chemistry, and only four scientists in history have ever won two Nobels. However, Curie’s father taught mathematics, and she also took mathematics courses at university, which certainly helped her win her Nobel Prizes.

Also, before marrying Pierre Curie, she fell in love with Kazimierz Żorawski, who would become a professor of mathematics. Tragically, his family refused to let him marry Curie, a decision that haunted him for the rest of his life. As an old man and a retired mathematician, he would regularly visit the statue of Curie that had been erected in Warsaw. She was still the great love of his life and now one the world’s most famous scientists.

She is one of the most heroic and inspiring scientists in history, and below is a short video that tells her story. Watch carefully and answer the question that follows.

::: problem id=3_1 marks=1
__3.1.__ Curie’s 1911 Nobel Prize was for the discovery of an element that was named after a country. What is the name of the element?

* [ ] Francium
* [ ] Francesium
* [ ] Polandium
* [x] Polonium
* [ ] Newzealandium

:::


## 4. A rotten riddle

Can you solve the following riddle?
::: problem id=4_1 marks=1
__4.1__ If you break me and I become better than I was before, and I become even hard to break.

What am I?

The answer involves 6 or these 7 letters: __BCRRDEO__

<input type="text" solution="Record">

---

The answer is __Record.__

:::


## 5. Caesar cipher – “Infamy, infamy, they’ve all got it in for me.”

Last week, I said the cryptography (the maths of codes and codebreaking) would be a theme in the next few Parallelograms, so here is this week’s lesson and puzzle relating to the writing of secret messages.

The Caesar cipher, which supposedly dates back to the Romans, involves shifting every letter by the same amount. For example, below is the standard alphabet, and we can imagine a shift of 2, which means encoding each letter with the letter that is 2 places further up.

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}

A is encoded as C … B is encoded as D … C is encoded as E, and so on.
CAT become ECV.

So far, so good, but where is the maths? Above the alphabet, each letter is labelled with a number from 0 to 25, and in instead of thinking of encoding as shifting, we can think of encoding as adding.

  CAT   = 2-0-19
  CAT+2 = 4-2-21 = ECV

Decoding is the opposite of addition, namely subtraction.

  ECV   = 4-2-21
  ECV–2 = 2-0-19 = CAT

So far, so good, but happens if we encode a word such as YES with a shift of 3.

  YES   = 24-4-18
  YES+3 = 27-7-21 = ?HV

![](resources/7-02-junior-maths/5-encoding-diagram.png)

27 does not appear in our alphabet. How do we represent 27 as a letter? What letter does Y turn into?

The solution is modulo arithmetic, which operates by arranging all the allowable numbers in a circle, so that three odd things happen.

1. In modulo (26) arithmetic, we replace 26 with 0.
2. Addition normally means moving along the number line, but now we move around the number circle.
3. That means, for example, 24 + 3 = 1 (not 27).

Therefore, YES is encoded as 27-7-21, which in modulo (26) is 1-7-21, which is BHV.

You encounter modulo arithmetic every day, when you look at a clock (and sometimes it is called clock arithmetic. Two hours after 11pm (or 23.00) is not 13pm (or 25.00), but rather 1am (or 01.00).

So, if we encoded the word WORD with a shift of 10, then:

  WORD    = 22-14-17-3
  WORD+10 = 32-24-27-13

The numbers need to between 0 and 25, so we subtract 26 from the encoded number until it is ok.

  WORD+10 = 6-24-1-13 = GYBN

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}

For each of the following questions, you can fill in three boxes. You get ½ mark for the first two boxes and ½ mark for the third box.

__EXAMPLE__
Encode the word BOX with a shift of 1 into a new 3-letter word		
BOX in numbers = 1-14-23  BOX + 1 in numbers = 2-15-24  BOX +1 in letters = CPY

::: problem id=5_1 marks=1
__5.1__ Encode the word BOX with a shift of 2 into a new 3-letter word.

When you translate BOX into numbers, add 2 to each number and convert the result back into letters, you get:

* [ ] ZMV
* [ ] ANW
* [ ] CPY
* [x] DQZ
* [ ] CQW

:::

::: problem id=5_2 marks=1
__5.2__ Encode the word BOX with a shift of 10 into a new 3-letter word.

When you translate BOX into numbers, add 10 to each number and convert the result back into letters, you get:

* [ ] MAG
* [x] NBJ
* [ ] PEJ
* [ ] OEI
* [ ] MBH

---
You need to apply the modulo arithmetic:
13-1-9 = NBJ
:::

::: problem id=5_3 marks=1
__5.3__ Encode the word BOX with a shift of 25 into a new 3-letter word.

When you translate BOX into numbers, add 25 to each number and convert the result back into letters, you get:

* [ ] ZMV
* [ ] ZNY
* [x] ANW
* [ ] CPY
* [ ] AMZ

---
Another way of adding 25 in modulo arithmetic is to subtract 1. Instead of going forward 25 spaces, you can just do one step back, which is a shortcut to getting the answer.
0-13-22 = ANW
:::

::: problem id=5_4 marks=1
__5.4__ Encode the word BOX with a shift of 26 into a new 3-letter word.

When you translate BOX into numbers, add 26 to each number and convert the result back into letters, you get:

* [ ] ANW
* [ ] ZNY
* [ ] CPY
* [ ] APY
* [x] BOX

---
A shift of 26 gets you back to where you started, so no change.
1-14-23 = BOX
:::

::: problem id=5_5 marks=1
__5.5__ Encode the word BOX with a shift of 52 into a new 3-letter word.

When you translate BOX into numbers, add 52 to each number and convert the result back into letters, you get:

* [ ] APY
* [x] BOX
* [ ] CPY
* [ ] ANW
* [ ] ZNY

---
Again, because these are multiples of 26, no change.
1-14-23 = BOX
:::

::: problem id=5_6 marks=1
__5.6__ Encode the word BOX with a shift of 260 into a new 3-letter word.

When you translate BOX into numbers, add 260 to each number and convert the result back into letters, you get:

* [ ] APY
* [ ] ANW
* [ ] ZNY
* [ ] CPY
* [x] BOX

---
Again, because these are multiples of 26, no change.
1-14-23 = BOX
:::

::: problem id=5_7 marks=1
__5.7__ Encode the word BOX with a shift of 261 into a new 3-letter word.

When you translate BOX into numbers, add 261 to each number and convert the result back into letters, you get:

* [x] CPY
* [ ] BOX
* [ ] ZMV
* [ ] ANV
* [ ] ZNY
---
A shift of 261 is the same as a shift of 260 and then a shift of 1. A shift of 260 makes no difference as it is a multiple of 26, so we are looking simply at a shift of 1.  
2-15-24 = CPY
:::


## 6. Square it!

The great maths website NIRCH has a tricky game called “Square It”. Play against the computer in 1-player mode and see you can win.

https://nrich.maths.org/2526

If you do manage to win, then just take a photo or screengrab, which includes the date and time, and then email it to me at [prizes@parallel.org.uk](mailto:prizes@parallel.org.uk) – we will pick one winner at random and send them a copy of my book “The Simpsons and Their Mathematical Secrets”.


I hope you enjoyed (or at least did not hate)  this Parallelogram, the second one of the 2018. There will be more next week, and the week after, and the week after that. So check your email or return to the website on Friday.

In the meantime, you can find the answers and go through the answer sheet after 7pm on Sunday. This is really important. Seriously important. What you got right is much less important that what you got wrong, because where you went wrong provides you with an opportunity to learn something knew.

Cheerio,
Simon.


::: submit
