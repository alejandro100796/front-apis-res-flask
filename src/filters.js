// filters.js
import Vue from "vue";

Vue.filter("currency", value => {
    return "$"+ value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Vue.filter("decimals", (value, decimals=2) => {
    return value.toFixed(decimals).toLocaleString();
});

Vue.filter("date", value => {
    return dayjs(value).format("YYYY-MM-DD");
});