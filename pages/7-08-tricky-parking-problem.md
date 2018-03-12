# _Year 7 • Parallelogram 8_ Tricky parking problem

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteaux word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

Here is this week's collection of mathematical challenges designed to stretch
your brain.

* Start and stop whenever you like – your work will be saved each time.
* But it is better to tackle each Parallelogram in one go.
* Complete by 7pm Sunday if your whole class is doing Parallelograms.
*	Return after 7pm on Sunday to find your score, answers and explanations.
* Make sure you complete every challenge and hit the SUBMIT button.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then learn where you went wrong when the answer sheet appears.


## 1. Parking puzzle

![](/resources/7-08-tricky-parking-problem/7-parking-puzzle.jpg){image align="center"}

::: problem id=1_1 marks=2
__1.1__ What is the number of the space where the car is parked?

<input solution="87"/>  

---

In order to solve this puzzle, you need to imagine looking at the numbers from the driver’s point of view. Starting from the left, the driver would see 91 – 90 – 89 – 88 – XX – 86. So, then it is obvious that the hidden number is 87.
:::


## 2. Cats and dogs

Lots of schools offer students a weekly or monthly maths puzzle competition. If your school does not have such a competition, then you could suggest it to your maths teacher.

And if you are a student or teacher that already takes part in or runs a regular puzzle, then let us know if you have a questions that we could included in our Parallelograms [by emailing us](mailto:contact@parallel.org.uk).

In the meantime, here is a question from a London school, posed to its students earlier this year.

::: problem id=2_1 marks=2
__2.1__ Donald is standing on some scales, holding his cat and dog. The reading is 102kg. Donald weighs 60kg more than the combined weight of his cat and dog. The cat weighs 60% less than the dog. How much, in kg, does the dog weigh?

<input solution="13.125"/> kg  

---

We know that:  

(a)	Don + Dog + Cat = 102kg  
(b)	Don = Dog + Cat + 60kg (or Dog + Cat = Don – 60kg)  
(c)	Cat = 0.6 x Dog  
{.text-center}

Plugging (b) into (a) tells us:

Don + (Don – 60 kg) = 102 kg.  
So,	__Don = 81 kg__  
{.text-center}

Knowing this, we can then use (a) and (c) to say:

81 + Dog + (0.6 x Dog)= 102 kg  
So, 1.6 Dog = 21 kg  
{.text-center}

__Dog = 13.125 kg__  
So, __Cat = 7.875 kg__  
{.text-center}


:::


## 3. How to trick your maths teacher

This is a wonderful magic trick by Aleko. Take a look at the video below, and play along by thinking of a number or picking a random card. When the trick has finished, and after you have stopped being astounded, think hard about how the trick is done. You might need to watch the video again and note down the instructions given to you. If you can’t figure out the magic maths behind the trick, then click on the hint below for a full explanation of how Aleko did it, and how you can perform the trick yourself. You will not lose any marks by clicking on the hint.

By the way... if you are interested in magic or enjoyed being amazed then make sure you check out the video in the additional stuff section at the end. Seriously... you will not want to miss it.

@[youtube](mQVF_d6VXcE?rel=0)

<HIDE ALL THIS>Imagine I am the magician, and I ask you to you to pick a card or number. We shall call this `X`.  

First, I ask you to double `X` to get `2X`.  

Then I ask you to add 2 to get `2X + 2`.  

Then I ask you multiply by 5 to get `10X + 10`  

Now let’s say I a `Y`-card in my hand, then I work out `10 – Y` and I ask you to subtract this number from your total, so you end up with `(10X + 10) – (10 – Y)`, which is `(10X + Y)`.  

