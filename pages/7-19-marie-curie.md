# Madam Curie’s square riddle

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
<!--- 2011 (1) --->

The Junior Maths Challenge is a maths competition run by the UK Maths
Trust, and if you're in the UK you might be entering this year. Ask your teacher, and he or
she will know whether you or your class will be entering.

The Junior Maths Challenge is aimed at confident young mathematicians who want to
stretch their brains with questions that are a bit spicier than those you might
encounter in the classroom. Each week, the Parallelograms will contain one or two
Challenge questions from the tests given in previous years.

These will be good practice if you are entering this year, and even if you are not
entering they will still be good ways to stretch your mathematical mind. To get
you warmed up, here is a relatively easy question... followed by another one that
most of you should be able to attack.

::: problem id=1_1 marks=1
__1.1.__ What is the value of `2 × 0 × 1 + 1`?

* [ ] 0
* [x] 1
* [ ] 2
* [ ] 3
* [ ] 4

---

This is simply a matter of doing the sum... and remembering the order of
operations. So, multiplications take priority over addition, so
`2 × 0 × 1 + 1 = (2 × 0 × 1) + 1 = (0) + 1 = 1`.
:::


## 2. Junior Maths Challenge Problem (UKMT)
<!--- 2011 (2) --->

::: problem id=2_1 marks=1
__2.1.__ How many of the integers 123, 234, 345, 456, 567 are multiples of 3?

* [ ] 1
* [ ] 2
* [ ] 3
* [ ] 4
* [x] 5

---
We could simply divide each of the given numbers by 3, and check that there is no
remainder in each case. However, it is quicker to use the fact that an integer is
divisible by 3 if and only if the sum of its digits is a multiple of 3.

123:	1 + 2 + 3 = 6  
234:	2 + 3 + 4 = 9  
345:	3 + 4 + 5 = 12  
456:	4 + 5 + 6 = 15  
567:	5 + 6 + 7 = 18  

These are all multiples of 3, so all five numbers are multiples of 3, so the
answer is 5.

In fact, the sum of any 3 consecutive numbers is a multiple of 3, as one of those numbers will already be a multiple of 3, one will be exactly 1 less than a multiple of 3, and one will be exactly one more than a multiple of 3. So, when added together the +1 and –1 will cancel, and give us a multiple of three.

We can show this algebraically for the three consecutive numbers `n - 1`, `n`, and `n + 1`: `(n - 1) + n + (n + 1) = 3n`.
:::


## 3. The tale of Marie Curie

Marie Curie is best known as a physicist and a chemist. Indeed, she won two Nobel
prizes, one in physics and one in chemistry. Only four scientists in all of
history have ever won two Nobels. However, as well as being a scientist, Curie had
a strong interest in maths. Her father taught mathematics, and she also took
mathematics courses at university, which certainly helped her win her Nobel Prizes.

Also, before marrying Pierre Curie, she fell in love with Kazimierz Żorawski, who
would become a professor of mathematics. Tragically, his family refused to let him
marry Curie, a decision that haunted him for the rest of his life. As an old man
and a retired mathematician, he would regularly visit the statue of Curie that had
been erected in Warsaw. She was still the great love of his life, and now one of the
world’s most famous scientists.

Curie is one of the most heroic and inspiring scientists in history, and below is
a short video that tells her story. Watch carefully and answer the question that
follows.

@[youtube](w6JFRi0Qm_s?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=3_1 marks=1
__3.1.__ Curie’s 1911 Nobel Prize was for the discovery of an element that was named after a country. What is the name of the element?

* [ ] Francium
* [ ] Francesium
* [ ] Polandium
* [x] Polonium
* [ ] Newzealandium

---

Polonium was discovered in 1898 by Marie and Pierre Curie, and it was named after Marie Curie's homeland of Poland.
:::


## 4. A rotten riddle

Can you solve the following riddle?
::: problem id=4_1 marks=1
__4.1__ If you break me, then I become better than I was before, and I become even
harder to break.

What am I?

The answer is made up of exactly 6 of these 7 letters: __BCRRDEO__

<input type="text" solution="Record">

---

The answer is __Record.__

:::


## 5. Caesar cipher

Last week, I said that cryptography (the maths of codes and codebreaking) would be
a theme in the next few Parallelograms, so here is this week’s lesson and puzzle
relating to the writing of secret messages.

The Caesar cipher, which supposedly dates back to the Romans, involves shifting
every letter by the same amount. For example, below is the standard alphabet, and
we can imagine a shift of 2, which means encoding each letter with the letter that
is 2 places further up.

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}

A is encoded as C... B is encoded as D... C is encoded as E, and so on.  
CAT become ECV.

So far, so good, but where is the maths? In the alphabet above, each letter is
matched with a number from 0 to 25, and instead of thinking of encoding as
shifting, we can think of encoding as adding.

CAT     = 2¦0¦19  
CAT + 2 = 4¦2¦21 = ECV{.text-center}

Decoding is the opposite of addition, namely subtraction.

ECV     = 4¦2¦21  
ECV – 2 = 2¦0¦19 = CAT{.text-center}

So far, so good, but what happens if we encode a word such as YES with a shift
of 3?

YES     = 24¦4¦18  
YES + 3 = 27¦7¦21 = ?HV{.text-center}

