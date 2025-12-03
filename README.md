# React memory cards

this project is a simple react project for a memory card game


## development goals:
- interacting with external APIs withen the react paradigme
- handeling components through state management
- practicing th proper implementation of the effect hook
- styling
- deployment

## game in psudo code:
- on intialization:
    * fetch a number of photos and imbed within a card component

- game loop:
    * await player click
    * if score === cards amount ? game stops, you win : continue
    * if cardHasBeenClicked = false
        - score counter++
        - if score > bestscore ? then best score counter = score
      else
       - score = 0
    * shuffle card randomly

### additional resources used:

- Lorum picsum API: https://picsum.photos/

