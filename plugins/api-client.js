export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('api', api);
    // For Nuxt <= 2.12, also add 👇
     context.$api = api;
  }

const api = {
    async getDate() {
        const data = "ciao"
        return await this.$fetch('api/index', {
            method: 'POST',
            body: data,
        });
    }
}