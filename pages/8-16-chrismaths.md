# Chrismaths - Part 3

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

![](/resources/8-15-chrismaths/santa-simon.png){image align="right"}
It’s nearly Christmas, so time for another instalment of your Christmaths challenge paper.

Good luck and happy Chrismaths. Don’t eat too many mince pie charts!

Simon.

PS: I want to say thank you to the UK Mathematics Trust, who own the copyright to these questions.


## 1.

::: problem id=1_1 marks=3
In January 1859, an eight-year-old boy dropped a newly-hatched eel into a well in Sweden (apparently in order to keep the water free of insects). The eel, named Åle, finally died in August 2014.  

How many years old was Åle when it died?

* [ ] A) 135
* [ ] B) 145
* [x] C) 155
* [ ] D) 165
* [ ] E) 175
{.col-5}

---

To find Åle’s age we need to work out: 2014 − 1859 = 155.

So Åle’s age when it died was 155.  

Alternatively, we can see that from 1859 to 1900 is 41 years, from 1900 to 2000 is 100 years, and from 2000 to 2014 is 14 years. So Åle’s age in years is 41 + 100 + 14, that is, 155.
:::


## 2.

::: problem id=2_1 marks=3
One of the three symbols +, −, × is inserted somewhere between the digits of 2016 to give a new number. For example, 20 − 16 gives 4.  

How many of the following four numbers can be obtained in this way?

__36;  195;  207;  320__{.text-center}  

* [ ] A) 0
* [ ] B) 1
* [ ] C) 2
* [ ] D) 3
* [x] E) 4
{.col-5}

---

We see that:

* 20 + 16 = __36__.
* 201 − 6 = __195__.
* 201 + 6 = __207__.
* 20 × 16 = __320__.  

So we can obtain all four of the given numbers.
:::


## 3.

::: problem id=3_1 marks=3
![](/resources/8-16-chrismaths/14-triangle.jpg){image align="right"}
In the diagram, `AB = AC` and `D` is a point on `AC` such that `BD = BC`. Angle `BAC` is 40°.  

What is angle `ABD`?

* [ ] A) 15°
* [ ] B) 20°
* [ ] C) 25°
* [x] D) 30°
* [ ] E) 35°

---

Since `AB = AC`, the triangle ABC is isosceles. Therefore `∠ACB = ∠CBA`. Since the angles in a triangle add up to 180°, we have `∠BAC + ∠ACB + ∠CBA` = 180°. Hence 40° + `2∠ACB` = 180°.  

It follows that `2∠ACB` = 180° − 40° = 140°. Therefore `∠ACB` = 70°.  

Since `BD = BC`, the triangle `BCD` is isosceles. Therefore `∠BDC = ∠DCB`. Since `∠DCB` is the same as `∠ACB`, it follows that `∠BDC = ∠AC`B = 70°.  

By the External Angle Theorem, `∠BDC = ∠BAD + ∠ABD`. That is, 70° = 40° + `∠ABD`. It follows that `∠ABD` = 30°.
:::


## 4.

::: problem id=4_1 marks=4
Three boxes under my stairs contain apples or pears or both. Each box contains the same number of pieces of fruit. The first box contains all twelve of the apples and one-ninth of the pears.  

How many pieces of fruit are there in each box?

* [ ] A) 14
* [x] B) 16
* [ ] C) 18
* [ ] D) 20
* [ ] E) 36
{.col-5}

---

The first box contains one-ninth of the pears. Therefore, the other two boxes contain, between them, eight-ninths of the pears. So, since they contain the same number of pieces of fruit, but no apples, they each contain four-ninths of the pears.  

So the difference between the number of pears in each of the second and third boxes and the number of pears in the first box is equal to three-ninths of the number of pears, that is, to one-third of the number of pears.  

Therefore, as the first box holds the same number of pieces of fruit as the other two boxes, the 12 apples in the first box match the extra one-third of the number of pears in the other two boxes. Since one-third of the pears amount to 12 pears, it follows that altogether there are 36 pears.  

Hence the total number of pieces of fruit is 48. Since these are equally divided between the boxes, each of the three boxes contains 16 pieces of fruit.

Alternatively, Since the first box contains one-ninth of the pears, we avoid fractions by supposing that there are `9p` pears. It follows that there are `p` pears in the first box and altogether `8p` pears in the other boxes. As they contain equal numbers of pieces of fruit, there are `4p` pears in each of these boxes.  

Hence there are `12 + p` pieces of fruit in the first box, and `4p` in each of the other two boxes.  

Since each box contains the same number of pieces of fruit: `12 + p = 4p`, and hence `12 = 3p`, from which it follows that `p = 4`.  

We have seen that there are `12 + p` pieces of fruit in the first box. Since `p = 4`, we deduce that the number of pieces of fruit in each box is 16.
:::


## 5.

::: problem id=5_1 marks=5
![](/resources/8-16-chrismaths/24-square.jpg){image align="right"}
Part of a wall is to be decorated with a row of four square tiles.  

Three different colours of tiles are available and there are at least two tiles of each colour available. Tiles of all three colours must be used.  

In how many ways can the row of four tiles be chosen?

* [ ] A) 12
* [ ] B) 18
* [ ] C) 24
* [x] D) 36
* [ ] E) 48
{.col-5}

---

We will suppose that the colours of the tiles that are available are red, blue and green.  

We need to count the number of different ways in which we can choose to places the tiles, so that we use at least one tile of each of the three colours. To do this we will need two tiles of one colour and one tile of each of the other two colours.  

The method we use is to split our choice of how to arrange the tiles into a sequence of independent choices, and to count the number of different ways in which we can make these choices.  

The first choice is to decide the colour of the two tiles with the same colour. There are 3 ways to choose this colour. Once we have made this choice, we have no further choice of colours as we must have one tile of each of the two other colours.  

We now need to count the number of different ways to place the four tiles in a row after we have chosen their colours.  

Suppose, for the sake of argument, that we have decided to have two red tiles and hence one blue tile and one green tile.  

We can decide how to place these tiles by first choosing the place for the blue tile, and then the place for the green tile. Then there will be no further choice, as we will need to put the two red tiles in the two remaining places.  

There are 4 choices for the position of the blue tile.  

Then, whichever position we choose for the blue tile, there will remain 3 choices of position for the green tile.  

We thus see that placing the tiles involves three independent choices and that the number of possibilities for these choices are 3, 4 and 3 respectively.

Each of the 3 choices of colour shared by two of the tiles may be combined with any of the 4 choices of position for the tile of the second colour. So there are 3 × 4 ways to combine these choices.  

Each of these 3 × 4 ways of making the first two choices may be combined with any of the 3 choices of position for the tile of the third colour.  

Therefore the total number of different ways of combining these choices is 3 × 4 × 3 = 36. Hence there are 36 different ways in which the row of four tiles can be chosen.
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
