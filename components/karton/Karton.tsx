import { Group, TextInput, Box, Text, Code, Button, Center, TextArea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { IconGripVertical } from '@tabler/icons-react';

export default function Karton() {
  const form = useForm({
    initialValues: {
      employees: [
        { name: 'John Doe' },
        { name: 'Bill Love' },
        { name: 'Nancy Eagle' },
        { name: 'Lim Notch' },
        { name: 'Susan Seven' },
      ],
    },
  });

  let employees: [
    { name: 'John Doe' },
    { name: 'Bill Love' },
    { name: 'Nancy Eagle' },
    { name: 'Lim Notch' },
    { name: 'Susan Seven' }
  ];

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided: any) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size="1.2rem" />
          </Center>

          <TextInput
            placeholder="John Doe"
            {...form.getInputProps(`employees.${index}.name`)}
            radius="md"
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box maw={500} mx="auto">
      <DragDropContext
        onDragEnd={({ destination, source }: any) =>
          form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided: any) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>
    </Box>
  );
}
