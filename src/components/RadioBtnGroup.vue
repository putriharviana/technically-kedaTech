<template>
  <div>
    <BaseRadioButton v-for="option in options" :option="option" :key="option" />
  </div>
</template>

<script>
import BaseRadioButton from "../components/RadioBtn.vue";

export default {
  name: "BaseRadionButtonGroup",
  components: {
    BaseRadioButton,
  },
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
.input-group {
  width: 35%;
  margin: 20px auto;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
}

label {
  cursor: pointer;
}
</style>