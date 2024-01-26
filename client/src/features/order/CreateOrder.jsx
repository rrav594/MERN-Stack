import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    // cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(order);
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

function CreateOrder() {
  return (
    <div>
      <h1>Ready to order? Place here...</h1>
      <Form method="POST" action="">
        <div>
          <label>First Name</label>
          <div>
            <input type="text" name="customer" required />
          </div>
        </div>
        <div>
          <label>Phone Number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>
        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>
        <div>
          <input id="priority" type="checkbox" name="priority" id="priority" />

          <label for="priority">Want it delivered soon</label>
        </div>
        <hr />
        <div>
          {/* <input type="hidden" name="cart" value={JSON.stringify(cart)} /> */}
          <button>Order Now</button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