27 does not appear in our alphabet. How do we represent 27 as a letter? What
letter does Y turn into?

The solution is modulo arithmetic, which operates by arranging all the allowable
numbers in a circle, so that three odd things happen.

1. In modulo (26) arithmetic, we replace 26 with 0.
2. Addition normally means moving along the number line, but now we move around
the number circle.
3. That means, for example, 24 + 3 = 1 (not 27).

Therefore, YES is encoded as 27¦7¦21, which in modulo (26) is 1¦7¦21, which is BHV.

![](/resources/7-15-marie-curie/5-encoding-diagram.png)

You encounter modulo arithmetic every day, when you look at a clock (and sometimes
it is called __clock arithmetic__). Two hours after 11pm (or 23.00) is not 13pm
(or 25.00), but rather 1am (or 01.00).

So, if we encoded the word WORD with a shift of 10, then:

WORD      = 22¦14¦17¦3  
WORD + 10 = 32¦24¦27¦13{.text-center}

The numbers need to be between 0 and 25, so we subtract 26 from the encoded number
until it is ok.

WORD + 10 = 6¦24¦1¦13 = GYBN{.text-center}

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}


__Now it is also time to try some simple encoding problems, but first here is an
example__: encode the word BOX with a shift of 1 into a new 3-letter word:  

BOX in numbers      = 1¦14¦23  
BOX + 1 in numbers  = 2¦15¦24  
BOX + 1 in letters  = CPY{.text-center}

::: problem id=5_1 marks=1
__5.1__ Encode the word BOX with a shift of 2 into a new 3-letter word. In other
words, translate BOX into numbers, add 2 to each number and convert the result back
into letters:

* [ ] ZMV
* [ ] ANW
* [ ] CPY
* [x] DQZ
* [ ] CQW

:::

::: problem id=5_2 marks=1
__5.2__ Encode the word BOX with a shift of 10 into a new 3-letter word. In other
words, translate BOX into numbers, add 10 to each number and convert the result back
into letters:

* [ ] MAG
* [x] LYH
* [ ] PEJ
* [ ] OEI
* [ ] MBH

---
BOX is 1¦14¦23, and if we add 10 we get 11¦24¦33, which is L¦Y¦?.  

33 is bigger than 26, so we subtract 26 to get 7, which means that '?' = 'H'.  

So the answer is LYH.
:::

::: problem id=5_3 marks=1
__5.3__ Encode the word BOX with a shift of 25 into a new 3-letter word. In other
words, translate BOX into numbers, add 25 to each number and convert the result back
into letters:

* [ ] ZMV
* [ ] ZNY
* [x] ANW
* [ ] CPY
* [ ] AMZ

---
Another way of adding 25 in modulo arithmetic is to subtract 1. Instead of going
forward 25 spaces, you can just do one step back, which is a shortcut to getting
the answer.  
0¦13¦22 = ANW
:::

::: problem id=5_4 marks=1
__5.4__ Encode the word BOX with a shift of 26 into a new 3-letter word. In other
words, translate BOX into numbers, add 26 to each number and convert the result back
into letters:

* [ ] ANW
* [ ] ZNY
* [ ] CPY
* [ ] APY
* [x] BOX

---
A shift of 26 gets you back to where you started, so no change.  
1¦14¦23 = BOX
:::

::: problem id=5_5 marks=1
__5.5__ Encode the word BOX with a shift of 52 into a new 3-letter word. In other
words, translate BOX into numbers, add 52 to each number and convert the result back
into letters:

* [ ] APY
* [x] BOX
* [ ] CPY
* [ ] ANW
* [ ] ZNY

---
Again, because this is a multiple of 26, no change.  
1¦14¦23 = BOX
:::

::: problem id=5_6 marks=1
__5.6__ Encode the word BOX with a shift of 260 into a new 3-letter word. In other
words, translate BOX into numbers, add 260 to each number and convert the result back
into letters:

* [ ] APY
* [ ] ANW
* [ ] ZNY
* [ ] CPY
* [x] BOX

---
Again, because this is a multiple of 26, no change.  
1¦14¦23 = BOX
:::

::: problem id=5_7 marks=1
__5.7__ Encode the word BOX with a shift of 261 into a new 3-letter word. In other
words, translate BOX into numbers, add 261 to each number and convert the result back
into letters:

* [x] CPY
* [ ] BOX
* [ ] ZMV
* [ ] ANV
* [ ] ZNY
---
A shift of 261 is the same as a shift of 260 and then a shift of 1. A shift of 260
makes no difference as it is a multiple of 26, so we are looking simply at a shift
of 1.  
2¦15¦24 = CPY
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

From now on, Parallelograms will often contain this Additional Stuff section, which carries no mark, but which you might find interesting. Why not take a look? However, it is optional, so you can also just skip to the SUBMIT button and click.

*	You can find out more about Marie Curie and why reading her notebooks could
seriously damage your health [by visiting this
website](https://gizmodo.com/marie-curies-100-year-old-notebook-is-still-too-radioac-1615847891){target="_blank"}.
*	[This website allows you to encode and decode messages using the Caesar shift
code](https://www.simonsingh.net/The_Black_Chamber/caesar.html){target="_blank"}
