<script>
import { defineComponent, ref, onMounted } from 'vue'
import HelloWorld from "@/components/HelloWorld.vue";
import XMap from "@/components/XMap.vue";
import {people} from "@/data/data.ts";

export default defineComponent({
  name: 'MapPage',
  components: {
    HelloWorld,
    XMap
  },
  setup () {
    const markers = ref(people.map(person => ({
      uid: person.uuid,
      latitude: Number(person.latitude),
      longitude: Number(person.longitude),
      descricao: person.description
    })));
    console.log('markers',markers)

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
    />
  </main>
</template>

