# Optimising your pizza money

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


## 1. How to make Countdown harder than it needs to be

This is a very easy Countdown numbers game, but I like the way that Noel decides to make it ridiculously complicated.

@[youtube](dfwkZ6LSKEE?rel=0)

::: problem id=1_1 marks=1
__1.1__ The numbers were (75, 25, 100, 50, 9, 8). Following Countdown rules, and using ALL of the numbers, is it possible to create the number 1?

* [x] Yes
* [ ] No

---

Yes, because one solution is (75 + 50) – (100 + 25) + 9 – 8
:::

::: problem id=1_2 marks=1
__1.2__ The numbers were (75, 25, 100, 50, 9, 8). Following Countdown rules, and using ALL of the numbers, is it possible to create the number 0?

* [x] Yes
* [ ] No

---

Yes, because one solution is (75 + 50) ÷ (100 + 25) + 8 – 9
:::

## 2. Junior Maths Challenge
<!--- 2011 (21) --->

::: problem id=2_1 marks=2
__2.1__ Gill leaves Lille by train at 09:00. The train travels the first 27 km at 96 km/h. It then stops at Lens for 3 minutes before travelling the final 29 km to Lillers at 96 km/h. At what time does Gill arrive at Lillers?


* [ ] 09:35
* [x] 09:38
* [ ] 09:40
* [ ] 09:41
* [ ] 09:43
{.col-5}

---

In total, the train travels 27 km + 29 km = 56 km.

So the combined time for these two parts of the journey is `56/96` hours = `7/12` hours = 35 minutes.

There is also the 3 minutes of waiting at Lens. The total journey time, therefore, is 38 minutes. So Gill arrives at 09:38.

:::


## 3. The pizza equation

Your teachers and parents might have told you about the many applications of mathematics, everything from engineering to computer science, but have they told you about pizza economics? This video explains the mathematics behind buying a pizza.

@[youtube](YAawHbPiQfo?end=102&rel=0)

::: problem id=3_1 marks=1
__3.1__ Small pizzas are 30 cm in diameter, while super-sized pizzas are 90 cm in diameter. How many small pizzas do you need in order to get the same amount of pizza as one super-sized pizza?

* [ ] 1
* [ ] 3
* [ ] 5
* [ ] 7
* [x] 9
{.col-5}

---

The video explained that if the radius (or diameter) increases by a factor `x`, then the area increases by a factor `x`<sup>2</sup>. In this case the diameter increases by 3, so the area increases by 3<sup>2</sup> = 9.
:::

::: problem id=3_2 marks=2
__3.2__ Medium pizzas are 45 cm in diameter and cost £10. If the pricing was completely fair (ie, cost per cm<sup>2</sup> was constant), then how much should the small 30 cm diameter pizza cost?

* [ ] £3.00
* [x] £4.44
* [ ] £4.50
* [ ] £5.55
* [ ] £6.66
{.col-5}

---

The small pizza is `30/45` or `2/3` as wide as the medium pizza, so its area is (`2/3`)<sup>2</sup> smaller than the area of the medium pizza. Therefore, the small pizza SHOULD cost (`2/3`)<sup>2</sup> × £10 = £4.44. In practice, it will probably cost more, because of the reasons given in the video.
:::


## 4. Junior Maths Challenge
<!--- 2011 (22) --->

::: problem id=4_1 marks=3
__4.1__ Evariste and Sophie both bought some stamps for their collections. Each stamp Evariste bought cost him £1.10, whilst Sophie paid 70p for each of her stamps. Between them they spend exactly £10.00. How many stamps did they buy in total?

* [ ] 9
* [ ] 10
* [ ] 11
* [x] 12
* [ ] 13
{.col-5}

---

Suppose that Evariste buys `x` stamps and Sophie buys `y` stamps. Then 1.10`x` + 0.70`y` = 10.00. Hence, 11`x` + 7`y` = 100. We have one equation with two unknowns, so we need to use the fact that in this problem `x` and `y` are non-negative integers. `x` and `y` are whole numbers and bigger than or equal to zero.

By re-arranging the equation, `y = (100 – 11x)/7`. We need to test different values of `x` and find a whole number value for `x` that gives a whole number value for `y`. In other words, we need to find a value for `x`, such that `(100 – 11x)` is divisible by 7 without a remainder.

Taking `x = 0, 1, 2,… 9,` we have `y = (100 – 11x) = 100, 89, 78, 67, 56, 45, 34, 23, 12, 1`. We see that only for `x = 4` is `(100 – 11x)` divisible by 7. So `x = 4` and `y = 56/7 = 8`. So Sophie buys 8 stamps and Evariste buys 4 stamps, and they buy 12 stamps in total.

:::


## 5. The monoalphabetic substitution cipher – how many keys?

