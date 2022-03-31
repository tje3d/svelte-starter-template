<script lang="ts">
  import feather from 'feather-icons'

  export let name: string
  export let attrs: feather.FeatherAttributes = {}

  let svgData: string | undefined

  if (!(name in feather.icons)) {
    console.warn(`Icon ${name} not found`)
  } else {
    svgData = feather.icons[name].toSvg(attrs)
  }
</script>

{@html svgData}
