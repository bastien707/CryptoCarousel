<template>
    <div>
        <form class="form" @submit.prevent="getFormValues">
            <label for="addressInput">
                Address
                <input
                    id="addressInput"
                    type="text"
                    name="address">
            </label>
            <br>
            <button type="submit">Post</button>
            {{balance}}
        </form>
    </div>
</template>

<script>
import axios from 'axios';

const APIToken = process.env.APIKEY;
let requestURLCheckToken = '';

export default {
  name: 'PostAddress',
  data() {
    return {
      address: '',
      balance: '',
    };
  },
  methods: {
    getFormValues(submitEvent) {
      this.address = submitEvent.target.elements.address.value;
      requestURLCheckToken = `https://api.etherscan.io/api?module=account&action=balance&address=${this.address}&tag=latest&apikey=${APIToken}`;
      axios
        .post(requestURLCheckToken)
        .then((response) => { this.balance = response.data.result; })
        .catch((error) => console.log(error));
    },
  },
};
</script>
