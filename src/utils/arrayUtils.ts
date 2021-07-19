type Item = {
  id: string
}

const itemsWithoutId = [{text: "test"}]
  findItemIndexById(itemsWithoutId, "testId")

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id)
}

