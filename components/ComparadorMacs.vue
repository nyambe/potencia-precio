<template>
  <div class="grid h-screen px-4 bg-black md:px-10 place-items-center">
    <div
      class="
        w-full
        max-w-5xl
        h-[320px]
        md:h-[460px]
        grid
        bg-black
        relative
        place-items-center
      "
    >
      <div
        :class="!macActual.clave ? 'grid-cols-4' : 'grid-cols-8'"
        class="absolute z-10 grid w-full font-bold text-white bg-black  md:text-5xl bg-opacity-10 top-2 place-items-center"
      >
        <button
          @click="accion(item)"
          :class="
            item.clave == macActual.clave
              ? 'col-span-5 opacity-100'
              : 'col-span-1 opacity-75'
          "
          v-for="item in items"
          :key="item.clave"
        >
          {{ item.mac }}
        </button>
      </div>

      <div
        v-if="!macActual.clave"
        class="relative z-10 pb-5 text-2xl font-semibold text-white md:text-4xl"
      >
        Potencia / Precio
      </div>
      <div
        :class="!macActual.clave ? 'grid-cols-4' : 'grid-cols-8'"
        class="
          grid
          gap-1
          h-[320px]
          md:h-[460px]
          absolute
          mt-1
          top-0
          mx-auto
          bg-white
          overflow-hidden
          rounded-tl-3xl rounded-br-3xl
          border-white border-4
        "
      >
        <button
          v-for="(item, i) in items"
          @click="accion(item)"
          :key="item.clave"
          :class="
            item.clave == macActual.clave
              ? 'col-span-5 opacity-100  '
              : 'col-span-1 opacity-75'
          "
          class="relative transition-all duration-500 ease-in-out  hover:opacity-90 focus:opacity-90"
        >
          <div
            class="absolute flex flex-col items-end justify-end w-full h-full text-white bg-black  bg-opacity-40 md:bg-opacity-30"
          >
            <div
              class="pb-3 pr-1 text-xs text-right  md:p-4 md:text-2xl md:font-extralight"
              v-if="item.clave == macActual.clave"
            >
              <div>{{ item.info.price.display.from }}</div>
              <div>16Gb Ram / 512 GB SSD {{ item.info.actual }}</div>
              <div>
                diferencia configurado
                {{ -item.info.price.value + item.info.precio }}€
              </div>
              <div>Geekbench(Multi) {{ item.info.multi }}</div>
              <div>
                potencia comparado con M1 Air
                <span v-if="i != 0">
                  +{{
                    ((item.info.multi / items[0].info.multi - 1) * 100).toFixed(
                      1
                    )
                  }}
                  %
                </span>
                <span v-if="i == 0"> - %</span>
              </div>
              <div>
                potencia / precio
                {{ (item.info.multi / item.info.precio).toFixed(3) }}
              </div>
              <div>
                potencia / precio (base)
                {{ (item.info.multi / item.info.price.value).toFixed(3) }}
              </div>
            </div>
          </div>
          <img
            class="object-cover h-[320px] md:h-[460px] w-full"
            :src="macs[item.clave].foto"
            :alt="item.mac"
          />
        </button>
      </div>
      <div
        v-if="!macActual.clave"
        class="
          text-white
          font-bold
          text-3xl
          md:text-6xl
          absolute
          z-10
          bg-opacity-20
          bottom-4
          w-[640px]
          grid
          place-items-center
        "
      >
        Macbook
      </div>
    </div>
    <!-- <pre v-if="macActual.clave" class="text-white">
		{{ macs[macActual.clave] }}
	</pre
    > -->
    <div class="font-thin text-white">
      <a
        href="https://amzn.to/3CIIPdi"
        target="_blank"
        class="flex items-baseline text-xl text-blue-300 md:text-3xl"
      >
        Precio MacBook Air Amazon (8Gb/256Gb) : {{ ofertaAmazon }} €
        <span class="text-xs text-gray-500 stroke-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </a>
      <div
        class="transition-all duration-500 ease-in-out"
        v-if="macActual.clave"
      >
        diferencia base -{{ -ofertaAmazon + macActual.info.price.value }}€
        <span class="block">
          diferencia (16Gb/512Gb) -{{ -ofertaAmazon + macActual.info.precio }}€
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, onMounted } from "vue";
import { macs } from "../assets/precios";
const props = defineProps({
  items: Array,
});
onMounted(() => {
  accion(props.items[0]);
});
const ofertaAmazon = 997;

const macActual = ref({});
// const datosActual = ref({});
function accion(valor) {
  valor.info = macs[valor.clave];
  //   datosActual.value = ref(macs[valor.clave]);

  macActual.value = valor;
  console.log("accion", macActual.value);
}
</script>
