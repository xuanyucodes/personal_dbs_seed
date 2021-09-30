# personal_dbs_seed

Hi there! Here to demonstrate what I have done on my personal time in completing this project. For <strong>Frontend: ReactJS</strong>; for <strong>Backend: NodeJS, MongoDB</strong>.

| Task      |  Completion?|
| ----------- | ----------- |
| 1) User can login      | Done       |
| 2) User can view all products   | Done        |
| 3) User can add to cart   | Done        |
| 4) User can view cart   | Done        |
| 5) User can remove from cart   | Done        |
| 6) User can checkout cart   | Done        |
| ----------- | ----------- |
| 1) Server can authenticate user      | Done       |
| 2) Server can return a list of all Products and Category  | Done        |

Tasks 3 - 6 are not completed as of writing. Will handle in the future.

<h2>User Journey</h2>

Store Page -> Login -> Checkout

The user will first land on the home store page filled with all the existing products. He can edit the quantity of products he wishes to buy. He can checkout by pressing the top right hand button, which will assess if he is logged in or not. If he is, he will go straight to the checkout page; if not, he will do the login, which only upon a successful attempt would he be redirected to the checkout page. He can also come back to the store page easily by clicking the top left hand corner home button.

<h3>Store Page</h3>
Pay attention to the quantities as shown in the spinner inputs. You will see these numbers again later.
<img src='https://user-images.githubusercontent.com/43426532/135535412-73e2d7ba-1900-4c5c-a0c2-11af8b711380.png' />

<h3>Individual Product Page</h3>
User can see more details about the product by clicking on its name. The route has been handled for individual pages. Also, the quantity remaining of the product is shown too.
<img src='https://user-images.githubusercontent.com/43426532/135535580-58912c97-f494-4871-992c-c4846fec100f.png' />

<h3>Login Page</h3>
When user clicks checkout, as he is not logged in, he is redirected to a login page. If he keys wrong info, an error is shown. 
<img src='https://user-images.githubusercontent.com/43426532/135535715-5b59bdd8-abc0-45dc-ab60-aec5fd77ec31.png' />

<h3>Checkout Page</h3>
When user has successfully logged in, he will reach the checkout page. Here, he can further edit the quantity he requires by clicking the up/down controls in the input spinner. He can also go back to the store page <strong>and all the quantities he previously selected will still be shown</strong>. Since the shopping cart state is shared across all the various components and pages, it is reliable and makes for a smooth journey for the user (ie no need to restart his purchase journey).

When the user clicks the purchase button, it will make an API call which will reduce the remaining amount respectively (fulfilling the FAQ requirement). See the console panel for proof of deduction.
<img src='https://user-images.githubusercontent.com/43426532/135536398-b5407a33-7adf-46cd-925c-c9f7ba74c91f.png' />

<h2>Backend</h2>

Despite just self-learning NodeJS in 2 weeks, I feel that I have managed to come up with a good foundational system. Providing some Postman screenshots as proof of concepts. Note that the only API calls I have set up are mainly to Login, Create or Read a single or multiple Product / Customer / Category, and to adjust the remaining quantities when a purchase is made. I have not implemented anything to do with Orders.

<h3>Logging In</h3>
<img src='https://user-images.githubusercontent.com/43426532/135537117-445d7bab-e70f-4739-ad6e-eb600785a707.png' />

<h3>Retrieving a Single Product (based on id)</h3>
<img src='https://user-images.githubusercontent.com/43426532/135537441-755c8a6a-a0f2-41c7-a495-7dffbcd17991.png' />

<h2>Thoughts and Improvements</h2>
1. While implementing Redux may be tedious (and may require further modules like Thunk for Axios calls), it would make the code a lot cleaner as there will be fewer props being sent down the components.
2. Passwords are stored in plaintext for the backend. Can probably hash them as a security feature.
