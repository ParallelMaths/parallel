# _Year 7 • Parallelogram 1_ Codes and Physics

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

__Origin__: late 16th century: from French parallélogramme, via late Latin from
Greek parallēlogrammon, from parallēlos ‘alongside another’ + grammē ‘line’.  

1. a four-sided plane rectilinear figure with opposite sides parallel.
2. a portmanteau word combining parallel and telegram. A message containing
   mischievous maths problems sent each week by the Parallel Project to bright
   young mathematicians.

</div>

Welcome to our first Parallelogram, a collection of mathematical challenges
designed to stretch your brain and make your neurons more squiggly.

You can start and stop whenever you like, but you should complete all the
challenges by 7pm on Sunday, particularly if your teacher has asked you to complete
this Parallelogram.

You can return to the site any time after 7pm on Sunday and you will find your
score and a sheet with answers and explanations – as long as you have completed
the challenge and hit the SUBMIT button.

This week’s Parallelogram challenge is in seven parts… some Challenges will have
a single theme, while others have sections that shoot off in wildly different
directions. In short, these challenges are often going to be a random walk
through the mysteries of mathematics. Be prepared to encounter all sorts of
weird ideas.

__IMPORTANT__ – you will get points for every correct answer (or nearly correct
  answer).

__IMPORTANT__ – some questions have a hint (sometimes two hints). Please think
hard and try hard before resorting to the hint. The hints will help you get the right answer, but you will lose marks.

__IMPORTANT__ – it does not really matter what score you get, the main thing is
that you think hard about the problems... and then learn where you went wrong
when the answer sheet appears.


## 1. Secret codes

Over the next few weeks, one of the mathematical themes that we will be exploring is
secret codes. We’ll be making and breaking codes. The proper word for this is
 **cryptography**, from the Greek words for *“secret”* and *“writing”*.

You might think that cryptography is all about language, because we are messing
around with messages made of words. Actually, cryptography is 99% maths, and
numbers are at the heart of secrecy, particularly today in the age of the Internet.
You might be surprised to know that some of the  biggest employers of
mathematicians are the secret services in countries around the world. And, of
course, big companies employ mathematicians to protect their secrets (and maybe
  steal the secrets of rival companies).

The cryptography theme starts properly next week, but in the meantime here is
a quick puzzle about a code just to warm you up.

Here is a (5x5) grid containing all the letters of the alphabet, except Z:

| A | B | C | D | E |
| F | G | H | I | J |
| K | L | M | N | O |
| P | Q | R | S | T |
| U | V | W | X | Y |
{.grid}

The word CODE is coded with the following series of symbols.

![](/resources/7-01-parallelogram/1-1-code.png)

Try to work out how the code works.

::: problem id=1_1 marks=2
__1.1.__ Which Star Wars character is represented by symbols below?

![](/resources/7-01-parallelogram/1-2-question.png)

^^^ hint id=1
In the example, CODE, the first symbol above represents C. It has one line on the
left side, and three lines on the right side. In the grid, how does this pattern
relate to the row and column containing C?
^^^

* [x] Rey
* [ ] Han
* [ ] Rex
* [ ] Poe
* [ ] Maz

---

By looking at the letters in CODE and the symbols that represent them, you
should have noticed that the rule is “the letter in row __x__ and column __y__ is
represented with a symbol which has __x__ branches on the left and __y__ branches on the
right”. So the answer is Rey.

Alternatively, you might have noticed that the symbol for E in CODE also appears
as the second symbol of the mystery name, which narrows down the possible
answers to Rey or Rex. However, to decide which is correct, you really need to
have worked out the general rule that links rows/columns with branches on the
left/right.
:::


## 2. More codes

As one final teaser for the cryptography ahead, here is a trailer for the film
_The Imitation Game_, released in 2014. The film stars Benedict Cumberbatch
playing the real-life codebreaker and mathematician Alan Turing, who cracked the
German Enigma code in the Second World War. This true story shows how
mathematicians can change history.

We’ll be looking at Turing and the Enigma code in a few weeks time, but first
take a look at this clip and answer the two questions. You will find one answer
in the film, and the other answer you will have to Google (or you might know it).

@[youtube](Fg85ggZSHMw?rel=0)

::: problem id=2_1 marks=1
__2.1.__ During the course of a brief conversation lasting just a few seconds,
how many people have died because of the Enigma cipher?

* [ ] 0
* [ ] 1
* [ ] 2
* [x] 3
* [ ] 4
{.col-5}
:::