So the tens number is always `X` (the card that you chose, and the units number is always `Y`, the number I chose. And that’s the mathematical magic behind the trick.</HIDE ALL THIS>


## 4. Junior Maths Challenge 2011 (25)

::: problem id=4_1 marks=3
![](/resources/7-08-tricky-parking-problem/4-jmc-polygon-question.jpg){image align="right"}
__4.1__ The diagram shows a trapezium made from three equilateral triangles.

Three copies of the trapezium are placed together, without gaps or overlaps and so that complete edges coincide, to form a polygon with `N` sides.

How many different values of N are possible?

* [ ] 4
* [ ] 5
* [x] 6
* [ ] 7
* [ ] 8
{.col-5}

---

The three trapeziums have 12 edges in total. Whenever two of them are joined together, the total number of edges is reduced by at least 2. So the maximum possible value of `N` is `12 - 2 × 2 = 8`.
The minimum number of sides for a polygon is 3. So there are just 6 values for `N`, namely 3, 4, 5, 6, 7 and 8, that could possibly occur. The diagrams below show that they all can be achieved.

![](/resources/7-08-tricky-parking-problem/4-jmc-polygon-solutions.jpg){image align="center"}

:::


## 5. More about factorials

Last week, while continuing to explore codes, we looked asked: “How many ways can we re-arrange the English alphabet of 26 letters?” [Take a look back at last week’s Parallelogram (#7)](/7-07-optimise-pizza-money) if you need to remind yourself what we did.

In short, there are 26! ways to re-arrange 26 letters, where 26! means `26 × 25 × 24 ... × 1`.

The (!) is called factorial, and be applied to any number, eg 4! = `4 × 3 × 2 × 1 = 24`.


::: problem id=5_1 marks=1
__5.1.__ This is a question from the previous Parallelogram, but it is a good refresher question. How many ways can you re-arrange the alphabet? In other words, find out the value of 26!. You will need to use a calculator and find its (!) button.

The answer is more than 100 million billion billion - how many million billion billions is it? Please provide a three digit answer.

<input solution="403"/> million billion billion

:::

If you were trying to break a code, where every letter had been replaced with a different letter, you might try to check every rearrangement of the alphabet. Here is one such re-arrangement.

| a | b | c | d | e | f | g | h | i | j | k | l | m |
| U | Z | G | Q | P | O | I | V | C | D | A | B | J |
{.grid}

| n | o | p | q | r | s | t | u | v | w | x | y | z |
| H | F | Y | E | M | S | R | X | N | L | T | W | K |
{.grid}

::: problem id=5_2 marks=1
__5.2.__ How long would it take to check every possible arrangement, assuming that it takes 5 seconds to check each arrangement? Which of the following expressions would give you correct answer in years?

* [x] (26! × 5) × 31,536,000 years
* [ ] 31,536,000 ÷ (26! × 5) years
* [ ] (26! × 5) ÷ 31,536,000 years

---

There are 26! different arrangements, and each one takes 5 seconds to check each one, so it would take (26! × 5) seconds to check all of them.

There are (60 × 60 × 24 × 365) = 31,536,000 seconds in a year of 365 days.

So it would take (26! × 5) ÷ 31,536,000 years.

:::

::: problem id=5_3 marks=2
__5.3.__ How many years would it take to check every possible arrangement?

* [ ] about 60 million years
* [ ] about 60 billion years
* [ ] about 60 million billion years
* [x] about 60 billion billion years
* [ ] about 60 trillion years
:::

::: problem id=5_4 marks=2
__5.4.__ The answer from question 5.3 is much bigger than the age of the universe. How many times bigger than the age of the universe? Which of these answers is nearest?

* [ ] about double
* [ ] about 10
* [ ] about a thousand
* [ ] about a million
* [x] about a billion
:::

## 6. Rocket software

This is a photo of Margaret Hamilton, who spent the 1960s developing the software for the rocket guidance system that took humans to the moon. She helped popularise the term software engineer and was pioneer in computing, particularly when it came to writing software that could cope with errors, by either fixing them or avoiding them or preventing them.

While a mother in her twenties, having completed a degree in mathematics, Hamilton was a crucial figure in the Apollo moon project. Below, you can see her standing next to a print out of the computer code that she created. I like the fact that the stack was so tall that they had to remove the printout at the top so that you could see Hamilton when she stood behind it.

![](/resources/7-08-tricky-parking-problem/6-margaret-hamilton.jpg){image align="center"}

***

Check your email or return to the website on Friday at 4pm for the next
Parallelogram.

In the meantime, you can go through the answer sheet after 7pm on Sunday, but first remember to hit the SUBMIT button below, and then maybe
take a look at the “Additional Stuff” section.

Cheerio,
Simon.


::: submit


---

## Additional Stuff

* This video shows a trick from the amazing – truly amazing - René Lavand, a magician from Argentina who performed magic with only one hand, because he lost a hand aged nine, in a car crash.

@[youtube](hqzkGEvOOTc?rel=0)
