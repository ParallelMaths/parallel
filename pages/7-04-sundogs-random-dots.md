# _Year 7 • Parallelogram 4_ Sundogs and Random Dots

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

__Origin__: late 16th century: from French parallélogramme, via late Latin from Greek parallēlogrammon, from parallēlos ‘alongside another’ + grammē ‘line’.  

1. a four-sided plane rectilinear figure with opposite sides parallel.
2. a portmanteau word combining parallel and telegram. A message containing
   mischievous maths problems sent each week by the Parallel Project to bright
   young mathematicians.

</div>

A collection of mathematical challenges designed to stretch your brain.

* Start and stop whenever you like – your work will be saved each time.
* But it is better to tackle each Parallelogram in one go.
*	Complete by 7pm Sunday if your whole class is doing Parallelograms.
*	Return after 7pm on Sunday to find your score, answers and explanations.
*	Make sure you complete every challenge and hit the SUBMIT button.

__IMPORTANT__ – you will get points for every correct answer (or nearly correct
  answer).

__IMPORTANT__ – it does not really matter what score you get, the main thing is
that you think hard about the problems... and then learn where you went wrong
when the answer sheet appears.


## 1. Four random dots create something wonderful

Okay. Grab a pencil, paper and ruler.

*	Make 4 random dots (or ask someone else to make them for you).
*	Join up the dots to make a quadrilateral.
*	Put a mark at the midpoint of each line in this first quadrilateral.
*	Join up the four new point to make a new second quadrilateral.

::: problem id=1_1 marks=2
__1.1__ What shape is this second quadrilateral? Make sure you spell it correctly.

<input type="text" solution="Parallelogram"/>

---
![](/resources/7-04-sundogs-random-dots/1-mathematical-image.png){style="width:400px"}

The reason for the pretty mathematical image above is that I wanted to create a buffer between the question and the answer... which I am now about to tell you.

If you followed the instructions above, you should have ended up with a parallelogram. I find it shocking that you can start with four random dots and then end up with a perfect parallelogram, as shown here.

![](/resources/7-04-sundogs-random-dots/1-mathematical-image.png){image align="center"}

