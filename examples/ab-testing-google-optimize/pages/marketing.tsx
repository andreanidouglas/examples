import { Text } from '@vercel/edge-functions-ui'
import OptimizeLayout from '@components/layout'

export default function Marketing() {
  return (
    <>
      <Text variant="h2" className="mb-6">
        Marketing page
      </Text>
      <Text className="text-lg mb-4">
        You're currently on <b>/marketing</b>
      </Text>
      <Text>This is the original marketing page</Text>
    </>
  )
}

Marketing.Layout = OptimizeLayout
