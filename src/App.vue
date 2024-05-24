<script>
import { defineComponent, ref, onMounted } from 'vue'
import HelloWorld from "@/components/HelloWorld.vue";
import XMap from "@/components/XMap.vue";

let greenIcon = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default defineComponent({
  name: 'MapPage',
  components: {
    HelloWorld,
    XMap
  },
  setup () {
    const markers = ref([
      { uid: 1, latitude: -26.8560346, longitude: -49.239189, descricao: "Marker 1", },
      { uid: 2, latitude: -26.5, longitude: -49, descricao: "Marker 2" }
    ])
    const markersOverLay = ref([
      { uid: 1, latitude: -22.8560346, longitude: -49.239189, descricao: "Marker 3", },
      { uid: 2, latitude: -23.5, longitude: -49, descricao: "Marker 4" }
    ])
    const loading = ref(true)

    return {
      markers,
      loading,
      markersOverLay
    }
  }
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div>ehrwhrk</div>
    <XMap
        :markers="markers"
        :markers-overlay="markersOverLay"
    />
  </main>
</template>

