# Sneaker Head - Online Sneaker Shop.

## Live site can be found at :

## Need to improve:

#### 1. Navbar is made with help of React-Bootstrap, which causes some issues with the correct tab being highlighted if you don't access the page directly via the navbar.

#### 2. FilterContext is only wrapped around the sneakers page. So if you leave the sneakers page, for example if you click on a product and go to the product page, and you return, all the filters you specified are gone. Could possible work around this by wrapping the FilterContext around the whole app, but that would defeat the purpose of using a context and including it in Redux would be better. Only wrapping the sneakers page and product page in the FilterContext is also not possible due to how the project is set up with react-router-dom.

#### 3. Some issues with the 3d models. If you try to load some of the bigger models for a second time, they dont show up for some reason. After much trial and error I have concluded it is most likely related to that model being saved somewhere, and when a new one is loaded it pushes the bigger models out of the storage, but that's only a theory and haven't been able to fix it yet.

#### 4. Some of the state changes could use some kind of animation, for example when you change the active brand on the home page, and also when you change the brand in the brand page.

#### 5. When loading the sneakers page, you can see 'No Results' briefly until it loads the sneakers. This should be replaced with a loader but due to how the data is retrieved, it might be a problem. Haven't tried to fix it yet.

#### 6. Both the FilterContext and CartSlice (state management) are hard to read and should be improved. Took a lot of trial and error to get everything working, so just left it alone for now, but should be more readable.

#### 7. A lot of the components are too big. Should extract some of the logic in seperate components. Also should make a custom hook for the scrollTo(0,0).

#### 8. Too many CSS libraries. Using React-Bootstrap and Swiper to make the carousels and Navbar easier, but they also add some weight. should try to replace them.

#### 9. Adaptivity could use some work. It works on mobile and tablet, but most of the adaptivity comes from flex-wrap and a few @media breakpoints. Could use some improvement.
