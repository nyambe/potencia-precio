<template>
  <div>
    <!-- Remove this component to get started! -->
    <!-- 
    x hola mundo
    x tailwind css
    x copiar codigo
    - subirlo a github o netlify? -->
    <Head lang="es-ES">
      <Title>Macbook M1 Air 13 14 16 pro potencia / precio </Title>
      <Meta
        name="og:title"
        content="Análisis potencia / precio Macbook Air M1 13 14 16 pro max "
      />
      <Meta
        name="twitter:title"
        content="Análisis potencia / precio Macbook Air M1 13 14 16 pro max "
      />
      <Meta
        name="description"
        content="Análisis potencia / precio Macbook Air M1 13 14 16 pro max "
      />
      <Meta
        name="og:description"
        content="Análisis potencia / precio Macbook Air M1 13 14 16 pro max "
      />
      <Meta
        name="twitter:description"
        content="Análisis potencia / precio Macbook Air M1 13 14 16 pro max "
      />

      <Meta name="image" content="/macpotencia.jpg" />
      <Meta name="og:image" content="/macpotencia.jpg" />
      <Meta name="twitter:image" content="/macpotencia.jpg" />
    </Head>
    <ComparadorMacs :items="comparativa" />
  </div>
</template>
<script setup>
import "tailwindcss/tailwind.css";

import ComparadorMacs from "./components/ComparadorMacs.vue";

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
