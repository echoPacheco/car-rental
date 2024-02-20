<template>
  <hr>
  <div class="checkout-container">
    <h2>Order Successful! 🎉</h2>

    <p>Thank you for choosing My Car! Your order has been successfully processed.</p>

    <p>You can view and manage your reservation anytime by visiting your My Car account's historic
      page.</p>

    <p>If you have any questions or need assistance, feel free to reach out to our customer support at pachecomateus.dev@gmail.com.
    </p>

    <p>Thank you for choosing us, and we look forward to serving you. Safe travels!</p>

    <div class="container-button">
      <router-link to="/PreviousBookings" type="button" class="btn btn-outline-light mt-4">Go to Previous Bookings
        Page</router-link>
      <router-link to="/" type="button" class="btn btn-outline-light mt-4">Return to
        Home</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    carData: Object,
    carImage: String,
    orderData: Object,
  },
  setup(props) {
    const orderID = ref("");
    // const pickupDate = ref(""); // You can initialize these with default values if needed
    // const returnDate = ref("");
    // const carModel = ref(null);
    // const totalPrice = ref(null);

    onMounted(() => {
      // Set values based on the received props
      orderID.value = props.orderData;
      // pickupDate.value = props.orderData.startDate;
      // returnDate.value = props.orderData.endDate;
      // carModel.value = props.carData.model;
      // totalPrice.value = props.orderData.price;
    });

    return {
      orderID,
      // pickupDate,
      // returnDate,
      // carModel,
      // totalPrice,
    };
  },
};
</script>

<style>
.checkout-container {
  display: flex;
  flex-direction: column;
  text-align: start;
}
.container-button * {
  margin-right: 20px;
}
</style>