Last week we looked at the monoalphabetic substitution cipher, which swapped one letter for a different letter. The exact way that letters are substituted is known as the key. If the sender uses a key to substitute one letter for a different letter, then the receiver uses the same key to reverse the substitutions and read the original message. Here is one possible key:

| a | b | c | d | e | f | g | h | i | j | k | l | m |
| U | Z | G | Q | P | O | I | V | C | D | A | B | J |
{.grid}

| n | o | p | q | r | s | t | u | v | w | x | y | z |
| H | F | Y | E | M | S | R | X | N | L | T | W | K |
{.grid}

The challenge for an enemy agent who has intercepted a coded message is to work out the key and read the message. If you're the enemy agent with a coded message, how long would it take you to work out the key? How long would it take to work out how each letter has been substituted?

To answer that question, first we need to know how many different keys are possible. Another way to phrase this question is to ask: "How many different ways can you re-arrange an alphabet of 26 letters?"

This is a big question, so let’s start with a smaller alphabet and see if we can find a pattern.

* A 1-letter alphabet (A) can only be arranged in __1 way__ – A.
* A 2-letter alphabet (AB) can be arranged in __2 ways__ – AB, BA
* A 3-letter alphabet (ABC) can be arranged in __6 ways__ – ABC, ACB, BAC, BCA, CAB, CBA.

A pattern is emerging, and you can see it below:

| Size of Alphabet | Number of arrangements | Why? | Factorial |
| ---------------- | ---------------------- | ---- | --------- |
| 1 | 1 | 1 | 1! |
| 2 | 2 | 1 × 2 | 2! |
| 3 | 6 | 1 × 2 × 3 | 3! |
{.grid}

(1 × 2 × 3) is called “three factorial” and is abbreviated to 3!

But why is 3! the number of ways that you can arrange a 3-letter alphabet?
* imagine an arrangement.
* the first letter could be any of the 3 letters.
* the second letter could be either of the other 2 letters.
* the third letter must be the 1 remaining letter.
* so we had 3 × 2 × 1 possibilities.

::: problem id=5_1 marks=1
__5.1.__ How many ways can you arrange a 4-letter alphabet (ABCD)?

<input solution="24"/>  

---

There are 4! ways to arrange a 4-letter alphabet, which is 24 or (4 × 3 × 2 × 1) possibilities.
:::

::: problem id=5_2 marks=1
__5.2.__ How many ways can you arrange a 5-letter alphabet (ABCDE)?

<input solution="120"/>  

---

There are 5! ways to arrange a 5-letter alphabet, which is 120 or (5 × 4 × 3 × 2 × 1) possibilities.
:::

::: problem id=5_3 marks=2
__5.3.__ What is the value of 8! (or how many ways can you arrange an 8-letter alphabet?)

You can work it out using your calculator’s factorial button – look for the exclamation mark – or you can work it out by multiplying over and over again.

<input solution="40320"/>  
:::

::: problem id=5_4 marks=2
__5.4.__ By now, you should have grasped that there are n! ways to rearrange n letters or n objects. Now think about how you would write down n! if you were breaking it down into a series of multiplications. How would you write it?  

* [ ] n! = n × (n-1) × … × (n – n)
* [ ] n! = (n-1) × (n – 2) × … × 2 × 1
* [x] n! = n × (n – 1) × … × 2 × 1
:::

## 6. Back to our original question

::: problem id=6_1 marks=1
__6.1.__ How many ways can you arrange our usual 26-letter alphabet? In other words, how many different keys are there for the monoalphabetic substitution cipher?

* [ ] 26
* [ ] 26<sup>26</sup>
* [ ] 26 + 25 + ... + 2 + 1
* [x] 26!
* [ ] 26<sup>2</sup>
:::

::: problem id=6_2 marks=2
__6.2.__ Convert your answer from question 6.1 into an actual number by using a calculator. The answer is more than 100 million billion billion - how many million billion billions is it? Please provide a three digit answer.

<input solution="403"/> million billion billion

---

If you type 26! into a calculator, then the answer is 403,291,461,126,605,635,584,000,000 000 (or it will look something like 4.0329...e26), so the answer is 403 (million billion billion).
:::


Before you hit the SUBMIT button, here are some quick reminders:

*	You will receive your score immediately, and collect your reward points.
*	You might earn a new badge... if not, then maybe next week.
*	Make sure you go through the solution sheet – it is massively important.
*	A score of less than 50% is ok – it means you can learn lots from your mistakes.
*	The next Parallelogram is next week, at 3pm on Thursday.
*	Finally, if you missed any earlier Parallelograms, make sure you go back and complete them. You can still earn reward points and badges by completing missed Parallelogams.

Cheerio,
Simon.



::: submit


---

## Additional Stuff

* [Here is a neat website that allows you to play the Countdown numbers game (and the letters game)](https://incoherency.co.uk/countdown/practice/#numbers){target="_blank"}.
