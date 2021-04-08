<template>
  <div>use lodash.js</div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Lodash",
  data() {
    return {};
  },
  mounted() {
    console.log("use lodash.js page");
    console.log("lodash.js object", _.fill);
  },
};
</script>

<style scoped></style>