You can test this by playing around with the interactive graphic on this page on [Math Open Reference website](https://www.mathopenref.com/parallelograminscribed.html). You can drag the four orange dots wherever you want, and it automatically generates the first quadrilateral, the midpoints and the second internal quadrilateral, which is always a parallelogram.
:::


## 2. Sundogs over Sweden

I spotted this on a NASA website called [Astronomy Picture of the Day](https://apod.nasa.gov/apod/ap180101.html), even though it is a video, not a picture. It shows the Sun as it was observed in Sweden in 2017.

@[youtube](6c0wTtq4xDM?rel=0)

According to the NASA website, the Sun looks weird because it the air is full of ice crystals, which behave like millions of tiny lenses:

_“Water may freeze in the atmosphere into small, flat, six-sided, ice crystals. As these crystals flutter to the ground, much time is spent with their faces flat and parallel to the ground. An observer may find themselves in the same plane as many of the falling ice crystals near sunrise or sunset. During this alignment, each crystal can act like a miniature lens, refracting sunlight into our view and creating phenomena like “parhelia”, the technical term for sundogs. Visible in the centre is the most direct image of the Sun, while two bright sundogs glow prominently from both the left and the right. Also visible is the bright 22-degree halo -- as well as the rarer and much fainter 46-degree halo –  also created by sunlight reflecting off of atmospheric ice crystals.”_

There is a different Astronomy Picture of the Day each day, so visit regularly if you are interested in the universe.


## 3. Junior Maths Challenge 2011 (12)

::: problem id=3_1 marks=2
__3.1__ If &#9650; + &#9650; = &#9726; and &#9726; + &#9650; = &#9679; and &#9670; = &#9679; + &#9726; + &#9650;, how many &#9650;s are equal to &#9670;?

* [ ] 2
* [ ] 3
* [ ] 4
* [ ] 5
* [x] 6

---

We have that &#9726; = &#9650; + &#9650; (1), and &#9679; = &#9726; + &#9650; (2). Substituting from (1) into (2) gives:  

&#9679; = &#9650; + &#9650; + &#9650;.  

Hence from &#9670; = &#9679; + &#9726; + &#9650;, we deduce that:  

&#9670; = (&#9650; + &#9650; + &#9650;) + (&#9650; + &#9650;) + &#9650;.  

So &#9670; is equal to six &#9650;s.

:::

## 4. The three siblings riddle

Can you solve the following riddle?
::: problem id=4_1 marks=1
__4.1__ John’s mother had three children. The first was named April and the second was named May. What was the name of the third child?

<input type="text" solution="John"/>

---

The natural inclination is to continue the sequence – April, May and … June. But read the question carefully, because it starts with “John’s mother had three children...”, so John is one of the children, so John must be the answer.

:::


## 5. Multiplicative ciphers

Over the last couple of weeks, we discussed how you can encode a message by turning each letter into a number according to the alphabet-number pairings below, adding a fixed number to each letter-number and then turning the new numbers back into letters.

If you want to decode a message, then you just reverse the process, so you subtract the fixed number, rather than adding it. [If any of this sounds unfamiliar or confusing, then revisit Parallelogram 2 by way of revision](/7-02-marie-curie){target="_blank"}.

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}

Perhaps you are already asking the following question: instead of adding a number, can we multiply by a number?  

Let’s give it a go and find out what happens.  

Let’s encode the word BAT by multiplying by __2__. BAT is first turned into the numbers 1¦0¦19.  

If we multiply each number by __2__, then the result is 2¦0¦38, but we don’t allow numbers bigger than 25, because our alphabet only stretches from 0 to 25. Therefore, we subtract 26 from 38, and the result is 2¦0¦12, which translates to the letters CAM.  

__BAT is encoded as CAM.__  

So far, so good. Now let’s encode the letters of the word BAG by multiplying by [2]. BAG is first turned into the numbers 1¦0¦6.  

If we multiply each number by [2], then the result is 2¦0¦12, which translates to the letters CAM.  

__BAG is encoded as CAM.__  

Hang on! BAT is encoded as CAM, but BAG is also encoded as CAM. How can two different words be encoded into the same word? This is a serious problem. If someone sent you the coded word CAM, then you would not know if they meant BAT or BAG.  

The problem arises because there are two ways of encoding something into M:

1. G = 6,	  2 x 6 = 12, 			12 = M  
2. T = 19,	2 x 19 = 38,	38 – 26 = 12,	12 = M  

Actually, there are two ways of encoding into every letter. For example,  

1. A = 0,	2 x 0 = 0, 			0 = A  
2. N = 13,	2 x 13 = 26,	26 – 26 = 0,	0 = A  

1. B = 1,	2 x 1 = 2, 			2 = C  
2. O = 14,	2 x 14 = 28,	28 – 26 = 2,	2 = C  

1. C = 2,	2 x 2 = 4, 			4 = E  
2. P = 15,	2 x 15 = 30,	30 – 26 = 4,	4 = E  

There is a pattern here. The two letters that are encoded in the same way (A & N), (B & O), (C & P) are all 13 letters apart. Why 13? Well, we are multiplying by [2] and there are 26 letters in the alphabet, and 26/2 = 13.

The problem of different letters being encoded in the same way arises because we are multiplying by [2], and 2 is factor of 26, which is the size of our alphabet.

A similar problem would arise if we were multiplying by [13], because 13 is a factor of 26. This time the problem is much worse, because A, C, E, G,…. are all encoded in the same way and become A.  

A = 0,	13 x 0 = 0, 				0 = A  
C = 2,	13 x 2 = 26,	26 – 26 = 0,		0 = A  
E = 4,	13 x 4 = 52,	52 – 26 – 26 = 0,	0 = A  
G = 6,	13 x 6 = 78, 	78 – 26 – 26 – 26 = 0,	0 = A  

Also, B, D, F, H,... are all encoded in the same way and become N.  

__Everything in this section is probably new maths to you, or at least applied in a new way, so don’t worry if you are a bit confused. If you are a bit confused, then just read this section again – slowly –  and try to make sense of it. Then have a go at the questions below.  

By the way, the notion that encoded numbers must be between 0 and 25 is called modulo 26 arithmetic or MOD (26), and this topic was covered in [Parallelogram 2](/7-02-marie-curie){target="_blank"}. It might help to review this if you are unsure why, for example, 30 is the same as 4 MOD (26).__

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
{.grid}

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
{.grid}

::: problem id=5_1 marks=5
__5.1.__ If we are encoding by multiplying by 5, what do the following letters become?

The letter __A__ becomes <input type="text" solution="A"/>
The letter __B__ becomes <input type="text" solution="F"/>
The letter __D__ becomes <input type="text" solution="P"/>
The letter __G__ becomes <input type="text" solution="E"/>
The letter __M__ becomes <input type="text" solution="I"/>

:::

::: problem id=5_2 marks=3
__5.2.__ The word "OK" is encoded as:

* [ ] KO
* [x] SY
* [ ] RY
* [ ] SB
* [ ] US

---

O = 14, and 5 x 14 = 70, which is bigger than 26 so we have start subtracting 26s to bring it within the range of 0 to 25. Thus, 70 – 26 – 26 = 18, and 18 is the letter S.  

K = 10, and 5 x 10 = 50. To bring it within the range of 0 – 25, we work out 50 – 26 = 24, and 24 is the letter Y.

:::

We found that encoding by multiplying by 2 or 13 was a problem, because these numbers are both factors of 26, the size of the English alphabet. In fact, there is also a problem with multiplying by any even number, because all the even numbers have a common factor with 26, namely 2.  

Here is the rule if you want to encode a message by multiplying: “You can choose to multiply by any number, __as long as the number has no factors in common with the size of the alphabet that you are using.”__  

With this in mind, answer the questions below.

::: problem id=5_3 marks=2
__5.3.__ The Thai alphabet has 70 letters. If I am encoding a message in Thai by multiplying, which of the following would be the best number to multiply by?

* [ ] 5
* [ ] 6
* [x] 7
* [ ] 8
* [ ] 9

^^^ hint id=1
Remember the gold rule: you can multiply by any numbers __“as long as the number has no factors in common with the size of the alphabet that you are using.”__
^^^

---

The answers is 9, because it is the only number tha t has no factors in common with 70 (the size of the alphabet). 5 is a factor 70, 6 shares a factor of 2, 7 is a common factor, and 8 shares a common factor of 2.

:::

::: problem id=5_4 marks=2
__5.4.__ The Albanian alphabet has 36 letters. If I am encoding a message in Albanian by multiplying, which of the following would be the best number to multiply by.

* [ ] 2
* [ ] 3
* [x] 4
* [ ] 5
* [ ] 6

---

The answer is 5, because the Albanian alphabet has 36 letters, and all the other options not only share a common factor with 36, they are factors of 36.  

:::

::: problem id=5_5 marks=2
__5.5.__ Consider the following 8 alphabets, listed with the numbers of letters that each contains. If I wanted to encode by multiplying by 13, how many of these alphabets would turn out to be problematic:

* Thai - 70		
* Abkhaz - 41
* Sinhala - 54 		
* Albanian - 36
* Bangla - 52		
* Russian - 33
* Hungarian - 44 		
* English - 26
{.col-2}

* [ ] 0
* [ ] 1
* [x] 2
* [ ] 3
* [ ] 4

---

The answer is 2, because English has 26 letters, and 13 is a factor of 26 AND Bangla has 52 letters, and 13 is a factor of 52 (4 × 13 = 52).

:::

::: problem id=5_6 marks=2
__5.6.__ Which of the eight alphabets above would allow me to multiply by almost any number I want?

* [ ] Abkhaz
* [ ] Russian
* [x] Hungarian
* [ ] English
* [ ] Thai
{.col-5}

^^^ hint id=1
Alphabets with a prime number of letters are generally good, because prime numbers have no factors apart from 1 and the number itself.
^^^

---

Abkhaz with 41 letters has a prime number or letters, so you could multiply by anything and be sure of choosing a number that has no common factors with 41. Of course, if you chose to multiply by 1, then that would not be very clever, as every letter would remain the same. And if you multiplied by 41 there would also be a problem. But otherwise, there are no problems.

:::

## 6. University Challenge – modular arithmetic

Take a look at this.

@[youtube](AfZDwDE1yr8?rel=0)

How did “Magdalen-Binnie” work it out so quickly?  

As he mentions at the end, it’s all down to modular arithmetic, which is something we’ve been using to work out some of the answers to do with codes over the last week or two.  

In this case, the question is what day is 100 days after Monday? The days of the week operate according to modulo 7, so we just need to work out 100 in MOD(7).  

__100 ÷ 7 = 14 remainder 2__,	so __100 in MOD(7) is 2__.  

In other words, 100 days is 14 weeks + 2 days.  

14 weeks after Monday bring us back to Monday, and 2 more days take us to Wednesday.  


As it is half-term for most students, you have a bit more time to complete this Parallelogram.  

Check your email or return to the website on Friday 23 February at 4pm for the next Parallelogram.  

In the meantime, you can go through the answer sheet after 7pm on Sunday 18 February, but first remember to hit the SUBMIT button below, and then maybe take a look at the “Additional Stuff” section.

Cheerio,
Simon.


::: submit


---

## Additional Stuff

The noughts and crosses video in this week’s Parallelogram reminded me of a
couple of things.

* Here is a [short video by Jay about modular arithmetic](https://www.youtube.com/watch?v=OlLns9fkMtk){target="_blank"}. It is a simple introduction, so worth looking at if you are finding modular arithmetic confusing.

* [This is one of the most famous examples from Astronomy Picture of the Day,
known Pillars of creation](https://apod.nasa.gov/apod/ap150107.html){target="_blank"}.
By all means be awe struck by the image, but remember to read the explanation
below the image.
