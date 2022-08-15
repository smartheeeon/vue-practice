export default {
  mounted() {
    console.log("ddd");
  },
  data() {
    return {
      totalMoney: 0,
    };
  },
  methods: {
    addMoney(price) {
      this.totalMoney += price;
    },
  },
};