::: problem id=2_2 marks=1
__2.2.__ Before Britain tried to break the Enigma code, which country used its
top mathematicians to make some significant breakthroughs in cracking Enigma?

* [ ] USA
* [x] Poland
* [ ] France
* [ ] Sweden
* [ ] Netherlands

---

The Polish mathematicians who cracked the Enigma code changed history and laid
the foundations for the British codebreakers at Bletchley Park, who went on to
help win the Second World War. You can read more about the Polish contribution to
cracking Enigma in [this Daily Telegraph article](http://www.telegraph.co.uk/science/2016/03/15/polish-codebreakers-cracked-enigma-before-alan-turing/).{target="_blank"}
:::


## 3. Wangle the angles

::: problem id=3_1 marks=2
__3.1.__ Look at the diagram below and wangle (obtain by some devious manner)
the angles _x_ and _y_.

The triangles A and B are both equilateral.

It will probably help if you redraw the diagram – a quick sketch will make it much easier.

![](/resources/7-01-parallelogram/3-1-angles.png)

Angle x = <input type="number" solution="155"/>°  
Angle y = <input type="number" solution="85"/>°

---

First, you can fill in the six 60° angles of the 2 equilateral triangles. Angle
a1 is obvious (75°), and so is angle a2 (80°). Once you know a2, then a3 must
be 35°.

![](/resources/7-01-parallelogram/3-1-angles-answer.png)

The rest is easy.

Angle y must be (180 – a3 – 60)°, which is 85°.

Angle x must be (360 – 60 – 60 – a1)°, which is 155°.
:::


## 4. A maths teacher’s age

A student asked her maths teacher if he would reveal his age. Seeing an opportunity
to test his student’s mental skills, the teacher replied with a riddle: “My age
in years is not a prime but is odd. Also, when the digits in my age are reversed
and the new number added to my age, the result is a perfect square. Of course,
if you prefer, you can take my age and reverse the digits and subtract that from
my age and still get a perfect square.”

Although 51 is odd and not a prime, the teacher cannot be 51 years old, because
neither (51 + 15) nor (51 -15) are perfect squares, and they both need to be
perfect squares.

::: problem id=4 marks=3
__4.1__ How old is the teacher?

<input type="number" solution="65"/>

^^^ hint id=2
It might be reasonable to assume that the teacher is more than 20 and
less than 80. Moreover, the age is odd but not a prime, so you can start by
listing all the odd numbers and striking out the primes, so you have: 21,
~~23~~, 25, 27, ~~29~~, ~~31~~, 33, 35, ~~37~~, 39,…
^^^

^^^ hint id=3
If the second digit in the age is larger than the first digit, then when
you reverse the digits you will have a larger number and you will not be able
to subtract the reversed age from the actual age. Hence, you cross out all
those numbers AB where B is bigger than A, so you have the strikeouts from Hint
1, plus the ones shown in bold: 21, _~~23~~_, _25_, _27_, _~~29~~_, ~~31~~, 33,
_35_, _~~37~~_, _39_,…
^^^

---

It might be reasonable to assume that the teacher is more than 20 and less than 80.
Moreover, the age is odd but not a prime, so you can start by listing all the
odd numbers and striking out the primes, so you have: 21, ~~23~~, 25, 27,
~~29~~, ~~31~~, 33, 35, ~~37~~, 39,…

If the second digit in the age is larger than the first digit, then when you
reverse the digits you will have a larger number and you will not be able to
subtract the reversed age from the actual age. Hence, you cross out all those
numbers AB where B is bigger than A, so you have the first set of strikeouts
plus the ones shown in bold: 21, _~~23~~_, _25_, _27_, _~~29~~_, ~~31~~, 33,
_35_, _~~37~~_, _39_,…

If you test whatever is left over, then you will eventually realise that one
possible answer is 65. It is odd, but not prime, and `65 + 56 = 121 = 11^2`,
and `65 – 56 = 9 = 3^2`.
:::


## 5. Dangerous physics

If you become a strong mathematician (which just requires lots of practice),
then you will be well prepared to become a physicist, engineer or computer
scientist. I think it is largely true to say that you cannot be a top class
physicist, engineer or computer scientist unless your maths is strong.

Because of this link between maths and other subjects, we will occasionally
explore topics beyond maths in our Parallelograms, and today I want to show you
one of my favourite videos about physics.

Walter Lewin is one the world’s best physics lecturers, and this is one of his
most famous demonstrations. One of the laws of physics says that if you drop a
ball then it cannot bounce higher than the height from which you dropped it –
imagine the consequences if the opposite was true – a ball would drop and bounce
higher than its starting point, then fall and bounce even higher still, then
fall and bounce higher still, and so on until the ball flew off into space. In short,
objects tend to lose energy, often due to friction, so they never quite get
back to their start position. This is also true of objects that swing back and
forth, as demonstrated in the video below.

@[youtube](xXXF2C-vrQE?rel=0)

::: problem id=5 marks=3
__5.1__ There are different types of energy, and Professor Lewin says that the ball’s
gravitational potential energy is transformed into:

* [ ] Chemical energy
* [x] Kinetic energy
* [ ] Elastic energy
* [ ] Solar energy
* [ ] Swing energy
:::

Perhaps the professor is exaggerating when he implies that the demonstration is
potentially deadly, but there is no doubt that it is dangerous, as demonstrated in
the clip below. Before you laugh, bear in mind that the bright young student was
brave and dedicated, but made just one small mistake, and paid a painful price.

@[youtube](teqsNtYbJAY?rel=0)

Why did this experiment go so badly wrong? The ball followed the laws of
physics, and it swung forward, and then it swung all the way back, but very
slightly short of where it started. The problem was that the student, after
releasing the ball, moved forward a tiny amount. That tiny movement
was enough to result in a painful lesson.


## 6. An easy puzzle

::: problem id=6 marks=3.5
__6.1__ I saw this in a newspaper – it was a puzzle for adults, fully grown humans, but
I think you will find it easy. All the digits from 1 to 9 are used in this grid,
but only once. Can you work out their positions in the grid so that each of the
six different sums work? Two of the numbers have been inserted in order to get
you started. Just identify the other seven numbers.

(NOTE: perform operations in the order they appear, e.g., 3 + 4 x 5 = 35 (not 23))

![](/resources/7-01-parallelogram/6-1-puzzle.png){style="width:400px"}

a = <input type="number" solution="6"/>  
b = <input type="number" solution="8"/>  
c = <input type="number" solution="7"/>  
d = <input type="number" solution="9"/>  
e = <input type="number" solution="3"/>  
f = <input type="number" solution="2"/>  
g = <input type="number" solution="4"/>

---

The easiest number to pin down is `d`, which has to be 9.

5 ÷ 1 x 9 = 45.

You may have followed a different route, but I then worked `c` and `g`. We know that
`9c + g` must equal 67, and `c` and `g` are single digits, so then `c = 7` and `g = 4`.

Now we know `c = 7`, then we also know that `a x b = 48`.

This means that a = 6 and b = 8 or a = 8 and b = 6.

We know that b + 1 is factor of 18 from the middle column, so `b = 8`.

We also know that a x 5 is a factor of 90 from the 1st column, so `a = 6`.

And the rest is easy.

![](/resources/7-01-parallelogram/6-1-puzzle-solution.png){style="width:400px"}
:::

I hope you enjoyed (or at least did not hate) this Parallelogram. There will be
more next week, and the week after, and the week after that. So check your email
or return to the website on Friday.

In the meantime, you can find the answers and go through the answer sheet after
7pm on Sunday (or perhaps even now if you are late completing this Parallelogram).

Going through the answer sheet is really important. Seriously important. What you
got right is much less important than what you got wrong, because where you went wrong
provides you with an opportunity to learn something knew.

First... remember to hit the SUBMIT button below, so that we can mark your answers.

Cheerio,
Simon.


::: submit


## Additional Stuff

If you want to find out more about codebreaker and mathematician Alan Turing,
then [this BBC article](http://www.bbc.co.uk/news/uk-england-cambridgeshire-41696274){target="_blank"}
reveals what he was like as a schoolboy. It contains his school report, recently
displayed at the Fitzwilliam Museum in Cambridge.

Professor Lewin is a superstar and a hero of mine. He has dedicated his life to
exploring physics and explaining it to the rest of the world. In the next clip
he shows some of the weird behaviour of spinning objects. Behind the experiment
is a blackboard full of mathematics, and these equations predict exactly the
strange behaviour of the spinning wheel.

And in the second clip, the professor explains some very advanced ideas about the
death of stars, black holes and marshmallows. Interestingly, some of the physics
he discusses is the same as the physics needed to describe the dangerous swinging ball
demonstration. (Don’t worry if you only understand some of this video – just let
the ideas blow your mind.)

@[youtube](NeXIV-wMVUk?rel=0)

@[youtube](fPtdJZyudd0?rel=0)
