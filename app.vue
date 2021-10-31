<template>
  <div>
    <!-- Remove this component to get started! -->
    <!-- 
    x hola mundo
    x tailwind css
    x copiar codigo
    - subirlo a github o netlify? -->
    <ComparadorMacs :items="comparativa" />
  </div>
</template>
<script setup>
import "tailwindcss/tailwind.css";

import ComparadorMacs from "./components/ComparadorMacs.vue";

const saludos = "hola como ests";
const comparativa = [
  {
    mac: "Air",
    clave: "MACBOOKAIR2020_MAIN",
  },
  {
    mac: '13"',
    clave: "MBP_MAIN",
  },
  {
    mac: '14"',
    clave: "MBP2021_14",
  },
  {
    mac: '16"',
    clave: "MBP2021_16",
  },
];
</script>
