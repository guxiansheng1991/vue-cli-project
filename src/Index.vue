<template>
  <div class="index-page">
    <home v-show="showHome"></home>
    <my v-show="!showHome"></my>
  </div>
</template>

<script>
import Home from "@/views/Home";
import My from "@/views/My";
export default {
  name: "Index",
  data() {
    return {
      showHome: false,
    };
  },
  components: { Home, My },
};
</script>
