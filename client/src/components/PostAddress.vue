<template>
    <div class="container">
        <form class="form" @submit.prevent="getFormValues">
            <label for="addressInput" class=label>
                Enter an Address
                <input
                    id="addressInput"
                    type="text"
                    name="address">
            </label>
            <div v-if="wait" class="result">
              <button type="submit" class="nonclick">Wait...😘</button>
              <div class='wait'>
                <span>Address:</span>
                <span>Price:</span>
              </div>
            </div>
            <div v-else class="result">
              <button type="submit" class="click">Search 🤑</button>
              <div class='done'>
                <span>Address: {{address}}</span>
                <span>Price: {{balance}} ETH</span>
              </div>
            </div>
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
      wait: false,
    };
  },
  methods: {
    getFormValues(submitEvent) {
      this.wait = true;
      this.address = submitEvent.target.elements.address.value;
      requestURLCheckToken = `https://api.etherscan.io/api?module=account&action=balance&address=${this.address}&tag=latest&apikey=${APIToken}`;
      axios
        .post(requestURLCheckToken)
        .then((response) => {
          this.balance = Math.trunc(response.data.result / 10 ** 18);
        });
      setTimeout(() => {
        this.wait = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    background-color: rgb(228, 203, 255);
    border-radius: 1.5em;
    padding: 3em;
    margin:3em auto;
    width: 50%;
    text-align: center;
    align-content: center;
  }

  .form {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    background-color: aqua;
    width: 80%;
  }

  .label {
    display: flex;
    flex-flow: column wrap;
    width: 65%;
    margin: auto;
  }

  .result {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin: 0% 5%;
  }

  .wait, .done {
    background-color: white;
    border-radius: 1.5em;
    height: 10em;
    margin-inline: 10%;
  }

  .nonclick, .click {
    width: 20%;
    margin: 1em auto;
  }

  .nonclick {
    pointer-events: none;
  }
</style>
