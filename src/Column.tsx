import { ColumnContainer, ColumnTitle } from './styles'

import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./state/AppStateContext"
import { Card } from "./Card"
import { addTask } from "./state/actions"
import { useRef } from 'react'
import { useItemDrag } from './utils/useItemDrag'

type ColumnProps = {
  text: string
  id: string
}
export const Column = ({text, id}: ColumnProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: "COLUMN", id, text })
  drag(ref)

  return (
    <ColumnContainer
      ref={ref}
      // isHidden={isHidden(draggedItem, "COLUMN", id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id}/>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  )
}