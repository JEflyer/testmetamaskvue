<template>
  <div>
    <p v-if="isConnected">MetaMask is connected!</p>
    <p v-else>MetaMask is not connected. Please connect to continue.</p>
    <button @click="connectMetaMask">Connect MetaMask</button>
  </div>
</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider';

export default {
  data() {
    return {
      isConnected: false,
    };
  },
  async mounted() {
    await this.checkConnection();
  },
  methods: {
    async checkConnection() {
      try {
        const provider = await detectEthereumProvider(); // Call the function with await
        if (provider) {
          this.isConnected = true;
        }
      } catch (error) {
        console.error('MetaMask detection error:', error);
      }
    },
    async connectMetaMask() {
      try {
        const provider = await detectEthereumProvider(); // Call the function with await
        if (provider) {
          await provider.request({ method: 'eth_requestAccounts' }); // Request account access
          this.isConnected = true;
        } else {
          console.error('Please install MetaMask!');
        }
      } catch (error) {
        console.error('MetaMask connection error:', error);
      }
    },
  },
};
</script>
