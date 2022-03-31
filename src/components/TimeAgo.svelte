<script lang="ts">
  import { Dayjs } from 'dayjs'
  import { onDestroy } from 'svelte'
  import { safeInterval } from '../helpers/timers'

  export let time: Dayjs

  let output = time.fromNow()

  const interval = safeInterval(function () {
    output = time.fromNow()
  }, 1000)

  onDestroy(interval)
</script>

{output}
