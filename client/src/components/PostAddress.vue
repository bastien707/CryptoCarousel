<template>
    <div class="container">
        <form class="form" @submit.prevent="getFormValues">
            <label for="addressInput" class=label>
                Enter an Address
                <input
                    id="addressInput"
                    type="text"
                    name="address"
                    placeholder="e.g 0xb1q0...">
            </label>
            <div v-if="wait === 'true'" class="result">
              <button type="submit" class="nonclick">Wait...😘</button>
              <div class='wait'>
                <ContentLoading isCard='false'/>
              </div>
            </div>
            <div v-else-if="address !== ''" class="result">
              <button type="submit" class="click">Search 🤑</button>
              <div class='done'>
                <span>
                  <strong>Address</strong>
                  <br>
                  {{address}}
                </span>
                <span>
                  <strong>Balance</strong>
                  <br>
                  {{balance}} ETH
                </span>
              </div>
            </div>
            <div v-else class="result">
              <button type="submit" class="click">Search 🤑</button>
              <div class='done'>
                <strong style="color: grey">Please enter an address</strong>
              </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import ContentLoading from '@/components/ContentLoading.vue';

const APIToken = process.env.APIKEY;
let requestURLCheckToken = '';

export default {
  name: 'PostAddress',
  data() {
    return {
      address: '',
      balance: '',
      usd: '',
      wait: 'false',
    };
  },
  components: {
    ContentLoading,
  },

  methods: {
    getFormValues(submitEvent) {
      this.wait = 'true';
      this.address = submitEvent.target.elements.address.value;
      requestURLCheckToken = `https://api.etherscan.io/api?module=account&action=balance&address=${this.address}&tag=latest&apikey=${APIToken}`;
      axios
        .post(requestURLCheckToken)
        .then((response) => {
          this.balance = Math.trunc(response.data.result / 10 ** 18);
        });
      // needed beacause limited by apikey
      setTimeout(() => {
        this.wait = 'false';
      }, 5000);
    },
  },
};
</script>

<style scoped>
  .container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-radius: 1.5em;
    padding: 3em;
    margin:3em auto;
    width: 50%;
    text-align: center;
    align-content: center;
    box-shadow: 10px 10px 10px -10px #8b8b8b;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );-webkit-backdrop-filter: blur( 6.5px );
    border: 1px solid rgba( 255, 255, 255, 0.25 );
  }

  .form {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    width: 80%;
  }

  .label {
    display: flex;
    flex-flow: column wrap;
    width: 65%;
    margin: auto;
    font-weight: 800;
    font-size: 2em;
    color: white;
  }

  #addressInput {
    width: 90%;
    margin: 1em auto;
    border-style: none;
    padding: 0.8em;
    border-radius: 12px;
  }

  .result {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-flow: column wrap;
    width: 100%;
    margin: 0% 5%;
  }

  .wait, .done {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column wrap;
    background-color: white;
    border-radius: 1.5em;
    height: 10em;
    width: 30em;
    margin: 2% 10%;
  }

  span {
    margin: 2%;
  }

  .nonclick, .click {
    cursor: pointer;
    font-size: 1em;
    width: 30%;
    margin: 1em auto;
    padding: 1em;
    border-radius: 0.8em;
    margin: 1em auto;
    border-style: none;
    background-image: linear-gradient(270deg, #ff25e2 0%, #5010e6 100%);
    box-shadow: 0 10px 20px -10px #cd33f3;
    color: white;
  }

  .nonclick {
    pointer-events: none;
  }
</style>
