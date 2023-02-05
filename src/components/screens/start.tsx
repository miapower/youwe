export const Start = () => {
  return (
    <div>Hello YouWe</div>
  )
}


/*
# FLUID LAYOUT WITH BOXES

Your task is to build a layout that contains a set of fluid boxes.

Sara, our product owner, has an idea of a new layout that is to be tried
out. The goal is to make the result look as close as possible to the simple
sketch below.

If you feel that some information is lacking, or counter-intuitive, please use
your creative freedom & comment on it. It is important that the result feels
smooth to use.

Feel free to use https://jsfiddle.net/ to host your test.


## Acceptance criteria:

* Create markup that creates 2 containers
* Create/generate markup for 1 initial box


### Now for some rules

* Layout
    ** Should never exceed a width of 1200px

* Container1
    ** Should have a max-width of 1200px
    ** Should be filled with an image of your choice
       as a background

* Container2
    ** Should never exceed a width of 860px
    ** Should have a light gray background

* Boxes
    ** Each box should contain some kind of sections for a header and a "body"
    ** The 2nd (2 mod 4) box should have a red background
    ** The 3rd (3 mod 4) box should have a green background
    ** The 4th (4 mod 4) box should have a blue background
    ** Start over

* Rows:
    ** The 1st row should contain 3 boxes (1/3)
    ** The 2nd row should contain 2 boxes (1/2)
    ** The 3rd row should contain 1 box   (1/1)
    ** After row 4, it starts over again with 3 boxes

* Everytime you hover a box
    ** The box should show a 5px black border
    ** Container1 should show a 10px black border
    ** container2 should show a 15px black border

* Everytime you click on a box
    ** A request for a random user should be made to the
       Reqres API (https://reqres.in/)
    ** The user should be unique
    ** A new box should be created and inserted directly after
       the box you just clicked, as per the rules above
    ** The new box should add the counter to their
       header, starting with 1, and counting upwards
    ** The new box created should dynamically be filled
       with the user information from your request to Reqres

* Make it possible to delete a box
    ** Don't let the layout/colors break if one
       deletes e.g. box nr 4

* Bonus
    ** Add a testsuite


### Sketch


=====CONTAINER1============================================
|                                                         |
|    =====CONTAINER2==================================    |
|    |                                               |    |
|    |     ROW1                                      |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     | 1     x |  | 2     x |  | 3     x |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     |         |  |         |  |         |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |                                               |    |
|    |     ROW2                                      |    |
|    |     |----------------|  |---------------|     |    |
|    |     | 4            x |  | 5           x |     |    |
|    |     |----------------|  |---------------|     |    |
|    |     |                |  |               |     |    |
|    |     |----------------|  |---------------|     |    |
|    |                                               |    |
|    |     ROW3                                      |    |
|    |     |-----------------------------------|     |    |
|    |     | 6                               x |     |    |
|    |     |-----------------------------------|     |    |
|    |     |                                   |     |    |
|    |     |-----------------------------------|     |    |
|    |                                               |    |
|    |     ROW4 (STARTS OVER)                        |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     | 7     x |  | 8     x |  | 9     x |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     |         |  |         |  |         |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |                                               |    |
|    =================================================    |
|                                                         |
===========================================================

*/
