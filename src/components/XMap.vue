<template>
  <div>
    <div id="mapContainer" />
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default defineComponent({
  name: 'LMap',
  props: {
    markers: {
      type: Array,
      required: false,
      default: () => []
    },
  },
  setup (props) {
    let map = null

    onMounted(() => {
      createMapLayer()
    })

    onBeforeMount(() => {
      if (map) {
        map.remove()
      }
    })

    const createMapLayer = () => {
      map = L.map('mapContainer').setView([-26.8560346, -49.239189], 5)

      // Base layers
      const osmBaseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      })

      const googleBaseLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps'
      })

      const markerLayer = L.layerGroup().addTo(map)

      // Add markers to the markerLayer
      if (props.markers.length) {
        setMarkers(markerLayer, props.markers)
      }

      // Add base layers and overlays to the map
      L.control.layers({
        'Google Maps': googleBaseLayer
      }, {
        'AgricultorA': markerLayer,
      }).addTo(map)
    }

    const setMarkers = (markerLayer, markers) => {
      markers.forEach((marker) => {
        L.marker([marker.latitude, marker.longitude]).addTo(markerLayer)
            .bindPopup(marker.descricao)
      })
    }
  }
})
</script>

<style scoped>
#mapContainer {
  width: 100vw;
  height: calc(100vh - 50px);
}
</style>
