import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export default async function () {
  dayjs.extend(relativeTime)
}
