import { Select, SelectItem } from '@heroui/select'
import { Button } from '@heroui/button'

export default function IndexPage() {
  return (
    <Select>
      <SelectItem
        key="item"
        value="item"
        endContent={(
          <Button
            onClick={(e) => {
              e.stopPropagation() // or e.preventDefault();
              console.log('clicked')
            }}
          >
            Click me
          </Button>
        )}
      >
        Item
      </SelectItem>
    </Select>
  )
}
