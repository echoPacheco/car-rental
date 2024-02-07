<template>
    <div>
        <h1>Checkout</h1>

        <div class="track">
            <div v-for="step in steps" :key="step"
                :class="{ 'step': true, 'active': currentStep === step, 'completed': completedSteps.includes(step) }">
                <span class="icon"></span>
                <span class="text">{{ stepTitles[step - 1] }}</span>
            </div>
        </div>

        <div>
            <div v-show="currentStep === 1">
                <div v-if="parsedCarImage">
                    <img :src="parsedCarImage" class="card-img-top img-fluid"
                        style="max-height: 250px; max-width: fit-content; object-fit: cover;" alt="">
                </div>
                <div v-if="parsedCarData">
                    <div v-for="(value, key) in parsedCarData" :key="key">
                        <p>{{ key }}: {{ value }}</p>
                    </div>
                </div>
            </div>
            <div v-show="currentStep === 2">
                <datepicker v-model="selectedDate" format="yyyy-MM-dd" placeholder="Select a date"></datepicker>
            </div>
            <div v-show="currentStep === 3">Third Part</div>
            <div v-show="currentStep === 4">Fourth Part</div>
        </div>

        <div>
            <button @click="decreaseStep" class="btn btn-outline-light me-2" :disabled="currentStep === 1">Decrease
                Step</button>
            <button @click="increaseStep" class="btn btn-outline-light me-2" :disabled="currentStep === 4">Increase
                Step</button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import Datepicker from 'vue-datepicker'

export default {
    props: {
        carData: String,
        carImage: String,
    },
    components: {
        Datepicker,
    },
    setup(props) {
        const route = useRoute();
        const parsedCarData = ref(null);
        const parsedCarImage = ref(null);
        const currentStep = ref(1);
        const completedSteps = ref([]);
        const steps = [1, 2, 3, 4];
        const stepTitles = ['Review', 'Date', 'Payment', 'Ready for pickup'];
        const selectedDate = ref(new Date());

        onMounted(() => {
            if (props.carData) {
                const decodedData = decodeURIComponent(props.carData);
                parsedCarData.value = JSON.parse(decodedData);
            }

            parsedCarImage.value = props.carImage || route.params.carImage;
        });

        const increaseStep = () => {
            if (currentStep.value < 4) {
                completedSteps.value.push(currentStep.value);
                currentStep.value += 1;
            }
        };

        const decreaseStep = () => {
            if (currentStep.value > 1) {
                completedSteps.value.pop();
                currentStep.value -= 1;
            }
        };

        return {
            parsedCarData,
            parsedCarImage,
            currentStep,
            completedSteps,
            steps,
            stepTitles,
            increaseStep,
            decreaseStep,
            selectedDate,
        };
    },
};
</script>


<style>
.container {
    margin-top: 50px;
    margin-bottom: 50px
}

.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.10rem
}

.card-header:first-child {
    border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0
}

.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.track {
    position: relative;
    background-color: #ddd;
    height: 7px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 60px;
    margin-top: 50px
}

.track .step {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 25%;
    margin-top: -18px;
    text-align: center;
    position: relative
}

.track .step.active:before {
    background: #0d6efd
}

.track .step::before {
    height: 7px;
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 18px
}

.track .step.active .icon {
    background: #0d6efd;
    color: #fff
}

.track .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: relative;
    border-radius: 100%;
    background: #ddd
}

.track .step.active .text {
    font-weight: 400;
}

.track .text {
    display: block;
    margin-top: 7px
}

.itemside {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.itemside .aside {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.img-sm {
    width: 80px;
    height: 80px;
    padding: 7px
}

ul.row,
ul.row-sm {
    list-style: none;
    padding: 0
}

.itemside .info {
    padding-left: 15px;
    padding-right: 7px
}

.itemside .title {
    display: block;
    margin-bottom: 5px;
    color: #212529
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

.btn-warning {
    color: #ffffff;
    background-color: #ee5435;
    border-color: #ee5435;
    border-radius: 1px
}

.btn-warning:hover {
    color: #ffffff;
    background-color: #ff2b00;
    border-color: #ff2b00;
    border-radius: 1px
}

.track .step.completed:before {
    background: #0d6efd
}

.track .step.completed .icon {
    background: #0d6efd;
    color: #fff;
}



/* .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;
}

.col-25 {
    flex: 25%;
}

.col-50 {
    flex: 50%;
}

.col-75 {
    flex: 75%;
}

.col-25,
.col-50,
.col-75 {
    padding: 0 16px;
}

.container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
}

input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

label {
    margin-bottom: 10px;
    display: block;
}

.icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
}

.btn {
    background-color: #04AA6D;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
}

.btn:hover {
    background-color: #45a049;
}

span.price {
    float: right;
    color: grey;
}

@media (max-width: 800px) {
    .row {
        flex-direction: column-reverse;
    }

    .col-25 {
        margin-bottom: 20px;
    }
 } */
</style>