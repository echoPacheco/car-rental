<template>
  <div>
    <p>Order Successful! 🎉</p>

    <p>Thank you for choosing [Your Car Rental Company Name]! Your order has been successfully processed. You can now relax,
      and we'll take care of the rest.</p>

    <p>Order Summary:</p>
    <ul>
      <li>Reservation ID: {{ orderID }}</li>
      <!-- <li>Pickup Date: {{ pickupDate }}</li>
      <li>Return Date: {{ returnDate }}</li>
      <li>Car Model: {{ carModel }}</li>
      <li>Total Price: {{ totalPrice }}</li> -->
    </ul>

    <p>What's Next?</p>

    <p>Confirmation Email:</p>
    <p>A detailed confirmation email has been sent to your registered email address. Please check your inbox, and make sure
      to also look in your spam folder just in case.</p>

    <p>Manage Your Reservation:</p>
    <p>You can view and manage your reservation anytime by visiting your [Your Car Rental Company Name] account's historic
      page.</p>

    <p>Contact Us:</p>
    <p>If you have any questions or need assistance, feel free to reach out to our customer support at [Your Customer Support
      Email or Phone Number].</p>

    <p>Thank you for choosing us, and we look forward to serving you. Safe travels!</p>

    <p>[Go to Historic Page] [Return to Home]</p>
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
      console.log(props);
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

<style></style>
