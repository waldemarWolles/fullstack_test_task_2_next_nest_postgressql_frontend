import React from 'react'

import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    slug: string
  }
}

const fetchEventInfo = async (eventName: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${1}`, { next: { revalidate: 60 } })
  const events: any = await res.json()
  return events
}

async function EventPage({ params: { slug } }: PageProps) {
  console.log(slug)

  const eventInfo = await fetchEventInfo(slug)

  const mockEventinfo = {
    id: 1,
    name: 'football',
    description: 'Sport invented in England',
    chosen: true,
    userId: 1,
  }

  if (!slug) return notFound()

  return (
    <div>
      <p>
        #{mockEventinfo.id}:{slug}
      </p>
      <p>Chosen: {mockEventinfo.chosen ? 'Yes' : 'No'}</p>
      <p>By User: {mockEventinfo.userId}</p>
      <p>Description: {mockEventinfo.description}</p>
    </div>
  )
}

export default EventPage

// export async function generateStaticParams() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
//   const todos: Todo[] = await res.json()

//   const trimmedTodos = todos.splice(0, 10)

//   return trimmedTodos.map((todo) => ({
//     todoId: todo.id.toString(),
//   }))
// }
